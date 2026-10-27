---
description: Using triggers to process incoming emails
sidebar_position: 4
---

# Processing incoming emails

Instead of calling a pipeline yourself, you can let Cambrion start it when an email arrives. This is done with a **trigger**. A trigger links an email address to a pipeline. When an email arrives at that address, Cambrion creates an [execution](./executions), adds the attachments as media files and runs the pipeline on it.

While [hooks](/api#tag/Hooks) send results out of Cambrion, triggers bring documents in.

:::info

Email is currently the only supported transport for triggers.

:::

## How a trigger works

A trigger is defined by a mailbox, e.g. `invoices@ingest.cambrion.io`, and the pipeline it starts. Every email that arrives at the mailbox is processed in the same way:
1. Cambrion creates a new execution.
2. Each attachment of the email (up to 20 MB) is added to the execution as a media file.
3. The pipeline is started on the execution.

Before a trigger can start a pipeline, the following must be in place:
- The pipeline is **deployed**. Emails sent to a trigger whose pipeline is not deployed bounce.
- The trigger is **enabled**.
- The email contains your API key in an `X-API-Key` header. See here on how to add it: [Authenticating trigger emails](#authenticating-trigger-emails)

## Creating a trigger

In the Cambrion app go to **Triggers → Create new trigger**, pick the pipeline, choose a mailbox name and save. Alternatively open a pipeline, choose the **Triggers** tab and click **New trigger**. The pipeline is then already set. The domain part of the address is set by Cambrion.

To create a trigger via the API, perform a POST request on the `triggers` endpoint:

```python
import json
import requests

CAMBRION_API_KEY = "INSERT_API_KEY"
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-API-Key': CAMBRION_API_KEY
}

url = "https://api.cambrion.io/v1/triggers"

payload = json.dumps({
    "name": "Invoices inbox",
    "transportType": "EMAIL",
    "pipelineId": "my-pipeline",
    "transportConfig": {"receive_address": "invoices@ingest.cambrion.io"},
})

response = requests.request("POST", url, headers=headers, data=payload)

trigger = response.json()
```

The response contains the created trigger, including its generated `triggerId`.

A trigger has the following fields:
- `transportType` (required): the transport of the trigger. Use `EMAIL`.
- `pipelineId` (required): the ID of the pipeline to run.
- `transportConfig`: contains the mailbox as `receive_address`. Without it the trigger never matches an email. Addresses are not case-sensitive.
- `name`: a display name.
- `pipelineParameters`: parameters for every execution the trigger starts. They are merged into the pipeline's own parameters one step at a time: for each step, the trigger's settings replace the pipeline's settings of the same name.
- `entryPoint`: can be left unset. Cambrion then picks the entry point from the pipeline.
- `enabled`: defaults to `true`. A disabled trigger ignores incoming emails.

Use a different mailbox for every trigger. If two triggers share an address, only one of them runs.

## Managing triggers

To get a list of all triggers, perform a GET request on the `triggers` endpoint:

```python
import requests

CAMBRION_API_KEY = "INSERT_API_KEY"
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-API-Key': CAMBRION_API_KEY
}

url = "https://api.cambrion.io/v1/triggers"

response = requests.request("GET", url, headers=headers)

triggers = response.json()
```

Single triggers are managed with the following requests:
- `GET /v1/triggers/{triggerId}` returns a trigger
- `PUT /v1/triggers/{triggerId}` updates a trigger
- `DELETE /v1/triggers/{triggerId}` deletes a trigger
- `GET /v1/pipelines/{pipelineId}/triggers` lists all triggers that start a pipeline

:::info

Updating a trigger with `PUT` replaces the **whole** trigger, so send every field. Fields that are left out go back to their defaults: `enabled` becomes `true` again and a missing `transportConfig` removes the address. To pause a trigger, send it with `"enabled": false`.

:::

## Authenticating trigger emails

Cambrion identifies your account by an `X-API-Key` header **inside the email**, not by the address. An email without this header is rejected and the sender receives a bounce.

Therefore the header has to be added by the system that sends the email (e.g. a scanner or an application) or by a rule on your own mail server. A normal email, e.g. from a supplier, will not start a trigger.

Here is an example on how to send a trigger email with Python:

```python
import smtplib
from email.message import EmailMessage

CAMBRION_API_KEY = "INSERT_API_KEY"

msg = EmailMessage()
msg["From"] = "scanner@example.com"
msg["To"] = "invoices@ingest.cambrion.io"
msg["Subject"] = "Invoice 2026-0042"
msg["X-API-Key"] = CAMBRION_API_KEY
msg.set_content("See attachment.")

with open("./path/to/invoice.pdf", "rb") as f:
    msg.add_attachment(f.read(), maintype="application", subtype="pdf", filename="invoice.pdf")

with smtplib.SMTP("smtp.example.com", 587) as smtp:
    smtp.starttls()
    smtp.login("scanner@example.com", "SMTP_PASSWORD")
    smtp.send_message(msg)
```

:::caution

Email headers are visible to every mail server the message passes through, and to anyone it is forwarded to. Send trigger emails only through mail servers you trust, and never forward them.

:::

## Executions started by a trigger

Every execution started by a trigger contains the attachments of the email as media files. The email body is **not** processed, so attach the document instead of pasting it into the body.

To find the executions a trigger started, each one is tagged with `trigger_email:<mailbox>`, e.g. `trigger_email:invoices`. The tag can be used as a filter when listing executions:

```python
import requests

CAMBRION_API_KEY = "INSERT_API_KEY"
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-API-Key': CAMBRION_API_KEY
}

url = "https://api.cambrion.io/v1/executions?tag=trigger_email:invoices"

response = requests.request("GET", url, headers=headers)

executions = response.json()
```

Additionally, the `metaData` of the execution records where it came from:

```json
{
  "trigger_id": "trigger-...",
  "pipeline_id": "my-pipeline",
  "pipeline_description": "...",
  "inbound": {
    "transport_type": "EMAIL",
    "sender": "scanner@example.com",
    "subject": "Invoice 2026-0042",
    "body": "See attachment.",
    "receive_address": "invoices@ingest.cambrion.io"
  },
  "interaction_route": {
    "transport_type": "EMAIL",
    "address": "scanner@example.com",
    "thread_id": "<message-id>",
    "reply_to": "scanner@example.com"
  }
}
```

The field `interaction_route` is reserved for a later feature that replies on the same email thread. It is not used yet.
