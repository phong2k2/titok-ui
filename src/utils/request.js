import axios from 'axios';

const reponse = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api',
});

export const get = async (path, options) => {
  const res = await reponse.get(path, options);
  return res.data;
};
export default reponse;
