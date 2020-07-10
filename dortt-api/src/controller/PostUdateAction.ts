import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../entity/Post";

/**
 * Update given id user
 */
export async function postUpdateAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(User);


    // load a post by a given post id
    const user = await postRepository.findOne(request.params.id); 
      
    // update the user given to update where the request say to
    if (user) {
        postRepository.merge(user, request.body);
        //Set new date of updates
        postRepository.merge(user, { updatedAt: new Date() });
        //Save user with new datas
        postRepository.save(user);
    } else {
        response.status(404); 
        response.end();
        return;
    }

    // return saved post back
    response.send(user);
}