import Image from "next/image";
import styles from "../page.module.css";

export default async function Home() {
  //quando é utilizado o async e o await é voltado para server da aplicação
  const resposta = await fetch("https://fakestoreapi.com/products",{
    next:{
      revalidate:1
    }
  });

  const campi = await resposta.json();
  return (
    <main className={styles.centraliza}>
      {
        campi.map((produto) =>
          <div className={styles.produtos}>
            <Image width={400} height={450} src={produto.image}/>
            <p className={styles.titulo}>{produto.title}</p>
            <p className={styles.descricao}>{produto.description}</p>
            <p className={styles.categoria}>Category: {produto.category}</p>
            <p>{produto.rating.count}</p>
            <p>R${produto.price}</p>
        
          </div>
          
        )
      }
    </main>
  )
}