"use client";
import { Input } from "@/components/ui/input";
import { auth } from "@/auth";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
// import { Switch } from "@/components/ui/switch"

export default function AccountForm({ session }: any) {
  return (
    <div>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal information.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="flex items-center space-x-4">
                <Label htmlFor="avatar">Avatar</Label>
              </div>
              <div className="col-span-2">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="96"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "96/96",
                    objectFit: "cover",
                  }}
                  width="96"
                />
                <div className="mt-4 mb-4">
                  <Button size="sm" variant="outline">
                    Upload new avatar
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 items-start gap-4">
              <div className="flex items-center space-x-4">
                <Label htmlFor="name">Name</Label>
              </div>
              <div className="col-span-2">
                <Input id="name" value="Alice Johnson" />
              </div>
              <div className="flex items-center space-x-4">
                <Label htmlFor="email">Email</Label>
              </div>
              <div className="col-span-2">
                <Input id="email" value="alice@example.com" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
            <CardDescription>Choose how you'd like to be notified.</CardDescription>
          </CardHeader>
          <CardContent>
            <fieldset>
              <legend className="text-base font-medium">Email notifications</legend>
              <div className="space-y-4">
                <div>
                  <div />
                  <Label className="ml-2 text-sm font-medium leading-6" htmlFor="all">
                    All notifications
                  </Label>
                </div>
                <div>
                  <div />
                  <Label className="ml-2 text-sm font-medium leading-6" htmlFor="mentions">
                    Only mentions
                  </Label>
                </div>
                <div>
                  <div />
                  <Label className="ml-2 text-sm font-medium leading-6" htmlFor="none">
                    Do not disturb
                  </Label>
                </div>
              </div>
            </fieldset>
            <fieldset className="mt-4">
              <legend className="text-base font-medium">SMS notifications</legend>
              <div className="space-y-4">
                <div>
                  <div />
                  <Label className="ml-2 text-sm font-medium leading-6" htmlFor="all-sms">
                    All notifications
                  </Label>
                </div>
                <div>
                  <div />
                  <Label className="ml-2 text-sm font-medium leading-6" htmlFor="mentions-sms">
                    Only mentions
                  </Label>
                </div>
                <div>
                  <div />
                  <Label className="ml-2 text-sm font-medium leading-6" htmlFor="none-sms">
                    Do not disturb
                  </Label>
                </div>
              </div>
            </fieldset>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>Update your security settings.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Button className="ml-auto h-8 text-sm" id="password" variant="outline">
                  Change
                </Button>
              </div>
              <div>
                <Label htmlFor="2fa">Two-factor authentication</Label>
                {/* <Switch className="ml-auto" id="2fa" /> */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>    );
}
