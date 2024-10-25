import { GithubIcon, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projectData = [
  {
    projectTitle: "ProjectName",
    projectDescription: `This is a more detailed description of the project. It explains the
            This is a more detailed description of the project. It explains the
            This is a more detailed description of the project. It explains the
            main features, technologies used, and the problem it solves `,
    techStack: ["Nextjs", "prisma", "Postgresql", "expressJs"],
    githubLink: "https://github.com/PatelYash7",
    liveLink: "https://github.com/PatelYash7",
    imageUrl:'https://avatars.githubusercontent.com/u/109963122?v=4 '
  },
  {
    projectTitle: "ProjectName",
    projectDescription: `This is a more detailed description of the project. It explains the
            This is a more detailed description of the project. It explains the
            This is a more detailed description of the project. It explains the
            main features, technologies used, and the problem it solves `,
    techStack: ["Nextjs", "prisma", "Postgresql", "expressJs"],
    githubLink: "https://github.com/PatelYash7",
    liveLink: "https://github.com/PatelYash7",
    imageUrl:'https://avatars.githubusercontent.com/u/109963122?v=4'
  },
];
type projectDataType = {
  projectTitle: string;
  projectDescription: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  imageUrl:string;
};
export const Projects = () => {
  return (
    <div className="my-4">
      <h2 className="text-white text-3xl font-semibold">Recent Projects </h2>
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
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold py-2 cursor-default">
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
          <div className="text-lg text-justify font-medium cursor-default">
            {projectDetails.projectDescription}
          </div>
          <div className="flex space-x-2 mt-2 py-2">
            {projectDetails.techStack.map((e, i) => (
              <TechStackBox name={e} key={i} />
            ))}
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center relative ">
            <Image src={projectDetails.imageUrl} alt="projectImage"width={200} className="" height={200} />
        </div>
      </div>
    </div>
  );
};
const TechStackBox = ({ name }: { name: string }) => {
  return (
    <div className="border-[0.2px] cursor-default px-4 py-1 rounded-md border-gray-500">
      {name}
    </div>
  );
};
