const {User} = require('./model');


const userController = {};

    // creates and saves user to db
userController.createUser = async (req, res, next) => {
  try{
    // destructure necessary props from req.body  
    const {given_name, family_name, email, picture} = req.body;
    // checks if user exists

    const user = await User.findOne({email});
    if(!user){
      // create userObj
      const newUser = {
        firstName: given_name, 
        lastName: family_name, 
        email: email, 
        currentSprite: picture, 
        picture: picture
      };
      const userDocument = await User.create(newUser);
      res.locals.user = userDocument;
      return next();
    };
    res.locals.user = user;
    return next();
    

  }catch(err){
    return next({
      log: 'createUser error',
      status: 500,
      message: { err: 'Unable to create user' },
    })
  }
 
};

module.exports = userController;