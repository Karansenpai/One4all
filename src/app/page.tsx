import Sidebar from "@/components/Sidebar/Sidebar";
import { handleGithubLogin } from "@/lib/auth_actions/login";
import Image from "next/image";
import ParallaxPage from "@/components/Parallax/parallax";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <div className="overflow-hidden">
          <ParallaxPage />
        </div>
        <form action={handleGithubLogin}>
          <button>login with github</button>
        </form>
      </main>
    </>
  );
}
