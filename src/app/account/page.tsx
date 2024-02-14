import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import style from "./account.module.css";
import AccountForm from "@/components/account/AccountForm";
import ProfileForm from "@/components/account/ProfileForm";
const Settings = () => {
  return (
    <div className={style.container}>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <AccountForm/>
        </TabsContent>
        <TabsContent value="password">
          <ProfileForm/>
          </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
