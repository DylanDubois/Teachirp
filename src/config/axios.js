import axios from "axios";

const instance = axios.create({
  baseURL: "https://teachirp.firebaseio.com/"
});

export default instance;
