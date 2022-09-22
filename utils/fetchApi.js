import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'de8a9f4550msha62767a29bf218ap15ef0bjsn262647c1aca2',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })

    return data
}