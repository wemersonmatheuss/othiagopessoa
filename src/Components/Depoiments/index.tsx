import styles from "./styles.module.css"

import depoiment1 from "../../../public/videos/depoiment1.mp4"

export function Depoiments() {
    return (
        <div className={styles.container}>
            <video src={depoiment1} className={styles.video} controls></video>
            <video src={depoiment1} className={styles.video} controls></video>
        </div>
    )
}