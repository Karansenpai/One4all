const links = [
  { sem: 1, title: "DAA", desc:"This course provides a introduction to the fundamental concepts of computer science. Topics include algorithms, problem-solving, and the programming language Python.",path: "daa" },
  { sem: 4, title: "PPL", path: "ppl",desc:"A principles of programming languages course introduces the theory and design of programming languages. " },
  { sem: 4, title: "SE", path: "se" ,desc:"Software engineering is a branch of computer science that involves the design, development, testing, and maintenance of software applications." },
  { sem: 3, title: "CN", path: "cn" ,desc:"Computer Networks course provides an introduction to computer networks, with a special focus on Internet architecture and protocols."},
  { sem: 2, title: "DBMS", path: "dbms" ,desc:"Database Management Systems (DBMS) are software systems used to store, retrieve, and run queries on data. A DBMS serves as an interface between an end-user and a database."},
];

const courseDetails = [
  {
    title: "DAA",
    desc: "Programming in C. Elementary data structures: arrays and strings; packing; space arrays; algorithm development; complexity; simple examples of algorithm development; recursion. Sequential search: divide and conquer-binary search; selection and insertion sort; merge-sort; quicksort; complexity of sorting. Linear lists-stacks: stack use-postfix notation; recursion removal. Queues-circular queues. Linked lists-definition on Pascal and C; creation and deletion of nodes; circular and doubly linked lists; applications of lists. Graphs and representation sets-UNION and FIND operations: graph algorithms; optimization and greedy method; minimum spanning tree, shortest path. Trees; binary tree traversals; search trees, AVL trees; threaded trees; heapsort; tries and B-trees; external search. Tables and information retrieval; hashing; depth first and breadth first search; examples of backtracking. String algorithmspattern search and text editing. Structured approach to programming step wise refinement approach. Reasoning about programs, program specification, pre-and post condition, weakest pre-conditions, program assertions, loop invariants. Programming style-documentation, basic concepts of program testing.",
    links: [
      ["Assignment 1","https://drive.google.com/file/d/1Pfbx5XRKYJuIffc3SSznhq7WcjwmlI5E/view"],
      ["Assignment 2","https://drive.google.com/file/d/1FldEk2PZfZy22Qv9VLcVgiC5DH3OE4RY/view"],
    ],
  },
  {
    title:"PPL",
    desc: "Classification of Programming Languages : Imperative and Declarative languages; Procedural and Object Oriented languages; Concurrency; Functional and Logic Programming and other languages; Data Types : Static and Dynamic Types; Early and Late binding; Type Conversion; Records, Union, Array and Pointers; Dangling References and Garbage Collection; Concept of Objects and Classes; Abstract Data Types and Classes; Hierarchy and Inheritance; Constructors; Kinds of access; C++ and Java Comparison. RAM and PRAM. Concept of Concurrency, Concurrent Programming Languages. Functional Programming Languages : LISP. Logic Programming : PROLOG. Event Handling and Languages. Exception Handling. Specialized Languages: Intro to XML, PHP, etc",
    links: [
      ["L1","https://drive.google.com/file/d/1hPkP9IfX0wtIqzc4UMb0HYJqWRfM9nhp/view"],
      ["L2","https://drive.google.com/file/d/12NoWz_7FatL4IBP1LHERXF12OCilr03R/view"],
      ["L3","https://drive.google.com/file/d/1ZhOPqIEZrvGDcaKpI0uTOMduMN3Z1qe9/view"],
    ],
  },
  {
    title:"DBMS",
    desc: "The main objective of this course is to provide students with the background to design, implement, and use database management systems. Database technology though being core subject of all CSE/IT Bachelor programs and assumes special significance due to the highly competitive environment and the explosive use of the internet in Business-to-Client and Business-to-Business applications and the need to store more business data. Recent developments in technologiesis proposed to beincluded.",
    links: [
      ["Quiz","https://drive.google.com/file/d/1hPkP9IfX0wtIqzc4UMb0HYJqWRfM9nhp/view"],
      ["Concurrency Control","https://drive.google.com/file/d/12NoWz_7FatL4IBP1LHERXF12OCilr03R/view"],
      ["Assignment","https://drive.google.com/file/d/1ZhOPqIEZrvGDcaKpI0uTOMduMN3Z1qe9/view"],
    ],
  },
  {
    title:"CN",
    desc: " A course on computer networks provides a comprehensive exploration of networking principles and practices, covering topics such as network architecture, protocols, security, and emerging technologies. Through a combination of lectures, labs, assignments, and projects, students develop a deep understanding of fundamental concepts like TCP/IP, OSI model, LANs, and WANs, as well as practical skills in network design, configuration, and troubleshooting. Emphasis is placed on hands-on experience with network devices, addressing schemes, and security mechanisms, alongside discussions of current trends such as wireless networking, cloud computing, and software-defined networking. By the end of the course, students are equipped with the knowledge and skills necessary for careers in network engineering, system administration, cybersecurity, and related fields.",
    links: [
      ["Internet Protocol","https://drive.google.com/file/d/12pOskCTMn9IzcdCToLdeWYac6uXEMPPG/view"],
    ],
  },
  {
    title:"SE",
    desc: "Apply software engineering theory, principles, tools and processes, as well as the theory and principles of computer science and mathematics, to the development and maintenance of complex, scalable software systems. Design and experiment with software prototypes .Select and use software metrics. Elicit, analyze and specify software requirements through a productive working relationship with project stakeholders. Apply a systematic, disciplined, quantifiable approach to the cost-effective development, operation and maintenance of software systems to the satisfaction of their beneficiaries. Build solutions using different technologies, architectures and life-cycle approaches in the context of different organizational structures.",
    links: [
      ["Software Planning","https://drive.google.com/file/d/1mYEl1JvWYvCSDgIsRrJh_8-xwxckN01Q/view?usp=classroom_web&authuser=0"],
    ],
  },
];

export function getcourseDetails(title:string){
  return (courseDetails.find(course=>course.title==title));
}


export function linksData() {
  return links;
}

