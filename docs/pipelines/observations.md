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

As the observation is mainly used as carrier of results of a pipeline call, the underlying pipeline and its design are responsible for filling the observation with data. 

## Structure of the observation

Let's explore the observation in detail. As mentioned earlier it's a data structure that is used to store information extracted from one more document pages. The observation can be composed by three fundamental objects:
- **Entity**: An entity is an object that describes a block of text and it's assoicitaed meta data. The meta data can contain
    - The location (bounding box) of the text
    - Quality scores
    - Label
    - Type: can indicate the semantic meaning of the entity (number, string, date, quantity, unit, percentage)
    - Associated data: the data field can hold the parsed values (e.g. converted string to actual date), data associated by the linker (e.g. a field in an indexed document, the ID of the linked document, field name etc.)
    - Embedding: a vector the represents the entity in vector space
    - Similarity: the similarity between the associated data and parsed value of the entity
    - Layout type: wether the entity represents a single word ("WORD") or a number of connected words ("LINE")
- **Key value set**: A set of key value pairs. A key value pair represents a semantic association between a key entity (e.g. the word "Date: " before the actual date) and a value entity (e.g. the word "03/05/2021"). The value entity can also be a nested key value set or a table (see below).
- **Table**: A table is a set of of key value sets (the rows of the table). The headers field can be used to model the headers of a table as an array of entities.

The recursive nature of the observation enables the modelling of vastly different document layouts.

<!-- ## Visualizing an observation

- How to use boxes etc
- Provide simple python code -->

## Observation as simple JSON

Sometimes you are not interested in layout information from the extracted data and just want to recieve the corresponding JSON object. We provide an endpoint for doing just that:

```python
import requests

CAMBRION_API_KEY = "INSERT_API_KEY"
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-API-Key': CAMBRION_API_KEY
}

url = "https://api.cambrion.io/v1/executions/my-execution-id/observation/json"

requests.request("POST", url, headers=headers)
```

The resulting JSON object is converted from the underlying observation by using the data field from each entity.

## Custom transformation of an observation

In real-life use-cases it's sometimes tedious to map the observation to business objects. Therefore we integrated [JSONata](https://docs.jsonata.org) into the observation API. This was a natural fit since the observation is just a complex JSON object.

```python
import requests

CAMBRION_API_KEY = "INSERT_API_KEY"
headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-API-Key': CAMBRION_API_KEY
}

url = "https://api.cambrion.io/v1/executions/my-execution-id/observation/transform"

transform = "{\"name\": **.entities[label = \"name\"].block.text,\"quantity\": **.entities[label = \"qty\"].data.quantityValue,\"weight\": **.entities[label = \"weight\"].data.numberValue}"

requests.request("POST", url, data=transform, headers=headers)
```

Using JSONata we easily transform an observation into the required business representation. JSONata features a lot of built-in operators:
- regular expressions
- date time conversions
- path operators 
- functions and expressions

And much more...

The full JSONata reference can be found here: https://docs.jsonata.org/overview.html
Note that it can be useful to use the JSONata exerciser (https://try.jsonata.org) to prototype a JSONata expression. For that you can fetch the observation via the API and then copy and paste the observation into the left field of the exerciser and test your expressions on it.

## Bootstrapping an observation

It can be useful to provide document content to a pipeline. For example removing the OCR step from a pipeline and providing recognized text from other sources can greatly improve the run times of a pipeline.

This can be done by creating the the observation object manually and add it to an execution. Running the pipeline on the created execution will use the provided observation the perform the calculations.
