/* 
1. install express
    const express = require('express')
    const app = express()
    app.use(express.json())
    
    (   app.use(express.json()) is a middleware function in the Express.js framework that parses incoming JSON payloads
     in the HTTP request body and makes them available on the req.body property of the request object.
    When a client sends a request to the server with a JSON payload in the body,
     the express.json() middleware function reads the payload, parses it, and populates the req.body object with the parsed JSON data.
      This allows developers to easily handle JSON data in their routes and perform operations such as inserting or updating records
       in a database.
    The express.json() middleware must be added to an application using the app.use() method,
     which mounts the middleware function to a specified path. For example,
      if we want to parse JSON data for all incoming requests to our application, we can use the following code:  )
2. create http request
    app.get('/test', (req, res) => {
    res.json('test ok')
    })
    app.listen(4000)
3. install cors
    const cors = require('cors')
    app.use(cors())

4. create database in mongo atlas
    create database
    then name
    then username and password
    create a collection
    select to your application
    copy password and link and insert password inplace of password

5. install mongoose


6. create models

7. connect to mongoose

8. to encrypt the password we are using bcrypt.js
    yarn add bcryptjs
    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);
    password: bcrypt.hashSync(password, salt),
9. jsonwebtoken
    install jsonwebtoken
    const jwt = require('jsonwebtoken');
    const secret = 'asdfe45we45w345wegw345werjktjwertkj';
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        });

10. to grap the file from the request we are using multer
        yarn add multer
        const multer = require('multer');
        const uploadMiddleware = multer({ dest: 'uploads/' });
        
*/

