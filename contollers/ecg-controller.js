const service = require('../domain/ecg/ecg-service')

const controller = {
    postECG: (req, res, next) => {
        if (service.save(req.body) ) {
            res.status(202).send()
        } else {
            res.status(500).send()
        }
    }
}

module.exports = controller
