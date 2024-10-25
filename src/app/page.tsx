import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { SocialHandles } from "@/components/social-handle";

export default function Home() {
  return (
    <div className="flex justify-center py-8  flex-col">
      <Header />
      <SocialHandles />
      <Projects/>
    </div>
  );
}
