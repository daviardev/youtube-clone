import axios from 'axios'

const apiConfig = {
    method: 'GET',
    params: { hl: 'en', gl: 'US' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.RAPIDAPI_HOST
    }
}

export const fetchDataFromApi = async url => {
    const { data } = await axios.get(`${import.meta.env.BASE_URL}/${url}`, apiConfig)
}

// axios.request(apiConfig).then(res => {
//     console.log(res.data);
// }).catch(err => {
//     console.error(err)
// })