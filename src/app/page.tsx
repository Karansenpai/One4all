import Sidebar from "@/components/Sidebar/Sidebar";
import { handleGithubLogin } from "@/lib/auth_actions/login";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <form action={handleGithubLogin}>
          <button>login with github</button>
          {/* <Sidebar /> */}
        </form>
      </main>
    </>
  );
}
