import styles from "./styles.module.css"

import { Social } from "../Social"

import instagram from "../../assets/svg/instagram (3) 1.svg"
import whatsApp from "../../assets/svg/whatsapp (2).svg"
import youtube from "../../assets/svg/youtube.svg"
import linkedin from "../../assets/svg/linkedin.svg"

export function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.allSocial}>
                <a href="https://www.instagram.com/othiagopessoa?igsh=MW9wZ3U4OG11eTFzaw%3D%3D&utm_source=qr" target="_blank" rel="noopener">
                    <Social icon={instagram}/>
                </a>
                <a href="https://wa.me/5511991892986" target="_blank" rel="noopener">
                    <Social icon={whatsApp}/>
                </a>
                <a href="https://www.youtube.com/@OThiagoPessoa" target="_blank" rel="noopener">
                    <Social icon={youtube}/>

                </a>
                <a href="https://www.linkedin.com/in/othiagopessoa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener">
                    <Social icon={linkedin}/>

                </a>
            </div>

            <div className={styles.text}>
                <p>Thiago Pessoa © 2025 – Todos os direitos reservados.</p>
                <a href="https://www.instagram.com/wemersonmth/" target="_blank" rel="noopener">Desenvolvido e mantido por Wemerson Dev.</a>
            </div>
        </div>
    )
}