type Moto = {
  codigo: number;
  modeloMoto: string;
  cor: string;
  valor: number;
  status: string;
};

let motos: Moto[] = [];

export const getMotos = (): Moto[] => motos;

export const addMoto = (moto: Moto): void => {
  motos.push(moto);
};

export const deleteMoto = (codigo: number): void => {
  motos = motos.filter(moto => moto.codigo !== codigo);
};

export const updateMoto = (updateMoto: Moto): void => {
  motos = motos.map(moto => (moto.codigo === updateMoto.codigo ? updateMoto : moto));
};
