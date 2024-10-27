import CardIntensamente from "@/components/CardIntensamente";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="z-20 bg-white  md:static w-full md:w-auto border-b md:border-none shadow-lg">
        <div className="p-6 container mx-auto">
          <div className="flex justify-around items-center">
            {/* Imagen - Logo */}
            <div className="z-20">
              <Link
                href="#"
                id="inicio"
                className="flex items-center text-focus-in"
              >
                <Image
                  src="/logo/logo.jpg"
                  alt="logo marca"
                  height={200}
                  width={100}
                  style={{ width: "auto" }}
                  priority
                  className="rounded transition-transform hover:scale-105 hover:cursor-pointer"
                />
                <span className="text-3xl ml-3 text-focus-in font-mono transition-transform hover:scale-105">
                  Accesorios
                </span>
              </Link>
            </div>

            {/* Cuerpo del menu */}
            <div>
              {/* Boton Responsive */}
              <input
                type="checkbox"
                name="hamburger"
                id="hamburger"
                className="peer"
                hidden
              />

              <label
                htmlFor="hamburger"
                className="peer-checked:hamburger block z-20 cursor-pointer md:hidden transition p-5 hover:bg-gray-200 rounded"
              >
                <div className="h-0.5 w-6 bg-black transition"></div>
                <div className="mt-2 h-0.5 w-6 bg-black transition"></div>
              </label>

              {/* Cuerpo de los enlaces */}
              <div className="bg-white w-3/5 shadow-lg transition flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-0 md:w-auto md:static md:shadow-none md:translate-x-0 md:flex-row">
                {/* Enlaces */}
                <div className="px-6 pt-48 md:pt-0 flex flex-col md:flex-row md:items-center gap-3 md:p-0">
                  <Link
                    href="#pines"
                    className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg hover:text-white hover:bg-pink-500 hover:-translate-y-1 hover:scale-105 transition-all transform font-mono"
                  >
                    Pines
                  </Link>
                  <Link
                    href="#projects"
                    className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg hover:text-white hover:bg-yellow-400 hover:-translate-y-1 hover:scale-105 transition-all transform font-mono"
                  >
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="projects"
        className="container mx-auto max-w-screen-xl mb-56 mt-20"
      >
        <CardIntensamente />
      </section>

      <Footer/>
    </>
  );
}
