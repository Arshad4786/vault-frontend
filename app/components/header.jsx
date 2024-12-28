import React from "react";
import { ModeToggle } from "./theme-btn";
import { BackgroundBeamsWithCollisionDemo } from "./BackgroundBeamsWithCollisionDemo";
import Image from "next/image";

function Upper(){
    return(
    
    <div className="">
    <div className="mx-16 my-3 px-0">
    <div className="flex items-center justify-between rounded-full">  <img src="logo.png" className="rounded-full" layout="responsive" width={100} height={100} alt="Example Image"/>  
     <ModeToggle /> </div>
    </div>
  <BackgroundBeamsWithCollisionDemo />
  </div>
  
    );


}

export default Upper;