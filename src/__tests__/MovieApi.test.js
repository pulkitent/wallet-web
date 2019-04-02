import axios from "axios";
import { fetchMovie } from "../fetchMovie";

jest.mock('axios');

describe("Movie API", () => {
  it("should able to call fetch movie api", async () => {
    axios.get.mockResolvedValue({data: {name: "Harry potter"}});
    await fetchMovie();

    expect(axios.get).toHaveBeenCalled();
  });

  it("should able to get movie with id 1", async () => {
    axios.get.mockResolvedValue({data: {name: "Harry potter"}});
    fetchMovie(1).then((movie) => {
      expect(movie.name).toEqual('Harry potter');
    });
  });
});