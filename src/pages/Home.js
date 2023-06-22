import "../styles/carousel.css";
import Carousel from "react-bootstrap/Carousel";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FancyButton from "../components/buttons/FancyButton";
import { Link } from "react-router-dom";
import Box from "../layouts/Box";

function Home() {
  return (
    <div className="min-h-screen mt-16 transition-colors bg-neutral-50 dark:bg-slate-800">
      <div className="w-full min-h-screen m-auto space-y-16 sm:space-y-8 shadow-lg transition-colors bg-neutral-300 dark:bg-slate-700 text-black dark:text-white">
        <Carousel
          className="col-span-full row-start-1 row-span-2 self-start"
          nextLabel=""
          prevLabel=""
          indicators={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/adidas_argentina.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/adidas_river.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/adidas_boca.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <p className="block sm:hidden text-3xl text-center">
          ¿Por qué nos eligen?
        </p>

        <div className="px-16">
          <div className="grid grid-cols-1 md:w-5/6 md:grid-cols-3 gap-4 group place-items-center justify-center col-span-full self-center m-auto z-10 md:-mt-20">
            <div className="max-w-sm dark:bg-slate-800 h-full rounded relative overflow-hidden shadow-lg bg-neutral-50">
              <div className="px-6 py-4 -bottom-10 ">
                <div className="font-bold text-xl mb-2 text-center">
                  TODAS LAS TARJETAS
                </div>
                <p className="text-gray-700 dark:text-gray-400 text-base text-center">
                  Abona con tarjeta de débito o crédito a través de Mercado
                  Pago. ¡Siempre es seguro!
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

        <p className="text-3xl text-center">Conoce nuestras marcas...</p>
        <div className="flex flex-col w-1/2 sm:w-fit sm:flex-row justify-center m-auto space-y-4 sm:space-y-0 sm:space-x-10 pb-4">
          <Box>
            <img className="sm:h-24" src="./img/adid.jpg" alt="Adidas" />
          </Box>
          <Box>
            <img className="sm:h-24" src="./img/nike.jpg" alt="Nike" />
          </Box>
          <Box>
            <img className="sm:h-24" src="./img/puma.jpg" alt="Puma" />
          </Box>
          <Box>
            <img className="sm:h-24" src="./img/reeb.jpg" alt="Reebok" />
          </Box>
        </div>

        <p className="text-3xl text-center">Links de interés</p>
        <div className="flex flex-col pb-16 sm:pb-4 w-2/3 sm:flex-row justify-center m-auto space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex w-full flex-col text-center items-center p-6 bg-white dark:bg-slate-800">
            <CheckroomIcon></CheckroomIcon>

            <a href="/">
              <p className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                SHOP
              </p>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Conocé nuestros productos
            </p>
            <Link to="/camisetas" className="mt-auto">
              <FancyButton text="Visitar tienda"></FancyButton>
            </Link>
          </div>

          <div className="flex flex-col w-full items-center text-center p-6 bg-white dark:bg-slate-800">
            <EmojiPeopleIcon></EmojiPeopleIcon>
            <a href="https://linktr.ee/tucasacaiaw">
              <p className="mb-2 text-2xl font-semibold tracking-tight text-gray-800 dark:text-white">
                CONTACTO
              </p>
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
