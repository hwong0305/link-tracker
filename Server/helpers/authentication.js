import passport from 'passport';

export default function(req, res, next) {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).send('Unauthorized');
    }
    req.user = user;
    next();
  })(req, res, next);
}
