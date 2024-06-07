import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  //quando é utilizado o async e o await é voltado para server da aplicação
  const resposta = await fetch("https://fakestoreapi.com/products",{
    next:{
      revalidate:1
    }
  });

  const campi = await resposta.json();
  return (
    <main class="centraliza">
      {
        campi.map((produto) =>
          <div class="produtos">
            <Image width={300} height={350} src={produto.image}/>
            <p class="titulo">{produto.title}</p>
            <p class="preco">R${produto.price}</p>
            <p class="descricao">{produto.description}</p>
            <p class="categoria">Category: {produto.category}</p>
            <p class="sla">{produto.rating.count}</p>
          </div>
        )
      }
    </main>
  )
}