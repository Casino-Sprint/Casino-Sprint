const {User} = require('./model');

const userController = {
    // creates and saves user to db
  createUser: function(res, req, next){
    //destructure necessary props from req.body
    const {given_name, family_name, email, picture} = req.body;
    // checks if user exists
    if(User.findOne({email}).then(()=>next()));
    // throws error if any of the required fields are missing
    if (!given_name || !family_name || !email){
        return next('error in createUser function')
    }
    //create on user
    const newUser = {
      firstName: given_name, 
      lastName: family_name, 
      email: email, 
      currentSprite: picture, 
      picture: picture
    };
    //creates a new user in our mongoDB
    User.create(newUser)
      .then(()=>next())

  }

};

module.exports = userController;