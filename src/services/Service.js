import request from 'reqwest';
import { URL } from '../constants/AppConstants';

const url = URL;

class Service {
    getUsers() {
        return request({
            url: `${url}wp-json/wp/v2/artists/?filter[posts_per_page]=-1`,
            type: 'json'
        })
    }

    getUser(uid) {
        return request({
            url: `${url}wp-json/wp/v2/artists/${uid}`,
            type: 'json'
        })
    }
    
    postUser(uid, data) {
        return request({
            url: `${url}wp-json/wp/v2/artists/${uid}`,
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