import React from 'react';
import CustomForm from '~/components/forms/CustomForm';

function contacto() {
  const fields = [
    { label: 'Nombre Completo*', type: 'text', name: 'name' },
    { label: 'Email*', type: 'mail', name: 'mail' },
    { label: 'Telefono', type: 'number', name: 'phone' },
    { label: 'Mensaje*', type: 'text-area', name: 'message' }
  ];

  const handleSubmit = () => {
    console.log('Form submitted');
  };
  return (
    <>
      <div className="flex-grow mt-[-4%] md:mt-[0%] ">
        <CustomForm fields={fields} onSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default contacto;
