import "./ItemLista.css";

const ItemLista = ({ itemLista, listaMercado, setListaMercado }) => {
  const removerItemDaLista = () => {
    setListaMercado(listaMercado.filter((item) => item !== itemLista));
  };

  return (
    <li className="item-linha">
      <p className="item-texto">{itemLista}</p>
      <button className="botao-remover" onClick={removerItemDaLista}>
        Remover
      </button>
    </li>
  );
};

export default ItemLista;
