import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { SocialHandles } from "@/components/social-handle";
import { Wrapper } from "@/components/ui/wrapper";
import { WorkExperience } from "@/components/work-experience";

export default function Home() {
  return (
    <>
      <Wrapper>
        <div className="flex sm:max-w-4xl  justify-center mb-8 mt-4 flex-col relative">
          <Header />
          <SocialHandles />
          <Skills />
          <WorkExperience />
          <Projects />
        </div>
          
      </Wrapper>
    </>
  );
}
