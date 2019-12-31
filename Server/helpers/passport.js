import passport from 'passport';
import passportJWT from 'passport-jwt';
import config from '../../config/config';
import db from '../db';

const { Strategy: JwtStrategy, ExtractJwt } = passportJWT;
const { SECRET } = config;
const { User } = db;

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const user = await User.findOne({
          where: {
            id: jwtPayload.id,
          },
        });

        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    }
  )
);
