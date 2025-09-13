import styles from "./style.module.css"
import { useRef } from "react"
import image12 from "../../assets/svg/image12.svg"
import image13 from "../../assets/svg/image13.svg"
import image14 from "../../assets/svg/image14.svg"
import image15 from "../../assets/svg/image15.svg"
import image16 from "../../assets/svg/image16.svg"
import image17 from "../../assets/svg/image17.svg"
import image18 from "../../assets/svg/image18.svg"
import image19 from "../../assets/svg/image19.svg"
import image20 from "../../assets/svg/image20.svg"
import image21 from "../../assets/svg/image21.svg"
import image22 from "../../assets/svg/image22.svg"
import image23 from "../../assets/svg/image23.svg"
import image24 from "../../assets/svg/image24.svg"

export function Picture() {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (wrapperRef.current) {
            const scrollAmount = 320; // ajuste para quantas imagens quer rolar
            wrapperRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={styles.container}>
            <button className={styles.arrow} onClick={() => scroll('left')}>&lt;</button>
            <div className={styles.wrapper} ref={wrapperRef}>
                <img src={image12} alt="" />
                <img src={image13} alt="" />
                <img src={image14} alt="" />
                <img src={image15} alt="" />
                <img src={image16} alt="" />
                <img src={image17} alt="" />
                <img src={image18} alt="" />
                <img src={image19} alt="" />
                <img src={image20} alt="" />
                <img src={image21} alt="" />
                <img src={image22} alt="" />
                <img src={image23} alt="" />
                <img src={image24} alt="" />
            </div>
            <button className={styles.arrow} onClick={() => scroll('right')}>&gt;</button>
        </div>
    )
}