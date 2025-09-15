import styles from "./styles.module.css"

import { Service } from "../Service"
import { Button } from "../Button"

import equipe1 from "../../assets/svg/equipe 1.svg"
import imageMobile from "../../assets/thiago.png"

export function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.mobile}>
                <img src={imageMobile} alt="" />
            </div>
            <div className={styles.context}>
                <div className={styles.title}>
                    <h1>Transforme sua Empresa em uma máquina de Resultados</h1>
                        <p>Mais do que treinamentos: uma jornada para transformar sua cultura, fortalecer seu time e elevar sua performance.</p>
                </div>

                <div className={styles.service}>
                    <Service name="TREINAMENTOS CORPORATIVOS" icon={equipe1}/>
                    <Service name="PALESTRAS E WORKSHOPS" icon={equipe1}/>
                    <Service name="CARTA DE VALORES" icon={equipe1}/>
                    <Service name="DESCOMPRESSÃO MENTAL" icon={equipe1}/>
                </div>

                <div className={styles.button}>
                    <Button name="QUERO SABER MAIS"/>
                </div>
            </div>
            
            
        </div>
    )
    
}