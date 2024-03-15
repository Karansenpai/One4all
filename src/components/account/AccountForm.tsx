"use client";
import { Input } from "@/components/ui/input";
import { auth } from "@/auth";

export default function AccountForm({ session }: any) {
  return (
    <div className="w-[40rem] absolute">
      <h1>Account Settings</h1>

      <div>
        <h2>Basic info</h2>

        <div>
          {/* profile picture */}
          <div className="flex gap-8">
            <div className="text-xl">Profile Pic</div>
            <div className="text-xl">
              <Input
                type="pic"
                disabled
                placeholder={session?.user?.img}
                className="text-xl"
              />
            </div>
          </div>

          {/* Name */}
          <div className="flex gap-8">
            <div className="text-xl">Name</div>
            <div className="text-xl">
              <Input
                type="Name"
                disabled
                placeholder={session?.user?.name}
                className="text-xl"
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div></div>

          {/* Gender */}
          <div className = "flex gap-8">
            <div className="text-xl">Gender</div>
            <div className="text-xl">
              <Input
                type="Gender"
                disabled
                placeholder="Male"
                className="text-xl"
              />
            </div>
          </div>

          {/* Student Id */}
          <div className = "flex gap-8">
            <div className="text-xl">Student ID</div>
            <div className="text-xl">
              <Input
                type="id"
                disabled
                placeholder="IIT2022132"
                className="text-xl"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
