import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export type Moto = {
  id: string;
  codigo: number;
  modeloMoto: string;
  cor: string;
  valor: number;
  status: string;
};

export const getMotos = async (): Promise<Moto[]> => {
  const response = await api.get('/motos');
  return response.data;
};

//buscando motos por id para editar
export const getMotoByCodigo = async (id: number): Promise<Moto | undefined> => {
  const response = await api.get(`/motos/${id}`);
  return response.data;
};

export const createMoto = async (moto: Moto): Promise<void> => {
  await api.post('/motos', moto);
};

export const deleteMoto = async (id: string): Promise<void> => {
  await api.delete(`/motos/${id}`);
};

export const updateMoto = async (updateMoto: Moto): Promise<void> => {
  await api.put(`/motos/${updateMoto.id}`, updateMoto);
};
