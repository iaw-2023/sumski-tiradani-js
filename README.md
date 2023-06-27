# Proyecto Framework Javascript - React Sumski-Tiradani

#### ⚽TuCasaca.com⚽

En este proyecto logramos implementar una aplicación web de compra de camisetas deportivas. Esta aplicación utiliza la API desarrollada para el proyecto anterior para su funcionamiento.

La aplicación se desarrolló con React como una aplicación web single-page. Como se pide simular una web profesional, se buscó lograr una experiencia responsive, pudiendose ver de manera correcta en dispositivos móviles como en PCs de escritorio. Además la aplicación cuenta con modo oscuro funcional.

### Promoción

Para alcanzar la promoción se implementaron las siguientes funcionalidades adicionales

- **Login**: para implementar login se utilizó Auth0, servicio que trae ya una interfaz y servicio de recuperación de contraseñas. <br> Una vez autenticado uno puede visitar su perfil y realizar compras. <br>
  Para realizar una compra uno tiene que tener verificado el mail<br>
  Para cada call a la API que necesite autenticación, obtiene un token desde el propio servicio, el cual adjunta a la request.
  <br> &nbsp;
- **Integración con MercadoPago**: se utiliza el SDK de Mercado Pago para react, se configuró un brick para pagar con tarjeta, el cuál al momento del Submit hace POST a **/comprar/auth** de un token con los datos de pago para que el backend valide y recién si estos datos eran correctos, realice el pago y pueda finalizar la compra.

  Tarjetas de prueba

  - Mastercard | 5031 7557 3453 0604 | 123 | 11/25
  - Visa | 4509 9535 6623 3704 | 123 | 11/25
  - American Express | 3711 803032 57522 | 1234 | 11/25
    <br> &nbsp;

- **Administración de Archivos**: se obtienen las imágenes como un campo mas de los objetos Camiseta. Este campo representa un string base64. <br>
  Para mostrarlas tanto en backend como frontend, se crea un elemento img con <br>
  <code> src = {data:image/png;base64,_stringb64_} </code>
  <br> &nbsp;
- **Accesibilidad**: se siguieron lineamientos de W3C para hacer la página accesible:

  - [_Alternativas de texto para contenido no textual_](https://www.w3.org/WAI/fundamentals/accessibility-principles/#alternatives): los componentes como botones, imágenes, íconos o campos de input tienen texto posible de ser reproducido por software TTS.
  - [_Contenido fácil de visualizar_](https://www.w3.org/WAI/fundamentals/accessibility-principles/#distinguishable): la aplicación web y sus componentes son responsive, permiten zoom o un aumento de tamaño de letra.
  - [_Layout simple y claro_](https://www.w3.org/WAI/perspective-videos/layout/): las secciones están bien separadas por funcionalidad.
  - [_Colores con buen contraste_](https://www.w3.org/WAI/perspective-videos/contrast/): se utilizaron colores que contrasten bien para que toda la información se vea claramente, y se distinga un input de un fondo.
  - [_Notificaciones y feedback_](https://www.w3.org/WAI/perspective-videos/notifications/): la aplicación muestra adecuadamente las notificaciones tanto de un resultado positivo como de error, en el caso de este último explicando detalladamente qué sucedió.

  Además se comprobó la accesibilidad tanto en versión mobile como escritorio utilizando la herramienta [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es), la cuál daba puntajes aceptables en las distintas secciones de nuestra aplicación.
  <br> &nbsp;

- **Servicio Web en JS**: como servicio web utilizamos **GeoApify**, que permite hacer búsquedas por nombre de calle o por latitud y longitud, para autocompletar nuestra ubicación en los datos de entrega, o también para mostrar en un mapa de **React-Leaflet** la ubicación de la dirección ingresada.
  <br> &nbsp;
- **Servicio Web en Laravel**: nada en el frontend.
  <br> &nbsp;
- **Responsive en JS**: para un display correcto tanto en una pantalla de una PC como en un celular, se utilizó principalmente las clases de tailwind:
  <br><code> sm:_css_, md:_css_, lg:_css_...</code> <br>
  que permiten css condicional acorde al tamaño de la ventana del navegador.
  <br> &nbsp;

  _Tambien hay anotaciones en el readme.md del backend_

### Links

- [Deploy en Vercel de la Tienda](https://tucasaca-js.vercel.app/)
- [Deploy en Vercel del ABM y API](https://tucasaca-laravel.vercel.app/)

### Aclaraciones pertinentes

- Para mejorar el rendimiento, una vez hecha la carga de todos los productos, estos quedan almacenados en _Session Storage_ del navegador, es decir hasta que se cierre la ventana, para asi solo esperar la descarga de datos del pedido a la API una sola vez.

- El carrito de compras es almacenado en _Local Storage_ del navegador, para que el usuario conserve su carrito de compra para otro momento.

- La aplicación recupera todas las camisetas, incluídas las marcadas como NO ACTIVO, estas no se muestran en la grilla, sin embargo, en caso de acceder al link de una de estas, se podrá ver el producto pero estára marcado como Sin Stock y no se podra comprarlo ni agregarlo al carrito. Esto con las camisetas borradas permanentemente, no ocurre, solo si la tiene en el carrito va a mostrar error al comprarla, pero el link no debería mostrar mas que un mensaje de error.

- Si al momento de la compra ocurre un error de red, se muestra el mensaje de error correspondiente y se conserva el carrito por si se quiere comprar mas tarde. En caso de que el error en la compra sea porque la camiseta ya no está disponible o un talle no lo está, mostrará un mensaje de error notificando esto y limpiará el carrito.

### Herramientas y Librerías utilizadas

- **React:** framework JavaScript partiendo de _create-react-app_.
  [_Sitio Oficial_](https://create-react-app.dev/)

<br>

- **React Router:** librería de routing _client-side_.
  [_Sitio Oficial_](https://reactrouter.com/)

<br>

- **Tailwind CSS:** framework CSS con clases predifinidas para estilar componentes de manera sencilla.
  [_Sitio Oficial_](https://tailwindcss.com/)

<br>

- **Prettier:** formatter de código.
  [_Sitio Oficial_](https://prettier.io/)

<br>

- **React-Bootstrap:** librería que incluye componentes de Bootstrap en React.
  [_Sitio Oficial_](https://getbootstrap.com/)

  <br>

- **MaterialUI:** librería de componentes de React que siguen el estilo Material Design. Usada para íconos y botones.
  [_Sitio Oficial_](https://mui.com/material-ui/material-icons/)

<br>

- **Vercel:** sitio web para hacer el deploy de nuestra aplicación de manera gratuita y también la API que esta última utiliza.
  [_Sitio Oficial_](https://vercel.com)
  <br>

- **Geoapify:** api de geolocalización [_Sitio Oficial_](https://www.geoapify.com/) <br>

- **React-Leaflet:** Componentes de Leaflet maps para react [_Sitio Oficial_](https://react-leaflet.js.org/) <br>

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
