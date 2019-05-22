import { BoxTaskComment } from './BoxTaskComment.module';

export class BoxTask{
    constructor(public task_id: number,
        public  task_title:string,
        public   assigned:string,
        public comment:BoxTaskComment[]){}
}