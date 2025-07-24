# Portfolio de Hector Puentes

Un portafolio personal responsive creado con HTML5, Tailwind CSS y JavaScript vanilla.

## 🚀 Estructura del Proyecto

```
hectop4.github.io/
├── index.html                    # Página principal
├── package.json                  # Dependencias del proyecto
├── tailwind.config.js           # Configuración de Tailwind CSS
├── README.md                     # Documentación del proyecto
│
├── assets/                       # Recursos del proyecto
│   ├── css/                     # Archivos de estilo
│   │   ├── input.css            # CSS de entrada para Tailwind
│   │   └── output.css           # CSS compilado
│   ├── js/                      # Scripts JavaScript
│   │   └── script.js            # Funcionalidad principal
│   ├── images/                  # Imágenes y gráficos
│   │   ├── Logo.png
│   │   ├── profile-picture.png
│   │   └── Group 1910.svg
│   └── docs/                    # Documentos
│       └── Curriculum_Hector_Puentes.pdf
│
└── pages/                        # Páginas del sitio
    ├── projects/                 # Páginas de proyectos
    │   ├── project1.html         # Control System Project
    │   ├── project2.html         # Web Development Platform
    │   └── project3.html         # Data Analysis Tool
    └── events/                   # Páginas de eventos
        ├── tech-conference-2023.html
        ├── engineering-summit-2023.html
        └── makers-workshop-2024.html
```

## 🎨 Características

### 📱 Diseño Responsive

- Compatible con móviles, tablets y escritorio
- Breakpoints personalizados para diferentes dispositivos
- Menú hamburguesa para dispositivos móviles

### 🎯 Secciones Principales

1. **Hero Section** - Presentación personal con foto y redes sociales
2. **About** - Información profesional y personal
3. **Skills** - Herramientas y lenguajes de programación
4. **Projects** - Carrusel de proyectos con navegación
5. **Events** - Tarjetas de eventos con información detallada

### ⚡ Funcionalidades

- Carrusel de proyectos con auto-slide
- Navegación por indicadores y flechas
- Menú móvil responsivo
- Páginas de detalle para proyectos y eventos
- Copiar email al portapapeles
- Tooltips informativos

## 🛠 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **Tailwind CSS 3.4.17** - Framework de CSS utility-first
- **JavaScript ES6** - Funcionalidad interactiva
- **Responsive Design** - Diseño adaptativo

## 📦 Instalación y Desarrollo

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/hectop4/hectop4.github.io.git
   cd hectop4.github.io
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Compilar CSS en modo desarrollo**

   ```bash
   npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch
   ```

4. **Abrir en el navegador**
   ```bash
   # Servir archivos estáticos (opcional)
   python -m http.server 8000
   # O simplemente abrir index.html en el navegador
   ```

## 🎨 Personalización

### Colores del Tema

El proyecto usa una paleta de colores personalizada:

- **Fondo principal**: `#11071F`
- **Fondo secundario**: `#1A0B2E`
- **Tarjetas**: `#251C31`
- **Accent**: `#7127BA` (Purple)

### Breakpoints Responsivos

```javascript
screens: {
  sm: "640px",    // Móviles grandes
  md: "768px",    // Tablets
  lg: "1024px",   // Laptops
  xl: "1280px",   // Escritorio
  "2xl": "1400px" // Pantallas grandes
}
```

## 📄 Páginas

### Proyectos

- **Control System Project** - Sistema de control con Arduino
- **Web Development Platform** - Plataforma de desarrollo web
- **Data Analysis Tool** - Herramienta de análisis de datos

### Eventos

- **Tech Conference 2023** - Conferencia de tecnología
- **Engineering Summit 2023** - Cumbre de ingeniería
- **Makers Workshop 2024** - Taller de makers

## 🔧 Scripts Disponibles

```bash
# Compilar CSS para producción
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --minify

# Modo desarrollo con watch
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch
```

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Dispositivos móviles iOS/Android

## 📞 Contacto

- **Email**: hectorjosepuentesruiz@gmail.com
- **Instagram**: [@hectorjosepuentesruiz2023](https://www.instagram.com/hectorjosepuentesruiz2023/)
- **YouTube**: [Seamos Ingeniosos](https://www.youtube.com/@SeamosIngeniosos)
- **LinkedIn**: [Hector Puentes](https://www.linkedin.com/in/hector-puentes-b99309215/)
- **GitHub**: [@hectop4](https://github.com/hectop4)

## 📄 Licencia

© 2023 Hector Puentes. Todos los derechos reservados.

---

Hecho con ❤️ por Hector Puentes
