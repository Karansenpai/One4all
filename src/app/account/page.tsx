import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import style from "./account.module.css";
import AccountForm from "@/components/account/AccountForm";
import ProfileForm from "@/components/account/ProfileForm";
import { auth } from "@/auth";
const Settings = async () => {
  const session = await auth();
  return (
    <div>
      <div className={style.container}>
        <div className={style.head1}>
          Account
        </div>
      </div>
    <div className={style.container2}>
      <AccountForm/>
    </div>
    </div>
  );
};

export default Settings;
