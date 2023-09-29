import * as React from 'react';
import eshVideo from "../../assets/cover-vid.mp4"
import styles from "./Home.module.scss"
 const Home: React.FC = () => {

  return (
    <video className={styles.videoBG} src={eshVideo} autoPlay loop playsInline />
  );
}

export default Home