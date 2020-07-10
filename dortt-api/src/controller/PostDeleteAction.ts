import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../entity/Post";

/**
 *  Delete given id user
 */
export async function postDeleteAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(User);


    // delete user by a given post id
    await postRepository.delete(request.params.id);

    // search for the user again and store in a varible user
    const user = await postRepository.findOne(request.params.id);
    if (user) {
        // Response if the user was found
        response.send('Não foi possivel deletar usuario');
    } else {
        // Response if the user was not found 
        response.send('Usuario deletado com sucesso');
    }
    
}