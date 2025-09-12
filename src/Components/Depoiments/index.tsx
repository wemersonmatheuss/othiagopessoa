import styles from "./styles.module.css"

import depoiment1 from "../../../public/videos/depoiment1.mp4"
import depoiment2 from "../../../public/videos/IMG_6207.mp4"

export function Depoiments() {
    return (
        <div className={styles.container}>
            <video src={depoiment1} className={styles.video} controls></video>
            <video src={depoiment2} className={styles.video} controls></video>
        </div>
    )
}