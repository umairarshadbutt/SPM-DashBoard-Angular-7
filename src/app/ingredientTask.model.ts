export class IngredientTask{
    constructor(public task_id: number,
        public  task_title:string,
        public   assigned:string,
        public  comments:{comment_id:number,comment_text:string,comment_author:string}){}
}