import "../styles/carousel.css";
import Carousel from "react-bootstrap/Carousel";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FancyButton from "../components/buttons/FancyButton";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen mt-16 transition-colors bg-neutral-50 dark:bg-slate-800">
      <div className=" w-full min-h-screen m-auto space-y-4 shadow-lg transition-colors bg-neutral-300 dark:bg-slate-700 text-black dark:text-white">
        <Carousel
          className="col-span-full row-start-1 row-span-2 self-start"
          nextLabel=""
          prevLabel=""
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./adidas_argentina.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./adidas_river.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./adidas_boca.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className="px-16">
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-1 group place-items-center justify-center col-span-full row-span-2 row-end-4 self-center z-10 md:-mt-16">
            <div className="max-w-sm dark:bg-slate-800 h-full rounded relative overflow-hidden shadow-lg bg-neutral-50">
              <div className="px-6 py-4 -bottom-10 ">
                <div className="font-bold text-xl mb-2 text-center">
                  TODAS LAS TARJETAS
                </div>
                <p className="text-gray-700 dark:text-gray-400 text-base text-center">
                  Abona con todos los medios de pago. Mercado Pago con dinero
                  disponible o tarjeta. ¡Y siempre es seguro!
                </p>
              </div>
            </div>
            <div className="flex flex-row max-w-sm dark:bg-slate-800 rounded items-stretch h-full overflow-hidden shadow-lg bg-neutral-50 content-evenly z-10">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                  ENVÍO RÁPIDO Y SEGURO
                </div>
                <p className="text-gray-700 dark:text-gray-400 text-base text-center">
                  Elegí recibir tu compra en tu domicilio y hacé el seguimiento
                  hasta que llegue a tus manos.
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded h-full dark:bg-slate-800 overflow-hidden shadow-lg bg-neutral-50 z-10">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                  COMPRA PROTEGIDA
                </div>
                <p className="text-gray-700 dark:text-gray-400 text-base text-center">
                  Te acompañamos hasta que recibas lo que compraste. Y si no es
                  lo que esperabas, te devolvemos el dinero.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center m-auto">
          <div className="flex flex-col text-center items-center p-6 bg-white border border-gray-200  dark:bg-slate-800 dark:border-gray-700 ">
            <CheckroomIcon></CheckroomIcon>

            <a href="/">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                SHOP
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Conocé nuestros productos
            </p>
            <div className="mt-auto">
              <a
                href="/camisetas"
                className="relative inline-flex items-center  justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
              >
                <span className="absolute   top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white">Ir a la tienda</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col text-center p-6 min-h-full bg-white border border-gray-200  dark:bg-slate-800 dark:border-gray-700">
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
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-800 dark:text-white">
                SHOP
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Conocé nuestros productos
            </p>

            <Link to="/camisetas">
              <FancyButton text="Ir a la tienda"></FancyButton>
            </Link>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 dark:bg-slate-800 dark:border-gray-700">
            <EmojiPeopleIcon></EmojiPeopleIcon>
            <a href="https://linktr.ee/tucasacaiaw">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-800 dark:text-white">
                CONTACTO
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Ponete en contacto con nosotros
            </p>
            <a href="https://linktr.ee/tucasacaiaw" className="mt-auto">
              <FancyButton text="Contacto"></FancyButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
