import axios from 'axios';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { toast } from 'react-toastify';

interface Field {
  label: string;
  type: string;
  name: string;
}

interface CustomFormProps {
  fields: Field[];
}

function CustomForm({ fields }: CustomFormProps) {
  const router = useRouter();
  const { name, type } = router.query as { name: string; type: string };

  const typeMapping: Record<string, string> = {
    farms: 'Campos: ',
    cattle: 'Ganado: ',
    houses: 'Casas: '
  };

  const initialFormState = fields.reduce((obj, field) => ({ ...obj, [field.name]: '' }), {});
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    try {
      const response = await axios.post('https://formspree.io/f/mbjvrvgb', new FormData(form));
      console.log('Form submission success:', response);
      setFormValues(initialFormState);
      toast.success(
        `Su solicitud sobre "${name}" se ha enviado correctamente!
        Lo contactaremos en menos de 24hs!`,
        {
          position: toast.POSITION.TOP_RIGHT
        }
      );
      setTimeout(() => {
        router.back();
      }, 2000);
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

  const onClickWhatsApp = () => {
    const phoneNumber = '+59899680911';
    const message = encodeURIComponent(`Hola! ¿En qué lo podemos ayudar?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };

  return (
    <div className="flex flex-col items-center mb-16 mt-28 md:mt-16">
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit}
        className="flex flex-col justify-center bg-white w-11/12 md:w-7/12 xl:w-6/12 2xl:w-5/12 p-3 m-8 lg:m-0 md:m-3 flex-grow mt-20 rounded shadow"
      >
        <h2 className="tertiary font-title text-lg text-black md:text-2xl text-center pb-4 md:pb-8 mt-4">
          {name === undefined ? (
            '¡Contáctenos!'
          ) : (
            <>
              <span>Consúltenos sobre: </span>
              <span className="text-caqui font-bold">&quot;{name}&quot;</span>
            </>
          )}
        </h2>
        {fields.map((field, index) => {
          if (field.type === 'hidden') {
            return (
              <input
                key={index}
                type={field.type}
                name={field.name}
                value={typeMapping[type] + name || 'No llego el nombre'}
                onChange={handleInputChange}
              />
            );
          } else {
            return (
              <div key={index} className="flex w-full justify-between items-center">
                <label className="w-1/3 m-1 ml-auto text-black font-title">{field.label}</label>
                {field.type === 'text-area' ? (
                  <textarea
                    required
                    name={field.name}
                    value={formValues[field.name] || ''}
                    onChange={handleInputChange}
                    className="w-1/2 m-1 mr-auto p-1 bg-bodyBackground focus:border-gray-800 text-xs md:text-sm"
                  ></textarea>
                ) : (
                  <input
                    required={field.label.includes('*')}
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
      <div className="flex flex-col justify-center md:ml-auto px-4 md:px-10 bg-white p-3 mx-4 mt-5 rounded">
        <p className="font-title">Envíenos un Whastapp!</p>
        <div
          onClick={(e) => {
            e.stopPropagation();
            onClickWhatsApp();
          }}
        >
          <BsWhatsapp
            role="button"
            size={60}
            className="bg-gray-100 p-2 text-green2 rounded-md m-auto my-2"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomForm;
