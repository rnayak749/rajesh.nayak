import axios from 'axios';

export function fetchUsers() {
    let request = axios.get('https://api.github.com/users');
    console.log(request);
    return {
        type : 'getUsers',
        payload : request
      };
}