import ListaProdutos from "@/components/produto/ListaProdutos";

export default function Home() {
  return (
      <div className="flex-1 flex flex-col container py-10">
          <ListaProdutos />
      </div>
  );
}
