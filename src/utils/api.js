import axios from 'axios'

const apiConfig = {
    method: 'GET',
    params: { hl: 'en', gl: 'US' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST
    }
}

export const fetchDataFromApi = async url => {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/${url}`, apiConfig)
    return data
}