# Yoshi-Racer



# Plugins:

dependencies:
- react
- react-dom
- react-router-dom
- node
- express
- mongoose
- jwt decoder

dev:
- babel loader @babel/preset-env @babel/preset-react @babel/core
- webpack
- webpack-dev-server
- html-webpack-plugin
- webpack-cli
- css-loader
- style-loader
- nodemon

# build documentation:

1. OAuth w/ Google 

Linking Oauth 2.0 with react using buttons
- go to google cloud console > oauth consent screen > external > create
- name app, user support email, dev contact email
- Scopes - require email address 
- Add test account users
- create OAuth client ID, set up authorized redirect URLs
- NPM install gapi-scripts, react-google-login
- wrapped react app in the authprovider
- added localhost w/o port to the permitted javascript redirects - https://stackoverflow.com/questions/68438293/the-given-origin-is-not-allowed-for-the-given-client-id-gsi
- added jwt-decoder for parsing JWT response from oauth

- create session management
    - 
