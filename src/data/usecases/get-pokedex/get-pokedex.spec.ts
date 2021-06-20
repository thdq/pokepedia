import axios, { AxiosStatic } from "axios"
import { instance } from "../../../services/axiosRegistration"
import { RemoteGetPokedex } from "./get-pokedex"
import MockAdapter from "axios-mock-adapter"

export interface SutTypes {
    sut: RemoteGetPokedex
    axiosStub: jest.Mocked<typeof instance>
}

const mockRequests = (idPokemon: number): void => {

    const mock = new MockAdapter(instance)

    mock.onGet(`/pokemon/${idPokemon}`).reply(200, {
            descriptions: [],
            id: 1,
            is_main_series: true,
            name: "bulbasaur",
            pokemon_entries: [],
            region: {
                name: "kanto",
                url: ""
            },
            version_groups: []
    })

    mock.onGet(`/pokemon-species/${idPokemon}`).reply(200, {
        base_happiness: idPokemon,
        capture_rate: idPokemon,
        color: {
            name: "",
            url: ""
        },
        egg_groups: [],
        evolution_chain: {},
        evolves_from_species: {},
        flavor_text_entries: [],
        form_descriptions: [],
        forms_switchable: true,
        gender_rate: idPokemon,
        genera: [],
        generation: {
            name: "",
            url: ""
        },
        growth_rate: {
            name: "",
            url: ""
        },
        habitat: {
            name: "",
            url: ""
        },
        has_gender_differences: true,
        hatch_counter: idPokemon,
        id: idPokemon,
        is_baby: true,
        is_legendary: true,
        is_mythical: true,
        name: "",
        names: [],
        order: idPokemon,
        pal_park_encounters: [],
        pokedex_numbers: [],
        shape: {
            name: "",
            url: ""
        },
        varieties: []
})

}

const makeAxios = (idPokemon: number): jest.Mocked<AxiosStatic> => {

    mockRequests(idPokemon)

    const axiosStub = instance as jest.Mocked<typeof axios>

    return axiosStub

}

const makeSut = (idPokemon: number): SutTypes => {

    const axiosStub = makeAxios(idPokemon)
    const sut = new RemoteGetPokedex(axiosStub)

    return {
        sut,
        axiosStub
    }

}

describe('RemoteGetPokedex usecase', () => {

    test('Should call getPokemon with correct value', async () => {

        const { sut } = makeSut(3)

        const getPokemonSpy = jest.spyOn(sut, 'getPokemon')

        const id = 3

        await sut.getAllPokemonInfo(id)

        expect(getPokemonSpy).toHaveBeenCalledWith(id)

    })

})
