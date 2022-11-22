import CONFIG from './config';

const API_ENDPOINT = {
  FAVORITE: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};
export default API_ENDPOINT;
