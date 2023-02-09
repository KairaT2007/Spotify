import axios from "axios";
import { URl } from "../utils/constants";

export const instance = axios.create({
    baseURL: URl,
    params: {key: '484129036', locale: 'en-US'},
    headers: {
        'X-RapidAPI-Key': '891ac0a55cmshffdfefe6a2bfe97p19c17cjsn830f9114c803',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
})