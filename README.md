# News Summariser

Makers Academy Week 8 Weekend Challenge
An angular front end application that gets news stories from the Guardian API and summarises them using Alyien.

## Intallation

### Clone this repo to your computer

    $ git clone git@github.com:harrim91/news-summary.git

### Install Node/NPM

Check node is installed by typing

    $ node -v

If it's not installed, install it by running

    $ brew install node

### Install the Java Development Kit (JDK)

[Install the JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

Check it's installed by typing

    $ java -version

You should see a version number.

### Install the other dependencies

    $ cd path/to/news-summariser/
    $ npm install
    $ npm run install-bower-dependencies
    $ npm run install-selenium-dependencies

## Run and view the app

    $ cd path/to/news-summariser/
    $ npm run start-app

Go to [http://localhost:8080](http://localhost:8080) in your web browser.  You should see "Hello, world".

## Run the feature tests

In a terminal, run your app.

    $ cd path/to/news-summariser/
    $ npm run start-app

In a *second* terminal (with your app still running from the previous step), run Selenium.

    $ cd path/to/news-summariser/
    $ npm run start-selenium

In a *third* terminal (with your app and Selenium still running from the previous steps), run your feature tests.

    $ cd path/to/news-summariser/
    $ npm run test-features

## Run the unit tests

    $ cd path/to/news-summariser/
    $ npm run test-units

