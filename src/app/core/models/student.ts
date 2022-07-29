import { BaseModel } from './base-model';

export class Student extends BaseModel {
  name: string = '';
  email: string = '';
  cpf: string = '';
  telephone: string = '';
  registration: string = '';
}
