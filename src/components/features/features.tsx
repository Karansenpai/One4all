import { CardContent, Card } from "@/components/ui/card";
import styles from "./feature.module.css";
export default function Component() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 md:p-6">
      <Card className="group hover:shadow-lg transition-shadow duration-300">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
          <div className="bg-black p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <MegaphoneIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold">Announcements</h3>
          <div className={styles.para}>
            <p className={` text-gray-500 text-center`}>
              Stay up-to-date with the latest announcements from your college.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="group hover:shadow-lg transition-shadow duration-300">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
          <div className="bg-black p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <BookOpenIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold">Study Material</h3>
          <div className={styles.para}>
            <p className="text-gray-500 text-center">
              Access your course materials and resources in one place.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="group hover:shadow-lg transition-shadow duration-300">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
          <div className="bg-black p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <BarChartIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold">Attendance & CGPA</h3>
          <div className={styles.para}>
            <p className="text-gray-500 text-center">
              Track your attendance and CGPA progress throughout the semester.
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="group hover:shadow-lg transition-shadow duration-300">
        <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
          <div className="bg-black p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <CalendarIcon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold">Course Enrollment</h3>
          <div className={styles.para}>
            <p className="text-gray-500 text-center">
              Easily enroll in your courses and manage your schedule.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function BarChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BookOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function MegaphoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  );
}
