import styles from "./courseNav.module.css";
import CourseCard from "./courseCard/courseCard";
import { linksData } from "./data";
import { useEffect, useState } from "react";
interface NavItem {
  sem: number;
  path: string;
  title: string;
  desc: string;
}

export default function CourseNav({ sem }: any) {
  const [links, setLinks] = useState<NavItem[]>([]); // State to store links

  useEffect(() => {
    const fetchLinks = async () => {
      // Fetch linksData asynchronously
      const data = await linksData();
      setLinks(data); // Set links state when data is fetched
    };
    fetchLinks(); // Call fetchLinks when component mounts
  }, []); // Run effect only once when component mounts
  console.log(sem);
  return (
    <div className={`${styles.container} rounded-lg `}>
      <div
        className={`flex py-5 gap-10 justify-center flex-wrap ${styles.card}`}
      >
        {links.map(
          (link: NavItem) =>
            (sem == 0 || link.sem == sem) && (
              <CourseCard item={link} key={link.title} />
            )
        )}
      </div>
    </div>
  );
}
