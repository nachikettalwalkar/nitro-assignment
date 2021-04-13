# Nitro Code Assessment

- This is an Angular application that consumes API to display Posts in a tree structure. User can group the posts by Week, Author or Location. 
- On clicking the Post, user can see the data in form where, Location and Author fields can be edited and state of the data changes locally (No API call is made).

![Alt text](./architecture.png?raw=true "Title")

# Frameworks and Libraries Used

- Angular framework to develop Client application
- NestJS framework to develop Node API
- nx.dev devtools and CLI for local setup
- Angular Material for component library
- moment.js to display dates

# Installation

- Install dependencies at the root of the application - `npm install`
- Serve only Client - `npm run serve:client`
- serve only Server - `npm run serve:api`
- Serve client and server at the same time using - `npm run serve:all`

Client served at - `http://localhost:4400/`
API to display posts served at - `http://localhost:3333/api/posts`

