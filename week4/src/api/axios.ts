import axios from "axios";

const API_URL = `${import.meta.env.VITE_BASE_URL}`;

const instance = axios.create({
  baseURL: API_URL,
});

export const axiosLogin = async (
  authenticationId: string,
  password: string
): Promise<any> => {
  try {
    const response = await instance.post("/member/login", {
      authenticationId,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
