const ItemLista = ({ itemLista, listaMercado, setListaMercado }) => {
  const removerItemDaLista = () => {
    const novaLista = [...listaMercado];
    const novaListaFiltrada = novaLista.filter(
      (itemAtual) => itemAtual !== itemLista
    );
    setListaMercado(novaListaFiltrada);
  };

  return (
    <div>
      <li>
        <p>{itemLista}</p>
        <button onClick={() => removerItemDaLista()}>Remover</button>
      </li>
    </div>
  );
};

export default ItemLista;
