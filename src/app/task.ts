export class Task{
    task_id: number;
    task_title:string;
    assigned:string;
    comments:{comment_id:number,comment_text:string,comment_author:string};
}

export class Board{
    name: string;
}