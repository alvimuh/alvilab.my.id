import axios from "axios";

const alvilabAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ALVILAB_API_GO,
});

export { alvilabAPI };
