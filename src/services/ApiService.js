import axios from 'axios';
import { BASE_URL } from './config';
// import { AuthApiService } from './AuthApiService';
let service = axios.create({
  baseURL: BASE_URL,
  headers: {
    // Authorization: `Bearer ${AuthApiService.getToken()}`,
    'Content-Type': 'application/json'
  }
});

export const userLogin = async (data) => {
    console.log("BASE_URLBASE_URL",BASE_URL);

    try {
        const response = await service.post(`/auth/login`, data);
        return response;
        // return resultResponse(response);
      } catch (error) {
        return error;
        // return resultFieldResponse(error);
      }
}
