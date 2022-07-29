import { ErrorTailorConfig } from '@ngneat/error-tailor';

export const errorTailorConfig: ErrorTailorConfig = {
  errors: {
    useValue: {
      required: 'Este campo é requerido.',
      cnpj: 'O valor informado não é um CNPJ válido.',
      cpf: 'O valor informado não é um CPF válido.',
      email: 'O valor informado não é um email válido.',
      minlength: ({ requiredLength, actualLength }) => `Valor mínimo ${requiredLength}, atual ${actualLength}`,
      mask: 'O valor informado está incorreto.',
      date: 'O valor informado não é uma data válida.'
    }
  }
};
