import { useRef, useState } from "react";
import ItemLista from "./ItemLista";
// import "./app.css";

function App() {
  const [listaMercado, setListaMercado] = useState([]);

  const adicionarValorAoInput = useRef();

  const adicionarItemAoClicar = () => {
    const novalista = [...listaMercado];
    const valorInput = adicionarValorAoInput.current.value;
    if (valorInput) {
      novalista.push(valorInput);
      setListaMercado(novalista);
      adicionarValorAoInput.current.value = "";
    }
  };

  return (
    <div className="flex w-full max-w-96 flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Lista de mercado</h1>

      <div className="flex w-full gap-2">
        <input
          className="w-full rounded-md border border-gray-600 px-2"
          ref={adicionarValorAoInput}
          type="text"
          placeholder="Digite um item"
        />
        <button
          className="cursor-pointer rounded-md bg-gray-800 px-2 text-white transition hover:bg-gray-600"
          onClick={() => adicionarItemAoClicar()}
        >
          Adicionar
        </button>
      </div>
      {listaMercado.length > 0 ? (
        <ul className="flex w-full flex-col gap-2">
          {listaMercado.map((itemLista, index) => (
            <ItemLista
              key={index}
              itemLista={itemLista}
              listaMercado={listaMercado}
              setListaMercado={setListaMercado}
            />
          ))}
        </ul>
      ) : (
        <p>Você não tem nenhum item na sua lista</p>
      )}
    </div>
  );
}

export default App;
