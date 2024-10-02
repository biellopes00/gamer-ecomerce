'use client'

import { produtos } from "@/core"
import ProdutoItem from "./ProdutoItem"
import ProdutoNaoEncontrado from "./ProdutoNaoEncontrado"

export default function ListaProdutos(){
    return produtos.length  ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
      </div>
    ) : (
        <ProdutoNaoEncontrado semBotaoVoltar />
    )
}