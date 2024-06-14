interface InputInterface {
  name: string;
  label: string;
  type: string;
  value: string;
  onClick?: () => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function AplayInput({ name, label, type, value, onClick, setValue }: InputInterface) {
  return (
    <div className='flex flex-col relative'>
      <label htmlFor={name} className='absolute ml-2 px-2 -top-3 text-sm bg-background-pages'>
        {label}
      </label>
      <input
        type={type}
        onClick={onClick}
        onChange={e => {
          setValue(e.target.value);
        }}
        value={value}
        className={`w-[400px] ${name === 'codigo' ? 'pl-6' : 'pl-3'} ${
          type === 'number' ? 'input_number' : ''
        } h-[50px] text-[#CAC9CD] border border-[#CAC9CD] text-base bg-transparent outline-none rounded-md`}
      />
      {name === 'codigo' && <span className='absolute left-3 top-3 text-lg'>#</span>}
    </div>
  );
}
