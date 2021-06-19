interface GenericModel {
    name: string
    url: string
}

interface EvolutionChain {
    url: string
}

interface FlavorTextEntires {
    flavor_text: string
    language: GenericModel
    version: GenericModel
}

interface Genera {
    genus: string
    language: GenericModel
}

interface Names {
    language: GenericModel
    name: string
}

interface PalParkEncounters {
    area: GenericModel
    base_score: number
    rate: number
}

interface PokedexNumbers {
    entry_number: number
    pokedex: GenericModel
}

interface Varietes {
    is_default: boolean
    pokemon: GenericModel
}

export interface PokemonSpecieModel {
    base_happiness: number
    capture_rate: number
    color: GenericModel
    egg_groups: GenericModel[]
    evolution_chain: EvolutionChain
    evolves_from_species: unknown
    flavor_text_entries: FlavorTextEntires[]
    form_descriptions: unknown[]
    forms_switchable: boolean
    gender_rate: number
    genera: Genera[]
    generation: GenericModel
    growth_rate: GenericModel
    habitat: GenericModel
    has_gender_differences: boolean
    hatch_counter: number
    id: number
    is_baby: boolean
    is_legendary: boolean
    is_mythical: boolean
    name: string
    names: Names[]
    order: number
    pal_park_encounters: PalParkEncounters[]
    pokedex_numbers: PokedexNumbers[]
    shape: GenericModel
    varieties: Varietes[]
}
