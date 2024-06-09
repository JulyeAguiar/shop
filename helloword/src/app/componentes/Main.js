import Image from "next/image";
import styles from "../page.module.css";

export default async function Home() {
  //quando é utilizado o async e o await é voltado para server da aplicação
  const resposta = await fetch("https://fakestoreapi.com/products", {
    next: {
      revalidate: 1
    }
  });

  const campi = await resposta.json();
  return (
    <main>
      {
        campi.map((produto) =>
          <div className={styles.produtos}>
            <Image width={400} height={450} src={produto.image} />
            <p className={styles.titulo}>{produto.title}</p>
            <p className={styles.descricao}>{produto.description}</p>

            <ul className={styles.itenslistacard}>
              <li><p className={styles.preco}>R${produto.price}</p></li>
              <li><p className={styles.linha}>Rating: {produto.rating.count}</p></li>
              <li><p className={styles.categoria}>Category: {produto.category}</p></li>
            </ul>
          </div>
        )
      }
    </main>
  )
}