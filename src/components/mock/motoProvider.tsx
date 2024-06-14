import { useState } from 'react';

export default function MotoProvider() {
  const [motos, setMotos] = useState([
    {
      codigo: '#0001',
      modeloMoto: 'HONDA POP 110I',
      cor: 'BRANCA',
      valor: '15.000,00',
      status: 'Em estoque',
    },
    {
      codigo: '#0001',
      modeloMoto: 'HONDA 500x',
      cor: 'VERMELHA',
      valor: '50.000,00',
      status: 'Sem estoque',
    },
    {
      codigo: '#0001',
      modeloMoto: 'HONDA CB 300F TWISTER',
      cor: 'Preta',
      valor: '30.000,00',
      status: 'Em trânsito',
    },
  ]);

  return <></>;
}
