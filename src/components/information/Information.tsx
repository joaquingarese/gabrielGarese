interface informationProps {
  information: informationType[];
}

function Information({ information }: informationProps) {
  return information.length > 0 ? (
    <div className="flex flex-col items-center h-full w-auto bg-opacity-50 rounded p-8 mt-20 md:mt-0 pb-12">
      <h2 className="text-3xl text-center font-title mb-3">INFORMACIÓN</h2>
      <div className="grid grid-cols-2 lg:grid-cols-5 h-3/8 w-11/12 sm:w-10/12 lg:w-1/3 bg-white bg-opacity-70 p-5 rounded shadow">
        <h3 className="col-span-2 lg:col-span-5 font-title text-center mb-2">
          MERCADO DE GANADO GORDO
        </h3>
        <p className="text-sm lg:col-span-2"></p>
        <span className="lg:col-span-3 lg:col-start-3 text-sm text-center mr-10">
          <strong> Precio (USD/kg 4ta balanza)</strong>
        </span>
        <p className="text-sm lg:col-start-2">Novillos:</p>
        <span className="lg:col-span-2 text-sm text-center">
          {information[0].novillos.toFixed(2)}
        </span>
        <p className="text-sm lg:col-start-2">Vacas:</p>
        <span className="lg:col-span-2 text-sm text-center">{information[0].cows.toFixed(2)}</span>
        <p className="text-sm lg:col-start-2">Vaquillonas:</p>
        <span className="lg:col-span-2 text-sm text-center">
          {information[0].vaquillonas.toFixed(2)}
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 h-3/8 w-11/12 sm:w-10/12 lg:w-1/3 bg-white bg-opacity-70 p-5 rounded mt-6 shadow">
        <h3 className="col-span-2 lg:col-span-5 font-title text-center mb-2">OVINOS</h3>
        <p className="text-sm lg:col-span-3"></p>
        <span className="lg:col-span-3 lg:col-start-3 text-sm text-center mr-10">
          <strong>Precio (USD/kg 4ta balanza)</strong>
        </span>

        <p className="text-sm lg:col-start-2 truncate">
          Cordero<small> pesado</small>:
        </p>
        <span className="lg:col-span-2 text-sm text-center">
          {information[0].corderoPesado.toFixed(2)}
        </span>
        <p className="text-sm lg:col-start-2">Capones:</p>
        <span className="lg:col-span-2 text-sm text-center">
          {information[0].capones.toFixed(2)}
        </span>
        <p className="text-sm lg:col-start-2">Ovejas:</p>
        <span className="lg:col-span-2 text-sm text-center">
          {information[0].ovejas.toFixed(2)}
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 h-3/8 w-11/12 sm:w-10/12 lg:w-1/3 bg-white bg-opacity-70 p-5 rounded mt-6 shadow">
        <h3 className="col-span-2 lg:col-span-5 font-title text-center mb-2">FAENA</h3>
        <p className="text-sm lg:col-span-2"></p>
        <span className="lg:col-span-2 text-sm text-center">
          <strong>Semanal</strong>
        </span>
        <p className="text-sm lg:col-start-2">Vacunos:</p>
        <span className="lg:col-span-2 text-sm text-center">
          {information[0].vacunos.toLocaleString('de-DE')}
        </span>
        <p className="text-sm lg:col-start-2">Ovinos:</p>
        <span className="lg:col-span-2 text-sm text-center">
          {information[0].ovinos.toLocaleString('de-DE')}
        </span>
      </div>
      <p className="mt-3">
        <i className="mr-5">Fecha: {information[0].customDate}</i>
        <i>Fuente ACG</i>
      </p>
    </div>
  ) : null;
}

export default Information;
