import { Todo } from './Todo';
import { Plant } from './Plant';

export interface UserDetails {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  todo: Todo[];
  plants: Plant[];
}
