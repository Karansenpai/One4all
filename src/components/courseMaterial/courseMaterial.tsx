import styles from "./courseMaterial.module.css";
import Image from "next/image";
export default async function courseMaterial() {
  return (
    <div className={styles.container}>
      <div className={styles.title}> Lecture Notes 1</div>
      <div className={styles.imgCnt}>
        <Image src="/downloadicon.png" className={styles.img} fill alt="" />
      </div>
    </div>
  );
}
