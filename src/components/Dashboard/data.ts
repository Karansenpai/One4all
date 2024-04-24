import { semester ,course} from "./dataChart/Util";

const CGPAdata = [7.98,8.31,9.02]
const courseAttendanceData = [30,50,80,75,38,100];
 

// export const lineChartData = {
//   labels: semester({ count: 8 }),
//   datasets: [
//     {
//       label: "CGPA",
//       data: CGPAdata,
//       fill: false,
//       borderColor: "rgb(75, 192, 192)",
//       tension: 0.1,
//     },
//   ],
// };

// export const barChartData = {
//   labels: course({count:5}),
//   datasets: [
//     {
//       label: "Course Attendance",
//       data: courseAttendanceData,
//       backgroundColor: ["rgb(255,137,168)", "rgb(178,3,106)", "rgb(165,7,42)"],
//       hoverOffset: 4,
//     },
//   ],
// };