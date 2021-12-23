import {Request, Response} from 'express';
import { Phrase } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
    res.status(200).json({
        pong: true
    })
}

export const store = async (req: Request, res: Response) => {
    try {
        let {author, txt} = req.body;

        let newPhrase = await Phrase.create({author, txt});
        
        res.status(200).json(newPhrase);
    } catch (error){
        res.status(400).json({error})
    }
}