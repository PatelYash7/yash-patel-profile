import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
export const SocialHandles = () => {
  return (
    <div className="pt-4 h-20">
      <div className="flex justify-between">
        <div
          className="flex text-xl sm:text-2xl space-x-6 sm:hover:text-4xl hover:text-3xl
 text-white"
        >
          <Link
            href={"https://github.com/PatelYash7"}
            target="_blank"
            aria-label="Github Link"
          >
            <FaGithub className=" hover:text-5xl  duration-300" />
          </Link>
          <Link
            target="_blank"
            aria-label="X-link"
            href={"https://x.com/yashpatel_113"}
          >
            <FaXTwitter className=" hover:text-5xl duration-300 " />
          </Link>
          <Link
            target="_blank"
            aria-label="LinkedIn link"
            href={"https://www.linkedin.com/in/yash-patel-86666b1b9/x."}
          >
            <FaLinkedin className=" hover:text-5xl duration-300" />
          </Link>
        </div>
        <div>
          <Link
            href={"https://cal.com/yash-patel113"}
            target="_blank"
            className="bg-white py-2 px-2 sm:text-base text-sm rounded-md cursor-pointer text-black hover:bg-gray-900 border-[0.1px] border-white hover:border-[0.1px] hover:border-white  duration-300 font-semibold hover:text-white"
          >
            Let's Connect!!
          </Link>
        </div>
      </div>
    </div>
  );
};
