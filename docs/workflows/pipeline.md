---
description: Directly call a pipeline
sidebar_position: 1
---

# Calling a pipeline

Calling the pipeline directly is the simplest way to interact with the API. You can feed data into the pipeline by using the pipeline endpoint and the pipeline is triggered to be executed with your data. Once the pipeline finished processing your data, the results are delivered in the response body of the API call. Either as an observation or a JSONata transformed observation.

## Idempotence of a pipeline

Executing a pipeline multiple times on an execution is a non-idempotent process. That means that the results of any additional call will be appended to the observation. Calling a pipeline directly with the same data will however result in the same result in every subsequent call.

:::info

The uploaded media objects are **not persisted** when calling the pipeline directly!

:::

## Visualizing the pipeline

Pipelines are based on [Jina](https://docs.jina.ai). Therefore we can use the Jina Flow API to generate a visualization of the underlying topology of the pipeline.

```python
from jina import Flow
import io

url = f"{CAMBRION_API_ENDPOINT}/pipelines/pipe0/description"

response = requests.request("GET", url, headers=headers, data={})

f_yaml = io.StringIO(response.text)

flow = Flow.load_config(f_yaml)

flow.plot()
```

## Asynchronously calling a pipeline

To implement background processing of documents one can execute a pipeline asynchronously.