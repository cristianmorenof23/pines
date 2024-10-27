import Image from "next/image";
import Link from "next/link";

const cardsData = [
  {
    imgSrc: "/intesamente/Imagen de WhatsApp 2024-10-25 a las 21.50.24_46715056.jpg",
    title: "Furia",
    link: "https://melodic-heliotrope-ee9356.netlify.app/",
  },
  {
    imgSrc: "/intesamente/2.jpg",
    title: "Clima App",
    link: "https://melodic-heliotrope-ee9356.netlify.app/",
  },
  {
    imgSrc: "/intesamente/3.jpg",
    title: "Clima App",
    link: "https://melodic-heliotrope-ee9356.netlify.app/",
  },
  {
    imgSrc: "/intesamente/4.jpg",
    title: "Asco",
    link: "https://melodic-heliotrope-ee9356.netlify.app/",
  },
  {
    imgSrc: "/intesamente/5.jpg",
    title: "Clima App",
    link: "https://melodic-heliotrope-ee9356.netlify.app/",
  },
  {
    imgSrc: "/intesamente/6.jpg",
    title: "Bing Bong",
    link: "https://melodic-heliotrope-ee9356.netlify.app/",
  },
  {
    imgSrc: "/intesamente/7.jpg",
    title: "Clima App",
    link: "https://melodic-heliotrope-ee9356.netlify.app/",
  },
  {
    imgSrc: "/intesamente/8.jpg",
    title: "Clima App",
    link: "https://melodic-heliotrope-ee9356.netlify.app/",
  },
  {
    imgSrc: "/intesamente/9.jpg",
    title: "Alegria",
    link: "https://melodic-heliotrope-ee9356.netlify.app/",
  },
  {
    imgSrc: "/intesamente/10.jpg",
    title: "Clima App",
    link: "https://melodic-heliotrope-ee9356.netlify.app/",
  },
];

export default function CardIntensamente() {
  return (
    <>
      <h1 className="mt-8 font-semibold text-center text-4xl">
        Pines - Intesamente
      </h1>

      <div className="flex flex-wrap mt-20">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-center flex-col md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
          >
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full min-h-[450px] flex flex-col justify-between md:hover:-translate-y-1 md:hover:scale-105 transition-all transform">
              <Image
                className="rounded-t-lg object-cover w-full h-[300px]"
                width={400}
                height={300}
                src={card.imgSrc}
                alt={card.title}
              />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-4">
                    Consultar Stock al Whatsapp
                  </p>
                </div>
                <Link
                  target="_blank"
                  href={card.link}
                  className="inline-flex items-center bg-pink-500 px-4 py-2 text-sm font-bold text-center text-white rounded-lg w-full shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent mt-4"
                >
                  Comprar
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}