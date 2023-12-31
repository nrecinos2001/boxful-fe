import { PackageType } from './package';

export type OrderType = {
  collectingAddress: string;
  date: Date;
  names: string;
  lastnames: string;
  email: string;
  userAddress: string;
  state: string;
  city: string;
  reference: string;
  indications: string;
  phone: string;
  packages: PackageType[];
};
