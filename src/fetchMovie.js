import axios from "axios";

export function fetchMovie() {
    return axios.get("/movies/1")
      .then((response) => {return response.data});
}