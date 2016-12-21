# Zappem
:bug: A bug tracker that uses your own database - built in npm

![Zappem screenshot](https://zappem.xyz/img/zappem-screenshot.jpg)

## Getting Started

Before you jump right in, you'll need two things:

- Node
- A MongoDB Database

Haven't got the resources to run a database? You can point Zappem to an MongoDB database. You should check out [mLab](https://mlab.com) - they offer free MongoDB databases.

## Downloading Zappem

The fastest way to download Zappem is via NPM

    $ npm install zappem -g
    
Once Zappem is installed, you can run it using the following command

    $ zappem start
    
## Configuring Zappem

On first run of Zappem, you'll be presented with the configuration helper. This will guide you through the steps to connect Zappem to your database, and also allow you to configure custom options such as what port number Zappem should run on.

## Connecting your application to Zappem

Now you need to tell your application to send all errors to Zappem. Lucky for you, we've already built some connectors for a range of different platforms. Just find the one that suits your application and read the README for further instructions.

- [Laravel](https://github.com/danjohnson95/zappem-laravel)

That's all there is to it!

Stuck? Check the docs on the [Zappem](https://zappem.xyz) website, or if you're really stuck, feel free to submit an issue here on GitHub.
