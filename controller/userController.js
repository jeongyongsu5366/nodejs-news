const User = require('../model/user');
const passport = require('passport');
require('../auth/passport').setup()

const userController = {

  addUser : (req, res, next) => {
      passport.authenticate('signup', {
        session : false
      }, (err, user, info) => {
        req.flash('INFO',info.message)
        
        if (err || !user) {
          return res.redirect('/signup')
        }

        return res.redirect('/signin');
      })(req, res, next)
    }
}

module.exports = userController;