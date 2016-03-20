# express-test - A RESTful API

It is a practice project for express and mongodb.

All the testing was done through postman app.

TO USE IT ->

> Clone the git repo to your local disk
> cd into the direcorty and run npm install (make sure you have node install)
> run - npm start / node app.js
> open another tab in terminal and rum mongod --dbpath {your-db-path} (make sure you have mongodb install)
> now you have both api and database surved

POSTMAN TO TEST API ->

> http://localhost:3000/ilike  (GET)
> http://localhost:3000/ilike/:choice/:name  (POST)
> http://localhost:3000/update/:id  (PUT)  --Takes data to be changed as request body in json format
> http://localhost:3000/delete/:id  (DELETE)
