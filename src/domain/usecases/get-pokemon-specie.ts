import { PokemonSpecieModel } from "../models/pokemon-specie-model"


export interface GetPokemonSpecie {
    getPokemon(id: number): Promise<PokemonSpecieModel>

}
