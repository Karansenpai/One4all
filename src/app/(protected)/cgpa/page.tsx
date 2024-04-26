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
  const { toast } = useToast();

  const handleCgpa = async () => {
    const res = await setCGPA(sem, cgpa, student || "");
    if (res) {
      toast({
        title: "Alert!",
        description: "CGPA added successfully!",
        duration: 5000,
      });
    }
  };
  return (
    <div className="mx-[20px] my-[120px] w-[75%] p-5">
      <div className="flex justify-center">
        <h1>CGPA</h1>
      </div>
      <div className="flex items-center p-5 gap-[2rem]">
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

      <div className="flex flex-col p-2 gap-3 items-center">
        <Input
          type="text"
          placeholder="Enter Roll No"
          onChange={(e: any) => setStudent(e?.target?.value)}
        />
        <Input
          type="number"
          placeholder="Enter Cgpa"
          onChange={(e: any) => setCgpa(parseInt(e?.target?.value))}
        />
        <Button className="flex  w-[200px]" onClick={handleCgpa}>
          {" "}
          Submit Cgpa
        </Button>
      </div>
    </div>
  );
};

export default cgpa;
