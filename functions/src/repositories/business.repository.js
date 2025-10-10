const { firebaseAdmin } = require("../utils/firebase"); // el profe tiene pero yo no
const admin = require("firebase-admin");

const db = admin.database(); //del profe

async function getBusinessDataId(businessId) {
  const businessRef = db.ref(`business/${businessId}`);

  //obtencion de los datosa
  const businessSnapshot = await businessRef.once("value");
  let businessData = businessSnapshot.val();
  businessData.id = businessRef.key;
  return businessData; 
}

async function createBusinessDataBase(data) {
  console.log("CREATE business REPOSITORY", data);
  const businessRef = await db.ref(`business/`).push(data);
  const businessSnapshot = await businessRef.once("value");
  let value = businessSnapshot.val();
  value.id = businessRef.key;
  return value;
}

module.exports = { getBusinessDataId, createBusinessDataBase };
