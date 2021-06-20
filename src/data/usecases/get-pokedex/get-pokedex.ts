import { AxiosStatic } from "axios";
import { PokedexModel } from "../../../domain/models/pokedex-model";
import { PokemonSpecieModel } from "../../../domain/models/pokemon-specie-model";
import { PokemonModel } from "../../../domain/models/pokemon-model";
import { GetPokedex } from "../../../domain/usecases/get-pokedex";
import { GetPokemonSpecie } from "../../../domain/usecases/get-pokemon-specie";
import { GetAllPokemonInfo } from "../../../domain/usecases/get-all-pokemon-info";
import { AllPokemonInfo } from "../../../domain/models/all-pokemon-info";
import { GetPokemon } from "../../../domain/usecases/get-pokemon";

export class RemoteGetPokedex implements GetAllPokemonInfo, GetPokedex, GetPokemonSpecie, GetPokemon {
    private readonly axios: AxiosStatic

    constructor (axios : AxiosStatic) {
        this.axios = axios

    }

    async getAllPokemonInfo (id: number): Promise<AllPokemonInfo> {

        const pokemon = await this.getPokemon(id)
        const pokemonSpecie = await this.getPokemonSpecie(id)

        return {
            pokemon,
            pokemonSpecie
        }

    }

    async getPokedex (id: number): Promise<PokedexModel> {

        try {

            const pokedex: PokedexModel = await this.axios.get(`/pokedex/${id}`).then(res => res.data)

            return pokedex

        } catch (error) {
            throw new Error()
        }

    }

    async getPokemon (id: number): Promise<PokemonModel> {

        try {

            const pokemon: PokemonModel = await this.axios.get(`/pokemon/${id}`).then(res => res.data)

            return pokemon

        } catch (error) {
            throw new Error()
        }

    }

    async getPokemonSpecie (id: number): Promise<PokemonSpecieModel> {

        try {

            const pokemonSpecie: PokemonSpecieModel = await this.axios.get(`/pokemon-species/${id}`).then(res => res.data)

            return pokemonSpecie

        } catch (error) {
            throw new Error()
        }

    }
}
