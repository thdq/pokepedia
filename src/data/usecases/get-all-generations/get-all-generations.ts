import { AxiosStatic } from 'axios'
import { GenerationModel } from '../../../domain/models/generations-model'
import { GenerationDetailsModel } from '../../../domain/models/generation-details-model'
import { GetAllGenerations } from '../../../domain/usecases/get-all-generations'
import { GetDetailsGeneration } from '../../../domain/usecases/get-generation-details'

export class RemoteGetAllGenerations implements GetAllGenerations, GetDetailsGeneration {
    private readonly axios: AxiosStatic

    constructor (axios : AxiosStatic) {
        this.axios = axios

    }

    async getAllGenerations (): Promise<GenerationModel> {

        const generations: GenerationModel = await this.axios.get("/generation").then(res => res.data)

        for (const gen of generations.results) {
            const details = await this.getDetailsGeneration(gen.url)

            gen.details = details
        }

        return generations

    }

    async getDetailsGeneration (url: string): Promise<GenerationDetailsModel> {

        const details: GenerationDetailsModel = await this.axios.get(url).then(res => res.data)

        return details
    }
}
