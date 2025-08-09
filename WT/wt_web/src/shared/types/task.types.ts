import { ReactNode } from "react";
import { Priority } from "./priority.types";
import { Status } from "./status.types";

export interface Task {
    id: string,
    nametask: string,
    datecreate: string,
    dateestimatedcompletion: string,
    dateend: string,
    document: [],
    authorid: string,
    executorid: string,
    statusid: Status,
    priorityid: Priority,
    datechange: string,
    info: string,
}