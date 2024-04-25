"use client";

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { setCGPA } from "@/lib/cgpa_action/cgpa";
const cgpa = () => {
  const { data: session } = useSession();
  const [sem, setSem] = useState(0);
  const [student, setStudent] = useState(null);
  const [cgpa, setCgpa] = useState(0);
  const {toast} = useToast();

  const handleCgpa = async() =>{
    const res = await setCGPA(sem, cgpa, student || "");
    if(res){
      toast({
        title: "Alert!",
        description: "CGPA added successfully!",
        duration: 5000,
      });
    
    }
  }
  return (
    <div className="my-[120px]">
      <div className="flex gap-[2rem]">
        <div>
          <Label>Select Sem</Label>
        </div>
        <Select
          onValueChange={(value) => {
            setSem(parseInt(value));
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Sem" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select Sem</SelectLabel>
              <SelectItem value="1">Sem 1</SelectItem>
              <SelectItem value="2">Sem 2</SelectItem>
              <SelectItem value="3">Sem 3</SelectItem>
              <SelectItem value="4">Sem 4</SelectItem>
              <SelectItem value="5">Sem 5</SelectItem>
              <SelectItem value="6">Sem 6</SelectItem>
              <SelectItem value="7">Sem 7</SelectItem>
              <SelectItem value="8">Sem 8</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Input type= "text" placeholder="Enter Roll No" onChange={(e:any)=>setStudent(e?.target?.value)}/>
      <Input type= "number" placeholder="Enter Cgpa" onChange={(e:any)=>setCgpa(parseInt(e?.target?.value))}/>
      <Button onClick={handleCgpa}> Submit Cgpa</Button>

    </div>
  );
};

export default cgpa;
