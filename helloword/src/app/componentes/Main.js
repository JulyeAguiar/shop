// async/await: quando é utilizado o async e o await é voltado para server da aplicação
"use client"
import Image from "next/image";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ErrorFetch from "./ErrorFetch";

export default function Home() {
  //quando é utilizado o async e o await é voltado para server da aplicação

  const [lisProduct, setProduct] = useState([])
  const [listComplete, setlistComplete] = useState([])
  const [textSearch, setTextSearch] = useState("")
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products", { next: { revalidate: 1 } });
        const produto = await resposta.json();
        setProduct(produto)
        setlistComplete(produto)
      }

      catch {
        setIsError(true)
      }
    }
    getProduct()
  }, [])/* o " []" diz que será disparado apenas quando a lista estiver vazia */
  /* td vez q a minha lista for modificada ele vai buscar através do fecth a informação que será salva na lista */

  const orderAz = () => {
    const lisAux = [...lisProduct].sort((a, b) => a.title.localeCompare(b.title))
    setProduct(lisAux)
  }

  const orderZa = () => {
    const lisAux = [...lisProduct].sort((a, b) => b.title.localeCompare(a.title))
    setProduct(lisAux)
  }

  const orderMaiorMenor = () => {
    const lisAux = [...lisProduct].sort((a, b) => b.price - a.price)
    setProduct(lisAux)
  }

  const orderMenorMaior = () => {
    const lisAux = [...lisProduct].sort((a, b) => a.price - b.price)
    setProduct(lisAux)
  }

  const search = (text) => {
    setTextSearch(text)

    if (text.trim() == "") {
      setProduct(listComplete)
      return
    }
    const newList = lisProduct.filter((produto) =>
      produto.title.toUpperCase().trim().includes(textSearch.toUpperCase())
    )
    setProduct(newList)
  }
if(isError == true){
  return <ErrorFetch/>
}
  if (listComplete[0] == null) {
    return <Spinner />
  }

  return (
    <>
      <div className={styles.filters}>
        <div>
          <input type="text" value={textSearch} placeholder="Pesquise um produto" onChange={(event) => search(event.target.value)} />
        </div>
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
