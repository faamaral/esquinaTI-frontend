import axios from "axios";

const api = axios.create({
    baseURL: 'https://esquinati.herokuapp.com/'
})

export default api