import { ObjectId } from "mongodb";
import { users } from "../data/mongodb.mjs";

export async function singupControlerMdb (req, res) {
    try{
        const result = await users.insertOne({
            nameProfile: req.body.nameProfile,
            nameUser: req.body.nameUser,
            password: req.body.password,
            location: req.body.location,
            interest: req.body.interest,
            age: req.body.age,
            description: req.body.description,
            email:req.body.nameUser
        });
        res.json(result);
    }catch (err){
        console.log(err);
    }
}

export  async function loginUSerControlerMdb (req, res) {
    const result = await users.findOne({
        $and: [
            { password: req.body.password },
            {
                $or: [
                    { nameProfile: req.body.userData },
                    { email: req.body.userData }
                ]
            }
        ]
    })
    res.json(result)
}