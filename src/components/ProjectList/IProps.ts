import { Project } from "../../types/project";

export type IProps = {
    onDeleteProject: (id: string) => void;
    projects: Project[];
}