"use server";

import Cgpa from "@/models/cgpaMode";
import { connectToMongoDB } from "../db";

export const setCGPA = async(sem: number, cgpa:number, student: string) =>{

    try{
        await connectToMongoDB();
        const CGPA = new Cgpa({
            RollNo: student,
            data: {
                sem: sem,
                cgpa: cgpa,
            }
        })
        await CGPA.save();
        console.log("Data saved");
        return "Data saved";
    }
    catch(err){
        console.log(err);
    }
}

export const fetchCGPA = async(student: string) =>{
    try{
        await connectToMongoDB();
        const res = await Cgpa.find({RollNo: student});
        console.log("CGPA NIKAL RHE H")
        console.log(res);

        const data = res.flatMap((item: any) => 
            item.data.map((dataItem: any) => ({
                sem: dataItem.sem,
                cgpa: dataItem.cgpa,
            }))
        );

        console.log(data);
        return data; // return the data
    }
    catch(err){
        console.log(err);
    }
}