import axios from 'axios';
import { BASE_URL } from './config';
import { successResponse } from './ApiResponse';
import { getUserToken } from './AuthApiService';
import { SEARCH_USER } from './API_ENDPOINTS';
let service = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: getUserToken(),
    'Content-Type': 'application/json'
  }
});

const searchUsers = async (data) => {
  try {
    const response = await service.post(SEARCH_USER, data);
    return successResponse(response);
  } catch (error) {
    const message = {
      message: error?.message
    }
    return { status: false, data: error?.response?.data ?? message };
  }
}
export { searchUsers }