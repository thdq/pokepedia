import { PokemonModel } from "../models/pokemon-model"


export interface GetPokemon {
    getPokemon(id: number): Promise<PokemonModel>

}
