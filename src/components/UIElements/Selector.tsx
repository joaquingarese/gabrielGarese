import { Listbox, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { BsChevronDown, BsCheck } from 'react-icons/bs';

interface SelectorProps {
  selectedState: string;
  setSelectedState: (city: string) => void;
  cities: string[];
}

function Selector({ selectedState, setSelectedState, cities }: SelectorProps) {
  return (
    <>
      <div className="z-10 w-60">
        <Listbox value={selectedState} onChange={setSelectedState}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-pointer rounded-lg border border-lightBrown bg-white py-2.5 pl-4 pr-10 text-left font-navbar text-sm text-tierra shadow-sm transition-colors hover:border-primary focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30">
              <span className="block truncate">{selectedState || 'Seleccione localidad'}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <BsChevronDown className="h-4 w-4 text-secondary" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-lg border border-lightBrown bg-white py-1 font-navbar text-sm shadow-lg focus:outline-none">
                {cities.map((city, cityIdx) => (
                  <Listbox.Option
                    key={cityIdx}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2.5 pl-10 pr-4 transition-colors ${
                        active ? 'bg-primary-soft text-tierra' : 'text-tertiary'
                      }`
                    }
                    value={city}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-semibold text-tierra' : 'font-normal'}`}
                        >
                          {city}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                            <BsCheck className="h-5 w-5" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );
}

export default Selector;
