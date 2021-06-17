interface Results {
    name: string
    url: string
}

export interface GenerationModel {
   count: number
   next: string
   previous: string
   results: Results[]
}
