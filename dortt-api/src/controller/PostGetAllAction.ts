import {Request, Response} from "express";
import {getManager} from "typeorm";
import { User } from "../entity/Post";
import * as bcrypt from "bcryptjs";


/**
 * Loads all posts from the database.
 */
export async function postGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(User);

    // load a post by a given post id
    const users = await postRepository.find({ where: { emailUsr: request.body.emailUsr } });

    // give a response off 404 if user is not found
    if (users[0] === undefined) {
        response.status(404);
        response.end();
        return;
    } else {
        // compare the user password if is found
        if (bcrypt.compareSync(request.body.passwordUsr, users[0].passwordUsr)) {
            // Store a user data to a Object to send as Response
            const { firstName, lastName, emailUsr, websites, program, createdAt } = users[0];
            const userData = {
                firstName,
                lastName,
                emailUsr,
                websites,
                program,
                createdAt
            }
            // return User object
            response.send(userData);
        } else {
            response.status(224)
            response.end();
            return;
        }
    }
}