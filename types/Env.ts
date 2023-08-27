import { config } from 'dotenv';
import { ValuesType } from './Generics';

config();

const { env } = process;

export const Env = {
  SMTP_HOST: env['SMTP_HOST'] || '',
  SMTP_PORT: env['SMTP_PORT'] || '',
  SMTP_FROM_EMAIL: env['SMTP_FROM_EMAIL'] || '',
  SMTP_TO_EMAIL: env['SMTP_TO_EMAIL'] || '',
  SMTP_USER: env['SMTP_USER'] || '',
  SMTP_PASSWORD: env['SMTP_PASSWORD'] || ''
} as const;

export type EnvType = ValuesType<typeof Env>;
