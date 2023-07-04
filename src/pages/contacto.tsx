import CustomForm from '~/components/forms/CustomForm';

function contacto() {
  const fields = [
    { label: 'Mensaje*', type: 'hidden', name: 'Interés en:' },
    { label: 'Nombre Completo*', type: 'text', name: 'name' },
    { label: 'Email*', type: 'email', name: 'mail' },
    { label: 'Telefono', type: 'number', name: 'phone' },
    { label: 'Mensaje*', type: 'text-area', name: 'message' }
  ];

  return (
    <>
      <div className="flex-grow mt-[-4%] md:mt-[0%] ">
        <CustomForm fields={fields} />
      </div>
    </>
  );
}

export default contacto;
