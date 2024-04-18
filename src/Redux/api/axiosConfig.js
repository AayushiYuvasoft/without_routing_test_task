import axios from "axios";
import { toast } from "react-toastify";

const baseURL =  "https://jsonplaceholder.typicode.com"

const UNAUTHORIZED = 401;
const Not_FOUND = 404;
const BACKEND_ERROR = 502;
const CONFLICT = 409;

const instance = axios.create({
  baseURL,
  headers: {
    // BasicAuth: 1234,
  },
});

// Request interceptor
instance.interceptors.request.use(function (config) {
  let token = localStorage.getItem("authToken");
  config.headers["Authorization"] = "Bearer " + token;
  return config;
},
function (error) {
  return Promise.reject(error);
});

// Response interceptor for handling errors
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // Handle error responses here
    if (error.response) {
      const status = error?.response?.status;
      // const errorMessage = error?.response?.data?.message || "An error occurred";
      // const errorMessage = error?.response?.data?.message;

      if (status === UNAUTHORIZED) {
        toast.error("🚫 Unauthorized: Please log in again ", {
          toastId : "err1",
          icon : false
        });
      } else if (status === Not_FOUND) {
        toast.error("Data not found" , {
          toastId : "err2"
        });
      } else if (status === BACKEND_ERROR){
        toast.error("backend error", {
          toastId : "err3"
        });
      }
      else if (status === CONFLICT){
        toast.error("something went wrong", {
          toastId : "err4"
        });
      }
    } else {
      toast.error("Network error: Unable to connect to the server", {
        toastId : "err5"
      });
    }
    return Promise.reject(error);
  }
);

export default instance;

