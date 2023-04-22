const sessionController = {};


/**
* setSSIDCookie - store the user id in a cookie
*/
sessionController.setSSIDCookie = (req, res, next) => {
  // create a cookie named 'ssid' with a value that is equal to the id of the user
  const {_id} = res.locals.user
  res.cookie('ssid', _id.toString(), {httpOnly: true})
  return next();
}

module.exports = sessionController;