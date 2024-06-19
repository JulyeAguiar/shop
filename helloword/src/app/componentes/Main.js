// async/await: quando é utilizado o async e o await é voltado para server da aplicação
"use client"
import Image from "next/image";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function Home() {
  //quando é utilizado o async e o await é voltado para server da aplicação

const [lisProduct, setProduct] = useState([])

useEffect(() => {
  const getProduct = async () =>{
    const resposta = await fetch("https://fakestoreapi.com/products", {next: {revalidate: 1}});
    const produto = await resposta.json();
    setProduct(produto)

  }
  getProduct()
},[])/* o " []" diz que será disparado apenas quando a lista estiver vazia */ 
/* td vez q a minha lista for modificada ele vai buscar através do fecth a informação que será salva na lista */

  const orderAz = ()=>{
    const lisAux = [...lisProduct].sort((a,b) => a.title.localeCompare(b.title))
    setProduct(lisAux)
  }

  const orderZa = ()=>{
    const lisAux = [...lisProduct].sort((a,b) => b.title.localeCompare(a.title))
    setProduct(lisAux)
  }

  const orderMaiorMenor= ()=>{
    const lisAux = [...lisProduct].sort((a,b) => b.price - a.price)
    setProduct(lisAux)
  }
  
  const orderMenorMaior = ()=>{
    const lisAux = [...lisProduct].sort((a,b) =>  a.price - b.price)
    setProduct(lisAux)
  }
  if(lisProduct[0] == null){
    return <Spinner/>
  
  }
  return (
    <>
    <div className={styles.filters}>
      <div>
        <button onClick={orderAz}>AZ</button>
        <button onClick={orderZa}>ZA</button>
        <button onClick={orderMenorMaior}>Menor preço para o Maior</button>
        <button onClick={orderMaiorMenor}>Maior preço para o Menor</button>
      </div>
    </div>

    <main>
      {
        lisProduct.map((produto) =>
          <div className={styles.produtos}>
            <Image width={250} height={250} src={produto.image} />
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
    </>
  )
}