import styles from "./styles.module.css"
import { useEffect, useState } from "react"

import image12 from "../../assets/svg/image 12.svg"
import image13 from "../../assets/svg/image 13.svg"
import image14 from "../../assets/svg/image 14.svg"
import image15 from "../../assets/svg/image 15.svg"
import image16 from "../../assets/svg/image 16.svg"
import image17 from "../../assets/svg/image 17.svg"
import image18 from "../../assets/svg/image 18.svg"
import image19 from "../../assets/svg/image 19.svg"
import image21 from "../../assets/svg/image 21.svg"
import image22 from "../../assets/svg/image 22.svg"
import image23 from "../../assets/svg/image 23.svg"
import image24 from "../../assets/svg/image 24.svg"

const images = [
	image12,
	image13,
	image14,
	image15,
	image16,
	image17,
	image18,
	image19,
	image21,
	image22,
	image23,
	image24,
]

const imageWidth = 100;
const gap = 10;
const slideWidth = imageWidth + gap;

export default function Carrousel() {
		const [current, setCurrent] = useState(0);
		const [isTransitioning, setIsTransitioning] = useState(true);
		const total = images.length;
		// Duplicar as imagens para efeito infinito
		const displayImages = [...images, ...images];

		// Quantas imagens mostrar na tela? (ajuste se necessário)
		// const visibleCount = 4; // Exemplo: 4 imagens visíveis
		// Quando chegar a (total), já começa a mostrar o início
		useEffect(() => {
			const interval = setInterval(() => {
				setCurrent((prev) => prev + 1);
				setIsTransitioning(true);
			}, 2000);
			return () => clearInterval(interval);
		}, []);

		useEffect(() => {
			if (current === total + 1) {
				setTimeout(() => {
					setIsTransitioning(false);
					setCurrent(1);
				}, 500);
			}
		}, [current, total]);

		return (
			<div className={styles.carrouselWrapper}>
				<div
					className={styles.carrousel}
					style={{
						transform: `translateX(-${current * slideWidth}px)`,
						transition: isTransitioning ? undefined : 'none',
					}}
					onTransitionEnd={() => {
						if (!isTransitioning) setIsTransitioning(true);
					}}
				>
					{displayImages.map((img, idx) => (
						<img
							key={idx}
							src={img}
							alt={`Carrousel ${idx}`}
							className={styles.carrouselImage}
						/>
					))}
				</div>
			</div>
		);
	}


