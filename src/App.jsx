import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [nombreCliente, setNombreCliente] = useState("");

  useEffect(() => {
    if (nombreCliente) {
      const fetchData = async () => {
        const response = await fetch(
          `http://127.0.0.1:8000/api/clientes/${nombreCliente}/equipos-alquilados`
        );
        const json = await response.json();
        setData(json);
      };

      fetchData();
    }
  }, [nombreCliente]);

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

      {data && data.length > 0 ? (
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Tipo de UA</th>
              <th>Marca</th>
              <th>Procesador</th>
              <th>Generación</th>
            </tr>
          </thead>
          <tbody>
            {data.map((equipo) => (
              <tr key={equipo.ID_Equipos_Alquilados}>
                <td>{equipo.Codigo_Unidad_Alquiler}</td>
                <td>{equipo.TipoDeUA}</td>
                <td>{equipo.Marca}</td>
                <td>{equipo.Procesador}</td>
                <td>{equipo.Generacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </>
  );
}

export default App;
