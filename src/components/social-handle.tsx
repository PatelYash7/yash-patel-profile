import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
export const SocialHandles = () => {
  return (
    <div className="py-4 h-20">
      <div className="flex justify-between">
        <div
          className="flex text-2xl space-x-6 hover:text-4xl
 text-white"
        >
          <FaGithub className=" hover:text-5xl  duration-300" />
          <FaLinkedin className=" hover:text-5xl duration-300" />
          <FaXTwitter className=" hover:text-5xl duration-300 " />
        </div>
        <div>
          <Link
            href={"https://cal.com/yash-patel113"}
            target="_blank"
            className="bg-white py-2 px-2 rounded-md text-black hover:bg-gray-900 border-[0.1px] border-white hover:border-[0.1px] hover:border-white  duration-300 font-semibold hover:text-white"
          >
            Schedule Meet
          </Link>
        </div>
      </div>
    </div>
  );
};
