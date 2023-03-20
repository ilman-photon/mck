import Image from "next/image";
import { useEffect, useState } from "react";
import { items } from "../../public/items.json";
import styles from "@/styles/Home.module.scss";

export default function CategoryComponent() {
  const { category } = items;
  useEffect(() => {
    console.log("cate", category, items);
  });

  return (
    <div className="row">
      {category.map((item) => (
        <div
          className="col col-sm-6 col-md-3 col-lg-3 col-xl-3 text-center"
          key={item.id}
        >
          <div
            className={styles.productCategory}
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
}
