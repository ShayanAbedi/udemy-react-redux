import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-4efe9.firebaseio.com/",
});

export default instance;
