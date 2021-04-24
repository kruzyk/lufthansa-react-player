import { AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthService } from "./AuthService";
import { auth } from "./index";

interface AuthSource {
    token: string | null
}

export const makeAuthTokenInterceptor = (auth: AuthSource) => {

    return (config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
        if (auth.token) {
            config.headers['Authorization'] = 'Bearer ' + auth.token;
            // config.headers['X-Placki'] = 'Bearer ' + auth.token;
        }
        return config;
    };
}
