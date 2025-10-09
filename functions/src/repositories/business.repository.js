// const { firebaseAdmin } = require('../utils/firebase'); el profe tiene pero yo no
const admin = require('firebase-admin');

const db = admin.database();

async function getBusinessDataId(uid) {
  const userRef = db.ref(`users/${uid}`);

  //obtencion de los datos
  const userSnapshot = await userRef.once('value');
  const userData = userSnapshot.val();

  if (!userData) {
    throw new Error('User not found');
  }
  const businessIds = Object.keys(userData.business);
  if (businessIds.length === 0) {
    return []
  }



  const businessDetailsPromises = companiesIds.map(async (businessId) => {

    const businessRef = db.ref(`business/${businessId}/businessData`)
    const snapshot = await businessRef.once('value')
    if (snapshot.exists()) {
      return { id: businessId, ...snapshot.val() };
    } else {
      console.warn(`No data found for business ID: ${businessId}`);
      return { id: businessId, businessData: null };
    }
  });

  //espera a que todas las promesas se resuelvan y devuelve los datos de las compañias
  const businessData = await Promise.all(companyDatailsPromises);
  return businessData;

}

async function createBusinessDataBase(data) {

}

module.exports = { getBusinessDataId, createBusinessDataBase }

