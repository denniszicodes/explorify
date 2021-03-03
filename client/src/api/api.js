import axios from "axios";
import { getAccessToken } from "../auth/auth";

//------------------------------------------------
//---------> API CALLS
//------------------------------------------------

const headers = {
  Authorization: `Bearer ${getAccessToken()}`,
  "Content-Type": "application/json",
};

const BASE_URI = `https://api.spotify.com/v1`;

export const getMe = () => axios.get(`${BASE_URI}/me`, { headers });

export const getRecentlyPlayed = () =>
  axios.get(`${BASE_URI}/me/player/recently-played?limit=50`, {
    headers,
  });

//-----------------------
// Personalization API
//-----------------------

export const getUsersTopArtistsShort = (limit = 20) =>
  axios.get(`${BASE_URI}/me/top/artists?time_range=short_term&limit=${limit}`, {
    headers,
  });

export const getUsersTopTracksShort = (limit = 20) =>
  axios.get(`${BASE_URI}/me/top/tracks?time_range=short_term&limit=${limit}`, {
    headers,
  });
