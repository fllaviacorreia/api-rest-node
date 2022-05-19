import js2xmlparser from 'js2xmlparser'
import Address from '../models/Address.js'
import Client from '../models/Client.js'

export default class AddressController {
    static async createAddress(req, res) {
        const { number, street, district, city, state, country, zipcode } = req.body
        const { id } = req.body
        if (!number || number == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'O número do endereço deve ser preenchido!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'O número do endereço deve ser preenchido!'
                    })
                )
            }
        }
        if (!street || street == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'A rua do endereço deve ser preenchida!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'A rua do endereço deve ser preenchida!'
                    })
                )
            }
        }
        if (!district || district == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'O bairro do endereço deve ser preenchido!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'O bairro do endereço deve ser preenchido!'
                    })
                )
            }
        }
        if (!city || city == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'A cidade do endereço deve ser preenchida!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'A cidade do endereço deve ser preenchida!'
                    })
                )
            }
        }
        if (!state || state == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'O estado do endereço deve ser preenchido!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'O estado do endereço deve ser preenchido!'
                    })
                )
            }
        }
        if (!country || country == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'O país do endereço deve ser preenchido!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'O país do endereço deve ser preenchido!'
                    })
                )
            }
        }
        if (!zipcode || zipcode == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'O CEP do endereço deve ser preenchido!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'O CEP do endereço deve ser preenchido!'
                    })
                )
            }
        }
        if (!id || id === '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'O cliente precisa ser informado!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'O cliente precisa ser informado!'
                    })
                )
            }
        }
        try {
            const address = (await Address.findOne({
                    where: {
                        number,
                        street,
                        district,
                        city,
                        state,
                        country,
                        zipcode
                    }
                })) ?
                await Address.findOne({
                    where: {
                        number,
                        street,
                        district,
                        city,
                        state,
                        country,
                        zipcode
                    }
                }) :
                await Address.create({
                    number,
                    street,
                    district,
                    city,
                    state,
                    country,
                    zipcode
                })
            const client = await Client.findOne({ where: { id: id } })
            await client.addAddresses(address, { through: { started: false } })
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ address })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(200).send(js2xmlparser.parse('address', address))
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

    static async getAllAddress(req, res) {
        try {
            const addresses = await Address.findAll()
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ addresses })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(200).send(js2xmlparser.parse('addresses', addresses))
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
    static async getAddress(req, res) {
        const id = req.params.id
        try {
            const address = await Address.findOne({ where: { id: id } })
            if (!address) {
                if (
                    req.headers['response-type'] === 'json' ||
                    req.headers['response-type'] === undefined
                ) {
                    return res.status(422).json({
                        message: 'Endereço não encontrado!'
                    })
                } else if (req.headers['response-type'] === 'xml') {
                    res.header('Content-Type', 'application/xml')
                    return res.status(422).send(
                        js2xmlparser.parse('Error', {
                            message: 'Endereço não encontrado!'
                        })
                    )
                }
            }
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ address })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(200).send(js2xmlparser.parse('address', address))
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
    static async updateAddress(req, res) {
        const { id } = req.body
        const addressExists = await Address.findOne({ where: { id: id } })
        if (!addressExists) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'Endereço não encontrado!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'Endereço não encontrado!'
                    })
                )
            }
        }
        try {
            const address = {
                number: req.body.number,
                street: req.body.street,
                district: req.body.district,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country,
                zipcode: req.body.zipcode
            }
            const addressUpdated = await Address.update(address, {
                where: { id: id }
            })
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ addressUpdated })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res
                    .status(200)
                    .send(js2xmlparser.parse('addressUpdated', addressUpdated))
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
    static async deleteAddress(req, res) {
        const { id } = req.params
        const addressExists = await Address.findOne({ where: { id: id } })
        if (!addressExists) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'Endereço não encontrado!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'Endereço não encontrado!'
                    })
                )
            }
        }
        try {
            const addressDeleted = await Address.destroy({ where: { id: id } })
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ addressDeleted })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res
                    .status(200)
                    .send(js2xmlparser.parse('addressDeleted', addressDeleted))
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
