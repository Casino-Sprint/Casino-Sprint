const sessionController = {};
const { Session } = require('./model');


/**
* setSSIDCookie - store the user id in a cookie
*/
sessionController.setSSIDCookie = (req, res, next) => {
  // create a cookie named 'ssid' with a value that is equal to the id of the user
  const {_id} = res.locals.user;
  res.cookie('ssid', _id.toString(), {httpOnly: true});
  return next();
}
// create session
sessionController.createSession = async (req,res,next) => {
  try{
    const {_id} = res.locals.user;
    const id = _id.toString()
    
    const sessionObj = {ssid: id};
    const session = await Session.findOne(sessionObj);
    // if session doesn't exist; create new session
    if(!session){
      const newSession = await Session.create(sessionObj);
      return next();
    }
    // if session exist; next
    return next();

  }catch(err){
    return next({
      log: 'createSession error',
      status: 500,
      message: { err: 'Unable to create session document in mongo' },
    })
  }
}

sessionController.isLoggedIn = async (req, res, next) => {
  try{
      const { ssid } = req.cookies;
      //check if the user already has an active cookie in database. redirect to the readyup page if they do
      if (ssid) {
        //check if ssid from user cookie exists is database
        const findSsid = await Session.findOne({ssid})
        if (findSsid){
          //set up locals wih user info and redirect location to the readyup page
          res.locals.id = ssid;
          res.locals.isLoggedIn = true;
          res.locals.location = '/readyup';
          return next();
        }
        // if ssid doesn't exist in our sessions collection mongodb; redirects to login
        else {
          res.locals.location = '/login';
          return next();

        }
      }
      // if ssid doesn't exist; redirects to login
      res.locals.location = '/login'
      return next();
  }catch(err){
    return next({
      log: 'isLoggedIn error',
      status: 500,
      message: { err: 'Unable to LogIn' },
    })
  }
};

module.exports = sessionController;