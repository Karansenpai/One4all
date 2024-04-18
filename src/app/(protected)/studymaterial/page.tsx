import styles from "./page.module.css";
import CourseNav from "@/components/courseNav/CourseNav";
export default async function StudyMaterial() {
  return (
    <div
      className={`flex flex-col items-center justify-center ${styles.container}`}
    >
      <h1>Study Material</h1>
      <div className={styles.courseNav}>
        <CourseNav />
      </div>
    </div>
  );
}
