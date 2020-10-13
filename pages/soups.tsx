import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { InferGetStaticPropsType } from "next";
import type { Soups } from "./index";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/soups");
  const soups: Soups[] = await res.json();

  return {
    props: {
      soups,
    },
  };
};

export default function AllSoups({
  soups,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>All Soups</title>
      </Head>
      <h2 style={{ textAlign: "center" }}>All soups</h2>
      {soups.map((soup) => (
        <div key={soup.id} className={styles.card}>
          <Link href="/productdetail">
            <img alt="soup" src={soup.image} />
          </Link>
          <p style={{ fontSize: 16 }}>{soup.name}</p>
          <p style={{ fontSize: 14, float: "right", fontWeight: "bold" }}>
            129 SEK
          </p>
          <p style={{ fontSize: 12 }}>Swedish</p>
        </div>
      ))}
    </div>
  );
}
