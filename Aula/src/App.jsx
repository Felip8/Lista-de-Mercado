import { useRef, useState } from "react";
import ItemLista from "./ItemLista";

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
    <>
      <h1>Lista de mercado</h1>
      <input
        ref={adicionarValorAoInput}
        type="text"
        placeholder="Digite um item"
      />
      <button onClick={() => adicionarItemAoClicar()}>Adicionar</button>

      {listaMercado.length > 0 ? (
        <ul>
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
    </>
  );
}

export default App;
