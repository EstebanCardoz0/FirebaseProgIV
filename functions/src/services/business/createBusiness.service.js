const {  createBusinessDataBase } = require("../../repositories/business.repository.js");

async function createBusinessData
  (data) {
  try {
    // console.log('CREATE business SERVICE', data)
    const business = await createBusinessDataBase(data);
    return business;
  } catch (error) {

  }
}

module.exports = {
  createBusinessData

}
//listo