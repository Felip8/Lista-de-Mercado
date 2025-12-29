import ItemLista from "./itemLista";

function App() {
  const listaMercado = ["banana", "maça", "carne"];
  return (
    <>
      <h1>Lista de Mercado</h1>
      <input type="text" placeholder="Digite um item" />
      <button>Adicionar</button>

      <ul>
        {listaMercado.map((itemLista, index) => (
          <ItemLista key={index} itemLista={itemLista} />
        ))}
      </ul>
    </>
  );
}

export default App;
