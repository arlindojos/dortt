import {Request, Response} from "express";
import { getManager } from "typeorm";
import { User } from "../entity/Post";
import { validationResult } from "express-validator";
import * as bcrypt from 'bcryptjs';
/**
 * Saves given post.
 */

export async function postSaveAction(request: Request, response: Response) {

    //checking error from validetor
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        response.status(422).json({ errors: errors.array() });
        response.end();
        return;
    }

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(User);

    // get Users emails
    const responseEmails = await postRepository.find({ select: ['emailUsr'] });

    // take all email to one array
    let userEmails: string[];
    userEmails = [];
    responseEmails.map((item, index) => {

        const { emailUsr } = item;
        userEmails[index] = emailUsr;
    })

    // checking if the email is iqual to the request email
    let userEmail: string;
    userEmails.map(item => {
        if (item === request.body.emailUsr) {

            userEmail += item;
        }
    });

    if (userEmail === undefined) {
        //encrypt user password
        const salt = bcrypt.genSaltSync(10);
        const hashedPwd = bcrypt.hashSync(request.body.passwordUsr, salt);
        request.body.passwordUsr = hashedPwd;

        // create a real User object from User json object sent over http
        const newPost = postRepository.create(request.body);

        // save received User
        await postRepository.save(newPost);

        // return return a new user seved
        response.send(newPost);

    } else {
        response.status(423);
        response.end();
        return; 
    }
}