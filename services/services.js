import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apikey = '06e864e959ef3841f17579868f21a540';

// Get Popular Movies
export const getPopularMovies = async () => {
  const res = await axios.get(`${apiUrl}/movie/popular?api_key=${apikey}`);
  return res.data.results;
};

// Get Upcomming Movies
export const getUpcommingMovies = async () => {
  const res = await axios.get(`${apiUrl}/movie/upcoming?api_key=${apikey}`);
  return res.data.results;
};

// Get Popular Tv Series
export const getPopularTv = async () => {
  const res = await axios.get(`${apiUrl}/tv/popular?api_key=${apikey}`);
  return res.data.results;
};

// Get Family movies
export const getFamilyMovies = async () => {
  const res = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apikey}&with_genres=10751`,
  );
  return res.data.results;
};

// Get Documentary movies
export const getDocumentaryMovies = async () => {
  const res = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apikey}&with_genres=99`,
  );
  return res.data.results;
};

// Get movie detail
export const getMovie = async id => {
  const res = await axios.get(`${apiUrl}/movie/${id}?api_key=${apikey}`);
  return res.data;
};
