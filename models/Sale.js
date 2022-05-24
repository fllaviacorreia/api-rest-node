import { DataTypes } from 'sequelize'
import connection from '../db/connection.js'
import Product from './Product.js'
import SaleHasProduct from './SaleHasProduct.js'

const Sale = connection.define('sale', {
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    installment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total_value: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    latitude: {
    	type: DataTypes.STRING,
        allowNull: false
    },
     longitude: {
    	type: DataTypes.STRING,
        allowNull: false
    }
})

Product.belongsToMany(Sale, { through: SaleHasProduct })
Sale.belongsToMany(Product, { through: SaleHasProduct })

Sale.hasMany(SaleHasProduct)
SaleHasProduct.belongsTo(Sale)
Product.hasMany(SaleHasProduct)
SaleHasProduct.belongsTo(Product)

export default Sale
