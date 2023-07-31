export interface Key {
  id?: string;
  value: string;
  status: 'unassigned' | 'assigned';
}
