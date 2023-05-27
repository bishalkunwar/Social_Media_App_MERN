import bcrypt from "bcryptjs"; //Bcrypt: A function that uses an algorithm to hash passwords. This is important for user security because if someone were to gain access to your database and the passwords are not hashed the users credentials are compromised
import jwt from "jsonwebtoken"; // The main reason to use JWT is to exchange JSON data in a way that can be cryptographically verified. There are two types of JWTs: JSON Web Signature (JWS) JSON Web Encryption (JWE

import UserModal from "../models/user.js";


export const signUp = async(req, res)=> {
    const {email, password, firstName, lastName} = req.body;

    try {
        console.log("hitted here")
        const oldUser = await UserModal.findOne({email});

        if(oldUser) return res.status(400).json({message: "User already exists"});

        const hasedPassword = await bcrypt.hash(password, 12);

        const result = await UserModal.create({email, password: hasedPassword, name: `${firstName} ${lastName}`});
        console.log("111")

        const token = jwt.sign({email: result.email, id: result._id}, secret, {expiresIn: "1h"});
        console.log("222")
        
        res.status(201).json({result, token});
        console.log("upto here");
    } catch (error) {
        res.status(500).json({message: "sorry, Something Went Wrong"});
        console.log(error, "error here");
    }

};


export const signIn = async(req, res)=> {
    const {email, password} = req.body;

    try {
        const oldUser = await UserModal.findOne({email});

        if(!oldUser) return res.status(400).json({message: "user Does not Exists"});

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid Credentials"});

        const token = jwt.sign({email: oldUser.email, id: oldUser._id}, secret, {expiresIn: "1h"});

        res.status(200).json({result: oldUser, token});
    } catch (error) {
        res.status(500).json({message: "Something Went Wrong"});
    }

};
