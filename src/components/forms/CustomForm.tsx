import React, { FormEvent, useState } from 'react';
import axios from 'axios';

interface Field {
  label: string;
  type: string;
  name: string;
}

interface CustomFormProps {
  fields: Field[];
}

function CustomForm({ fields }: CustomFormProps) {
  const initialFormState = fields.reduce((obj, field) => ({ ...obj, [field.name]: '' }), {});
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    try {
      const response = await axios.post('https://formspree.io/f/xjvdnnag', new FormData(form));
      console.log('Form submission success:', response);
      setFormValues(initialFormState); // Reset the form values
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="flex flex-col items-center mb-16 mt-28 md:mt-16">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center bg-white w-11/12 md:w-7/12 xl:w-6/12 2xl:w-5/12 p-3 m-8 lg:m-0 md:m-3 flex-grow mt-20 rounded shadow"
      >
        <h2 className="tertiary font-title text-lg text-black md:text-2xl text-center pb-4 md:pb-8 mt-4">
          ¡Contáctenos!
        </h2>
        {fields.map((field, index) => {
          if (field.type === 'hidden') {
            return (
              <input
                key={index}
                type={field.type}
                name={field.name}
                value={'Aca va a ir el nombre de la propiedad'}
                onChange={handleInputChange}
              />
            );
          } else {
            return (
              <div key={index} className="flex w-full justify-between items-center">
                <label className="w-1/3 m-1 ml-auto text-black font-title">{field.label}</label>
                {field.type === 'text-area' ? (
                  <textarea
                    name={field.name}
                    value={formValues[field.name] || ''}
                    onChange={handleInputChange}
                    className="w-1/2 m-1 mr-auto p-1 bg-bodyBackground focus:border-gray-800 text-xs md:text-sm"
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formValues[field.name] || ''}
                    onChange={handleInputChange}
                    className="w-1/2 m-1 mr-auto p-1 bg-bodyBackground focus:border-gray-800 text-sm md:text-md"
                  />
                )}
              </div>
            );
          }
        })}
        <div className="flex justify-center my-6">
          <button
            type="submit"
            className="items-center text-white hover:text-gray-300 font-title bg-gray-800 hover:bg-gray-800 rounded-lg p-2 w-28"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomForm;
