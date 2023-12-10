import "./App.css";
import { FaSearch } from "react-icons/fa";

function App() {
  return (
    <>
      <h1>Consulta de clientes</h1>
      <form>
        <div className="container-search">
          <span className="icon">
            <FaSearch />
          </span>
          <input type="search" name="search" placeholder="Empresa 1" />
        </div>

        <button>Buscar</button>
      </form>

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
          <tr key="1">
            <td>Ejemplo</td>
            <td>Ejemplo</td>
            <td>Ejemplo</td>
            <td>Ejemplo</td>
            <td>Ejemplo</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
