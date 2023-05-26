import logo from "../assets/logo.svg";
import "../Home.css";
import { Link } from "react-router-dom";
import CenteredContent from "../layouts/CenteredContent";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div className="grid grid-rows-3 justify-center items-center mt-20">
      <Carousel className="col-span-full row-start-1 row-span-2 ">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./argentina banner.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Camisetas</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./argentina banner.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./argentina banner.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="grid grid-cols-1  lg:grid-cols-3  gap-4 place-items-center  m-auto justify-center col-span-full row-span-2 row-end-4 self-center z-10 ">
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-50">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit..
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-50">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit..
            </p>
          </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-neutral-50">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
