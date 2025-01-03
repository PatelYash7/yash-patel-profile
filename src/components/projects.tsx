import { GithubIcon, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectData = [
  {
    projectTitle: "Money Mingle",
    projectDescription: `Built a wallet-to-wallet transfer system, enabling users to transact funds between their wallets efficiently.\nIntegrated bank-to-wallet and wallet-to-bank transfer functionality, allowing users to seamlessly manage their bank accounts and wallet balances.\nImplemented NextAuth for advanced authentication, including email-based user verification to enhance account security.`,
    techStack: ["Nextjs", "Postgresql", "Prisma", "Recoil", "Next-auth"],
    githubLink: "https://github.com/PatelYash7/money-mingle-client",
    liveLink: "https://moneymingle.patelyash.tech/",
    imageUrl: "/moneymingle.png",
  },
  {
    projectTitle: "Discord-Bot-Dasboard ",
    projectDescription: `Bot-Manager is a Web Application for managing the TectTOnions Discord bot. Server admin or Moderator can Add Various functionalities like role setup, Level Setup, and Channel Management.\nIntegrated the Backend API's with the UI/UX. Added Discord OAuth2 for user Authentication. Designed and Implemented Complex UI with react-router. Used RecoilJS for global state management in react application.\n Implemented CI/CD Pipeline which Deploys the Code in  AWS EC2.`,
    techStack: ["Reactjs", "React-router", "RecoilJs"],
    githubLink: "https://github.com/TechTOnions/TechTOnions_Discord_Bot",
    liveLink: "https://github.com/TechTOnions/TechTOnions_Discord_Bot",
    imageUrl: "/bot_dashboard.png",
  },
  {
    projectTitle: " Next Development Template ",
    projectDescription: `A project template designed to streamline the development of modern web applications with Next.js, Prisma, Shadcn, and NextAuth.\n Built-in authentication to support secure user sign-ins with minimal configuration.`,
    // techStack: ["Reactjs", "Postgresql", "Honojs"],
    githubLink: "https://github.com/PatelYash7/nextjs-development-kit",
    liveLink: "https://cli.patelyash.tech/",
    imageUrl: "/cli.png",
  },
  {
    projectTitle: "Blogosphere ",
    projectDescription: `A blogging website where users can sign in securely and share their blogs.\n Used PostgreSQL and Prisma client to manage Database effectively and utilized React for UI/UX and made it Typesafe using Typescript.\nUtilized the power of Honojs to develop API and deployed it in Edge Network (Cloudflare Worker). `,
    techStack: ["Reactjs", "Postgresql", "Honojs"],
    githubLink: "https://github.com/PatelYash7/Blogosphere",
    liveLink: "https://blogosphere.patelyash.tech/",
    imageUrl: "/blogosphere.png",
  },
];
type projectDataType = {
  projectTitle: string;
  projectDescription: string;
  techStack?: string[];
  githubLink: string;
  liveLink: string;
  imageUrl: string;
};
export const Projects = () => {
  return (
    <div className="mb-4 mt-2">
      <h2 className="text-white text-3xl font-semibold">Projects </h2>
      {projectData.map((project, i) => (
        <div key={i} className="py-4">
          <ProjectCard projectDetails={project} />
        </div>
      ))}
    </div>
  );
};

const ProjectCard = ({
  projectDetails,
}: {
  projectDetails: projectDataType;
}) => {
  return (
    <div className="border-[0.4px]  rounded-lg px-4 py-2 text-white border-gray-700">
      <div className="grid grid-cols-1 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold py-2 ">
              {projectDetails.projectTitle}
            </div>
            <div className="flex items-center space-x-4">
              <Link href={projectDetails.liveLink} target="_blank">
                <Link2 className=" -rotate-45 hover:scale-110 cursor-pointer" />
              </Link>
              <Link href={projectDetails.githubLink} target="_blank">
                <GithubIcon className="hover:scale-110 cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="text-sm font-medium  whitespace-pre-line">
            {projectDetails.projectDescription
              .split("\n")
              .map((sentence) => `• ${sentence}`)
              .join("\n")}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-x-4 sm:gap-x-0 gap-y-2 mt-2 py-2">
            {projectDetails.techStack?.map((e, i) => (
              <TechStackBox name={e} key={i} />
            ))}
          </div>
        </div>
        <div className="  sm:col-span-2 flex justify-center items-center relative  ">
          <Image
            src={projectDetails.imageUrl}
            alt="projectImage"
            width={300}
            className=""
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
const TechStackBox = ({ name }: { name: string }) => {
  return (
    <div className="border-[0.2px] col-span-1 flex justify-center items-center cursor-default hover:text-white hover:font-bold duration-200 w-[100px]  text-center  h-8 rounded-md border-gray-500">
      {name}
    </div>
  );
};
