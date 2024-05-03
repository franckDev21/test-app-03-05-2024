
export default interface User {
  uuid: string;
  firstname: string;
  lastname: string;
  phone_number: string;
  skills: string[] | null;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at?: string;
}