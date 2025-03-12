import { artistArray } from "../../Front-end/src/database/artists.js";
import { songsArray } from "../../Front-end/src/database/songs.js";
import { gender_music } from "../../Front-end/src/database/geners.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj._id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj._id;

  return newSongObj;
});

const newGenderArray = gender_music.map((currentGenderObj) => {
  const newGenderObj = { ...currentGenderObj };
  delete newGenderObj._id;

  return newGenderObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseGender = await db.collection("gender").insertMany(newGenderArray);
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);

console.log(responseSongs);
console.log(responseArtists);
console.log(responseGender);

// console.log(newArtistArray);
// console.log(newSongsArray);
// console.log(songsArray);
