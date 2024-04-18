import styles from "./courseNav.module.css";
import CourseCard from "./courseCard/courseCard";

interface NavItem {
  id: number;
  path: string;
  title: string;
}

export default async function CourseNav() {
  const links = [
    { id: 1, title: "course1", path: "course1" },
    { id: 2, title: "course2", path: "course2" },
    { id: 3, title: "course3", path: "course3" },
    { id: 4, title: "course4", path: "course4" },
    { id: 5, title: "course5", path: "course5" },
  ];

  return (
    <div className={`${styles.container} rounded-lg `}>
      <div
        className={`flex py-5 gap-10 justify-center flex-wrap ${styles.card}`}
      >
        {links.map((link: NavItem) => (
          <CourseCard item={link} key={link.title} />
        ))}
      </div>
    </div>
  );
}
