import styles from "./page.module.css";
import Link from "next/link";
import { posts } from "@repo/db/data";
import { toUrlPath } from "@repo/utils/url";
import { categories } from "@/functions/categories";

export default function Home() {
  const postCategories = categories(posts);
  return (
  <div className={styles.main}>
    <h1>Categories: </h1>
    <ul>
      {postCategories.map((category) => (
        <li key={category.name}>
          <Link href={`/category/${toUrlPath(category.name)}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  </div>
  );
}
