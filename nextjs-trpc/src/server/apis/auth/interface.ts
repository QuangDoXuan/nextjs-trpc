export interface UserLoginParams {
  username: string;
  password: string;
}

export interface RegisterUserParams extends UserLoginParams {}