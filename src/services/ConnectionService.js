import axios from 'axios';
import { BASE_URL } from './config';
import { successResponse } from './ApiResponse';
import { getUserToken } from './AuthApiService';
import { ACCEPT_REQUEST, SEND_REQUEST } from './API_ENDPOINTS';
let service = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: getUserToken(),
        'Content-Type': 'application/json'
    }
});

const sendRequest = async (data) => {
    try {
        const response = await service.post(SEND_REQUEST, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}
const acceptRequest = async (data) => {
    try {
        const response = await service.post(ACCEPT_REQUEST, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}
export { sendRequest, acceptRequest }