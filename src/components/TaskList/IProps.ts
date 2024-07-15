export interface IProps {
    id: string;
    title: string;
    onDelete: (id: string) => void;
}