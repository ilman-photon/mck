import { useState } from "react";
import { items } from "../../public/items.json";
import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/Bootstrap.module.css";

export default function CarouselComponent() {
  const { carousalData } = items;
  const [index, setIndex] = useState(0);

  function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  }
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carousalData.map((item) => (
        <Carousel.Item key={item.id} className={styles.itemP} interval={2000}>
          <img src={item.imageUrl} alt="slides" />
          <Carousel.Caption className={styles.caption}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
