export type IProps = {
    open: boolean;
    onClose: () => void;
    onClickWithTitle: (title: string) => void;
}