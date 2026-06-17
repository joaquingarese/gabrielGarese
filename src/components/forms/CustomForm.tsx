import axios from 'axios';
import { useRouter } from 'next/router';
import React, { FormEvent, useState } from 'react';
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
        name
          ? `Su consulta sobre "${name}" se envió correctamente. Lo contactamos en menos de 24 horas.`
          : 'Su mensaje se envió correctamente. Lo contactamos en menos de 24 horas.',
        {
          position: toast.POSITION.TOP_RIGHT
        }
      );
      setTimeout(() => {
        router.back();
      }, 2000);
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('No pudimos enviar su mensaje. Intente de nuevo o escríbanos por WhatsApp.', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const inputClasses =
    'w-full rounded-md border border-lightBrown bg-white px-3.5 py-2.5 font-body text-sm text-tierra placeholder:text-caqui/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30';

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit}
      className="rounded-xl border border-lightBrown/70 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="font-header text-xl text-tierra sm:text-2xl">
        {name === undefined ? (
          'Escríbanos'
        ) : (
          <>
            <span className="block text-sm font-normal uppercase tracking-[0.18em] text-primary">
              Consúltenos sobre
            </span>
            <span className="text-tierra">&quot;{name}&quot;</span>
          </>
        )}
      </h2>
      <p className="mt-2 font-body text-sm text-caqui">
        Complete sus datos y le respondemos a la brevedad.
      </p>

      <div className="mt-6 flex flex-col gap-4">
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
          }

          const required = field.label.includes('*');
          const cleanLabel = field.label.replace('*', '');

          return (
            <div key={index} className="flex flex-col gap-1.5">
              <label className="font-navbar text-xs font-semibold uppercase tracking-[0.1em] text-tertiary">
                {cleanLabel}
                {required && <span className="ml-0.5 text-primary">*</span>}
              </label>
              {field.type === 'text-area' ? (
                <textarea
                  required
                  rows={5}
                  name={field.name}
                  value={formValues[field.name] || ''}
                  onChange={handleInputChange}
                  className={`${inputClasses} resize-y`}
                />
              ) : (
                <input
                  required={required}
                  type={field.type}
                  name={field.name}
                  value={formValues[field.name] || ''}
                  onChange={handleInputChange}
                  className={inputClasses}
                />
              )}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center bg-primary px-7 py-3.5 font-navbar text-sm font-semibold uppercase tracking-[0.12em] text-tierra transition-colors hover:bg-secondary hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Enviar consulta
      </button>
    </form>
  );
}

export default CustomForm;
