import React from "react";
import PlaceList from "../components/PlaceList";
import {useParams} from 'react-router-dom';
const DUMMY_PLACES = [
  {
    id: "u1",
    title: "Wave Rock Rd",
    description: "its nice and engaged place",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/220px-Ash_Tree_-_geograph.org.uk_-_590710.jpg",
    address: "Financial District, Nanakramguda",
    location: {
      lat: 17.4180582,
      long: 78.3453311
    },
    creator: "1"
  },
  {
    id: "p2",
    title: "Wave Rock Rd",
    description: "its nice and engaged place",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/220px-Ash_Tree_-_geograph.org.uk_-_590710.jpg",
    address: "Financial District, Nanakramguda",
    location: {
      lat: 17.4180582,
      long: 78.3453311
    },
    creator: "2"
  }
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
