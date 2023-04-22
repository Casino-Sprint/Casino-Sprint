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

// grabs user
userController.getUser = async (req,res,next) => {
  try{
    const {ssid} = req.cookies;
    const user = await User.findOne({_id:ssid})
    if(!user){
      //redirect to login
    }
    res.locals.user = user;
    return next();
  }catch(err){
    return next({
      log: 'getUser error',
      status: 500,
      message: { err: 'Unable to get user' },
    })
  }
}

module.exports = userController;