# convictional-challenge

# Jobs Completed
1. Converted Data provided to an internal format and matched with the given contract
2. Created 3 GET APIs which fulfil the API Contrac in `contract.yaml` using the data from step 1.
3. Dockerized the Node App for easy shipping 

# Technologies used:
1. Node JS
2. Express JS
3. Docker
4. Postman - to test the API

# Key Terms & Structure
- Used the DAO (Data Acess Object) and DTO (Data Transfer Object) concept to help map the incoming data and transfer from one data model to another. 
- Following the specifications provided in Express JS documentation, the schema (models) have been seperated from routes. 

# Engineering Challenge V3 - Details

## Overview

The purpose of this challenge is to gauge your experience with writing mapping and validation functions for transferring data from one data model to another. It’s one of the important aspects of the product that we are building, and provides helpful context around your comfort level and design choices working with integrations. The systems we work with sometimes have undocumented behavior when it comes to the way their data models interface with ours, which means we have to be creative.

To complete the challenge, write some code that handles the following specification in any language you like. We use Go internally, but we try not to be dogmatic about which language you use here. We’re looking for well thought out, maintainable and readable code in any language you want. That doesn’t mean over do it, nothing is worse than a file with two lines of comments for every single definition. Just do your best and help us understand your process.

## Jobs to be done

There are two primary objectives of this challenge:

1. Read in the product data located at https://my-json-server.typicode.com/convictional/engineering-interview/products and convert it to an internal format. (you may represent the data locally however you want as long as the API matches the contract.yaml file as specified below)
1. Create an API that fulfills the API Contract found in `contract.yaml` using the data from step 1. (you can view this more easily in the [swagger editor](https://editor.swagger.io/), or with a tool such as [insomnia designer](https://insomnia.rest/products/designer/))

The end goal of this challenge is to provide a codebase that can be run locally with an API that is accessed via localhost. No hosting of the API on a cloud provider is required.

There are three 'optional' objectives: (a submission without these is 100% complete and will not be considered less than one with these, they will just add additional datapoints to the submission)

1. Add unit tests to your application, that show us you know which parts are important to have automated QA (and which don't)
1. Wrap the application in a Docker container, that shows us you have experience shipping consistently built and delivered cloud software. (also ensures the reviewer can run this locally)
1. Using a persistence layer (NoSQL or SQL) and handling updates to the saved products, showing us you have depth on the backing service side and it isn't just limited to business logic.

## Metrics

While there are no pre-assigned point values for this challenge, here are some of the areas we will look at while reviewing the submitted response:

**Is the API built to spec?**

One of the most important aspects of writing enterprise software is ensuring that an API meant for customer consumption matches the documentation that is provided.

**Is the code built in a way to easily handle a second source of products?**

Example: how would your code work if we needed to pull products from two distinct APIs?

Properly abstracting components is one of the things that allows for us to easily expand our offerings and adapt to changing business realities.

Knowing when and where to abstract a component is one of the more important skills we are looking for.

**Is the code easy to understand without any extreme 'complexity bottlenecks'**

You will be collaborating with other engineers on this team, so having readable code that someone could understand easily without needing to spend a large legnth of time with the author is critical in a remote team.

***Was the submission easy to setup and test locally?**

This shows that care was put into the submission as a whole, and allows for the reviewer to easily hop right in and spend more time reviewing the code, rather than setting up a complex environment.
>>>>>>> c970a3b0fc7681953af27918dbf82dee259042d4