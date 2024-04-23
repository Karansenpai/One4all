const semesters = [
  "Semester 1",
  "Semester 2",
  "Semester 3",
  "Semester 4",
  "Semester 5",
  "Semester 6",
  "Semester 7",
  "Semester 8",
];

const currCourses = [
  "Course 1",
  "Course 2",
  "Course 3",
  "Course 4",
  "Course 5",
];

export const semester = (config: any) => {
  const cfg = config || {};
  const count = cfg.count || 8;
  const section = cfg.section;
  const values = [];
  let i, value;

  for (i = 0; i < count; ++i) {
    value = semesters[Math.ceil(i) % 8];
    values.push(value.substring(0, section));
  }

  return values;
};


export const course = (config: any) => {
  const cfg = config || {};
  const count = cfg.count || currCourses.length;
  const section = cfg.section;
  const values = [];
  let i, value;

  for (i = 0; i < count; ++i) {
    value = currCourses[Math.ceil(i) % 8];
    values.push(value.substring(0, section));
  }

  return values;
};