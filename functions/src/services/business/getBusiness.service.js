const { getBusinessDataId } = require("../../repositories/business.repository.js");

async function getBusinessId(businessId) {
  try {
    const business = await getBusinessDataId(businessId);
    return business;
  } catch (error) {

  }
}

module.exports = {
  getBusinessId
}
//listoa