// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class faqs extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   faqs.init({
//     name: DataTypes.STRING,
//     question: DataTypes.STRING,
//     date: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'faqs',
//   });
//   return faqs;
// };




const { DataTypes } = require('sequelize');
const { sequelize } = require('.')


module.exports = (sequelize) => {
    const Users = sequelize.define('faqs', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        question: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return Users;
};