import axios from "axios";
import {CLOUDINARY_CLOUD_NAME} from "../config";

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

const getToken = () =>{
    return localStorage.getItem('rently-token')
}

const checkTokenValidity = () => {
    const token = localStorage.getItem('rently-token')
    if (token) {
        const info = parseJwt(token)
        const expiration = new Date(info.exp).getTime() * 1000;
        const now = new Date().getTime();

        if (expiration - now < 0) {
            localStorage.removeItem('rently-token')
        }
    }
}

const getUserType = (token) => {
    if (token) {
        const info = parseJwt(token)
        return info.role
    }
}

const isAdmin = (token) => {
    return getUserType(token) === 'admin'
}

const stripHtml = (html) => {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}


const uploadImage = async (image, folder) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", `rently-upload-service-${folder}`);
    data.append("cloud_name", CLOUDINARY_CLOUD_NAME);

    return await axios.post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, data)
}



export { getUserType, isAdmin, checkTokenValidity ,getToken, stripHtml, uploadImage}
