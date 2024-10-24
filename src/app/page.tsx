import { Header } from "@/components/header";
import { SocialHandles } from "@/components/social-handle";

export default function Home() {
  return (
    <div className="flex justify-center py-8  flex-col">
      <Header />
      <SocialHandles />
    </div>
  );
}
