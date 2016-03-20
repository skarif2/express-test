# express-test - A RESTful API

It is a practice project for express and mongodb.

All the testing was done through postman app.

##TO USE IT ->

> 1. Clone the git repo to your local disk
> 2. cd into the direcorty and run npm install (make sure you have node installed)
> 3. run - npm start / node app.js
> 4. open another tab in terminal and rum mongod --dbpath {your-db-path} (make sure you have mongodb installed)
> 5. now you have both api and database surved

##POSTMAN TO TEST API ->

> 1. http://localhost:3000/ilike  (GET)
> 2. http://localhost:3000/ilike/:choice/:name  (POST)
> 3. http://localhost:3000/update/:id  (PUT)  --Takes data to be changed as request body in json format
> 4. http://localhost:3000/delete/:id  (DELETE)
