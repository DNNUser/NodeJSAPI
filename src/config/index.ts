import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  defaultView: process.env.DEFAULT_VIEW || 'doctor',
};