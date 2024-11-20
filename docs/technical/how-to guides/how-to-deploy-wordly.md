---
title: How to deploy Wordly on your computer
---

This guide is about deploying Wordly on your computer.
If you want to deploy Wordly on your own server, you can follow the instructions [here](/user/how-to-guides/how-to-deploy-wordly).

## Prerequisites

* Knowledge of how to use a terminal
* Knowledge of how to use [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
* [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed on your computer

## Step 1: Clone the repository

First, you need to clone the Wordly repository on your computer.
If you want to contribute, you can fork the repository and clone your [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) instead.
You can do this by running the following command in your terminal:
    
```bash
git clone [repository-url]
```

## Step 2: Start the development environment

Once you have cloned the repository, you can start the development environment by running the following command in the root directory of the repository:

```bash
docker-compose up -d --build
```

This command will start the different services needed to run Wordly on your computer.

## Step 3: Access Wordly

Once the development environment is started, you can access Wordly by opening your browser and going to [http://localhost:3000](http://localhost:3000).

## Step 4: Stop the development environment

When you are done using Wordly, you can stop the development environment by running the following command in the root directory of the repository:

```bash
docker-compose down
```

This command will stop all the services used by Wordly on your computer.