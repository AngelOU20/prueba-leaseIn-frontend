import { useState, useEffect } from "react";
import { clientesApi } from "../services";

export const useEquiposAlquilados = ({ nombreCliente }) => {
  const [equiposAlquilados, setEquiposAlquilados] = useState(null);

  useEffect(() => {
    if (!nombreCliente) return;

    const getEquiposAlquiladosPorCliente = async () => {
      const equipos = await clientesApi({ nombreCliente });
      setEquiposAlquilados(equipos);
    };
    getEquiposAlquiladosPorCliente();
  }, [nombreCliente]);

  return { equiposAlquilados };
};
