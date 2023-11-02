import React from "react";
import { Bell, Star, MessageSquareDashedIcon, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Navbar() {
  return (
    <div className="flex w-full items-center justify-between  px-3 -my-5">
      <div>
        <Image src={"/logo.webp"} width={150} height={10} alt="" />
      </div>
      <div className=" flex gap-5 px-3 items-center ">
        <Bell className="" />
        <Star />
        <MessageSquareDashedIcon />
        <Link
          href={"/"}
          className="bg-blue-900 hover:bg-blue-950 cursor-pointer rounded-lg px-5 py-2 text-white"
        >
          Login
        </Link>
        <button>
          <Menu />
        </button>
      </div>
    </div>
  );
}
