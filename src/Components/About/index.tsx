import styles from "./styles.module.css"

import imageThiago from "../../assets/thiago.png"

export function About() {
    return (
        <div className={styles.container}>
            <img src={imageThiago} alt="" />
            <div className={styles.description}>
                <h2>Quem sou eu?</h2>
                <p>Sou Thiago Pessoa, mentor e palestrante com mais de 13 anos de experiência ajudando empresas e líderes a prosperarem com equilíbrio emocional e alta performance. Minha missão é destravar o potencial de empresários e equipes, fortalecendo líderes, engajando colaboradores e criando culturas organizacionais capazes de multiplicar resultados. <br /><br />

                Por meio de treinamentos contínuos, palestras personalizadas, co-criação de valores e programas de descompressão corporativa, auxilio empresas a superar desafios, desenvolver habilidades estratégicas e transformar talentos em protagonistas do crescimento do negócio.</p>
            </div>
        </div>
    )
}