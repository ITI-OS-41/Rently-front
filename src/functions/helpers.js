import axios from "axios";
import {CLOUDINARY_CLOUD_NAME} from "../config";
import history from "./history";
import toast from "./toast";

function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );

    return JSON.parse(jsonPayload);
}

const getToken = () => {
    return localStorage.getItem("rently-token");
};

const checkTokenValidity = () => {
    const user = JSON.parse(localStorage.getItem('rently-user'));
    if (user) {
        const info = parseJwt(user.token);
        const expiration = new Date(info.exp).getTime() * 1000;
        const now = new Date().getTime();

        console.log("expiration:", expiration)
        console.log("now:", now)
        console.log("minus:", expiration - now)
        if (expiration - now < (1000 * 60 * 60)) {
            localStorage.removeItem("rently-token");
            localStorage.removeItem("rently-user");
            alert('Session expired please login again');
            history.push('/login')
        }
    }
};

const getUserType = (token) => {
    if (token) {
        const info = parseJwt(token);
        return info.role;
    }
};

const isAdmin = (token) => {
    return getUserType(token) === "admin";
};

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

const dateTime = (datetime) => {
    const dateObject = new Date(datetime);
    return dateObject.toLocaleString()
}


const changeQueryParamsURL = (query) => {
    const newURL = window.location.protocol + "//" + window.location.host + window.location.pathname + query;
    window.history.pushState({path: newURL}, '', newURL);
}
const currency = (amount) => {
    return `$ ${amount}`;
}

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}



export {
    shuffle,
    currency,
    getUserType,
    isAdmin,
    checkTokenValidity,
    getToken,
    stripHtml,
    uploadImage,
    dateTime,
    changeQueryParamsURL
}
