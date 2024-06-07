import Image from "next/image"
import Link from "next/link"
import styles from "./menu.module.css"


export default function Header(){
    return(
        <header className={styles.header}>
            <nav>
               <ul className={styles.lista}>
                <li><Image width={70} height={70} src={"https://media.istockphoto.com/id/1409632365/pt/vetorial/vintage-ghost-logo-icon-ghost-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=is&k=20&c=hFzIRw2rfyygDMrMDkSX0ny3LFoPm_Iqt-O1J1SSP0c="}/></li>
                <li ><Image width={70} height={70} src={"https://media.istockphoto.com/id/1206806317/pt/vetorial/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=cl3NPzmnu0pRmaRGndYIejbHGe-atORf0JDjzmhX8Z8="}/></li>
                <li><button >Adcionar produto</button></li>
                <li>Aqui é preço morto</li>
               </ul>
            </nav>
        </header>
    )
}