## 🚀 Quick Start

Proyecto Realizado con Vite usando vite --template react-ts, ya que npx create-react-app me ha arrojado problemas al momento de instalar dependencias,
tambien he configurado un poco el vite.config.js para permitir el uso de path relativos.

Se ha usado react-query v5 (tanstack) para de respuestas de los endpoints, anteriormente en otros proyecto use RTKQuery inicialmente
pero al no tener la necesidad de usar Redux en este mini-proyecto, use react-query en su lugar.

### Install dependencies

Primero, se necesita de coleccionar e instalar todas las dependencias usando `npm install`

Asegurar de usar NPM en vez de yarn.

Version de Nodejs y React
Node version: v22.13.1
React version: 19.0.0

### Run development server

Si ya estan las dependencias instaladas, se puede iniciar el proyecto usando `npm start` y
abrir http://localhost:3000 para verlo en el navegador

la pagina se actualizara al realizar ediciones
tambien se podra observar cualquier error de Lint en la consola

### Test

Los test se realizaron con Cypress, para iniciarlos es obligatorio tener el proyecto iniciado con `npm start`
y para iniciarlos con cypress se usa el comando por defecto `npx cypress open`
