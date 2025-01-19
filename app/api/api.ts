import axios, { Axios, AxiosResponse } from "axios";


const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
});


export function postCSVData(data: FormData) : Promise<AxiosResponse> {
  return apiClient.post("/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data", 
    },
  });
}

export default apiClient;
