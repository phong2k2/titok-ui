import * as reponse from '~/utils/request';

export const search = async (q, type = 'less') => {
  try {
    const res = await reponse.get('/users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
