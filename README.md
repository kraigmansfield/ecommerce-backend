## Project Title
E-Commerce Backend

## Description

This project is about building the back end for an e-commerce site. This application used Express.js API and Sequelize to interact with a MySQL database. This application creates a database using mySQL with models and associations. API Routes are derived to perform RESTful CRUD operations using sequelized models and the same is being tested in Insomnia.

## Installation
Git clone from the Github repo.
To install and set up the application, run:

npm init -y
npm i express sequelize mysql2

From mySQL, input 
SOURCE db/schema.sql

From terminal
npm run seed
node server.js

You will also need to place a .env file in the root directory of the project, in order to connect to your MySQL database. Here's an example:

file: .env

DB_NAME=library_db
DB_PASSWORD=
DB_USER=root


## Usage



## Built With
node js: https://nodejs.org/en/
express.js: https://expressjs.com/en/starter/installing.html
mysql2: https://www.npmjs.com/package/inquirer
sequelize: https://sequelize.org/
javascript