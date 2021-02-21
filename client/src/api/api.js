import axios from "axios";
import { getAccessToken } from "../auth/auth";

//------------------------------------------------
//---------> API CALLS
//------------------------------------------------

const headers = {
  Authorization: `Bearer ${getAccessToken()}`,
  "Content-Type": "application/json",
};

export const getMe = () =>
  axios.get(`https://api.spotify.com/v1/me`, { headers });

export const getRecentlyPlayed = () =>
  axios.get("https://api.spotify.com/v1/me/player/recently-played?limit=50", {
    headers,
  });

//experimental
export const getMultipleRecentlyPlayed = async () => {
  let data = [];

  getRecentlyPlayed()
    .then((res) => {
      data.append(res.data);

      return axios.get(data.next, { headers });
    })
    .then((res) => data.append(res.data));

  return data;
};
