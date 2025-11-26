import axios from 'axios';
import { App } from 'vue';

const instance = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})

export default (app: App): void => {
    app.provide('$axios', instance);
}

export {
    instance
}
