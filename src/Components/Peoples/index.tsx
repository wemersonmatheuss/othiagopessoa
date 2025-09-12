import styles from "./styles.module.css"

import icon1 from "../../assets/svg/equipe 1.svg"
import icon2 from "../../assets/svg/grafico 1.svg"
import icon3 from "../../assets/svg/trofeu 1.svg"

import { People } from "../People"
import { Button } from "../Button"

export function Peoples() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>PARA QUEM É?</h2>
            </div>

            <div className={styles.allPeople}>
                <People icon={icon1} description="Para empresários que sentem que, por mais que se esforcem, sua equipe não acompanha o ritmo, não entrega o que poderia e acaba limitando o crescimento da empresa.companha"/>

                <People icon={icon2} description="Para líderes e empresários que se sentem sobrecarregados e enfrentam dificuldades para engajar suas equipes, por mais que se esforcem, os resultados poderiam ser melhores."/>

                <People icon={icon3} description="Para profissionais que querem alcançar sucesso, liderar com segurança e se destacar, mas sem perder o equilíbrio emocional e a qualidade de vida."/>
            </div>

            <div className={styles.button}>
                <Button name="QUERO SABER MAIS"/>
            </div>
        </div>
    )
}