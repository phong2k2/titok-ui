import * as reponse from '~/utils/httpRequest';

export const forYou = async ({ page, perPage }) => {
  try {
    const res = await reponse.get('/users/suggested', {
      params: {
        page,
        per_page: perPage,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
