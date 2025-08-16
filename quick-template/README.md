# Arquitectura del Proyecto

## Estructura de Carpetas

```
quick-template/
│
├── public/
│   └── assets/
│       └── images/
│
├── src/
│   ├── app/
│   ├── components/
│   │   ├── Header/
│   │   └── Footer/
│   ├── hooks/
│   ├── styles/
│   ├── utils/
│   ├── interfaces/
│   └── services/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Explicación de Carpetas y Archivos

- **public/assets/images/**  
	Almacena imágenes y recursos estáticos accesibles desde el navegador.

- **src/app/**  
	Contiene las páginas principales de la aplicación y el layout general. Aquí Next.js gestiona el enrutamiento y la estructura base.

- **src/components/**  
	Componentes reutilizables de la interfaz.  
	- **Header/**: Encabezado principal del sitio.  
	- **Footer/**: Pie de página.

- **src/hooks/**  
	Hooks personalizados de React para lógica reutilizable (ej: manejo de estado, efectos, etc).

- **src/styles/**  
	Hojas de estilos globales y utilitarias. Aquí se definen variables CSS, paletas de colores y estilos compartidos.

- **src/utils/**  
	Funciones utilitarias y helpers que pueden ser usadas en cualquier parte del proyecto.

- **src/interfaces/**  
	Definición de interfaces y tipos TypeScript para tipar datos y props de componentes.

- **src/services/**  
	Servicios para la lógica de negocio y comunicación con APIs externas (ej: peticiones HTTP).

- **package.json**  
	Archivo de configuración de dependencias, scripts y metadatos del proyecto.

- **tsconfig.json**  
	Archivo de configuración de TypeScript. Define reglas de compilación, paths, tipos y opciones estrictas para el proyecto.

- **next.config.ts**  
	Configuración personalizada de Next.js. Permite modificar rutas, dominios de imágenes, optimizaciones, y activar características experimentales.

- **eslint.config.mjs**  
	Configuración de ESLint para mantener la calidad y consistencia del código. Permite definir reglas y estilos de codificación.

- **postcss.config.mjs**  
	Configuración de PostCSS, utilizada para procesar los estilos CSS y aplicar plugins como TailwindCSS y Autoprefixer.

- **README.md**  
	Documentación principal del proyecto: instrucciones de uso, instalación y estructura.


Esta arquitectura te permite escalar el proyecto fácilmente, mantener el código organizado y facilitar la colaboración entre desarrolladores.
