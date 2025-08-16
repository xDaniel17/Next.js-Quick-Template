# Arquitectura del Proyecto

## Características

- Arquitectura modular y escalable
- Navegación optimizada y rutas limpias
- Integración completa con Tailwind CSS v4
- Modo claro/oscuro automático
- Paleta de colores personalizada
- Componentes reutilizables
- Separación de interfaces/modelos y servicios
- Documentación clara y visual

---

## Estructura del Proyecto

```bash
quick-template/
├── public/                # Recursos estáticos (imágenes, íconos)
├── src/
│   ├── app/               # Rutas y layout principal
│   │   ├── about/         # Página About (about/page.tsx)
│   │   ├── contact/       # Página Contact (contact/page.tsx)
│   │   ├── home/          # Página Home (home/page.tsx)
│   │   ├── layout.tsx     # Layout global
│   │   ├── page.tsx       # Redirección inicial
│   │   └── globals.css    # Estilos globales
│   ├── components/        # Componentes reutilizables (Header, Footer)
│   ├── styles/            # Estilos específicos por página
│   ├── hooks/             # Custom hooks
│   ├── interfaces/        # Tipos y modelos TypeScript
│   └── services/          # Lógica de negocio y API
├── tailwind.config.js     # Configuración Tailwind
├── tsconfig.json          # Configuración TypeScript
├── package.json           # Dependencias y scripts
└── README.md              # Documentación
```

---

## Instalación

1. Clona el repositorio:
	```bash
	git clone https://github.com/xDaniel17/Next.js-Quick-Template.git
	```
2. Instala dependencias:
	```bash
	cd quick-template
	npm install
	```
3. Inicia el servidor de desarrollo:
	```bash
	npm run dev
	```

---

## Uso Rápido


- Accede a `/home`, `/about`, `/contact` para ver las páginas de ejemplo.
- Modifica o agrega rutas en `src/app/[route]/page.tsx` (por ejemplo, `src/app/about/page.tsx`).
- Personaliza la paleta de colores en `tailwind.config.js`.
- Agrega componentes en `src/components/`.
- Define interfaces en `src/interfaces/` y servicios en `src/services/`.

---

## Tecnologías

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS v4

---

## Buenas Prácticas

- Mantén la arquitectura modular y separa responsabilidades.
- Usa componentes reutilizables y hooks personalizados.
- Documenta interfaces y servicios para facilitar el mantenimiento.
- Elimina archivos y dependencias innecesarias.

---

## Autor

Creado por Daniel. Basado en mejores prácticas de Next.js y Tailwind CSS.
