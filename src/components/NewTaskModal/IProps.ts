export type IProps = {
    id?: string;
    open: boolean;
    onClose: () => void;
    onDelete?: () => void;
    onClick: (
        title: string,
        tags: string[],
        status: string,
        risk: string,
        description: string
    ) => void;
}