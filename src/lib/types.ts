/**
 * Standard interface for records displayed in the Admin Dashboard tables.
 */
export interface AdminRecord {
  id: string;
  internalId?: string | number;
  type: string;
  title?: string;
  student?: string;
  name?: string;
  item?: string;
  role?: string;
  group?: string;
  status: string;
  date?: string;
  createdAt?: string;
  author?: string;
  recipient?: string;
  rawData?: any;
}
