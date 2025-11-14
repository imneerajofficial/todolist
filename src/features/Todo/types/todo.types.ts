export interface Todoitem {
  id: number;
  todo: string;
  completed: boolean;
}
export interface TodoListProps {
  item_list: Todoitem[];
  onDelete: (task_id: number) => void;
  onComplete: (task_id: number) => void;
}
export interface AddTodoProps {
  onAdd: (input_val: string) => void;
}
