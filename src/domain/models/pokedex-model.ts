interface GenericModel {
    name: string
    url: string
}

interface Descriptions {
    description: string
    language: GenericModel
}

interface PokemonEntries {
    entry_number: string
    pokemon_species: GenericModel
}

export interface PokedexModel {
    descriptions: Descriptions[]
    id: number
    is_main_series: boolean
    name: string
    pokemon_entries: PokemonEntries[]
    region: GenericModel
    version_groups: GenericModel[]
}
