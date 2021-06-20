import { AllPokemonInfo } from "../models/all-pokemon-info";

export interface GetAllPokemonInfo {
    getAllPokemonInfo (id: number): Promise<AllPokemonInfo>
}
