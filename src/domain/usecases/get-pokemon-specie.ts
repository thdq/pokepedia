import { PokemonSpecieModel } from "../models/pokemon-specie-model"


export interface GetPokemonSpecie {
    getPokemonSpecie(id: number): Promise<PokemonSpecieModel>

}
