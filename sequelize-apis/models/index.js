


'use strict';

const { Sequelize } = require('sequelize');
const express = require('express');
const UsersModel = require('./faqs'); 
const EmployeeModel= require('./employee'); 
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const user = require('./faqs');
const PORT = process.env.PORT || 3001;
app.use(cors());

// Create a Sequelize instance
const sequelize = new Sequelize('graphql', 'postgres', 'prasad', {
  host: 'localhost',
  dialect: 'postgres',
});

const Users = UsersModel(sequelize); 
const Employee= EmployeeModel(sequelize); 
app.use(bodyParser.json());

const syncDatabase = async () => {
  try {
    await Users.sync(); 
    await Employee.sync(); 
    console.log("The table for the Users model was just created!"); 
  } catch (error) {
    console.error("Error syncing database:", error);
  }
};

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post('/api/add-faqs', async (req, res) => {
  try {
    const { name, question, date } = req.body; // Updated variable names
    const newUser = await Users.create({
     name,
     question,
     date
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/get-faqs', async (req, res) => {
  try {
    const allUsers = await Users.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/getempdetails', async (req, res) => {
  try {
    const allUsers = await Employee.findAll();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/add-emp', async (req, res) => {
  try {
    const { name, role, email } = req.body; // Updated variable names
    const newUser = await Employee.create({
     name,
     role,
     email
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/api/get-faqs/:category', async (req, res) => {
  const { category } = req.params; 
  try {
    const allUsers = await Users.findAll(
      {
              where: {
                category
              }
            }
    );
    res.status(200).json(allUsers);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



const { Op } = require('sequelize');
const employee = require('./employee');
app.patch('/api/update-user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { answer, category } = req.body;

    const updatedUser = await Users.findOne({ where: { id } });

    updatedUser.answer = answer;
    updatedUser.category = category;
 

    await updatedUser.save(); // Save the updated user details

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});




syncDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to synchronize with the database:', error);
  });

