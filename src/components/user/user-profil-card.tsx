import { getUserInfo } from "@/services/user";
import React from "react";
import { DialogDemo } from "./dialog-profil";
import LogoutButton from "@/components/auth/LogoutButton";

const UserProfilCard = async () => {
  const userInfo = await getUserInfo();
  return (
    <div className="p-4  w-[400px] space-y-4 flex flex-col items-center rounded-lg bg-white border">
      <div className="text-black w-[140px] h-[140px] bg-gray-200 rounded-full"></div> 
      <div className="text-black h-6 justify-center items-center flex bg-gray-200 rounded-md px-4">{userInfo?.email}</div>   
      <div className="text-black h-6 justify-center items-center flex bg-gray-200 rounded-md px-4">{userInfo?.lastname} {userInfo?.lastname}</div>   
      <div className="text-black h-6 justify-center items-center flex bg-gray-200 rounded-md px-4">{userInfo?.phone_number}</div> 
     <DialogDemo />
     <LogoutButton />
    </div>
  );
};

export default UserProfilCard;
