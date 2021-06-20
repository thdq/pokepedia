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

    test("Should call axios get with '/generation' URL", async () => {

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

})
