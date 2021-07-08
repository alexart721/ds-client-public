// export const BASE_AUTH_URL = 'http://localhost/auth';
// export const BASE_API_URL = 'http://localhost/api';
export const BASE_AUTH_URL = 'http://localhost:4002';
export const BASE_API_URL = 'http://localhost:4000';
import { UserAuth, User, UserLogin } from "../types";

// Check token validity for register page
export const checkToken = (token: string, roles: string): Promise<Response> => {
  return fetch(BASE_AUTH_URL + '/checkAccess', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${token}`
    },
    body: JSON.stringify({ roles }),
  });
};

// GET user for register page
export const fetchUser = (token: string, userId: string): Promise<Response> => {
  return fetch(BASE_API_URL + `/users/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${token}`
    },
  });
};

// PUT to update user password
export const setUserPassword = (token: string, user: UserAuth): Promise<Response> => {
  return fetch(BASE_AUTH_URL + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${token}`
    },
    body: JSON.stringify(user),
  });
};

// POST to create new Pending user
export const createNewUser = (user: User): Promise<Response> => {
  return fetch(BASE_API_URL + '/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};

// POST to login a user
export const loginUser = (user: UserLogin): Promise<Response> => {
  return fetch(BASE_AUTH_URL + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};