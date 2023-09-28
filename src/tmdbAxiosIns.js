import axios from "axios";

const tmdAxiosIns = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default tmdAxiosIns;