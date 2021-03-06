# The Shoppies: Movie Awards!

This project was created for a Web Developer Challenge in the Fall of 2021. It is a web app that allows users to search the OMBD database and nominate a movie for the Shoppies awards.

## Getting Started

Find the live demo here: [theshoppies.xyz](http://www.theshoppies.xyz/).

## Screenshots

![Landing](https://github.com/tareknagy/shoppies/blob/master/public/images/ss-intro.png?raw=true)

![Sign Up Page](https://github.com/tareknagy/shoppies/blob/master/public/images/ss-signup.png?raw=true)

![Login Page](https://github.com/tareknagy/shoppies/blob/master/public/images/ss-login.png?raw=true)

![Nomination Page](https://github.com/tareknagy/shoppies/blob/master/public/images/ss-nominate.png?raw=true)

![Nomination Page](https://github.com/tareknagy/shoppies/blob/master/public/images/ss-hover.png?raw=true)

## Technologies Used

- Mongoose / MongoDB to store user and nomination data.
- Express / Node for the backend.
- React for the front end.
- Plugging into the OMDB API to search movies.
- Deployed and hosted using Heroku.

## Next Steps / Future Enhancements

- Add OAuth.
- Refactor to add nominations Schema (see Quirks and Details), then create component to show summary of most nominated movies.

## Quirks and Details

- Using a user-centric model, movie nominations are currently being added to the User schema. This wouldn't be ideal if the app was going to handle any other behaviour (i.e. I would have created a seperate schema for the movies / nominations if this was going to be widely used and there was a desire to tally the nominations from multiple users).
- User sign up is pretty simple as is, password recover and email verification or OAuth would be used if, again, this was meant to be widely used. 

## Get in touch

[tareknagy.com](https://tareknagy.com)
