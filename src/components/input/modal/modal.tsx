interface ModalInterface {
  mensagem: string;
  onClose?: () => void;
}

export default function Modal({ mensagem, onClose }: ModalInterface) {
  return (
    <div className='absolute bottom-5 right-10 flex items-center w-auto p-3 space-x-4 text-gray-600 bg-white divide-x rtl:divide-x-reverse rounded-lg shadow space-x' role='alert'>
      <p className='ps-4 text-sm font-normal'>{mensagem}</p>
      {onClose && (
        <button onClick={onClose} className='text-lg px-2 font-bold text-[#FF4C51]'>
          X
        </button>
      )}
    </div>
  );
}
