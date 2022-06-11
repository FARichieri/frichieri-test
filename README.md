This is a comic APP that consumes data from https://comicvine.gamespot.com/api/ and shows a list of 100 comics. It let you register and login with Firebase, add comics to favorites, search them in a searchbar and see the details of each one.
It has been made with React.js, Firebase, SCSS and has something of Material-UI.

You can see it live by clicking [here](https://frichieri-test.vercel.app/)

To enable access to the demo server, please enter to this link: https://cors-anywhere.herokuapp.com and click in "Request temporary access to the demo server" and then go to the app. (Be careful because the API has a limit of requests per hour and can give an error 429 temporary if you do too many requests, specially going to the details of the comics)

Environment variables (in case you want to clone it and start the server in your computer):
REACT_APP_FIREBASE_KEY = AIzaSyDqA_O3ENB6bT3RrBtH139gtyf6k4tgQ-I
REACT_APP_API_KEY = 45358eaa95df3a711110a654be24192dae31e74f
