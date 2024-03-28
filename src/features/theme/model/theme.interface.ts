import {ColorHues} from "@chakra-ui/react";

export interface AppTheme {
    name: string;
    id: string;
    colors: {
        primary: ColorHues;
        contrast: ColorHues;
        main: ColorHues;
    };
    semanticTokens?: {
        colors: {
            [key: string]: string;
        };
    }
}
