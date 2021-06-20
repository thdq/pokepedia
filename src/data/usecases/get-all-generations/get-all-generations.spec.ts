import axios, { AxiosStatic } from "axios"
import { RemoteGetGenerations } from "./get-all-generations"
jest.mock('axios');

export interface SutTypes {
    sut: RemoteGetGenerations
    axiosStub: jest.Mocked<typeof axios>
}

const makeAxios = (): jest.Mocked<AxiosStatic> => {

    const mockedAxios = axios as jest.Mocked<typeof axios>

    mockedAxios.get.mockClear().mockImplementationOnce(async () => {
        return Promise.resolve({
            data: {
                results: []
            }
        })
    })

    return mockedAxios

}

const makeSut = (): SutTypes => {

    const axiosStub = makeAxios()
    const sut = new RemoteGetGenerations(axiosStub)

    return {
        sut,
        axiosStub
    }

}

describe('RemoteGetGenerations usecase', () => {

    afterEach(() => jest.resetAllMocks())

    test("Should call getAllGenerations axios get with '/generation' URL", async () => {

        const { sut, axiosStub } = makeSut()

        const axiosSpy = jest.spyOn(axiosStub, 'get')

        await sut.getAllGenerations()

        expect(axiosSpy).toHaveBeenCalledWith("/generation")

    })

    test('Should not call getDetailsGeneration if axios request throws', async () => {

        const { sut, axiosStub } = makeSut()

        const getDetailsGenerationSpy = jest.spyOn(sut, 'getDetailsGeneration')

        jest.spyOn(axiosStub, 'get').mockImplementationOnce(async () => {
            return Promise.reject()
        })

        await sut.getAllGenerations()

        expect(getDetailsGenerationSpy).not.toHaveBeenCalled()

    })

    test("Should call getDetailsGeneration axios get with '/generation/:id' URL", async () => {

        const { sut, axiosStub } = makeSut()

        const id = "1"

        const axiosSpy = jest.spyOn(axiosStub, 'get')

        await sut.getDetailsGeneration(id)

        expect(axiosSpy).toHaveBeenCalledWith(`/generation/${id}`)

    })

})
