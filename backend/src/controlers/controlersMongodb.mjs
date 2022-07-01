import { ObjectId } from "mongodb";
import { users } from "../data/mongodb.mjs";

/**
 * Add a new document in the mongo database.
 * @param {*} req - Param of express.
 * @param {*} res - Param of express.
 */
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
/**
 * This controler find in the database the document that
 * coincide whit the object receive from the frontend.
 * @param {*} req - Param of express.
 * @param {*} res - Param of express.
 */
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

export function getUsersControlerMdb () {

}