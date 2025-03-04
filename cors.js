export const corsConfig = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://storytom.com'
    : 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 3600
};
