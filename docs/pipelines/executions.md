---
description: Using executions for batch processing
sidebar_position: 3
---

# Batch processing

Before running the pipeline you can populate the execution with media files (e.g. images, pdf etc.) which subsequently can be used in a pipeline. This enables a simple and efficient way for **batch processing**.

## An execution is a state

When executing a pipeline we use the execution as a store to persist input documents ([media objects](/api#tag/Executions/paths/~1executions~1%7BexecutionId%7D~1observation~1media/pos)) and also to store results (as an [observation](./observations)) from one or more pipeline runs on those documents.

<!--- 
-- TODO: draw a picture?
-->

## Attach executions to document workflows

Sometimes a document workflow contains multiple pipelines with non-overlapping functionality. When we need to run these pipelines on the same document we can use executions to organize that.

## Creating an execution

You can add meta data fields to any execution when creating it. There are three levels of meta data that can be added via the API:
1. Generate an ID and set it in the `executionId` field
2. Add a tag  in the `tag` field. When querying executions the tag can be used as a filter option.
3. Attach a generic JSON object to the execution. This can be anything as long as it's compatible with JSON.

Here is an example on how to create an execution:

```python
import requests

url = "https://api.cambrion.io/v1/executions"

CAMBRION_API_KEY = "INSERT_API_KEY"
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-API-Key': CAMBRION_API_KEY
}

payload = json.dumps({
  "executionId": "my-process-12345", # this ID can be used later
  "tag": "special-workflow",
  "metaData": {
    "good_is_danger": False,
    "user": "Lisa Meier"
  }
})

requests.request("POST", url, headers=headers, data=payload)
```

Later the execution can be accessed via the `executionId`. 

## Using executions as a document archive

As you add documents in form of media files to executions it is just natural to use executions as way to organize and store documents.
