# Backend REST API using expressjs
Implements the following features
- User registration and login
- property lisings CR(UD)L
- seperates the code into folders - controllers,models,routes
- provides configuration management

## How to use
1. Download this complete folder
2. Install the dependencies using
```bash
npm i
```
3. create a `.env` file and add the configurations
```plaintext
MONGO_URI=<Url for your mongodb server>
JWT_SECRET=<long random string>
```
Note: Mongo uri should point to db
4. Start the application
```bash
node app.js
```
![](output.png)
5. We can test the app by using any api client such as postman
- Register the user

![](output_1.png)

- login as the user

![](output_2.png)

- To add a property, add the `Bearer Token` in `Auth` header

![](output_3.png)

![](output_4.png)

- Similarly get the list of properties (by adding same token)

![](output_5.png)
