import styles from "./app.module.css"

import { Main } from "./Components/Main"
import { Peoples } from "./Components/Peoples"
import { Companies } from "./Components/Companies"
import Carrousel from "./Components/Carrousel"
import { About } from "./Components/About"

export function App() {
  return (
    <div className={styles.container}>
      <Main/>

      <div className={styles.context}>
        <Peoples/>
        <Companies/>
        <Carrousel/>
        <About/>
      </div>
    </div>
  )
}