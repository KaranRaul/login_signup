import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // Correctly mount the router

// Database Connection
mongoose
    .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/myapp', {

    })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error('Database connection error:', err));
