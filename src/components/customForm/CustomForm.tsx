import React, { FormEvent } from 'react';

interface Field {
  label: string;
  type: string;
  name: string;
}

interface CustomFormProps {
  endpoint: string;
  fields: Field[];
  onSubmit: () => void;
}

function CustomForm({ endpoint, fields, onSubmit }: CustomFormProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Form submission logic here.
    onSubmit();
  };

  return (
    <div className="flex flex-col items-center mb-10 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-11/12 md:w-7/12 xl:w-6/12 2xl:w-5/12 bg-gray-100 p-3 m-8 lg:m-0 md:m-3 flex-grow mt-20"
      >
        <h2 className="tertiary font-title text-lg md:text-2xl text-center pb-4 md:pb-8 ">
          ¿En qué lo podemos ayudar?
        </h2>
        {fields.map((field, index) => (
          <div key={index} className="flex w-full justify-between items-center">
            <label className="w-1/3 m-1 ml-auto">{field.label}</label>
            {field.type === 'text-area' ? (
              <textarea
                name={field.name}
                className="w-1/2 m-1 mr-auto p-1 focus:border-gray-500 text-xs md:text-sm"
              ></textarea>
            ) : (
              <input
                type={field.type}
                name={field.name}
                className="w-1/2 m-1 mr-auto p-1 focus:border-gray-500 text-sm md:text-md"
              />
            )}
          </div>
        ))}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="items-center text-white hover:text-gray-600 bg-gray-600 hover:bg-slate-400 rounded-lg p-1 w-28"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomForm;
