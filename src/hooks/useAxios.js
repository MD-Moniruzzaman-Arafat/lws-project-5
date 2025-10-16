import axios from 'axios';
import { useEffect } from 'react';
import { api } from '../api/api';
import useAuth from './useAuth';

export default function useAxios() {
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    // 🔐 Request Interceptor → প্রতিটি request এর সাথে token পাঠাবে
    const requestInterceptors = api.interceptors.request.use(
      (config) => {
        const accessToken = auth.accessToken;
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // 🔁 Response Interceptor → যদি token expire হয় তাহলে refresh করবে
    const responseInterceptors = api.interceptors.response.use(
      (response) => response, // normal response হলে
      async (error) => {
        const originalRequest = error.config;

        // যদি 401 (Unauthorized) error আসে এবং আগে retry করা না হয়ে থাকে
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = auth?.refreshToken;
            // Refresh token দিয়ে নতুন access token নাও
            const res = await axios.post(
              'http://localhost:3000/api/auth/refresh-token',
              { refreshToken }
            );

            const newAccessToken = res.data.accessToken;

            setAuth({ ...auth, accessToken: newAccessToken });

            // Request header এ নতুন token attach করে আবার retry করো
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            return axios(originalRequest); // retry request
          } catch (error) {
            return error;
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterceptors);
      api.interceptors.response.eject(responseInterceptors);
    };
  }, [auth, setAuth]);
  return api;
}
