# Proyecto Framework Javascript - React Sumski-Tiradani

#### ⚽TuCasaca.com⚽

En este proyecto logramos implementar una aplicación web de compra de camisetas deportivas. Esta aplicación utiliza la API desarrollada para el proyecto anterior para su funcionamiento.

La aplicación se desarrolló con React como una aplicación web single-page. Como se pide simular una web profesional, se buscó lograr una experiencia responsive, pudiendose ver de manera correcta en dispositivos móviles como en PCs de escritorio. Además la aplicación cuenta con modo oscuro funcional.

### Links

- [Deploy en Vercel de la Tienda](https://tucasaca-js-iamjuanpy.vercel.app/)
- [Deploy en Vercel del ABM y API](https://tucasaca-laravel-iamjuanpy.vercel.app/)

### Aclaraciones pertinentes

- Para mejorar el rendimiento, una vez hecha la carga de todos los productos, estos quedan almacenados en _Session Storage_ del navegador, es decir hasta que se cierre la ventana, para asi solo esperar la descarga de datos del pedido a la API una sola vez.

- El carrito de compras es almacenado en _Local Storage_ del navegador, para que el usuario conserve su carrito de compra para otro momento.

- La aplicación recupera todas las camisetas, incluídas las marcadas como NO ACTIVO, estas no se muestran en la grilla, sin embargo, en caso de acceder al link de una de estas, se podrá ver el producto pero estára marcado como Sin Stock y no se podra comprarlo ni agregarlo al carrito. Esto no sucede con las borradas permanentemente.

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
