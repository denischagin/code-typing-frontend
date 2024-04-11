import { PaginationItem, PaginationPanel } from "@shared/ui/pagination"

export const PaginationDown = () => {
    return (
        <PaginationPanel>
            {["i = 0", "--i"].map((text, index) => (
                <PaginationItem
                    key={text}
                    px="30px"
                    borderRadius={0}
                    borderLeft={"1px solid"}
                    borderColor={index !== 0 ? "main.500" : "transparent"}
                >
                    {text}
                </PaginationItem>
            ))}
        </PaginationPanel>
    )
}
