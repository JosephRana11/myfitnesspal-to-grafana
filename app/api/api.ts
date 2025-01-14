import axios from "axios";


const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
});


export function postCSVData(data: FormData) {
  return apiClient.post("/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data", 
    },
  });
}

export default apiClient;
