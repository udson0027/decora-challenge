export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

