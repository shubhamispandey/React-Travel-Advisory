import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  let URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  console.log(URL);
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "acc6bf139emshac20d9b2adaa787p16c03bjsnb54b8882b3a1",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
