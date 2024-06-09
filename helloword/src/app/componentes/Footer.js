import Image from "next/image"
import styles from "./menu.module.css"
import Link from "next/link"


export default function Footer() {
    return (
            <nav className={styles.footer}>
                <ul className={styles.footer}>
                    <Link href="https://www.instagram.com"><li><Image width={45} height={45} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ohNFHA2_gxQ4d63potp3YdgfR34A7RqGUg&s"} /></li></Link>
                    <Link href="https://x.com"><li><Image width={45} height={45} src={"https://img.freepik.com/vetores-premium/novo-logotipo-do-twitter-icones-do-twitter-logotipo-do-twitter-x_1036746-408.jpg"} /></li></Link>
                    <Link href="https://www.facebook.com"><li><Image width={45} height={45} src={"https://freepnglogo.com/images/all_img/1713419166FB_Logo_PNG.png"} /></li></Link>
                    <Link href="https://br.pinterest.com"><li><Image width={45} height={45} src={"https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"} /></li></Link>
                </ul>
                <p className={styles.linha}>Loja criada em 10/10/2006</p>
                <Link href="/"><Image width={200} height={70} src={"https://acdn.mitiendanube.com/stores/003/621/721/themes/common/logo-201069853-1693802395-4a0fa0bdd81995a0dd4d6de216795a8a1693802396.png?0"} /></Link>
            </nav>

    )
}