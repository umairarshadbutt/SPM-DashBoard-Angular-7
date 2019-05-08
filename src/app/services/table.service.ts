import { Box } from '../Box.model';
import { Subject } from 'rxjs/Subject';
import { BoxTask } from '../Task.model';
import { DropListRef } from '@angular/cdk/drag-drop';
export class TableService{
    ingredientsChanged = new Subject<Box[]>();
    ingredientsChangedTask = new Subject<BoxTask[]>();
  startedEditing = new Subject<number>();
    private  Boxes: Box[] = [
            new Box(1,'Backlog', [new BoxTask(1, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),new BoxTask(2, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),
            new BoxTask(3, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),new BoxTask(4, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),
            new BoxTask(5, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),new BoxTask(6, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),
            new BoxTask(7, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),new BoxTask(8, "Create a Kanaban Board tool","https://image.shutterstock.com/image-photo/white-marble-head-young-woman-450w-1235805859.jpg"),
          ]),
            new Box(2,'Todo', []),
            new Box(3,'In Progress', []),
            new Box(4,'Done',[]),
          ];
          getIngredients() {
            return this.Boxes.slice();
          }
          getIngredient(index:number){
            return this.Boxes[index];
          }
        
          addIngredient(ingredient: Box) {
            this.Boxes.push(ingredient);
            this.ingredientsChanged.next(this.Boxes.slice());
          }
        
          addIngredients(ingredients: Box[]) {
            // for (let ingredient of ingredients) {
            //   this.addIngredient(ingredient);
            // }
            this.Boxes.push(...ingredients);
            this.ingredientsChanged.next(this.Boxes.slice());
          }
          updateIngredient(index: number, newIngredient:Box){
            this.Boxes[index] = newIngredient;
            this.ingredientsChanged.next(this.Boxes.slice());
          }
          deleteIngredient(index: number){
            this.Boxes.splice(index,1);
            this.ingredientsChanged.next(this.Boxes.slice());
          }

          getTasks() {
            for (let Box of this.Boxes){
              
            return Box.task.slice();
            }
          }
          getTask(index:number){
            for (let Box of this.Boxes){
              for(let task of Box.task){ 
                if (task.task_id==index){
            return task;
                }
          }
            }
          }



          addTask(tasks: BoxTask) {
            for (let Box of this.Boxes){
              if(Box.board_id==1){
            Box.task.push(tasks);
            this.ingredientsChangedTask.next(Box.task.slice());
          }
            }
          }
        
          addTasks(tasks: BoxTask[]) {
           
            for (let Box of this.Boxes){
              if(Box.board_id==1){
            Box.task.push(...tasks);
            this.ingredientsChangedTask.next(Box.task.slice());
            }
          }
          }
          updateTask(index: number, newIngredient:BoxTask){
            for (let Box of this.Boxes){
              for(let temp in Box.task){
                let value=Box.task[temp]
                if (value.task_id==index){
                  Box.task[temp] = newIngredient;
            this.ingredientsChangedTask.next(Box.task.slice());
            }}}
          }
          deleteTask(tId: number){
            for(let task_ of this.Boxes){
            task_.task.forEach( (task, index) => {
            if(task.task_id === tId) task_.task.splice(index,1);
            this.ingredientsChangedTask.next(task_.task.slice());
            });
            }
            }
         
        }