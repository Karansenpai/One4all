import Link from "next/link";
import styles from "./courseMaterial.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Button } from "@mui/material";
export default function courseMaterial({ url, index }: any) {
  console.log(url);

  return (
    <div className={styles.container}>
      <div className={styles.title}> {url[0]}</div>
      <div className={styles.imgCnt}>
        <Link href={url[1] || ""}>
          <Image src="/downloadicon.png" className={styles.img} fill alt="" />
        </Link>
      </div>
    </div>
  );
}
