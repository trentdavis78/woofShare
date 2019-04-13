# WoofShare

![landing](https://i.imgur.com/KAbv4da.jpg)

## Deployed app

Check out the app [here](https://polar-basin-98786.herokuapp.com/).

## Description

WoofShare provides innovative solutions dog lovers and dog owners.

To use this app:

- Visit the link above.
- Sign in and set up an account using Google.
- View the dog gallery.
- Use the search function to narrow your view.
- Click each card for dog reviews and renter's favorites.
- Click Reserve Now to check out a dog.
- Select dates, consent to the rental agreement, and click Confirm.
- On your account page, you can manage your status and reviews.

## Social Media

Visit us on [Twitter](https://twitter.com/woofshare) and [Facebook](https://www.facebook.com/WoofShare/?modal=admin_todo_tour).

##Installing
If you would like to run the application locally:

Clone this repository to your local machine with git clone <repo-url>.
Install NPM dependencies by running npm install in the project directory.
Open config/config.json and update the development password to your local mySQL password
Open a SQL IDE like MySQL Workbench
Run CREATE DATABASE dog_db;
Ensure that you are in the root project directory
Run npm run migrate
Run nom run seed (seeds sample files to database)
Then run node server.
The application will be running at localhost:3000/


## Code Style

Developers of WoofShare took advantage of tools to help create code that is clean, consistent and easy to read including:

- eslint
- eslint-plugin-prettier
- prettier

## Technologies

- Node and Express Web Server
- MySQL Database/Sequelize ORM
- GET and POST routes
- Heroku Deployment including data
- sass-loader node-sass webpack
- MVC Paradigm folder structure
- API keys protected in Node with environment variables
- Handlebars - Server-Side Templating
- Google User Authentication via Passport.js
- Google API external autocomplete
- Migration strategy – seeds/schema files
- Custom Handlebar Helpers
- Multer to upload client files

### Application Dependencies

- body-parser
- connect-flash
- cookie-parser
- cookies
- dot-env
- express
- express-handlebars
- express-jwt
- express-session
- handlebars-helpers
- jsonwebtoken
- migrate
- moment
- multer
- mysql
- mysql2
- node-sass
- nodemon
- npm
- passport
- passport-google-oauth20
- seed
- sequelize
- sequelize-cli

## Credits

WoofShare Development Team:

- [Trent Davis](https://github.com/trentdavis78)
- [Chandni Patel](https://github.com/chandnibpatel)
- [Jaspreet Sidhu](https://github.com/jaspreetsidhu)
- [Zach Selindh](https://github.com/ZachSelindh)
- [Penny Arnold](https://github.com/PennyArnold)

## License

© Copyright 2019
WoofShare, Co.
