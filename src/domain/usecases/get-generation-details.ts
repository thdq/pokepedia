import { GenerationDetailsModel } from "../models/generation-details-model";


export interface GetDetailsGeneration {
    getDetailsGeneration(id: string): Promise<GenerationDetailsModel>

}
