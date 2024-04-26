"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import usePreviewImage from "@/hooks/usePreviewimage";
import { useSession } from "next-auth/react";
import { updateProfile } from "@/lib/profile_action/updateProfile";
import styles from "./profile.module.css";

const ProfileBox = () => {
  const { data: session, status } = useSession();
  const [isDisabled, setIsDisabled] = useState(true);
  const [studentId, setStudentId] = useState(session?.user?.RollNo);
  const [department, setDepartment] = useState(session?.user?.Department);
  const [section, setSection] = useState(session?.user?.section);
  const [sem, setSem] = useState("");

  useEffect(() => {
    if (session?.user?.email) {
      setStudentId(session.user.RollNo);
      setDepartment(session.user.Department);
      setSection(session.user.section);
    }
  }, [session]);

  const handleUpdatePofile = () => {
    setIsDisabled(false);
    setStudentId("");
    setDepartment("");
    setSection("");
  };

  const handleSaveProfile = async () => {
    setIsDisabled(true);
    const email = session?.user?.email;
    const response = await updateProfile(
      (email as string) || "",
      (studentId as string) || "",
      (department as string) || "",
      (section as string) || "",
      (imgUrl as string) || "",
      (sem as string) || ""
    );
    if ((response as string).length > 0) {
      alert(response);
    }
  };
  const { handleImageChange, imgUrl, setImgUrl } = usePreviewImage();
  const imageRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full h-[90dvh] flex flex-col justify-center ">
      <div className=" my-[5rem]  flex-col">
        <div className={`flex flex-col justify-center ${styles.container}  `}>
          {/* left */}
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className={`${styles.imgCnt}`}>
              {session?.user?.picture && (
                <Image
                  alt=""
                  src={session?.user?.picture as string}
                  fill
                  className={styles.img}
                />
              )}
              {!session?.user?.picture && (
                <Image alt="" src="/noavatar.png" fill className={styles.img} />
              )}
            </div>

            <div className="flex  gap-1">
              <div className="h-[30px] mt-[1px] flex justify-center">
                <Label htmlFor="picture">
                  <h3>UPLOAD PHOTOS</h3>
                </Label>
              </div>
              <Input
                ref={imageRef}
                onChange={handleImageChange}
                id="picture"
                type="file"
              />
            </div>
            <div className="flex-col m-5 p-5 gap-10">
              <h2>{session?.user?.username}</h2>

              <h2>{session?.user?.Branch}</h2>

              {session?.user?.Semester && (
                <h2>Sem {session?.user?.Semester}</h2>
              )}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center gap-2">
            <div className="m-5 p-5">
              <div className="my-2">Email</div>
              <div>
                <Input
                  disabled
                  value={session?.user?.email}
                  type="email"
                  placeholder={session?.user?.email as string}
                />
              </div>
            </div>

            <div className="m-5 p-5">
              <div className="my-2">User Id</div>
              <div>
                <Input
                  disabled={isDisabled}
                  value={studentId}
                  onChange={(e: any) => setStudentId(e.target.value)}
                  type="text"
                  placeholder={session?.user?.RollNo as string}
                />
              </div>
            </div>

            {session?.user?.Role !== "Admin" && (
              <div className="m-5 p-5">
                <div className="my-2">Department</div>
                <div>
                  <Input
                    disabled={isDisabled}
                    value={department}
                    onChange={(e: any) => setDepartment(e.target.value)}
                    type="text"
                    placeholder={session?.user?.Department as string}
                  />
                </div>
              </div>
            )}
            {session?.user?.Role === "Student" && (
              <div className="m-5 p-5">
                <div className="my-2">Section</div>
                <div>
                  <Input
                    disabled={isDisabled}
                    value={section}
                    onChange={(e: any) => setSection(e.target.value)}
                    type="text"
                    placeholder={session?.user?.section as string}
                  />
                </div>
              </div>
            )}

            {
              // Only for student
              session?.user?.Role === "Student" && (
                <div className="m-5 p-5">
                  <div className="my-2">Semester</div>
                  <div>
                    <Input
                      disabled={isDisabled}
                      value={sem}
                      onChange={(e: any) => setSem(e.target.value)}
                      type="text"
                      placeholder={session?.user?.Semester as string}
                    />
                  </div>
                </div>
              )
            }
          </div>
        </div>

        <div className="flex justify-center text-center relative z-0">
          {isDisabled && (
            <Button onClick={handleUpdatePofile}>Update Profile</Button>
          )}
          {!isDisabled && <Button onClick={handleSaveProfile}>Save</Button>}
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
