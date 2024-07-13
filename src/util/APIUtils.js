import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}
export function getOffline(type) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    const url = `${API_BASE_URL}/questionChatOffline?type=${type}`;

    return request({
        url: url, 
        method: 'GET'
    }).then(response => {
        return response;
    }).catch(error => {
        console.error(error);
        return Promise.reject(error);
    });
}
export function setAPIkey(userid, api) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    const url = `${API_BASE_URL}/addAPIkey?userid=${userid}&api=${api}`;

    return request({
        url: url, 
        method: 'POST'
    }).then(response => {
        return response;
    }).catch(error => {
        console.error(error);
        return Promise.reject(error);
    });
}
export function questionChat(prompt, userid) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    const url = `${API_BASE_URL}/questionChat?prompt=${prompt}&userid=${userid}`;

    return request({
        url: url, 
        method: 'GET'
    }).then(response => {
        return response;
    }).catch(error => {
        console.error(error);
        return Promise.reject(error);
    });
}
export function addClosed(score, time, clickOff, userid) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    const url = `${API_BASE_URL}/addClosed?score=${score}&time=${time}&clickOff=${clickOff}&userid=${userid}`;

    return request({
        url: url, 
        method: 'POST'
    }).then(response => {
        return response;
    }).catch(error => {
        console.error(error);
        return Promise.reject(error);
    });
}
export function personalInfo( userid ) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    const url = `${API_BASE_URL}/personalInfo?userid=${userid}`;

    return request({
        url: url, 
        method: 'GET'
    }).then(response => {
        console.log( response );
        return response;
    }).catch(error => {
        console.error(error);
        return Promise.reject(error);
    });
}
export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}
/*
    @GetMapping("/personalInfo")
    public ResponseEntity<?> personalInfo(@RequestParam long userid) {
*/