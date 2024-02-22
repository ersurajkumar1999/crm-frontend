import axios from 'axios';
import { BASE_URL } from './config';
import { successResponse } from './ApiResponse';
import { getUserToken } from './AuthApiService';
import { USER_LIST_FOR_CONNECTIONS } from './API_ENDPOINTS';
// import { AuthApiService } from './AuthApiService';
let service = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: getUserToken(),
        'Content-Type': 'application/json'
    }
});

const getProfile = async (data) => {
    try {
        const response = await service.post(`/profile`, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}
const getUserList = async (data) => {
    try {
        const response = await service.post(USER_LIST_FOR_CONNECTIONS, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}
export { getProfile, getUserList }