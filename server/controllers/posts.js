import express from "express";
import mongoose from "mongoose";
 
import PostMessage from "../models/postMessage.js";

const router = express.Router();
export const getPosts = async (req, res) =>{
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});   
        //The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource
        console.log(error);
    }
};

export const getPost = async(req, res)=>{
    const {id}= req.params;
    
    try {
        const post = await PostMessage.findById(id);
        res.status(200).json(post);    
    } catch (error) {
        res.status(404).json({message: error.message});
        console.log(error);
    }
};

export const createPost = async (req, res) => {
    const {title, message, selectedFile, creator, tags} = req.body;
    const newPostMessage = new PostMessage({title, message, selectedFile, creator, tags});
    
    try {
        console.log("pressed upto here");
       await newPostMessage.save();
       res.status(201).json(newPostMessage);
       console.log("writing upto here23");
    } catch (error) {
        res.status(409).json({message: error.message});
        // The HTTP 409 status code (Conflict) indicates that the request could not be processed because of conflict in the request
        console.log(error);
    }
};

export const updatePost = async(req, res) => {
    const {id} = req.params;
    const {title, message, selectedFile, creator, tags} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = {creator, title, message, tags, selectedFile, _id:id};

    await PostMessage.findByIdAndUpdate(id, updatedPost, {new: true});

    res.json(updatedPost);
    console.log("Update is calling");

};


export const deletePost = async(req, res)=>{

    const { id } = req.params;
    res.send("calling the delete");
    console.log("Calling the delete");
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
};

export const likePost = async(req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with such id: ${id}`);

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount+1});

    res.json(updatedPost);
    console.log("Liked though");
};

export default router;
