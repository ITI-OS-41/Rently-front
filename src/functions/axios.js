import axios from 'axios';
import { SERVER } from '../config';
import { checkTokenValidity } from './helpers';


// check if token if expired or not, and delete it if expired


const instance = axios.create({
    baseURL: SERVER
});


const TOKEN = localStorage.getItem('rently-token') || '';

if (TOKEN) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
    checkTokenValidity()
}

instance.defaults.headers.post['Content-Type'] = 'application/json';


instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});



const { get, post, put, delete: destroy } = instance;
export { get, post, put, destroy };

export default instance
