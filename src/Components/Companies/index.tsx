import styles from "./styles.module.css"


import image1 from "../../assets/svg/image 1.svg"
import image2 from "../../assets/svg/image 2.svg"
import image3 from "../../assets/svg/image 3.svg"
import image4 from "../../assets/svg/image 4.svg"

export function Companies() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Empresas e pessoas que prosperaram com nosso acompanhamento</h2>
            </div>

            <div className={styles.imageCompanies}>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
        </div>
    )
}