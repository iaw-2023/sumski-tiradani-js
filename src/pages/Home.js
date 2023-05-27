import "../styles/carousel.css";
import Carousel from "react-bootstrap/Carousel";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import CheckroomIcon from "@mui/icons-material/Checkroom";

function Home() {
  return (
    <div className="grid grid-rows-3 grid-cols-3 justify-center items-center mt-20 ">
      <Carousel className="col-span-full row-start-1 row-span-2 ">
        <Carousel.Item>
          <img className="d-block w-100" src="./nike.webp" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./nike.webp" alt="Second slide" />

          <Carousel.Caption>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./nike.webp" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="grid grid-cols-1  lg:grid-cols-3  gap-3 place-items-center  m-auto justify-center col-span-full row-span-2 row-end-4 self-center z-10">
        <div className="max-w-sm  h-full rounded overflow-hidden shadow-lg bg-neutral-50">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              TODAS LAS TARJETAS
            </div>
            <p className="text-gray-700 text-base text-center">
              Abona con todos los medios de pago. Mercado Pago con dinero
              disponible o tarjeta. ¡Y siempre es seguro!
            </p>
          </div>
        </div>
        <div className="flex flex-row max-w-sm rounded items-stretch h-full overflow-hidden shadow-lg bg-neutral-50 content-evenly">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              ENVÍO RÁPIDO Y SEGURO
            </div>
            <p className="text-gray-700 text-base text-center">
              Elegí recibir tu compra en tu domicilio y hacé el seguimiento
              hasta que llegue a tus manos.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded h-full overflow-hidden shadow-lg bg-neutral-50">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              COMPRA PROTEGIDA
            </div>
            <p className="text-gray-700 text-base text-center">
              Te acompañamos hasta que recibas lo que compraste. Y si no es lo
              que esperabas, te devolvemos el dinero.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center max-w-sm min-h-full p-6 place-self-end  bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 ">
        <CheckroomIcon></CheckroomIcon>
        <div class="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button class="bg-black text-white py-2 px-5">Add to cart</button>
        </div>
        <a href="/">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            SHOP
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Conocé nuestros productos
        </p>
        <a
          href="/"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          See our guideline
        </a>
      </div>

      <div className="text-center p-6 min-h-full bg-white border border-gray-200   dark:bg-gray-800 dark:border-gray-700">
        <svg
          className="w-10 h-10 mb-2 mx-auto text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
            clip-rule="evenodd"
          ></path>
          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
        </svg>
        <a href="/">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            SHOP
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Conocé nuestros productos
        </p>
        <a
          href="/"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          See our guideline
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </svg>
        </a>
      </div>
      <div className="text-center max-w-sm min-h-full place-self-start p-6 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
        <EmojiPeopleIcon></EmojiPeopleIcon>
        <a href="/">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            CONTACTO
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          Ponete en contacto con nosotros
        </p>
        <a
          href="/"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          Contacto
          <svg
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Home;
