//import mongoose from "mongoose";
import { Employeemode1 } from "./Userschema.js";
export async function Usersdetail(req, res, error) {
   const { name, email, mobileno, password, address } = req.body
   console.log(req.body)
   try {
      const newUser = await new Employeemode1({
         name,
         email,
         mobileno,
         password,
         address,
      })

      const existingUsser = await Employeemode1.findOne({ email, mobileno })
      if (existingUsser) {
         console.log(`user is already exit  with this email: ${email} and mobilenumber :${mobileno} `);
         return res
            .status(200)
            .json({
               message: "alreadt exit in the data with this email and mobileno",
               email: email,
               mobileno,
            })

      }
      const checkSetup = await newUser.save();
      if (!checkSetup) {
         return res
            .status(300)
            .json({
               message: "something went wrogn"
            })
      }

      return res
         .status(200)
         .json({
            data: newUser,
            message: "successuly uploded first data",
         })

   }
   catch (error) {
      console.log("erroqqqr", error)

   }
}
export async function Userlogin(req, res, error) {
   const { email, password } = req.body;
   if (!email || !password) {
      return res
         .status(401)
         .json(
            {
               message: "fill all the detail "
            }
         )
   }
   try {

      const findUser = await Employeemode1.findOne({ email })
      if (!findUser) {
         return res
            .status(401)
            .json(
               {
                  message: "this email is not there in the database check the mail"
               }
            )
      }
      // console.log(findUser)
      // console.log(findUser.password)
      // console.log(password)
      const findPassword = findUser.password;
      if (password == findPassword) {
         return res
            .status(200)
            .json({
               data: findUser,
               message: "your passord is coreect",
            })
      }
      else {
         return res
            .status(401)
            .json(
               {
                  email,
                  password,
                  message: "your password is incorrect"
               }
            )

      }

   }
   catch (error) {
      res.status
         .status(401)
         .json(error)

   }

}
export async function userWrite(req, res, error) {
   

}
