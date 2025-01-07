import { Link2 } from "lucide-react";
import Link from "next/link";

export const WorkExperience = () => {
  return (
    <div className="mb-4 mt-4 space-y-4">
      <h2 className="text-white text-3xl font-semibold">Work</h2>
      <div className="border-[0.4px] rounded-lg px-4 py-2 text-white border-gray-700">
        <div className="col-span-3 text-white">
          <div className="flex justify-between items-center">
            <div className="text-xl flex gap-4 font-bold py-2 ">
              Techtonions
              <div className="flex items-center space-x-4">
                <Link
                  href={"https://www.techtonions.com/services/"}
                  target="_blank"
                >
                  <Link2 className=" -rotate-45 hover:scale-110 cursor-pointer " />
                </Link>
              </div>
            </div>
            <div className="text-lg font-semibold">Jan-2024 to Present</div>
          </div>
          <div className="text-lg font-light leading-7  whitespace-pre-line">
            <ul className=" list-disc list-inside">
              {"Developed and deployed dynamic web-apps in Nodejs.\n  Built and managed relational databases with PostgreSQL and utilized Prisma ORM for efficient data handling, improving query performance by 25.\n Implemented CI/CD pipelines, reducing deployment time by 30% and ensuring seamless updates.\nContainerized applications using Docker and managed deployments on VPS servers, enhancing deployment efficiency."
                .split("\n")
                .map((sentence) => <li key={sentence.charAt(0)} className="py-1">{sentence}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
