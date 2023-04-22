# Yoshi-Racer
https://excalidraw.com/#room=f89e8e5afe78dc1cd34c,zYYx4KEmJ9WPBCidBq_vXQ

yoshi racer is sick
client id
997505656977-fk615lvga4j9mnv3lv09q6ius5prtcet.apps.googleusercontent.com

client secret
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

# yoshi-racer's credential response decoded

{iss: 'https://accounts.google.com', nbf: 1682184064, aud: '997505656977-fk615lvga4j9mnv3lv09q6ius5prtcet.apps.googleusercontent.com', sub: '113889593811003761377', email: 'yoshiracer1@gmail.com', …}
aud
: 
"997505656977-fk615lvga4j9mnv3lv09q6ius5prtcet.apps.googleusercontent.com"
azp
: 
"997505656977-fk615lvga4j9mnv3lv09q6ius5prtcet.apps.googleusercontent.com"
email
: 
"yoshiracer1@gmail.com"
email_verified
: 
true
exp
: 
1682187964
family_name
: 
"racer"
given_name
: 
"yoshi"
iat
: 
1682184364
iss
: 
"https://accounts.google.com"
jti
: 
"7172febf1c17a64d989f1085122392e649ae7f5a"
name
: 
"yoshi racer"
nbf
: 
1682184064
picture
: 
"https://lh3.googleusercontent.com/a/AGNmyxY_Y2nEDjTZmXaPu3lcToJuqEnUXXjTEXvvoRsC=s96-c"
sub
: 
"113889593811003761377"



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
