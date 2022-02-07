import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  let URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  console.log(URL);
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "b25a65eeddmsh32f6670691c2828p177626jsnec8d28924588",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
