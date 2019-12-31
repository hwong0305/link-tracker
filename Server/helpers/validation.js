import Joi from '@hapi/joi';

const userSchema = Joi.object({
  username: Joi.string()
    .min(4)
    .pattern(/[a-zA-Z0-9_]/)
    .required(),
  password: Joi.string()
    .min(6)
    .max(24)
    .pattern(/^.[^\s]/)
    .required(),
});

const postSchema = Joi.object({
  link: Joi.string().required(),
  title: Joi.string().required(),
});

export const validateUser = userObj => userSchema.validate(userObj);

export const validatePost = postObj => postSchema.validate(postObj);
