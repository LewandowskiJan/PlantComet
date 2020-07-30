import { UserDetails } from './UserDetails';

export class Plant {
  name: string;
  category: string;
  userShared: UserDetails[];
  wateringDates: Date[];
  wateringLast: Date;
}
