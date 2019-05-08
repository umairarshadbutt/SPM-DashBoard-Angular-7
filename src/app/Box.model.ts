import { BoxTask } from './BoxTask.model';

export class Box {
    constructor(public board_id:number, public name: string, public task:BoxTask[]) {}
  }