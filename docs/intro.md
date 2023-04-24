---
description: This is the guide
sidebar_position: 1
---

# Introduction

Welcome to this introduction notebook for the Cambrion API. In the following tutorial we introduce the core functionalities of the API and demonstrate how to use it to extract information from complex documents. 

## Executions

An execution represents a context that allows to manage and store multiple media files. At some point later in time these can be used as input for a pipeline to be processed in one single batch. The results of the pipeline will also be stored in the execution as an **observation**. As all the media files in an execution are stored in database it can also be used as a document archive.

Additionally an execution can be associated with arbitrary meta data. This meta data can be used to associate business objects with executions. Further a tag can be assigned to each execution. A tag can be used to filter executions belonging to certain class of process (e.g. distinction between import and export) when listing executions. Each execution also has an ID that can be set. This can be used to directly access executions by ID.

An example is a task list where each task involves taking one or more images of a document that contains information that needs to be bundled together. When listing executions each execution belongs to a task.

## Pipelines

A pipeline is sequence of operations performed on the media files uploaded to an execution. A pipeline can also be run by just supplying it the media files in the request. In that case no execution is created.

#### Observation

The results of a pipeline are stored in object called observation. An observation is a complex data structure that models content of an image in a way that allows maximum flexibility. It contains a lot of information that can be used process the data further or allows visualization of the results. The exact depends on the definition of the pipeline and the undlying model(s). 

An observation can contain:
* All the text fragments recognized by the pipeline
* Labels for text fragments that have been classified
* Scores that correspond to uncertainties

#### Transforms

Sometimes an observation can be too complex and overwhelming. To mitigate that we introduced transforms. A transform is a simple statement specified in JSONata (https://jsonata.org).

## Linker

The linker allows you to link detected entities to data stored in an index.
