'use client'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const SocialHandles = () => {
  const router =useRouter();
  return (
    <div className="pt-4 h-20">
      <div className="flex justify-between">
        <div
          className="flex text-xl sm:text-2xl space-x-6 sm:hover:text-4xl hover:text-3xl
 text-white"
        >
          <FaGithub onClick={()=>{router.replace('https://github.com/PatelYash7')}} className=" hover:text-5xl  duration-300" />
          <FaXTwitter onClick={()=>{router.replace('https://x.com/yashpatel_113')}} className=" hover:text-5xl duration-300 " />
          <FaLinkedin onClick={()=>{router.replace('https://www.linkedin.com/in/yash-patel-86666b1b9/x.')}} className=" hover:text-5xl duration-300" />
        </div>
        <div>
          <Link
            href={"https://cal.com/yash-patel113"}
            target="_blank"
            className="bg-white py-2 px-2 sm:text-base text-sm rounded-md cursor-pointer text-black hover:bg-gray-900 border-[0.1px] border-white hover:border-[0.1px] hover:border-white  duration-300 font-semibold hover:text-white"
          >
            Let Connect!!
          </Link>
        </div>
      </div>
    </div>
  );
};
