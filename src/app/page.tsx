"use client"
import styles from "./page.module.css";
import { useEffect } from "react";
import useTest from "@/components/apps/components/hooks/useTest";

export default function Home() {
  const { getAll} = useTest()
   const {store}= useTest();

  useEffect(()=>{
   getAll();
  },[])
  
  return <main className={styles.main}>Next Level Home page 111  </main>;
}
