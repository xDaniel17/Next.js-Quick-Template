import Image from "next/image";

export default function Home() {
  return (
    <section style={{ padding: "2rem" }}>
      <h2>Bienvenido a tu proyecto Next.js profesional</h2>
      <p>Esta es la página principal. Puedes comenzar a construir tu aplicación aquí.</p>
      <ul>
        <li>Estructura escalable con componentes, hooks, servicios, interfaces y utilidades.</li>
        <li>Recursos externos organizados en <code>public/assets/images</code>.</li>
        <li>Header y Footer listos para personalizar.</li>
      </ul>
    </section>
  );
}
