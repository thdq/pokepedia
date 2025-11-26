interface GenericModel {
    name: string
    url: string
}

interface Abilities {
    ability: GenericModel
    is_hidden: boolean
    slot: number
}

interface GameIndices {
    game_index: number
    version: GameIndices
}

interface VersionGroupDetails {
    level_learned_at: number
    move_learn_method: GenericModel
    version_group: GenericModel
}

interface Moves {
    move: GenericModel
    version_group_details: VersionGroupDetails[]
}

interface Sprites {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
}

interface Stats {
    base_stat: number
    effort: number
    stat: GenericModel
}

interface Types {
    slot: number
    type: GenericModel
}

export type PokemonModel = {
    abilities: Abilities[]
    base_experience: number
    forms: GenericModel[]
    game_indices: GameIndices[]
    height: number
    held_items: unknown[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Moves[]
    name: string
    order: number
    past_types: unknown[]
    species: GenericModel
    sprites: Sprites
    stats: Stats[]
    types: Types[]
    weight: number
    trained: boolean;
}
