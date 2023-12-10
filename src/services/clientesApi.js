import { getEnvVariables } from "../helpers/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

export const clientesApi = async ({ nombreCliente }) => {
  if (nombreCliente === "") return null;

  try {
    const resp = await fetch(
      `${VITE_API_URL}/${nombreCliente}/equipos-alquilados`
    );

    if (resp.status === 404) return null;
    if (!resp.ok) throw new Error("Error al llamar a la API");

    const data = await resp.json();
    return data;
  } catch (error) {
    throw new Error("Error al buscar al cliente");
  }
};
