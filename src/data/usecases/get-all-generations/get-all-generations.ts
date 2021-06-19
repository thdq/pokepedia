import { AxiosStatic } from 'axios'
import { GenerationModel } from '../../../domain/models/generations-model'
import { GenerationDetailsModel } from '../../../domain/models/generation-details-model'
import { GetAllGenerations } from '../../../domain/usecases/get-all-generations'
import { GetDetailsGeneration } from '../../../domain/usecases/get-generation-details'

export class RemoteGetGenerations implements GetAllGenerations, GetDetailsGeneration {
    private readonly axios: AxiosStatic

    constructor (axios : AxiosStatic) {
        this.axios = axios

    }

    async getAllGenerations (): Promise<GenerationModel> {

        const generations: GenerationModel = await this.axios.get("/generation").then(res => res.data)

        for (const gen of generations.results) {

            const id = gen.url.substring(gen.url.lastIndexOf("/")-1, gen.url.lastIndexOf("/"))

            const details = await this.getDetailsGeneration(id)

            gen.details = details
        }

        return generations

    }

    async getDetailsGeneration (id: string): Promise<GenerationDetailsModel> {

        const details: GenerationDetailsModel = await this.axios.get(`/generation/${id}`).then(res => res.data)

        return details
    }
}
