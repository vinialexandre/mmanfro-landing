import { z } from 'zod';
import validator from 'validator';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .trim(),
  email: z
    .string()
    .email('Email inválido')
    .refine((email) => validator.isEmail(email), 'Email inválido'),
  message: z
    .string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(1000, 'Mensagem deve ter no máximo 1000 caracteres')
    .trim(),
});

export function sanitizeHtml(text: string): string {
  return validator.escape(text);
}

export type ContactFormData = z.infer<typeof contactSchema>;

