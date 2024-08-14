import { authKey } from "@/constant/common";
import setAccessToken from "@/services/actions/setAccessToken";
import { getNewAccessToken } from "@/services/auth.services";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types/common";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local_storage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    const accessToken = getFromLocalStorage(authKey);

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const responseObject: any = {
      success: response?.data?.success,
      statusCode: response?.data?.statusCode,
      message: response?.data?.message,
      data: response?.data?.data,
      meta: response?.data?.meta,
    };

    console.log("response from axiosInstance", responseObject);

    return response;
  },
  async function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error);
    const config = error.config;

    console.log("error from axiosInstance", error);

    // console.log(config);
    if (error?.response?.statusCode === 401 && !config.sent) {
      config.sent = true;
      const response = (await getNewAccessToken()) as any;
      console.log("response from axiosInstance", response);

      const accessToken = response?.data?.token;
      console.log("new access token", accessToken);

      config.headers["Authorization"] = accessToken;
      setToLocalStorage(authKey, accessToken);
      setAccessToken(accessToken);
      return instance(config);
    } else {
      const responseObject: IGenericErrorResponse = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong!!!",
        errorMessages: error?.response?.data?.message,
      };

      console.log("error from axiosInstance", responseObject);

      return Promise.reject(error);
      // return responseObject;
    }
  }
);

export { instance };
