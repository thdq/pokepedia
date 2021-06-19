import { AxiosStatic } from "axios";
import { PokedexModel } from "../../../domain/models/pokedex-model";
import { PokemonSpecieModel } from "../../../domain/models/pokemon-specie-model";
import { GetPokedex } from "../../../domain/usecases/get-pokedex";
import { GetPokemonSpecie } from "../../../domain/usecases/get-pokemon-specie";

export class RemoteGetPokedex implements GetPokedex, GetPokemonSpecie {
    private readonly axios: AxiosStatic

    constructor (axios : AxiosStatic) {
        this.axios = axios

    }

    async getPokedex (id: number): Promise<PokedexModel> {

        try {

            const pokedex: PokedexModel = await this.axios.get(`/pokedex/${id}`).then(res => res.data)

            return pokedex

        } catch (error) {
            throw new Error()
        }

    }

    async getPokemon (id: number): Promise<PokemonSpecieModel> {

        try {

            const pokemon: PokemonSpecieModel = await this.axios.get(`/pokemon-species/${id}`).then(res => res.data)

            return pokemon

        } catch (error) {
            throw new Error()
        }

    }
}
