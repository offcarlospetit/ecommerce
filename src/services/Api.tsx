
import axios, { AxiosResponse } from "axios";
import store from "../store/Store";

let config = {
    headers: {
        'access-token': ''
    }
}

const URL = 'https://www.amiiboapi.com/api/amiibo/'


export const HomeList = async () => {
    return axios.get(URL).then((response: AxiosResponse) => {
        if (response.status == 200) {
            return [...response.data.amiibo];
        }
        else {
            return [];
        }
    }).catch((error: Error) => {
        console.log("Error fetch Home List: ", error.message);
        return []
    })
}




