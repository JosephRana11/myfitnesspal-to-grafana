import axios, { AxiosResponse } from "axios";


const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
});


export function postCSVData(data: FormData) : Promise<AxiosResponse> {
  const response =  apiClient.post("/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data", 
    },
  });
  return response
}

export default apiClient;
