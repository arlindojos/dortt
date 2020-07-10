import { check } from "express-validator";


const validator = [check('emailUsr').isEmail().normalizeEmail(), check('passwordUsr').isLength({ min: 6 }), check('firstName').isLength({ min: 3, max: 15 }), check('lastName').isLength({ min: 3, max: 15 })];

export default validator;