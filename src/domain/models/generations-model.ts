import { GenerationDetailsModel } from '../models/generation-details-model'
interface Results {
    name: string
    url: string
    details: GenerationDetailsModel
}

export interface GenerationModel {
   count: number
   next: string
   previous: string
   results: Results[]
}
