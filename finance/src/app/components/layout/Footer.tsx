"use client";
import { FC, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiAddFill } from "react-icons/ri";
import AddNewInput from "../inputs/Input";
import { useSession } from "next-auth/react";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const [isModalOpen, setIsModelOpen] = useState<boolean>(false);

  const { data: session } = useSession();
  console.log(session);
  const handleModal = () => {
    setIsModelOpen(!isModalOpen);
  };

  return (
    <nav className="bottom-nav bg-[#2D325A] fixed inset-x-0 bottom-0 flex items-center justify-between px-4 py-2 h-20 m-0 w-full">
      <AddNewInput userId={session?.user?.id} />
      <div className="max-w-7xl mx-auto flex gap-10">
        <a
          href="/dashboard"
          className="text-white flex flex-col items-center gap-2 w-20 hover:text-teal-200"
        >
          <AiFillHome size={26} />
          <p className="text-xs">Dashboard</p>
        </a>
        <label
          htmlFor="my_modal_7"
          className="text-center flex items-center cursor-pointer"
        >
          Add New
        </label>

        <a className="text-white flex flex-col items-center gap-2 w-20 hover:text-teal-200">
          <CgProfile size={26} />
          <p className="text-xs">Me</p>
        </a>
      </div>
    </nav>
  );
};

export default Footer;
