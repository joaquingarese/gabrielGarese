import React from 'react';

function Company() {
  return (
    <div className="container mb-12 mt-32 md:mt-12">
      <h2 className="font-title text-2xl md:text-3xl ml-3 text-center">NOSOTROS</h2>
      <div className="flex flex-col lg:flex-row mt-6 p-4">
        <div className="w-full lg:w-1/3">
          <div className="w-full flex flex-col justify-center lg:justify-end px-6 mb-4">
            <img src="/images/tata.png" alt="" />
            <small>
              <i> "Roberto José Garese Sosa Días"</i>
            </small>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <p className="text-2xl mt-3 font-header text-caqui">
            <i>
              Transcurrían los años 60 cuando Don Roberto José Garese Sosa Días comienza con lo que
              hoy nuestra empresa familiar. <br />
              <br /> Generación tras generación, muchos han sido los cambios en todos los aspectos
              durante estos 60 y pocos años pero los valores enseñados por nuestro padre siguen
              intactos.
              <br />
              <br /> Trabajamos día a día en el sendero que nos marco, con vocación de servicio,
              seriedad, respeto y la confianza por sobre todas las cosas el valor de la “Palabra”
              <br />
              <br />
              Inspirados por estos valores es que confiamos en que cada uno de nuestros clientes son
              por sobre todas las cosas nuestros amigos. <br />
              <br />
              De esta manera continuamos recorriendo el camino que Don Roberto José Garese Sosa
              Días, nos enseño.
            </i>
          </p>
        </div>
        {/* <div className="w-full lg:w-1/4 lg:flex ">
          <hr className="w-full lg:hidden border-l border-1 border-gray-400 mt-6 " />
          <hr className="hidden lg:block border-l border-1 border-gray-400 sm:h-64 m-2 " />
          <div>
            <p className="mt-3 font-header font-semibold text-gray-600">Director</p>
            <p className="font-header text-secondary font-thin">Gabriel Garese</p>
            <p className="mt-3 font-header font-semibold text-gray-600">Asesor Legal</p>
            <p className="font-header text-secondary font-thin">Dra. Beatriz Puppo</p>
            <p className="mt-3 font-header font-semibold text-gray-600">Asesores Técnicos</p>
            <p className="font-header text-secondary font-thin">Dr. Pablo Zerbino</p>
            <p className="font-header text-secondary font-thin">Ing. Agr. José Víctor Zerbino</p>
            <p className="mt-3 font-header font-semibold text-gray-600">Secretaria</p>
            <p className="font-header text-secondary font-thin">Noel Alzaibar</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Company;
