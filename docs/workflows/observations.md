---
description: Organizing results with observations
sidebar_position: 3
---

# The observation object

Document contents are typically highly complex. Especially when you want to incorporate layout information in the pipeline calculations. 

We modeled the structure of the observation with that in mind. There is a number of things that can be represented with an observation:
- Layout information data (like location)
- Structural relations (like key-value pairs and tables)
- Attaching business data to text entities
- Quality measures (text recognition confidence, similarity to business data)
- Semantic information (text entity labels)

The definition of the observation is part of [Open API Spec](https://raw.githubusercontent.com/cambrion-vision/api-sepc/main/cambrion_api.yaml).

## Bootstrapping an observation

It can be useful to provide document content to a pipeline. For example removing the OCR step from a pipeline a providing recognized text from other sources can greatly improve the run times of a pipeline.

This can be done by creating the the observation object manually and add it to an execution. Running the pipeline on the created execution will use the provided observation the perform the calculations.

## Transforming an observation

In real-life use-cases it's sometimes tedious to map the observation to business objects. Therefore we integrated [JSONata](https://docs.jsonata.org) into the observation API. This was a natural fit since the observation is just a complex JSON object.

```py
url = f"{CAMBRION_API_ENDPOINT}/executions/import-process/observation/transform"

transform = "{\"name\": **.entities[label = \"name\"].block.text,\"quantity\": **.entities[label = \"qty\"].data.quantityValue,\"weight\": **.entities[label = \"weight\"].data.numberValue}"

requests.request("POST", url, data=transform)
```

Using JSONata we easily transform an observation into the required business representation. JSONata features a lot of built-in operators:
- regular expressions
- date time conversions
- path operators 
- functions and expressions

And much more...

The full JSONata reference can be found here: https://docs.jsonata.org/overview.html
Note that it can be useful to use the JSONata exerciser (https://try.jsonata.org) to prototype a JSONata expression. For that you can fetch the observation via the API and then copy and paste the observation into the left field of the exerciser and test your expressions on it.