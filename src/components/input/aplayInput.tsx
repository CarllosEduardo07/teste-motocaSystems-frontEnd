import { NumericFormat } from 'react-number-format';

interface InputInterface {
  id: string;
  label: string;
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  readonly?: boolean;
}

export default function AplayInput({ id, label, type, value, setValue, disabled, readonly }: InputInterface) {
  return (
    <div className='flex flex-col relative'>
      <label htmlFor={id} className='absolute ml-2 px-2 -top-3 text-sm font-medium bg-background-pages'>
        {label}
      </label>
      {type === 'number' && id === 'valor' ? (
        <NumericFormat
          id={id}
          thousandSeparator={'.'} // Separador de milhar
          decimalSeparator={','} // Separador decimal
          decimalScale={2} // Quantidade de casas decimais
          fixedDecimalScale // Fixa as casas decimais
          onValueChange={({ floatValue }) => {
            setValue(floatValue !== undefined ? String(floatValue) : '');
          }}
          value={value}
          readOnly={readonly}
          required
          className={`w-[350px] md:w-[400px] pl-3 h-[50px] text-[#CAC9CD] border border-[#CAC9CD] text-base bg-transparent outline-none rounded-md ${
            disabled ? 'border-[#d9d3f788] cursor-not-allowed text-[#d9d3f788]' : ''
          }`}
        />
      ) : (
        <input
          id={id}
          type={type}
          onChange={e => {
            setValue(e.target.value.toUpperCase());
          }}
          value={value}
          readOnly={readonly}
          required
          className={`w-[350px] md:w-[400px] ${id === 'codigo' ? 'pl-6' : 'pl-3'} ${type === 'number' ? 'input_number' : ''}
      ${disabled ? 'border-[#d9d3f788]  cursor-not-allowed text-[#d9d3f788]' : ''}
     h-[50px] text-[#CAC9CD] border border-[#CAC9CD] text-base bg-transparent outline-none rounded-md`}
        />
      )}
      {id === 'codigo' && <span className='absolute left-3 top-3 text-lg'>#</span>}
    </div>
  );
}
