'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [isvalid, setIsvalid] = useState(false);

  let verifyEmail = (text)=>{
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regex.test(text)){
      setIsvalid(true);
    } else {
      setIsvalid(false);
    }

  }
  return (
    <div>
      <input
      placeholder="Enter email"
      type="email"
      onChange={(e)=>{verifyEmail(text); setText(e.target.value)}}
      />
      <p>{text}  is {isvalid ? "a valid email" : "not valid email"}</p>

    </div>
  );
}
