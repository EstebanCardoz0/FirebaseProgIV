const { getBusinessDataId } = require("../../repositories/business.repository.js");

async function getBusinnesId(userUID) {
  try {
    const business = await getBusinessDataId(userUID);
    return business;
  } catch (error) {

  }
}

module.exports = {
  getBusinnesId
}
//listo