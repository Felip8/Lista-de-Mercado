// import "./ItemLista.css";

const ItemLista = ({ itemLista, listaMercado, setListaMercado }) => {
  const removerItemDaLista = () => {
    setListaMercado(listaMercado.filter((item) => item !== itemLista));
  };

  return (
    <li className="flex justify-between gap-2">
      <p className="item-texto">{itemLista}</p>
      <button
        className="cursor-pointer rounded-md bg-red-800 px-2 text-white transition hover:bg-red-600"
        onClick={removerItemDaLista}
      >
        Remover
      </button>
    </li>
  );
};

export default ItemLista;
