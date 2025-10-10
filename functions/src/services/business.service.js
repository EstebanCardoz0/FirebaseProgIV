const getBusinessId = require('./business/getBusiness.service.js')

const createBusinessData = require('./business/createBusiness.service.js')

module.exports = {
  ...getBusinessId,
  ...createBusinessData

}
//listo