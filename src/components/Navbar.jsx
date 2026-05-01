"use client";

import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const userData = authClient.useSession();
  // console.log(userData);
  const user = userData.data?.user;

  // console.log(user);

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/all-tiles"}>All Tiles</Link>
      </li>
      {user && (
        <li>
          <Link href={"/my-profile"}>My Profile</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <Link href={"/"} className="btn btn-ghost ">
          <Image src={logo} alt="" width={150} height={150} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3.5">
        {!user && (
          <>
            <Link href="/login" className="btn bg-[#1D9E75] text-white">
              Login
            </Link>
          </>
        )}

        {user && (
          <button onClick={handleLogout} className="btn btn-error text-white">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
