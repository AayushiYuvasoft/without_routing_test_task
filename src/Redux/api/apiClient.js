
import instance from "./axiosConfig";

const apiClient = ({ method, endPoint, header, body }) => {
  let res;
  switch (method) {
    case "GET":
      res = instance.get(endPoint, { headers: header });
      break;
    case "POST":
      res = instance.post(endPoint, body, { headers: header });
      break;
    case "PUT":
      res = instance.put(endPoint, body, { headers: header });
      break;
    case "DELETE":
      res = instance.delete(endPoint, body, { headers: header });
      break;
    default:
      throw new Error("check method");
  }

  return res;
};

export default apiClient;



