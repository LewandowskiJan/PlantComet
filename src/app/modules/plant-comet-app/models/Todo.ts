import { STATUS } from './Status';
import { UserDetails } from './UserDetails';

export interface Todo {
  todoId: string;
  userShared: UserDetails[];
  description: string;
  priority: string;
  startDate: Date;
  stopDate: Date;
  uxTemplateUrl: string;
  uxTemplateName: string;
  status: STATUS;
}
