// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const  labs_items = require('./models/labs_items');
// const school_items = require("./models/school_items")
// const canteen_items = require("./models/canteen_items")
// const sports_items = require("./models/sports_items")

// const authRouter = require('./routes/authRoute')
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use('api/auth', authRouter);

// // Middleware
// app.use(cors());

// app.use(express.json());

// // app.use((err, res, req, next)=>{
// //   err.statusCode = err.statusCode || 500;
// //   err.status= err.status || 'error';

// //   res.status(err.statusCode).json({
// //     status:err.status,
// //     message : err.message,
// //   })
// // })

// // MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/sample').then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // CRUD Routes
// app.post('/labs_items', async (req, res) => {
//   try {
//     const newItem = new labs_items(req.body);
//     const savedItem = await newItem.save();
//     res.status(201).json(savedItem);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// app.post('/school_items', async (req, res) => {
//   try {
//     const newItem = new school_items(req.body);
//     const savedItem = await newItem.save();
//     res.status(201).json(savedItem);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// app.post('/sports_items', async (req, res) => {
//   try {
//     const newItem = new sports_items(req.body);
//     const savedItem = await newItem.save();
//     res.status(201).json(savedItem);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// app.post('/canteen_items', async (req, res) => {
//   try {
//     const newItem = new canteen_items(req.body);
//     const savedItem = await newItem.save();
//     res.status(201).json(savedItem);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// app.get('/labs_items', async (req, res) => {
//   try {
//     const items = await labs_items.find();
//     res.status(200).json(items);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// app.get('/canteen_items', async (req, res) => {
//   try {
//     const items = await canteen_items.find();
//     res.status(200).json(items);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// app.get('/sports_items', async (req, res) => {
//   try {
//     const items = await sports_items.find();
//     res.status(200).json(items);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// app.get('/school_items', async (req, res) => {
//   try {
//     const items = await school_items.find();
//     res.status(200).json(items);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// // app.delete('/canteen_items', async (req, res) => {
// //   try {
// //     const ids = req.body.ids;
// //     await canteen_items.deleteMany({ _id: { $in: ids } });
// //     res.status(200).json({ message: 'Items deleted' });
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// app.delete('/school_items', async (req, res) => {
//   const { ids } = req.body;
//   await school_items.deleteMany({ _id: { $in: ids } });
//   res.send({ message: 'Resources deleted successfully' });
// });

// app.delete('/canteen_items', async (req, res) => {
//   const { ids } = req.body;
//   await canteen_items.deleteMany({ _id: { $in: ids } });
//   res.send({ message: 'Resources deleted successfully' });
// });

// app.delete('/sports_items', async (req, res) => {
//   const { ids } = req.body;
//   await sports_items.deleteMany({ _id: { $in: ids } });
//   res.send({ message: 'Resources deleted successfully' });
// });

// app.delete('/labs_items', async (req, res) => {
//   const { ids } = req.body;
//   await labs_items.deleteMany({ _id: { $in: ids } });
//   res.send({ message: 'Resources deleted successfully' });
// });
// app.delete('/school_items/:id', async (req, res) => {
//   try {
//     const deletedItem = await school_items.findByIdAndDelete(req.params.id);

//     if (!deletedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     res.json({ message: 'Item deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// app.put('/school_items/:id', async (req, res) => {
//   try {
//     const updatedItem = await school_items.findByIdAndUpdate(
//       req.params.id,
//       {
//         name: req.body.name,
//         code: req.body.code,
//         size: req.body.size,
//         population: req.body.population
//       },
//       { new: true }
//     );

//     if (!updatedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     res.json(updatedItem);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// app.delete('/labs_items/:id', async (req, res) => {
//   try {
//     const deletedItem = await labs_items.findByIdAndDelete(req.params.id);

//     if (!deletedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     res.json({ message: 'Item deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// app.put('/labs_items/:id', async (req, res) => {
//   try {
//     const updatedItem = await labs_items.findByIdAndUpdate(
//       req.params.id,
//       {
//         name: req.body.name,
//         code: req.body.code,
//         size: req.body.size,
//         population: req.body.population
//       },
//       { new: true }
//     );

//     if (!updatedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     res.json(updatedItem);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// app.delete('/sports_items/:id', async (req, res) => {
//   try {
//     const deletedItem = await sports_items.findByIdAndDelete(req.params.id);

//     if (!deletedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     res.json({ message: 'Item deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// app.put('/sports_items/:id', async (req, res) => {
//   try {
//     const updatedItem = await sports_items.findByIdAndUpdate(
//       req.params.id,
//       {
//         name: req.body.name,
//         code: req.body.code,
//         size: req.body.size,
//         population: req.body.population
//       },
//       { new: true }
//     );

//     if (!updatedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     res.json(updatedItem);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// app.delete('/canteen_items/:id', async (req, res) => {
//   try {
//     const deletedItem = await canteen_items.findByIdAndDelete(req.params.id);

//     if (!deletedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     res.json({ message: 'Item deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });
// app.put('/canteen_items/:id', async (req, res) => {
//   try {
//     const updatedItem = await canteen_items.findByIdAndUpdate(
//       req.params.id,
//       {
//         name: req.body.name,
//         code: req.body.code,
//         size: req.body.size,
//         population: req.body.population
//       },
//       { new: true }
//     );

//     if (!updatedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     res.json(updatedItem);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const authRouter = require('./routes/authRoute');
const app= express();
const bodyParser = require('body-parser');
require('dotenv').config()
const  labs_items = require('./models/labs_items');
const school_items = require("./models/school_items")
const canteen_items = require("./models/canteen_items")
const sports_items = require("./models/sports_items")
const User =require('./models/userModel');
// const env = require('')

//MIddleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
//2) Route
app.use('/api/auth',authRouter);
// console.log('MongoDB URI:', process.env.MONGODB_URI);

//3) MOngo Db Connection 
mongoose
.connect(process.env.MONGODB_URI,)
.then(()=>console.log('Connected to MongoDb!'))
.catch((error)=> console.error('Failed to connect to MongoDb:',error));



//4)Global Error Handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
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
        item_name:req.body.item_name,
        unit:req.body.unit,
        quantity: req.body.quantity,
        purchase_date:req.body.purchase_date,
        expiry_date:req.body.expiry_date,
        purchase_price:req.body.purchase_price
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
        item_name:req.body.item_name,
        unit:req.body.unit,
        dimension:req.body.dimension,
        weight:req.body.weight,
        barcode:req.body.barcode,
        subject:req.body.subject,
        refrigirator:req.body.refrigirator,
        hazardious:req.body.hazardious,
        cost:req.body.cost,
        purchase_date:req.body.purchase_date,
        expiry_date:req.body.expiry_date,
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
        barcode:req.body.barcode,
        cost:req.body.cost,
        vendor_name:req.body.vendor_name,
        quantity:req.body.quantity,
        purchase_date:req.body.purchase_date,
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
        item_name:req.body.item_name,
        unit:req.body.unit,
        quantity:req.body.quantity,
        category:req.body.category,
        refrigirator:req.body.refrigirator,
        manufactur_date:req.body.manufactur_date,
        expiry_date:req.body.expiry_date,
        purchase_date:req.body.purchase_date,
        purchase_price:req.body.purchase_price,
        selling_price:req.body.selling_price,
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

//5)server
const PORT= process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
});