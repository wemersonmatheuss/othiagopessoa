import styles from "./app.module.css"

import { Main } from "./Components/Main"
import { Peoples } from "./Components/Peoples"
import { Companies } from "./Components/Companies"
import { Depoiments } from "./Components/Depoiments"
import Carrousel from "./Components/Carrousel"
import { About } from "./Components/About"
import { Footer } from "./Components/Footer"

export function App() {
  return (
    <div className={styles.container}>
      <Main/>

      <div className={styles.context}>
        <Peoples/>
        <Companies/>
        <Depoiments/>
        <Carrousel/>
        <About/>
        <Footer/>
      </div>
    </div>
  )
}