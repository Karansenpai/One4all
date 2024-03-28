import Sidebar from "@/components/Sidebar/Sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="flex gap-4 overflow-x-hidden h-[90%]">
        <Sidebar />
        {children}
      </div>
  );
}
