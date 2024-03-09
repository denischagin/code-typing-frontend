export interface CodeLoadingProps {
    maxLoadingCount?: number;
    delay?: number;
    symbol?: string;
    emptySymbol?: string;
    title?: string;
    px?: number | string;
    onSuccess?: () => void;
}