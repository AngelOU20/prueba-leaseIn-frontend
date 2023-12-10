import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useEquiposAlquilados } from "./hooks";
import { TablaEquiposAlquilados } from "./components";
import "./App.css";

function App() {
  const [nombreCliente, setNombreCliente] = useState("");
  const { equiposAlquilados } = useEquiposAlquilados({ nombreCliente });

  const handleSubmit = (event) => {
    event.preventDefault();
    setNombreCliente(event.target.elements.search.value);
  };

  return (
    <>
      <h1>Consulta de clientes</h1>
      <form onSubmit={handleSubmit}>
        <div className="container-search">
          <span className="icon">
            <FaSearch />
          </span>
          <input
            type="search"
            name="search"
            placeholder="Empresa 1, Empresa 2, ..."
          />
        </div>

        <button>Buscar</button>
      </form>

      {equiposAlquilados && equiposAlquilados.length > 0 ? (
        <TablaEquiposAlquilados equiposAlquilados={equiposAlquilados} />
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </>
  );
}

export default App;
