import { STATUS } from './Status';
import { PRIORITY } from './Priority';

export class Task {
  todoId: string;
  userShared: string[];
  description: string;
  priority: PRIORITY = PRIORITY.normal;
  startDate: Date;
  endDate: Date;
  uxTemplateUrl: string;
  uxTemplateName: string;
  status: STATUS = STATUS.unassigned;
}
