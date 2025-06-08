
import { Request, Response } from "express";
import emailClient from "../grpcClients/emailClient";

export const UserRegister = (req: Request, res:Response)=>{
    const { name, email } = req.body;

    console.log('✅ User saved:', { name, email });

    emailClient.sendEmail({email, name}, (err: any, response:any) =>{
        if (err) {
            console.error('❌ gRPC Error:', err);
            return res.status(500).json({ error: err });
          }
      
          console.log('✅ Email sent:', response);
          return res.status(201).json({ message: 'User registered and email sent!' });
    })

}