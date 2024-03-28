import {ColorHues} from "@chakra-ui/react";

import {ColorTokens} from "@shared/constants";

export interface AppTheme {
    name: string;
    id: string;
    colors: {
        primary: ColorHues;
        contrast: ColorHues;
        main: ColorHues;
    };
    semanticTokens?: {
        colors: Partial<Record<ColorTokens, string>>;
    },
    body?: string
}
