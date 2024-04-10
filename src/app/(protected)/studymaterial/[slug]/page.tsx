import styles from "./page.module.css";
import CourseMaterial from "@/components/courseMaterial/courseMaterial";
export default async function SingleCoursePage({ params }: any) {
  const { slug } = params;
  const material = [
    { id: 1, title: "course1", path: "course1" },
    { id: 2, title: "course2", path: "course2" },
    { id: 3, title: "course3", path: "course3" },
    { id: 4, title: "course4", path: "course4" },
    { id: 5, title: "course5", path: "course5" },
  ];
  console.log(slug);
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2 className="text-xl font-semibold">Data Structure</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.courseDetail}>
          {" "}
          <p className="text-gray-500 dark:text-gray-400">
            Programming in C. Elementary data structures: arrays and strings;
            packing; space arrays; algorithm development; complexity; simple
            examples of algorithm development; recursion. Sequential search:
            divide and conquer-binary search; selection and insertion sort;
            merge-sort; quicksort; complexity of sorting. Linear lists-stacks:
            stack use-postfix notation; recursion removal. Queues-circular
            queues. Linked lists-definition on Pascal and C; creation and
            deletion of nodes; circular and doubly linked lists; applications of
            lists. Graphs and representation sets-UNION and FIND operations:
            graph algorithms; optimization and greedy method; minimum spanning
            tree, shortest path. Trees; binary tree traversals; search trees,
            AVL trees; threaded trees; heapsort; tries and B-trees; external
            search. Tables and information retrieval; hashing; depth first and
            breadth first search; examples of backtracking. String
            algorithmspattern search and text editing. Structured approach to
            programming step wise refinement approach. Reasoning about programs,
            program specification, pre-and post condition, weakest
            pre-conditions, program assertions, loop invariants. Programming
            style-documentation, basic concepts of program testing.
          </p>
          <div className={styles.courseContent}></div>
        </div>
        <div className={styles.courseMaterial}>
          <CourseMaterial />
          <CourseMaterial />
        </div>
      </div>
    </div>
  );
}
