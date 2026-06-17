import Image from 'next/image';

const values = ['Servicio', 'Seriedad', 'Respeto', 'Confianza', 'La Palabra'];

function Company() {
  return (
    <section className="bg-bodyBackground">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-10 md:pt-14 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="fence-line block w-12 text-primary" aria-hidden="true" />
            <span className="font-navbar text-xs uppercase tracking-[0.28em] text-secondary">
              Nuestra historia
            </span>
          </div>
          <h1 className="font-volte text-3xl font-semibold leading-tight text-tierra md:text-4xl">
            Nosotros
          </h1>
          <p className="mt-3 font-body text-base leading-relaxed text-tertiary">
            Una empresa familiar de negocios rurales, fiel a los mismos valores desde los años 60.
          </p>
        </div>

        {/* Portrait + story */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[330px_1fr] lg:gap-16">
          <figure className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-lightBrown bg-gradient-to-br from-primary-soft/50 to-cream">
              <Image
                src="/images/tata.png"
                alt="Don Roberto José Garese Sosa Días"
                layout="fill"
                objectFit="contain"
                className="p-3"
              />
            </div>
            <figcaption className="mt-4 border-l-2 border-primary pl-4">
              <p className="font-header text-base italic text-tierra">
                Roberto José Garese Sosa Días
              </p>
              <p className="mt-0.5 font-navbar text-[11px] uppercase tracking-[0.18em] text-secondary">
                Fundador
              </p>
            </figcaption>
          </figure>

          <div className="max-w-2xl">
            <p className="font-header text-xl italic leading-relaxed text-tierra md:text-2xl">
              Transcurrían los años 60 cuando Don Roberto José Garese Sosa Días comenzó con lo que
              hoy es nuestra empresa familiar.
            </p>
            <div className="mt-6 space-y-4 font-body text-[17px] leading-relaxed text-tertiary">
              <p>
                Generación tras generación, muchos han sido los cambios durante estos sesenta y
                pocos años, pero los valores que nos enseñó nuestro padre siguen intactos.
              </p>
              <p>
                Trabajamos día a día en el sendero que nos marcó: con vocación de servicio,
                seriedad, respeto, confianza y, por sobre todas las cosas, el valor de la
                «Palabra».
              </p>
              <p>
                Inspirados por esos valores, confiamos en que cada uno de nuestros clientes es,
                antes que nada, nuestro amigo.
              </p>
              <p>
                Así continuamos recorriendo el camino que Don Roberto José Garese Sosa Días nos
                enseñó.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 border-t border-lightBrown pt-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="fence-line block w-10 text-primary" aria-hidden="true" />
            <span className="font-navbar text-xs uppercase tracking-[0.24em] text-secondary">
              Nuestros valores
            </span>
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-lightBrown bg-lightBrown sm:grid-cols-5">
            {values.map((value) => (
              <div key={value} className="bg-white px-4 py-6 text-center">
                <span className="font-header text-lg text-tierra">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
