import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { SocialHandles } from "@/components/social-handle";

export default function Home() {
  return (
    <div className="flex justify-center mb-8 mt-4 flex-col">
      <Header />
      <SocialHandles />
      <Skills/>
      <Projects/>
    </div>
  );
}
