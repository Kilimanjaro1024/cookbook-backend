[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Cookbook App

## Prerequisites

* Express
* Mongoose & MongoDB
* Mongoose Queries
* Routes & Controllers
* Postman

## Instructions

1. Fork and clone this repository.
2. Change into the new directory.
3. Install dependencies by running `npm install`
4. Run `npm audit fix` to make sure all packages are up to date
5. Fulfill the listed requirements.

Starter code is available to you in the main project repo. You are
required to turn in your submission by making a pull request on the original
repository.

## Requirements

1. Start your server from the terminal by running: `npm run dev`
2. Your connection and seed files are already set up for you. Start by working through the prompts inside 
* `Author.js`
* `Cookbook.js`
3. Run `mongod` in your terminal. In a different tab, seed your data from the command line. Use mongo to make sure your data was inserted.
4. Review the prompts that are provided to you in the following files:

* `server.js`
* `controllers/cookbookRoutes.js`
* `controllers/authorRoutes.js`

5. In the order the files are listed above, work through the prompts, adding your code block under each prompt. Check each route as you complete them.

## Routing Table

Update the below routing table with the routes

| **URL**     | **HTTP Verb** | **Action** | **Description**             |
| ----------- | ------------- | -------------- | ---------------------- |
| /authors/     | GET           |    index            | get all authors         |
| /authors/name/:name     | GET           |    show            | show a single author by name       |
| /authors/ | POST          |    create            | create a new author     |
| /authors/:id | PUT           |    update           | update a single author by id     |
| /authors/:id/:cookbookId | PUT           |    update            | update a single book in a author by id  |
| /authors/deletebooksby/:id | DELETE        |    destroy            | destroy all cookbooks by a single author |
| /cookbooks/ | GET           |    index            | get all cookbooks  |
| /cookbooks/title/:title     | GET           |    show            | show a single cookbook by title        |
| /cookbooks/year/:year     | GET           |    show            | show a single cookbook by publishing year        |
| /cookbooks/ | POST          |    create            | create a new cookbook     |
| /cookbooks/id/:id | PUT           |    update           | update a single cookbook by id    |
| /cookbooks/title/:title | DELETE        |    destroy            | destroy a single cookbook by title |

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
