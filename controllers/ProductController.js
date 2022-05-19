import js2xmlparser from 'js2xmlparser'
import Product from '../models/Product.js'
import Section from '../models/Section.js'

export default class ProductController {
    static async createProduct(req, res) {
        const {
            productname,
            price,
            description,
            technicalinformation,
            quantity,
            sectionid
        } = req.body
        if (!productname || productname == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res
                    .status(422)
                    .json({ message: 'O nome do produto deve ser informado!' })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'O nome do produto deve ser informado!'
                    })
                )
            }
        }
        if (!price || price == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res
                    .status(422)
                    .json({ message: 'O preço do produto deve ser informado!' })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'O preço do produto deve ser informado!'
                    })
                )
            }
        }
        if (!description || description == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res
                    .status(422)
                    .json({ message: 'A descrição do produto deve ser informada!' })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'A descrição do produto deve ser informada!'
                    })
                )
            }
        }
        if (!technicalinformation || technicalinformation == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'As informações técnicas do produto devem ser informadas!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'As informações técnicas do produto devem ser informadas!'
                    })
                )
            }
        }
        if (!quantity || quantity == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'A quantidade do produto deve ser informada!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'A quantidade do produto deve ser informada!'
                    })
                )
            }
        }
        if (!sectionid || sectionid == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'A seção do produto deve ser informada!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'A seção do produto deve ser informada!'
                    })
                )
            }
        }
        const sectionExists = await Section.findOne({ where: { id: sectionid } })
        if (!sectionExists) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'Seção não cadastrada!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'Seção não cadastrada!'
                    })
                )
            }
        }
        const productExists = await Product.findOne({
            where: { product_name: productname }
        })
        if (productExists) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'Produto já cadastrado!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'Produto já cadastrado!'
                    })
                )
            }
        }
        try {
            const product = await Product.create({
                product_name: productname,
                price,
                description,
                technical_information: technicalinformation,
                quantity,
                active: true,
                SectionId: sectionid
            })
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ product })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(200).send(js2xmlparser.parse('Product', product))
            }
        } catch (error) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(500).json({ error })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(500).send(js2xmlparser.parse('error', error))
            }
        }
    }
    static async getAllProducts(req, res) {
        try {
            const product = await Product.findAll({
                include: Section,
                raw: true
            })
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ product })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(200).send(js2xmlparser.parse('Product', product))
            }
        } catch (error) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(500).json({ error })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(500).send(js2xmlparser.parse('error', error))
            }
        }
    }
    static async getProduct(req, res) {
        const { id } = req.params
        try {
            const product = await Product.findOne({
                where: {
                    id: id
                },
                include: Section,
                raw: true
            })
            if (!product) {
                if (
                    req.headers['response-type'] === 'json' ||
                    req.headers['response-type'] === undefined
                ) {
                    return res.status(422).json({
                        message: 'Produto não encontrado!'
                    })
                } else if (req.headers['response-type'] === 'xml') {
                    res.header('Content-Type', 'application/xml')
                    return res.status(422).send(
                        js2xmlparser.parse('Error', {
                            message: 'Produto não encontrado!'
                        })
                    )
                }
            }
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ product })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(200).send(js2xmlparser.parse('product', product))
            }
        } catch (error) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(500).json({ error })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(500).send(js2xmlparser.parse('error', error))
            }
        }
    }
    static async updateProduct(req, res) {
        const {
            id,
            productname,
            price,
            description,
            technicalinformation,
            quantity,
            sectionid
        } = req.body
        const sectionExists = await Section.findOne({ where: { id: sectionid } })
        if (!sectionExists) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'Seção não cadastrada!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'Seção não cadastrada!'
                    })
                )
            }
        }
        const product = await Product.findOne({
            where: {
                id: id
            }
        })
        if (!product) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'Produto não encontrado!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'Produto não encontrado!'
                    })
                )
            }
        }
        try {
            const product = {
                product_name: productname,
                price,
                description,
                technical_information: technicalinformation,
                quantity,
                SectionId: sectionid,
                active: req.body.active
            }
            const productUpdated = await Product.update(product, {
                where: { id: id }
            })
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ productUpdated })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res
                    .status(200)
                    .send(js2xmlparser.parse('Product', productUpdated))
            }
        } catch (error) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(500).json({ error })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(500).send(js2xmlparser.parse('error', error))
            }
        }
    }
    static async deleteProduct(req, res) {
        const { id } = req.params
        const product = await Product.findOne({
            where: {
                id: id
            }
        })
        if (!product) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'Produto não encontrado!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'Produto não encontrado!'
                    })
                )
            }
        }
        try {
            const product = {
                active: false
            }
            const productDeleted = await Product.update(product, {
                where: { id: id }
            })
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ productDeleted })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res
                    .status(200)
                    .send(js2xmlparser.parse('Product', productDeleted))
            }
        } catch (error) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(500).json({ error })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(500).send(js2xmlparser.parse('error', error))
            }
        }
    }
}
