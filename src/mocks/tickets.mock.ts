import { Ticket } from '../models/ticket';
import {STUDENTS_MOCK} from './students.mock';

const dateToday: Date = new Date();
export enum Major {
  SI = 'SI',
  GE = 'GE'
}

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in London',
    description: '',
    date: dateToday,
    student: STUDENTS_MOCK[1],
    major: Major.SI,
    archived: false
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCK[2],
    major: Major.GE,
    archived: false
  },
];
