import { CodeService, CustomCodeExampleBody } from "@entities/code"
import { queryKeysEnum } from "@shared/constants"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useAddCustomCodeExample = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (body: CustomCodeExampleBody) => CodeService.addCustomCodeExample(body),
        onSettled: async () => {
            await queryClient.invalidateQueries({
                queryKey: [queryKeysEnum.codeExample]
            })
        }
    })
}
