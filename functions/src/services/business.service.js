const getBusinnesId = require('./business/getBusiness.service.js')

const createBusinessData = require('./business/createBusiness.service.js')

module.exports = {
  ...getBusinnesId,
  ...createBusinessData

}
//listo