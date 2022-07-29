import axios from "axios";

export default axios.create({
  baseURL: "https://react-js-notes-app-default-rtdb.firebaseio.com/",
});
