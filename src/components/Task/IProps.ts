import { Task } from "../../types/task";

export type IProps = Task & {
    onClick: () => void;
}