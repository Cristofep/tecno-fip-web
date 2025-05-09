// src/lib/services.js
import { supabase } from "../../public/lib/supabase"; // Asegúrate que la ruta es correcta

export async function obtenerServicioYPlanes(slug) {
  console.log("slug recibido:", slug);

  const { data: servicio, error: errorServicio } = await supabase
    .from("servicios")
    .select("*")
    .eq("slug", slug)
    .single();

  if (errorServicio) {
    console.error("Error al obtener el servicio:", errorServicio);
    return null;
  }

  const { data: planes, error: errorPlanes } = await supabase
    .from("planes_servicios")
    .select("*")
    .eq("servicio_id", servicio.id);

  if (errorPlanes) {
    console.error("Error al obtener los planes del servicio:", errorPlanes);
    return null;
  }

  return {
    servicio,
    planes,
  };
}
