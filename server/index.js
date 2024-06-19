
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const authRouter = require('./routes/authRoute');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
const labs_items = require('./models/labs_items');
const school_items = require("./models/school_items")
const canteen_items = require("./models/canteen_items")
const sports_items = require("./models/sports_items")
const User =require('./models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { main } = require('./newconnection');
// const User =require('./models/userModel');
const createError = require('./utils/appError')

app.use(express.json());
app.use(bodyParser.json());
app.use(cors(
  {
    origin: ["https://school-inventory-management-system.vercel.app","http://localhost:5173"],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin']
  }
))
//2) Route


mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Succesfull")

}).catch((err) => {
  console.log("Error: ", err)
})

app.get("/", (req, res) => {
  res.json("Hello");
})
// module.exports = { main };
// main();
// app.use('/api/auth', authRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

app.post('/api/auth/signup', async (req, res, next) => {
  try {
    const user1 = await User.findOne({ email: req.body.email });

    if (user1) {
      return next(new createError("User already exits!", 400))
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    //Assign JWT (json web Token) to user
    const token = jwt.sign({ _id: newUser._id }, 'secretkey123', {
      expiresIn: '90d',
    });
    res.status(201).json({
      status: 'success',
      message: 'User registered sucesssfully',
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        // role: newUser.role,
      },
    })
  } catch (error) {
    next(error);
  }
});

app.post('/api/auth/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user2 = await User.findOne({ email });

    if (!user2) return next(new createError('User not found', 404));

    const isPasswordValid = await bcrypt.compare(password, user2.password);

    if (!isPasswordValid) {
      return next(new createError('Invalid email or password', 401))
    }
    const token = jwt.sign({ _id: user2._id }, 'secretkey123', {
      expiresIn: '90d',
    });
    res.status(200).json({
      status: 'success',
      token,
      message: 'Logged in successfully',
      user: {
        _id: user2._id,
        name: user2.name,
        email: user2.email,
        // role: user.role,
      }
    })
  } catch (error) {
    next(error)
  }
})

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'https://school-inventory-management-system.vercel.app');
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.header('Access-Control-Allow-Credentials', 'true');
//   if (req.method === 'OPTIONS') {
//     res.sendStatus(204);
//   } else {
//     next();
//   }
// });
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://school-inventory-management-system.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.sendStatus(200);
});
app.post('/labs_items', async (req, res) => {
  try {
    const newItem = new labs_items(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.post('/school_items', async (req, res) => {
  try {
    const newItem = new school_items(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.post('/sports_items', async (req, res) => {
  try {
    const newItem = new sports_items(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.post('/canteen_items', async (req, res) => {
  try {
    const newItem = new canteen_items(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/labs_items', async (req, res) => {
  try {
    const items = await labs_items.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/canteen_items', async (req, res) => {
  try {
    const items = await canteen_items.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/sports_items', async (req, res) => {
  try {
    const items = await sports_items.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/school_items', async (req, res) => {
  try {
    const items = await school_items.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// app.delete('/canteen_items', async (req, res) => {
//   try {
//     const ids = req.body.ids;
//     await canteen_items.deleteMany({ _id: { $in: ids } });
//     res.status(200).json({ message: 'Items deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

app.delete('/school_items', async (req, res) => {
  const { ids } = req.body;
  await school_items.deleteMany({ _id: { $in: ids } });
  res.send({ message: 'Resources deleted successfully' });
});

app.delete('/canteen_items', async (req, res) => {
  const { ids } = req.body;
  await canteen_items.deleteMany({ _id: { $in: ids } });
  res.send({ message: 'Resources deleted successfully' });
});

// app.delete('/sports_items', async (req, res) => {
//   const { ids } = req.body;
//   await sports_items.deleteMany({ _id: { $in: ids } });
//   res.send({ message: 'Resources deleted successfully' });
// });

app.delete('/labs_items', async (req, res) => {
  const { ids } = req.body;
  await labs_items.deleteMany({ _id: { $in: ids } });
  res.send({ message: 'Resources deleted successfully' });
});
app.delete('/school_items/:id', async (req, res) => {
  try {
    const deletedItem = await school_items.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.put('/school_items/:id', async (req, res) => {
  try {
    const updatedItem = await school_items.findByIdAndUpdate(
      req.params.id,
      {
        item_name: req.body.item_name,
        unit: req.body.unit,
        quantity: req.body.quantity,
        purchase_date: req.body.purchase_date,
        expiry_date: req.body.expiry_date,
        purchase_price: req.body.purchase_price
      },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete('/labs_items/:id', async (req, res) => {
  try {
    const deletedItem = await labs_items.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.put('/labs_items/:id', async (req, res) => {
  try {
    const updatedItem = await labs_items.findByIdAndUpdate(
      req.params.id,
      {
        item_name: req.body.item_name,
        unit: req.body.unit,
        dimension: req.body.dimension,
        weight: req.body.weight,
        barcode: req.body.barcode,
        subject: req.body.subject,
        refrigirator: req.body.refrigirator,
        hazardious: req.body.hazardious,
        cost: req.body.cost,
        purchase_date: req.body.purchase_date,
        expiry_date: req.body.expiry_date,
      },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete('/sports_items/:id', async (req, res) => {
  try {
    const deletedItem = await sports_items.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.put('/sports_items/:id', async (req, res) => {
  try {
    const updatedItem = await sports_items.findByIdAndUpdate(
      req.params.id,
      {
        item_name: req.body.item_name,
        sports_name: req.body.sports_items,
        manufacturer: req.body.manufacturer,
        brand: req.body.brand,
        barcode: req.body.barcode,
        cost: req.body.cost,
        vendor_name: req.body.vendor_name,
        quantity: req.body.quantity,
        purchase_date: req.body.purchase_date,
      },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete('/canteen_items/:id', async (req, res) => {
  try {
    const deletedItem = await canteen_items.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.put('/canteen_items/:id', async (req, res) => {
  try {
    const updatedItem = await canteen_items.findByIdAndUpdate(
      req.params.id,
      {
        item_name: req.body.item_name,
        unit: req.body.unit,
        quantity: req.body.quantity,
        category: req.body.category,
        refrigirator: req.body.refrigirator,
        manufactur_date: req.body.manufactur_date,
        expiry_date: req.body.expiry_date,
        purchase_date: req.body.purchase_date,
        purchase_price: req.body.purchase_price,
        selling_price: req.body.selling_price,
      },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});