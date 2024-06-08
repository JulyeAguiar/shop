import Image from "next/image"
import styles from "./menu.module.css"


export default function Footer(){
    return(
        <header className={styles.header}>
            <ul>
                <li>Twitter</li>
                <li>Instagran</li>
                <li>Faceboock</li>
                <li>Pinterest</li>
            </ul>
            <p>Loja criada em 10/10/2006</p>
            <Image width={70} height={70} src={"https://media.istockphoto.com/id/1409632365/pt/vetorial/vintage-ghost-logo-icon-ghost-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=is&k=20&c=hFzIRw2rfyygDMrMDkSX0ny3LFoPm_Iqt-O1J1SSP0c="}/>
        </header>
    )
}