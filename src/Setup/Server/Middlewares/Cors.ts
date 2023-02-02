import cors from "cors"

export const Cors = cors({
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'authorization', 'Authorization', 'x-auth-user-token', 'x-admin-token'],
  exposedHeaders: ['*', 'Authorization']
})
