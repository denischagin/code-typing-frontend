import {ITextRequestParams, TTextResponse} from "@entities/text";
import {baseQueryV1} from "@shared/api";

export class TextService {
    static async fetchText(params?: ITextRequestParams) {
        const response = await baseQueryV1<TTextResponse>({
            url: '/texts',
            params: params ?? undefined,
        });
        return response.data
    }

}
