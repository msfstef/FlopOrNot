export const key = "4d401448d79a8586637ecc6edc973fae";

export const api_url = "https://api.themoviedb.org/3";


export const getEndpoint = (endpoint) => {
    return api_url + endpoint + "?api_key=" + key
}