// Ejemplo de servicio para peticiones HTTP

export async function fetchData<T>(url: string): Promise<T> {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error en la petición");
    return res.json();
}
