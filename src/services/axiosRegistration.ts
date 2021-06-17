import axios from 'axios';
import { App } from 'vue';

export default (app: App): void => {

    const instance = axios.create({
        baseURL: "https://pokeapi.co/api/v2"
    })

    app.provide('$axios', instance);
}
