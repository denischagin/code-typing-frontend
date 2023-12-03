import {ITextRequestParams, TTextResponse} from "@entities/text";
import {fakerApiBaseQuery} from "@shared/api";

export class TextService {
    static async fetchText(params?: ITextRequestParams) {
        const response = await fakerApiBaseQuery<TTextResponse>({
            url: '/texts',
            params: params ?? undefined,
        });
        return response.data
    }
}
