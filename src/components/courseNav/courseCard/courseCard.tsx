// "use server";
import { CardContent, CardFooter, Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavItem {
  sem: number;
  path: string;
  title: string;
  desc: string;
}

const Component: React.FC<{ item: NavItem }> = ({ item }) => {
  return (
    <Card className="w-[400px] h-[400px] overflow-hidden ">
      <CardContent className="h-[70%] p-6 bg-[#334155]">
        <div className="flex  gap-4">
          <img
            alt="Course"
            className="w-[120px] h-[120px] rounded-lg"
            // height="200px"
            src="/download.png"
            // width="200px"
          />
          <div className="grid gap-1.5">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.desc}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="h-[30%] border-t p-6 bg-[#121E31] flex justify-center">
        <Link href={`/studymaterial/${item.title}`}>
          <Button className="w-full">View Course</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Component;
