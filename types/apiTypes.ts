export interface User {
  firstName: string;
  lastName: string;
  email: string;
  license: string;
  state: string;
}

export interface UserAuth extends User {
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}