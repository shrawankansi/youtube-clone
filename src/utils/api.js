import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};


// const options = {
//     method: 'GET',
//     url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//     params: {q: 'desp', hl: 'en', gl: 'US'},
//     headers: {
//       'X-RapidAPI-Key': '691ccd6e3cmsh3a3d9a456c248f4p1c9884jsn421c4cf401fb',
//       'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//     }
//   };