interface ModalInterface {
  mensagem: string;
  onClose?: () => void;
  status: 'sucesso' | 'editar' |'excluir';
}

export default function Modal({ mensagem, onClose, status }: ModalInterface) {
  const modalColor = status === 'sucesso' 
    ? 'bg-[#51a351] text-white' 
    : status === 'excluir' 
    ? 'bg-[#bd362f] text-white' 
    : status === 'editar' 
    ? 'bg-[#2f96b4] text-white' 
    : '';

  return (
    <div className={`${modalColor} absolute bottom-5 right-10 flex items-center w-auto p-3 space-x-4 text-gray-600 divide-x rtl:divide-x-reverse rounded-lg shadow space-x`} role='alert'>
      <p className='ps-4 text-sm font-normal'>{mensagem}</p>
      {onClose && (
        <button onClick={onClose} id={status} className='text-lg px-2 font-bold text-white'>
          X
        </button>
      )}
    </div>
  );
}
