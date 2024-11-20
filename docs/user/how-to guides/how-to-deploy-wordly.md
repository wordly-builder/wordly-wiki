---
title: How to deploy Wordly on your own server
---

This guide is about deploying Wordly on your own server.
If you want to deploy Wordly on your own server, you can follow the instructions [here](/technical/how-to-guides/how-to-deploy-wordly).

## Prerequisites

* Knowledge of how to use a terminal
* Knowledge of how to use [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
* Access to a server with [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed
* A domain name pointing to your server (optional but necessary if you want to use the oauth2 authentication)

## Step 1: Clone the repository

First, you need to clone the Wordly repository on your server.
You can do this by running the following command in your terminal:

```bash
// ssh clone
git clone git@github.com:wordly-builder/wordly.git

// https clone
git clone https://github.com/wordly-builder/wordly.git
```

## Step 2: Configure the environment

Create a `.env` file in the root directory of the repository.
As for now, `.env` file is only used to setup the providers.

### Step 2.1: Setup the providers

You now need to setup all the providers you want to use to authenticate your users.
If you don't want to use any oauth2 authentication and only use the classic email/password authentication, you can skip this step.

#### Setup Google authentication

[Coming soon]

#### Setup Github authentication

[Coming soon]

## Step 3: Start the development environment

Once you have cloned the repository and setup the providers, you can start the development environment by running the following command in the root directory of the repository:

```bash
docker-compose up -d
```

This command will start the different services needed to run Wordly on your server.
Wordly will be accessible on port 3000 by default.

## Step 4: Setup a reverse proxy (optional)

To access Wordly from your domain name, you need to setup a reverse proxy.
Here we will use [Nginx](https://www.nginx.com/) as an example.

### Step 4.1: Install Nginx

First, you need to install Nginx on your server.
You can do this by running the following command in your terminal:

```bash
// Ubuntu
sudo apt update
sudo apt install nginx

// CentOS
sudo yum install epel-release
sudo yum install nginx
```

### Step 4.2: Configure Nginx

You now need to configure Nginx to redirect requests to Wordly.
You can do this by creating a new configuration file in the `/etc/nginx/sites-available/[your domain name]` directory.
Here is an example of a configuration file:

```nginx
server {
    listen 80;
    server_name [your domain name];

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Step 4.3: Enable the configuration

You now need to enable the configuration you just created.
You can do this by creating a symbolic link to the `/etc/nginx/sites-enabled/` directory.
You can do this by running the following command in your terminal:

```bash
sudo ln -s /etc/nginx/sites-available/[your domain name] /etc/nginx/sites-enabled/
```

### Step 4.4: Restart Nginx

You now need to restart Nginx to apply the changes.
You can do this by running the following command in your terminal:

```bash
sudo systemctl restart nginx
```

Check that Nginx is running fine and that you can access Wordly from your domain name at port 80.

## Step 5: Setup a SSL certificate

Finaly, to have functionnal oauth2 authentication, you need to setup a SSL certificate.
Here we will use [Certbot](https://certbot.eff.org/).

### Step 5.1: Install Certbot

First, you need to install Certbot on your server.
You can do this by running the following command in your terminal:

```bash
// Ubuntu
sudo apt update
sudo apt install certbot python3-certbot-nginx

// CentOS
sudo yum install epel-release
sudo yum install certbot python3-certbot-nginx
```

### Step 5.2: Obtain a SSL certificate

You now need to obtain a SSL certificate for your domain name.
You can do this by running the following command in your terminal:

```bash
sudo certbot --nginx -d [your domain name]
```

Follow the instructions and you should now have a SSL certificate for your domain name.
Check that you can access Wordly from your domain name at port 443.

Congratulations, you have successfully deployed Wordly on your own server ! 🎉
