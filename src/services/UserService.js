import axios from 'axios';
import { BASE_URL } from './config';
import { successResponse } from './ApiResponse';
import { getUserToken } from './AuthApiService';
// import { AuthApiService } from './AuthApiService';
let service = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${getUserToken}`,
        'Content-Type': 'application/json'
    }
});

export const userLogin = async (data) => {
    try {
        const response = await service.post(`/auth/login`, data);
        return successResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}
export const userSignUp = async (data) => {
    try {
        const response = await service.post(`/auth/signup`, data);
        return response;
        // return resultResponse(response);
    } catch (error) {
        const message = {
            message: error?.message
        }
        return { status: false, data: error?.response?.data ?? message };
    }
}
