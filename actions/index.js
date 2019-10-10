import axios from "axios";
import _ from "lodash";
const API_KEY = "f8d0674161msh4278931cb5b2669p10b0a8jsn05d05c49eb6b";

const axiosInstance = axios.create({
  baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
  timeout: 2000,
  headers: { "x-rapidapi-key": API_KEY }
});

export const searchTracks = singer => {
  return axiosInstance.get(`search?q=${singer}`).then(response => {
    const albums = response.data.data.map(item => item.album);
    const uniqAlbums = _.uniqBy(albums, "title");
    return uniqAlbums;
  });
};

export const getAlbumTracks = albumId => {
  return axiosInstance
    .get(`album/${albumId}`)
    .then(response => response.data.tracks.data);
};

export const storeData = async (key, value) => {
  const stringValue = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(key, stringValue);
  } catch (error) {
    // Error saving data
  }
};

export const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      const parsedValue = JSON.parse(value);
      return parsedValue;
    }
  } catch (error) {
    // Error retrieving data
  }
};
