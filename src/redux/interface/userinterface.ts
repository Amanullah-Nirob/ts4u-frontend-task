export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
export interface verifyotpReguest {
  otp: string;
  email: string;
}
