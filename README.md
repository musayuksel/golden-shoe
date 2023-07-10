# Golden Shoe Project README

## Project Overview

Golden Shoe is a web application built with React, NodeJS Express, and PSQL database. The application allows users to browse and purchase shoes online. The project was created as part of a software development course.

## Prerequisites

Before running the project, make sure to complete the following pre-requirements:

1. Clone the project from the repository.
2. Create a local database named "shoes" by using the command `CREATE DATABASE shoes;`.
3. Change into the "shoes" database by using the command `\c shoes;`.
4. To create the tables for the database, use the queries in the "database.sql" file lines 1 to 16.
5. Install the necessary dependencies by running the command `npm i`.
6. Start the application by running the command `npm run dev`.
7. To add mock data, hit the endpoint `http://localhost:3000/api/stock-initial`.

## Running the Application

Once you have completed the prerequisites, you are ready to run the application. To start the application, run the command `npm run dev`. This will start both the server and the client.

Once the application is running, you can access it by opening a web browser and navigating to `http://localhost:3000/`.

## Additional Information

The application has the following features:

- Browse shoes by category and brand
- Add shoes to cart
- View order details
- Checkout and purchase shoes (Mock payment without payment details)

If you encounter any issues while running the application, please refer to the project's issue tracker or contact the project maintainers.
