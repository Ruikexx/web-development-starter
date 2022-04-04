# COMP2110 Web Development Assignment

This project implements the Bob's Jobs web application for the COMP2110 
Web Development assignment.  

Full details of the assignment requirements are in [the docs folder](doc/assignment.md). 

## Getting Started

Once you have cloned a copy of this repository locally you need to install the 
dependancies using `npm`.  This requires that you have `node` and `npm` installed.  

The overall project consists of two sub-projects for the backend and the frontend. 
Each is independant in terms of code and has it's own set of node modules that will
be installed.  In addition, we install the testing tools in the main project folder.

In the main folder, you need to install the Cypress testing framework:

```shell
npm install
```

In the `frontend` sub-folder you need to install the `http-server` module. 

```shell
cd frontend
npm install
```

To start the server in the frontend folder run:

```shell
npm start
```

To run the tests you can either open up the Cypress GUI:

```shell
npm run cypress
```

or run the tests on the command line:

```shell
npm run test
```

Note that both of these require that the frontend server is running since they
need to access your pages.