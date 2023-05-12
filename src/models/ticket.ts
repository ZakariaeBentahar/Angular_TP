import {Student} from './Student';
import {Major} from '../mocks/tickets.mock';

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: Major;
  archived?: boolean;
}
