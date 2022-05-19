import js2xmlparser from 'js2xmlparser'
import Address from '../models/Address.js'
import Client from '../models/Client.js'
import Sale from '../models/Sale.js'

export default class ClientController {
    static async createClient(req, res) {
        const { firstname, lastname, cpf, birthdate } = req.body
        const { number, street, district, city, state, country, zipcode } = req.body
        if (!firstname || firstname == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'O nome do cliente deve ser preenchido!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'O nome do cliente deve ser preenchido!'
                    })
                )
            }
        }
        if (!lastname || lastname == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'O sobrenome do cliente deve ser preenchido!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'O sobrenome do cliente deve ser preenchido!'
                    })
                )
            }
        }
        if (!cpf || cpf == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'O CPF do cliente deve ser preenchido!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'O CPF do cliente deve ser preenchido!'
                    })
                )
            }
        }
        if (!birthdate || birthdate == '') {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'A data de nascimento do cliente deve ser preenchida!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'A data de nascimento do cliente deve ser preenchida!'
                    })
                )
            }
        }
        const clientExists = await Client.findOne({ where: { cpf: cpf } })
        if (clientExists) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'Cliente já cadastrado!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'Cliente já cadastrado!'
                    })
                )
            }
        }
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
            const client = await Client.create({
                first_name: firstname,
                last_name: lastname,
                cpf: cpf,
                birth_date: birthdate,
                active: true
            })
            await client.setAddresses(address, { through: { started: false } })
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ client })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(200).send(js2xmlparser.parse('client', client))
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
    static async getAllClient(req, res) {
        try {
            const clients = await Client.findAll({
                include: [Address, Sale],
                raw: true
            })
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ clients })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(200).send(js2xmlparser.parse('clients', clients))
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
    static async getClient(req, res) {
        const { id } = req.params
        console.log("id: ", id)
        try {
            const client = await Client.findOne({ where: { id: id } })
            console.log("client: ", client);
            if (!client) {
                if (
                    req.headers['response-type'] === 'json' ||
                    req.headers['response-type'] === undefined
                ) {
                    return res.status(422).json({
                        message: 'Cliente não encontrado!'
                    })
                } else if (req.headers['response-type'] === 'xml') {
                    res.header('Content-Type', 'application/xml')
                    return res.status(422).send(
                        js2xmlparser.parse('Error', {
                            message: 'Cliente não encontrado!'
                        })
                    )
                }
            }
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ client })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(200).send(js2xmlparser.parse('client', client))
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
    static async updateClient(req, res) {
        const { id } = req.body
        const client = await Client.findOne({ where: { id: id } })
        if (!client) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'Cliente não encontrado!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'Cliente não encontrado!'
                    })
                )
            }
        }
        try {
            const client = {
                first_name: req.body.firstname,
                last_name: req.body.lastname,
                cpf: req.body.cpf,
                birth_date: req.body.birthdate,
                active: req.body.active
            }
            const clientUpdated = await Client.update(client, { where: { id: id } })
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ clientUpdated })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res
                    .status(200)
                    .send(js2xmlparser.parse('clientUpdated', clientUpdated))
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

    static async deleteClient(req, res) {
        const { id } = req.params
        console.log("req.body", req.params);
        console.log("id:",id);
        const client = await Client.findOne({ where: { id: id } })
        if (!client) {
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(422).json({
                    message: 'Cliente não encontrado!'
                })
            } else if (req.headers['response-type'] === 'xml') {
                res.header('Content-Type', 'application/xml')
                return res.status(422).send(
                    js2xmlparser.parse('Error', {
                        message: 'Cliente não encontrado!'
                    })
                )
            }
        }
        try {
            const client = {
                active: false
            }
            const clientDeleted = await Client.update(client, { where: { id: id } })
            if (
                req.headers['response-type'] === 'json' ||
                req.headers['response-type'] === undefined
            ) {
                return res.status(200).json({ clientDeleted })
            } else if (req.headers['response-type'] == 'xml') {
                res.header('Content-Type', 'application/xml')
                return res
                    .status(200)
                    .send(js2xmlparser.parse('clientDeleted', clientDeleted))
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
