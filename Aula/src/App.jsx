import { useRef, useState } from "react";
import ItemLista from "./ItemLista";
import "./app.css";

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
      <div className="container">
        <h1>Lista de mercado</h1>
        <div className="input-button">
          <input
            ref={adicionarValorAoInput}
            type="text"
            placeholder="Digite um item"
          />
          <button
            className="botao-adicionar"
            onClick={() => adicionarItemAoClicar()}
          >
            Adicionar
          </button>
        </div>

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
      </div>
    </>
  );
}

export default App;
