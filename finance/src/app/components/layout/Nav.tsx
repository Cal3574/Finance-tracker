"use client";
import { FC } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  const { data: session, status } = useSession();

  return (
    <div className="navbar bg-[#CCDBDC]">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">FinanceTrack</a>
      </div>
      <div className="flex-none gap-2">
        {session && session.user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={session?.user.image} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => signOut()}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => signIn()}>Login</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
