interface VersionGroups {
    name: string
    url: string
}

interface Types {
    name: string
    url: string
}

interface PokemonSpecies {
    name: string
    url: string
}

interface Language {
    name: string
    url: string
}

interface Names {
    language: Language
    name: string
}

interface Moves {
    name: string
    url: string
}

interface Region {
    name: string
    url: string
}

interface Abilities {
    name: string
    url: string
}

export interface GenerationDetailsModel {
    abilities: Abilities[]
    id: number
    main_region: Region
    moves: Moves[]
    name: string
    names: Names[]
    pokemon_species: PokemonSpecies[]
    types: Types[]
    version_groups: VersionGroups[]
}
