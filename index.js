const mongoose = require("mongoose");

const DB = "mongodb://mymongo:27017/testdocker";


mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`${DB} connected`);
    })
    .catch(() => {
        console.log(`ERROR in DB Connection`);
    });


/*
Soumyadip@DESKTOP-INVVN9F MINGW64 /e/Red Hat Learning/Docker-Composer-with-NodeJS-Express-Docker (main)
$ docker-compose up --build

Docker Compose is now in the Docker CLI, try `docker compose up`

Creating network "docker-composer-with-nodejs-express-docker_default" with the default driver
Pulling mymongo (mongo:)...
latest: Pulling from library/mongo
4bbfd2c87b75: Pull complete
d2e110be24e1: Pull complete
889a7173dcfe: Pull complete
6f6a1a25f35a: Pull complete
e87b34c16538: Pull complete
7099eef4dfe4: Pull complete
29b1d79d3b5b: Pull complete
b5c178e98a5a: Pull complete
ded800e62b93: Pull complete
b09aa2e255f0: Pull complete
c7e0f50ad27a: Pull complete
dcdad63a2ffa: Pull complete
Digest: sha256:482a562bf25f42f02ce589458f72866bbe9eded5b6f8fa5b1213313f0e00bba2
Status: Downloaded newer image for mongo:latest
Building mynode
[+] Building 0.4s (2/2) FINISHED
 => [internal] load build definition from Dockerfile                                                           0.3s 
 => => transferring dockerfile: 2B                                                                             0.1s 
 => [internal] load .dockerignore                                                                              0.2s 
 => => transferring context: 2B                                                                                0.1s 
*/