const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser'); //sini dah
const authRoutes = require('./routes/auth');
const habitRoutes = require('./routes/habits');
const cors = require('cors')
const app = express();
//cookie dah
app.use(express.json());
app.use(cookieParser());

// allow requests from any host in dev
app.use(
  cors({
    origin: true,           // reflect request origin
    credentials: true,      // allow cookies
  })
);
// this myyyy brigdeeee to crosssss 
//app.use(cors({
//	origin:'http://localhost:5173',
//	credentials: true

//}));

// store a lot of stupid stuff
mongoose.connect('mongodb://localhost:27017/lumepath')
  .then(() => console.log('✅ MongoDB connected (lumepath)'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);

app.listen(3000, () => console.log('🚀 Server running at http://localhost:3000'));

