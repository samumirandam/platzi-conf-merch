import { useState, useEffect } from 'react';
import axios from 'axios';

import config from "../../config"

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw`;

  useEffect(async () => {
    const responde = await axios(API);
    setMap(responde.data.results[0].geometry.location);
  }, []);

  return map;
};

export default useGoogleAddress;
