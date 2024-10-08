# Docker-Node

## Description

Basic Node app runs on Docker which sends a JSON response.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/adarshlkdev/Explore-Docker.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Explore-Docker
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

First you have to download Docker Desktop on your System

Then build docker image of your project using this command
  ```sh
  docker build -t docker-node(image-name) .
  ```

This will push your image to Docker Desktop locally.

Now, run the image on a container using this command:


```sh
docker run -it -e PORT=4000 -p 4000:4000 --name docker-node-app docker-node
```

Now your node app is ready on docker

You can test it on 

```sh
http://localhost:4000
```

You will get a json is response