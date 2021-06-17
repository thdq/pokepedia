import { GenerationModel } from "../models/generations-model";

export interface GetAllGenerations {
    getAllGenerations(): Promise<GenerationModel>
}
