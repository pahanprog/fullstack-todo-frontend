export interface TodoItem {
  id: number;
  createdAt: Date;
  complete: boolean;
  description: string;
  username: string;
  email: string;
  edited: boolean;
}

export interface TodoItemPartial {
  usernameOrEmail: string;
  description: string;
}
