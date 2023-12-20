/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default { httpRequest, get };
// Local / development
// TEST / Staging
// UAT
// Production
