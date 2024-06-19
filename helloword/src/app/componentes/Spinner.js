import Image from "next/image"
import styles from "./menu.module.css";

export default function Spinner(){
    return (
        <div className={styles.carregar}>
            <Image  width={100} height={100} alt="" src={"/carregar.svg"}></Image>
        </div>
    )
}