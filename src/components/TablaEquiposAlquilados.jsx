import PropTypes from "prop-types";

export const TablaEquiposAlquilados = ({ equiposAlquilados }) => {
  return (
    <table className="rwd-table">
      <thead>
        <tr>
          <th>Empresa</th>
          <th>Código</th>
          <th>Tipo de UA</th>
          <th>Marca</th>
          <th>Procesador</th>
          <th>Generación</th>
          <th>Asesor</th>
          <th>Fecha de inicio</th>
        </tr>
      </thead>
      <tbody>
        {equiposAlquilados.map((equipo) => (
          <tr key={equipo.ID_Equipos_Alquilados}>
            <td>{equipo.Nombre_Cliente}</td>
            <td>{equipo.Codigo_Unidad_Alquiler}</td>
            <td>{equipo.TipoDeUA}</td>
            <td>{equipo.Marca}</td>
            <td>{equipo.Procesador}</td>
            <td>{equipo.Generacion}</td>
            <td>{equipo.Nombre_Asesor}</td>
            <td>{equipo.Fecha_Inicio}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TablaEquiposAlquilados.propTypes = {
  equiposAlquilados: PropTypes.array.isRequired,
};
