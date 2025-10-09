const {  createBusinessDataBase } = require("../../repositories/business.repository.js");

async function createBusinessData
  (data) {
  try {
    const business = await createBusinessDataBase(userUID);
    return business;
  } catch (error) {

  }
}

module.exports = {
  createBusinessData

}
//listo