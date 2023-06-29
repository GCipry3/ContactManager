# Contact Manager App 📒

This app was built with Node.js, Express, and MongoDB as the main technologies. It's all about managing users and their contacts.

## Overview 🌐

The application is deployed on [AWS Elastic Beanstalk](http://game-hub.eu-central-1.elasticbeanstalk.com/). It uses a MongoDB database for storing user and contact data. 

## What does the app do? 🤔

The Contact Manager lets users register and log in to manage their contacts. They can perform basic CRUD (Create, Read, Update, Delete) operations on contacts.

## 🚀 API Usage

### User routes:

* Registration: ```POST /api/users/register```

  * Body parameters: username, email, password

* Login: ```POST /api/users/login```

  * Body parameters: email, password

* Get current logged in user: ```GET /api/users/current```

  * Requires authentication (Bearer Token)

### Contact routes:

* Create a new contact: ```POST /api/contacts/```

  * Requires authentication (Bearer Token)
  
  * Body parameters: name, email, phone
 
  
* Get all contacts for the current user: ```GET /api/contacts/```

  * Requires authentication (Bearer Token)

* Get a specific contact by ID: ```GET /api/contacts/:id```

  * Requires authentication (Bearer Token)

* Update a contact: ```PUT /api/contacts/:id```

  * Requires authentication (Bearer Token)

  * Body parameters: name, email, phone

* Delete a contact: ```DELETE /api/contacts/:id```

  * Requires authentication (Bearer Token)

#### 📘 Remember to replace ```:id``` with the actual contact ID in the URL.

#### NOTE: To access routes requiring authentication, you need to provide the JWT token in the Authorization header of the HTTP request. 

#### The header format is ```Authorization: Bearer your-jwt-token```.

##### You can use software like Postman or curl to test the API routes.

## Running it locally 💻

To run the app locally, you need to have Node.js and npm installed. You will also need Docker if you want to run it in a container.

## 1. Clone the repo:
```sh
git clone https://github.com/GCipry3/ContactManager.git
```

## 2. Install the dependencies:
```sh
npm install
```

## 3. Start the server:
```sh
npm start
```

## 4. To run it in a Docker container, build the Docker image and run it:

### Create the docker image 🐳:

The command below will build a Docker image using the Dockerfile in your current directory and tag it (that's what -t is for) as "contact-manager-docker".

```sh
docker build -t contact-manager-docker .
```

### Run our docker image 🐳:

Once the image is built, you can run it as a Docker container. The command below will start a Docker container from the "contact-manager-docker" image.

The -p 3000:3000 part is for port mapping: it tells Docker to map port 3000 in the container to port 3000 on your local machine.
```sh
docker run -p 3000:3000 contact-manager-docker
```



## References and Useful Links 📘

#### 1. Node.js: https://nodejs.org
#### 2. Express: https://expressjs.com
#### 3. MongoDB: https://www.mongodb.com
#### 4. Docker: https://www.docker.com
#### 5. AWS Elastic Beanstalk: https://aws.amazon.com/elasticbeanstalk/

