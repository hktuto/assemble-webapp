import axios from "axios";

export const baseURL = "https://loverecyclingplus.com/recycling/api/";

export const apiService = axios.create({
  baseURL,
});
