import React from 'react';
import CardSlider from '../tools/CardSlider';
import ImageGallery from '../tools/ImageGallery';
import { useRouter } from 'next/router';
import { MdLocationOn } from 'react-icons/md';
import { BsArrowsMove } from 'react-icons/bs';
import { MdWaterDrop } from 'react-icons/md';

function FarmView() {
  const router = useRouter();
  const { state, country } = router.query;

  const images = [
    '/images/cascoPrueba.jpg',
    '/images/campoPrueba.jpg',
    '/images/campoPrueba.jpg',
    '/images/cascoPrueba.jpg',
    '/images/campoPrueba.jpg',
    '/images/campoPrueba.jpg',
    '/images/campoPrueba.jpg'
  ];

  return (
    <>
      <div className="flex flex-col container mt-32 md:mt-10">
        <h3 className="text-2xl md:text-3xl mb-6 font-navbar block">
          Estancia Forestal y Agricola
        </h3>
        <span className="mb-2">
          <MdLocationOn size={24} className="text-secondary inline" /> {country} {'>'} {state} {'>'}{' '}
          Campos
        </span>
        <div className="w-full md:w-3/4">
          <ImageGallery images={images} />
        </div>
        <section className="my-5 mb-10">
          <h4 className="text-2xl text-secondary font-medium my-2">Descripcion de la Propiedad</h4>
          <p>
            Excelente Campo Forestal / Ganadero Toda las comodidades. Batlle y Ordoñez Lavalleja
          </p>
          <span className="flex items-center mt-2">
            <BsArrowsMove size={20} className="text-secondary inline mr-2" /> 2000 hectáreas
            <span className="ml-4"> USD3.300/ha</span>{' '}
            <span className="ml-4">
              <MdWaterDrop className="inline" /> Riego
            </span>
          </span>
          <h4 className="text-2xl text-secondary font-medium mt-10 my-2">Detalle</h4>
          <p>
            ^^**CON VÍDEO DRON Y VISITA VIRTUAL 3D**^^**ESPECTACULAR Y EXCLUSIVA FINCA DE LUJO CON
            TRES EDIFICACIONES, VIVIENDA PRINCIPAL, CASA PARA INVITADOS Y CASA PARA EL SERVICIO.
            SITUADO EN UN ENCLAVE ÚNICO RODEADO DE LA NATURALEZA. IMPECABLE CON MÁXIMAS CALIDADES Y
            PRIVACIDAD. PISICINA CLIMATIZADA**^^ DATOS BÁSICOS Casa principal de 475 m2 Casa de
            invitados (Pabellón de Caza) con 111 m2 Casa para personal de servicio de 90 m2 Dos
            secaderos de 198 y 151 m2 respectivamente Casetas de motores, de generadores, de
            calderas, etc. Piscina climatizada de agua salada Pista de tenis 3.5 ha de EXPLOTACIÓN
            DE CEREZOS Y OTROS FRUTOS. 1.4 ha de bosque de roble 2.000 m2 de zonas verdes
            ajardinadas Completamente amueblada y equipada con mobiliario y materiales de gran
            valor. LA TIERRA: Finca con cerramiento perimetral de malla y piedra vista. Finca de
            PRODUCIÓN DE CEREZAS plantadas en calles delimitadas. Finca con riego por goteo
            automático aproximadamente 1.100 árboles en espaldera y 400 en vaso tradicional. También
            CIRUELOS, HIGUERAS, KIWIS, PERALES, MANZANOS, MEMBRILLOS, etc. VIVIENDA PRINCIPAL: 6
            dormitorios. 5 baños. - Planta baja: Porche de acceso, vestíbulo, gran salón con doble
            altura y chimenea, comedor, cocina, 3 dormitorios, 2 baños, 1 aseo y terraza acristalada
            con dos ambientes ideal para grandes banquetes y fiestas.
          </p>
        </section>
      </div>
      <div className="flex flex-col items-center">
        <hr className="border-solid border-2 border-gray-300 w-10/12 px-6" />
        <hr className="border-solid border-1 border-gray-400 w-3/4 mt-4 mb-6" />
      </div>

      <div className="mb-10 container">
        <h4 className="text-2xl text-secondary font-medium">
          Campos similares que te pueden interesar
        </h4>
        <CardSlider />
      </div>
    </>
  );
}

export default FarmView;
