import flower from "../assets/zakat.jpg";
import Ziswaf from "../components/Ziswaf";
import content1 from "../assets/conten1.svg";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";

export default function DetailZISWAF() {
  const { detailZISWAF } = useParams();
  return (
    <div>
      <ToastContainer />
      <div>
        <Navbar url={detailZISWAF} />
      </div>
      {/* content */}
      <div>
        <div className="gap-3 pl-4 md:pl-20 bg-gradient-to-r from-primary via-black to-black flex flex-row justify-between items-center h-40 sm:h-80 md:h-80 lg:h-[54vh] lg:mt-[11vh]">
          <div className="right-0 h-40 sm:h-80 md:h-80 lg:h-[54vh] bg-gradient-to-r to-transparent via-black/60 from-black w-[50%] md:w-[41%] absolute"></div>
          <div className="flex justify-between w-4/6">
            <p className="font-Madimi text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white">
              {
                "Zakat adalah pelajaran tentang kepedulian dan keikhlasan,mengalirkan kasih sayang kepada sesama"
              }
            </p>
          </div>
          <img
            src={flower}
            className="object-cover h-40 w-[50%] sm:h-80 md:h-80 lg:h-[54vh]"
            alt=""
          />
        </div>
      </div>
      {/*Ziswaf*/}
      <div className="relative">
        <div className="flex justify-center mt-[3vh] lg:mt-[10vh]">
          <Ziswaf />
        </div>
      </div>
      {/* content1 */}
      <div className="flex gap-5 mt-5 xl:mt-20 justify-between mx-4 xl:mx-20 ">
        <div className="font-Inter text-NEUTRAL04">
          <h1 className="my-2 lg:text-5xl md:text-4xl sm:text-2xl text-base xl:text-6xl md:w-4/6 font-bold">
            Salurkan donasi kamu dengan mudah
          </h1>
          <p className="md:text-xl text-xs md:w-2/4 my-2 lg:my-5">
            Jadikan program dan design kamu lebih menarik dan tertata rapi
            dengan menggunakan jasa dari Coristict.Studio
          </p>
          <button className="my-2 lg:my-8 bg-primary rounded-md md:rounded-full px-4 py-2 text-sm md:text-xl text-white font-bold hover:scale-105">
            Donasi Sekarang
          </button>
        </div>
        <div>
          <img src={content1} className="w-full" alt="" />
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
