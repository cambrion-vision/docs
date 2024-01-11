---
description: Directly call a pipeline
sidebar_position: 1
---

# Calling a pipeline

Calling the pipeline directly is the simplest way to interact with the API. You can feed data into the pipeline by using the pipeline endpoint and the pipeline is triggered to be executed with your data. Once the pipeline finished processing your data, the results are delivered in the response body of the API call. Either as an [observation](./observations), a JSON object derived from the observation or a JSONata transformed observation.

Here is a simple example of calling a pipeline with a PNG image as input media and returning the observation as result:

```python
import base64
from io import BytesIO
from PIL import Image

import json
import requests

CAMBRION_API_KEY = "INSERT_API_KEY"
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-API-Key': CAMBRION_API_KEY
}

url = "https://api.cambrion.io/v1/pipelines/my-pipeline/executeSync"

image = Image.open('./path/to/my/image/image.png')

buffered = BytesIO()
image.save(buffered, format="PNG")
img_str = base64.b64encode(buffered.getvalue()).decode()

payload = json.dumps({
    "media": [img_str],
})

response = requests.request("POST", url, headers=headers, data=payload)

observation = response.json()
```

The response contains the observation as JSON produced by the pipeline with ID `my-pipeline`.

## List pipelines

To get a list of avaiable pipelines perform a GET request on the `pipelines` endpoint:

```python
import requests

CAMBRION_API_KEY = "INSERT_API_KEY"
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-API-Key': CAMBRION_API_KEY
}

url = "https://api.cambrion.io/v1/pipelines"

response = requests.request("GET", url, headers=headers)

pipelines = response.json()
```

## Idempotence of a pipeline

Executing a pipeline multiple times on an execution is a non-idempotent process. That means that the results of any additional call will be appended to the observation. Calling a pipeline directly with the same data will however result in the same result in every subsequent call.

:::info

The uploaded media objects are **not persisted** when calling the pipeline directly!

:::

## Asynchronously calling a pipeline

To implement background processing of documents one can execute a pipeline asynchronously by using the `executeAsync` endpoint:

```python
import base64
from io import BytesIO
from PIL import Image

import json
import requests

CAMBRION_API_KEY = "INSERT_API_KEY"
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-API-Key': CAMBRION_API_KEY
}

url = "https://api.cambrion.io/v1/pipelines/my-pipeline/executeAsync"

image = Image.open('./path/to/my/image/image.png')

buffered = BytesIO()
image.save(buffered, format="PNG")
img_str = base64.b64encode(buffered.getvalue()).decode()

payload = json.dumps({
    "media": [img_str],
})

response = requests.request("POST", url, headers=headers, data=payload)

execution = response.json()
```

The request above reponds immediatly. The reponse object contains the ID of the execution which can be used to retrieve the resulting observation once the pipeline has finnished. The execution is created automatically if no execution ID is given.


## Underlying concept

Pipelines are based on [NVIDIA Triton Ensemble Models](https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/architecture.html#ensemble-models).
