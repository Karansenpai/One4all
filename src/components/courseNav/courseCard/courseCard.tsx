import { CardContent, CardFooter, Card } from "@/components/ui/card";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface NavItem {
  id: number;
  path: string;
  title: string;
}

const Component: React.FC<{ item: NavItem }> = async ({ item }) => {
  return (
    <Card className="w-[400px] overflow-hidden ">
      <CardContent className="p-6 bg-[#334155]">
        <div className="flex items-center gap-4">
          <img
            alt="Course"
            className="rounded-lg"
            height="200"
            src="/download.png"
            width="200"
          />
          <div className="grid gap-1.5">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This course provides an introduction to the fundamental concepts
              of computer science. Topics include algorithms, problem-solving,
              and the programming language Python.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-6 bg-[#121E31] flex justify-center">
        <Link href={`/studymaterial/${item.id}`}>
          <Button className="w-full">View Course</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Component;
