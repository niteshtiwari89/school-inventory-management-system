const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Models
const labs_items = require('./models/labs_items');
const school_items = require('./models/school_items');
const canteen_items = require('./models/canteen_items');
const sports_items = require('./models/sports_items');
const User = require('./models/userModel');

// App setup
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  origin: ['https://school-inventory-management-system.vercel.app'],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.log('MongoDB connection error: ', err);
});

// Routes
app.get('/', (req, res) => {
  res.json('Hello');
});

app.post('/api/auth/signup', async (req, res, next) => {
  try {
    const user1 = await User.findOne({ email: req.body.email });

    if (user1) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '90d',
    });

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
});

app.post('/api/auth/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '90d',
    });

    res.status(200).json({
      status: 'success',
      token,
      message: 'Logged in successfully',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
});

const createResourceRoutes = (model, resourceName) => {
  app.post(`/${resourceName}`, async (req, res) => {
    try {
      const newItem = new model(req.body);
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.get(`/${resourceName}`, async (req, res) => {
    try {
      const items = await model.find();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.put(`/${resourceName}/:id`, async (req, res) => {
    try {
      const updatedItem = await model.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }

      res.json(updatedItem);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  app.delete(`/${resourceName}/:id`, async (req, res) => {
    try {
      const deletedItem = await model.findByIdAndDelete(req.params.id);

      if (!deletedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }

      res.json({ message: 'Item deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  app.delete(`/${resourceName}`, async (req, res) => {
    const { ids } = req.body;
    try {
      await model.deleteMany({ _id: { $in: ids } });
      res.json({ message: 'Resources deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
};

createResourceRoutes(labs_items, 'labs_items');
createResourceRoutes(school_items, 'school_items');
createResourceRoutes(canteen_items, 'canteen_items');
createResourceRoutes(sports_items, 'sports_items');

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Internal server error:', err.message);
  console.error(err.stack); // Log the stack trace for debugging
  res.status(500).json({ status: 'error', message: err.message });
});

// Server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
