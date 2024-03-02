import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import style from "./account.module.css";
import AccountForm from "@/components/account/AccountForm";
import ProfileForm from "@/components/account/ProfileForm";
import { auth } from "@/auth";
const Settings = async () => {
  const session = await auth();
  return (
    <div className={style.container}>
      <section className="flex w-full h-full gap-8">
        <div className="flex-2 p-14 relative">

          <div className = "absolute">
            <h1> Settings</h1>
          </div>

          <div className="absolute bottom-3">
            <h2>Account</h2>
            <h2>Profile</h2>
          </div>
        </div>
        <div className="flex-1 p-14 relative">
          {/* <ProfileForm/> */}
          <AccountForm session={session} />
        </div>
      </section>
    </div>
  );
};

export default Settings;
