import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSMongoose from '@adminjs/mongoose';
import dotenv from 'dotenv';

dotenv.config();

AdminJS.registerAdapter(AdminJSMongoose);

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const adminJs = new AdminJS({ databases: [mongoose], rootPath: '/admin' });
const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      return { email };
    }
    return null;
  },
  cookieName: 'adminjs',
  cookiePassword: 'sessionsecret',
});

app.use(adminJs.options.rootPath, router);

app.use('/api/businesses', (req, res) =>
  res.json({ message: 'Businesses route works!' })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
