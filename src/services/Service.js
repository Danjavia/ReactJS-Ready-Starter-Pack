import request from 'reqwest';
import { URL } from '../constants/AppConstants';

const url = URL;

class Service {
    getUsers() {
        return request({
            url: `${url}users`,
            type: 'json'
        })
    }

    getUser(uid) {
        return request({
            url: `${url}users/${uid}`,
            type: 'json'
        })
    }
    
    postUser(uid, data) {
        return request({
            url: `${url}users/${uid}`,
            method: 'post',
            type: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
    }
}

export default new Service();