# React Boilerplate with Typescript and Apollo Client

A React-typescript configuration template for projects using apollo client as their state management with a connection to a Graphql server.

## Table of Contents

- [React Boilerplate with Typescript and Apollo Client](#react-boilerplate-with-typescript-and-apollo-client)
	- [Table of Contents](#table-of-contents)
	- [Prerequisites](#prerequisites)
	- [Running the Boilerplate](#running-the-boilerplate)
	- [Running the Boilerplate **with NO GraphQL API!!**](#running-the-boilerplate-with-no-graphql-api)
	- [Running the Boilerplate **with a GraphQL API!!**](#running-the-boilerplate-with-a-graphql-api)
	- [Running the Boilerplate **with a Hasura API!!**](#running-the-boilerplate-with-a-hasura-api)
	- [`.env` Configuration](#env-configuration)
	- [Features](#features)
	- [Folder Structure](#folder-structure)
	- [Setup Explanation](#setup-explanation)
		- [apollo](#apollo)
		- [components](#components)
		- [locales](#locales)
		- [stories](#stories)
	- [Running the `scripts` command](#running-the-scripts-command)
	- [Contributing](#contributing)

<a name="Prerequisite"></a>
## Prerequisites

In order to use this template, you should have a basic understanding of React and Apollo Client.

<a name="run"></a>
## Running the Boilerplate

This boilerplate can be used for three use cases:
- [using it with no GraphQL or Hasura API server](#noApi)
- [using it with a GraphQL API server](#graphql)
- [using it with a Hasura API server](#hasura)

Each of those use cases require some settings before running `yarn start`. Those settings are shown below:

<a name="noApi"></a>
## Running the Boilerplate **with NO GraphQL API!!**

	1. git clone https://github.com/regisBafutwabo/react-typescript-boilerplate.git <YOUR PROJECT NAME>
	2. cd <YOUR PROJECT NAME>
	3. rm -rf .git : remove the git folder and initiate your own git ...
	4. yarn (or npm i )
	5. comment or remove the lines in the `.graphqlrc.yml` file located in the root folder as follows(check out the red rectangles):

<img src="docs/noApi.png" alt="./.graphqlrc.yml"/>

     6. yarn gen (or npm run gen)
     7. yarn start (or npm start)

<a name="graphql"></a>
## Running the Boilerplate **with a GraphQL API!!**

	1. git clone https://github.com/regisBafutwabo/react-typescript-boilerplate.git <YOUR PROJECT NAME>
	2. cd <YOUR PROJECT NAME>
    3. rm -rf .git : remove the git folder and initiate your own git ...
	4. yarn (or npm i )
	5. setup the .env with the API configurations as shown in the next section
	6. yarn gen (or npm run gen)
    7. yarn start (or npm start)

<a name="hasura"></a>
## Running the Boilerplate **with a Hasura API!!**

    1. git clone https://github.com/regisBafutwabo/react-typescript-boilerplate.git <YOUR PROJECT NAME>
	2. cd <YOUR PROJECT NAME>
	3. rm -rf .git : remove the git folder and initiate your own git ...
	4. yarn (or npm i )
	5. Modify `src/apollo/state/**/*.schema.ts`: every `*.schema.ts` file in the apollo/state subfolders as follows:

<img src="docs/hasura_schema.png" alt="./src/apollo/state/i18n/i18n.schema.ts"/>


	6. yarn gen (or npm run gen)
    7. yarn start (or npm start)


<a name="env"></a>
## `.env` Configuration

By now, I think you have realized that the apollo folder relies on some kind of server link. Here is the way to setup your `.env` file if you are planning to use it:
1. create the `.env` file in your root folder
2. populate in this way (this is an example) :
	
		REACT_APP_GRAPHQL_PROTOCOL = http

		REACT_APP_GRAPHQL_HOST =  localhost

		REACT_APP_GRAPHQL_PORT =  4000

		REACT_APP_GRAPHQL_VERSION = v1

		REACT_APP_GRAPHQL_ROUTE = graphql

		REACT_APP_GRAPHQL_ADMIN_SECRET = 1234
	

<a name="feat"></a>

## Features

- **Typescript** - A superset of Javascript providing static typing, classes and interfaces.
- **Apollo Client** - A fully-featured caching GraphQL client with integrations for React which allows you to easily build UI components that fetch data via GraphQL.[Learn More](https://www.apollographql.com/docs/react/)
- **Apollo Cache Persist** - Utilizes async storage to persist and rehydrate the Apollo store
- **React Router DOM** - A collection of navigational components that compose declaratively with your application.
- **Styled Components** - Powerful CSS in JS module providing template literals to support dynamic styling.[Learn More](https://styled-components.com/)
- **Ant Design** - An enterprise-class UI _design_ language and React UI library with a set of high-quality React components, one of best React UI library for enterprises.[Learn More](https://ant.design/)
- **EsLint/Prettier/Airbnb linting style** - Enforces code styling, and standards. Airbnb's tslint guidelines are followed by default.
- **React-i18next** - A powerful internationalization framework for React based on i18next.[Learn More](https://react.i18next.com/)
- **Test** - Testing support for React and apollo client.
- **Storybook** - Enables developers to test UI components in isolation.[Learn More](https://storybook.js.org/)
- **Server Connection** - Used to setup a connection a hasura or GraphQL API server.[Learn More on Hasura](https://hasura.io/)


<a name="folder"></a>

## Folder Structure

This is a setup of the `src` folder structure:
		 
		 src/
		 |── apollo                 # contains all the apollo client setting and server settings							
		 |── app		            # contains the Routing of the application 
		 |── assets                 # contains the images and other medias needed throughout the app
		 |── components             # contains the reusable components (Atomic Design Structure)
		 |── generated              # contains the graphql file generated by graphql-codegen
		 |── locales                # contains every languages that the app will use throughout the app
		 |── pages                  # contains all the pages of the app
		 |── stories                # contains all the stories being used in StoryBook
		 |── styles                 # contains the custom styles and global styles
		 |── types                  # contains all the Typescript declaration files 
		 └── utils                  # contains all the extra helper function that can be used in the app
		
<a name="explain"></a>
## Setup Explanation

<a name="apollo"></a>
### apollo

This folder is where everything that has to do with apollo and graphql API is setup.

	src/apollo/
	├── cache                     # contains the cache setup files
	├── middlewares               # contains every file that has something to do with the API
	└── state                     # contains every apollo client state(basically the store) and its resolvers and queries

<a name="components"></a>
### components

This folder contains our reusable components. It is based on [atomic design](https://bradfrost.com/blog/post/atomic-web-design/).
There are five distinct levels in atomic design:
- [Atoms](https://bradfrost.com/blog/post/atomic-web-design/#atoms)
- [Molecules](https://bradfrost.com/blog/post/atomic-web-design/#molecules)
- [Organisms](https://bradfrost.com/blog/post/atomic-web-design/#organisms)
- [Templates](https://bradfrost.com/blog/post/atomic-web-design/#templates)
- [Pages](https://bradfrost.com/blog/post/atomic-web-design/#pages)

> **Note:** In this boiler plate `Pages` is out of the components folder ( My preference 😅)

	src/components
	├── atoms                    
	├── molecules               
	├── organisms                
	└── templates

<a name="locales"></a>
### locales
This folder contains all of the languages that you will be using in your project

	src/locales
	├── en
	│   └── translation.json
	└── ko
	    └── translation.json

> **Note:** You will learn how to extract all of the languages  of your app with a script command in the [scripts](#scripts) section

<a name="stories"></a>
### stories
this folder contains all of your storybook components. For more information on stroybook and how to create stroies. [click here.](https://storybook.js.org/docs/basics/introduction/)

<a name="scripts"></a>
## Running the `scripts` command


**start**: starts the application

**build**: generate a production-ready `build` folder in your root folder

**test**: run an overall test based on every test file contained in the project

**lint**: lintify all of the `.ts`and `.tsx` files based on our `.eslintrc` file

**gen**: generate TypeScript typings out of your GraphQL schema

**extract**: extracts all the texts that are not in the translation files and add them

**storybook**: starts the storybook server/app
		

<a name="contributing"></a>
## Contributing
You are welcome to add a feature or improve this boilerplate since I believe that there is multiple ways to use these tools.

To contribute to <project_name>, follow these steps:

1.  Fork this repository.
2.  Create a branch:  `git checkout -b <branch_name>`.
3.  Make your changes and commit them:  `git commit -m '<commit_message>'`
4.  Push to the original branch:  `git push origin <project_name>/<location>`
5.  Create the pull request.

Alternatively see the GitHub documentation on  [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

