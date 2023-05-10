import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { BsChevronDown, BsCheck } from 'react-icons/bs';

interface SelectorProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  cities: string[];
}

function Selector({ selectedCity, setSelectedCity, cities }: SelectorProps) {
  return (
    <>
      <div className="w-60 z-10">
        <Listbox value={selectedCity} onChange={setSelectedCity}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selectedCity || 'Seleccione Localidad'}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <BsChevronDown className="w-5 h-5 text-gray-400" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {cities.map((city, cityIdx) => (
                  <Listbox.Option
                    key={cityIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={city}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                        >
                          {city}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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
