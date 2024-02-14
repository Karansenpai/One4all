import { handleGithubLogin } from "@/actions/login";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main>
      <form action={handleGithubLogin}>
      <button>login with github</button>
      </form>
    </main>
  
    </>);
}
