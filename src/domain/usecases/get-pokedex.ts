import { PokedexModel } from "../models/pokedex-model";

export interface GetPokedex {
    getPokedex (id: number): Promise<PokedexModel>
}
