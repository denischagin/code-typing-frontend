export interface FontSizeItemProps {
    fontSize: number;
    name: string;
    fullName: string;
    onChangeFontSize: (fontSize: number) => void;
    isActive: boolean;
}