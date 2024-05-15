import axios, { AxiosResponse } from "axios";

const API_URL = `${import.meta.env.VITE_BASE_URL}`;

const instance = axios.create({
  baseURL: API_URL,
});

interface ApiResponse {
  code: number;
  message: string;
  data?: {
    authenticationId: string;
    nickname: string;
    phone: string;
  };
}

export const axiosLogin = async (
  authenticationId: string,
  password: string
): Promise<AxiosResponse<ApiResponse>> => {
  try {
    const response = (await instance.post)<AxiosResponse<ApiResponse>>(
      "/member/login",
      {
        authenticationId,
        password,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const axiosJoin = async (
  authenticationId: string,
  password: string,
  nickname: string,
  phone: string
): Promise<AxiosResponse<ApiResponse>> => {
  try {
    const response = await instance.post<ApiResponse>("/member/join", {
      authenticationId,
      password,
      nickname,
      phone,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const axiosInfo = async (memberId: string): Promise<ApiResponse> => {
  try {
    const response = await instance.get<ApiResponse>("/member/info", {
      headers: {
        memberId: memberId,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosPassword = async (
  previousPassword: string,
  newPassword: string,
  newPasswordVerification: string,
  memberId: string
): Promise<ApiResponse> => {
  try {
    const response = await instance.patch<ApiResponse>(
      "/member/password",
      {
        previousPassword: previousPassword,
        newPassword: newPassword,
        newPasswordVerification: newPasswordVerification,
      },
      {
        headers: {
          memberId: memberId,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
