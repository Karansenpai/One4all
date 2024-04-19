import Link from "next/link";
import styles from "./courseMaterial.module.css";
import Image from "next/image";
export default async function courseMaterial({ url }: any) {
  return (
    <div className={styles.container}>
      <div className={styles.title}> Lecture Notes 1</div>
      <div className={styles.imgCnt}>
        <Link href={url || ""}>
          <Image src="/downloadicon.png" className={styles.img} fill alt="" />
        </Link>
      </div>
    </div>
  );
}
