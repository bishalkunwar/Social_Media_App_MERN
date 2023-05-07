import express from "express";
import mongoose from "mongoose";
 
import PostMessage from "../models/postMessage.js";

const router = express.Router();
export const getPosts = async (req, res) =>{
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
        console.log("switched until here");
    } catch (error) {
        res.status(404).json({message: error.message});   
        //The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource
        console.log(error);
    }
};

export const getPost = async(req, res)=>{
    const {id}= req.params;
    
    try {
        const post = await postMessage.findById(id);
        res.status(200).json(post);    
    } catch (error) {
        res.status(404).json({message: error.message});
        console.log(error);
    }
};

export const createPost = async (req, res) => {
    const {title, message, selectedFile, creator, tags} = req.body;
    const newPostMessage = new postMessage({title, message, selectedFile, creator, tags});
    
    try {
       await newPostMessage.save();
       res.status(201).json(newPostMessage);
       console.log("writing upto here");
    } catch (error) {
        res.status(409).json({message: error.message});
        // The HTTP 409 status code (Conflict) indicates that the request could not be processed because of conflict in the request
        console.log(error);
    }
};

export const updatePost = async(req, res) => {
    const {id} = req.params;
    const {title, message, selectedFile, creator, tags} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(404).send(`No post with id: ${id}`);

    const updatedPost = {creator, title, message, tags, selectedFile, _id:id};

    await PostMessage.findIdAndUpdate(id, updatePost, {new: true});

    res.json(updatedPost);


};

export const deletePost = async(req, res)=>{

    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with such id: ${id}`);

    const post = await PostMessage.findByIdAndRemove(id);

    res.json({message: "Post Deleted Successfully"});
};

export const likePost = async(req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with such id: ${id}`);

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findIdAndUpdate(id, {likeCount: post.likeCount+1});

    res.json(updatedPost);
};

export default router;
