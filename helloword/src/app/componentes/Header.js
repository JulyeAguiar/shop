import Image from "next/image"
import styles from "./menu.module.css"


export default function Header(){
    return(
        <header className={styles.header}>
            <nav>
               <ul className={styles.lista}>
                <li><Image width={200} height={70} src={"https://acdn.mitiendanube.com/stores/003/621/721/themes/common/logo-201069853-1693802395-4a0fa0bdd81995a0dd4d6de216795a8a1693802396.png?0"}/></li>
                <li>Cookie bom é cookiePisca</li>
                <li ><Image width={70} height={70} src={"https://media.istockphoto.com/id/1206806317/pt/vetorial/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=cl3NPzmnu0pRmaRGndYIejbHGe-atORf0JDjzmhX8Z8="}/></li>
                <li><button className={styles.botao}>Adicionar novo produto</button></li>
               </ul>
            </nav>
        </header>
    )
}