require('../config/environment')

const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");

const { getBusinessId } = require('../src/services/business.service');
const { validateFirebaseIdToken } = require('../src/utils/middleware');
const { getErrorResponseObject, getSuccessResponseObject } = require('../src/utils/utils');
const { httpStatusCodes } = require('../src/utils/httpstatuscode');

//instanciar una app express
const app = express();
app.use(cors({ origin: true }));

app.get('/', validateFirebaseIdToken, async (req, res) => {
  try {
    const response = await getBusinessId(req.user.uid);
    return res.status(httpStatusCodes.ok).json(response);
  } catch (error) {
    const ErrorResponse = getErrorResponseObject(error, "Algo salio mal");
    return res.status(httpStatusCodes.internalServerError).json(ErrorResponse);
  }
});

app.post('/create-business', validateFirebaseIdToken, async (req, res) => {

  try {
    const data = req.body;
    //const response= await createBusiness(data);
    return res.status(httpStatusCodes.created).json(response);
  } catch (error) {
    const ErrorResponse = getErrorResponseObject(error, "ALgo salió mal");
    return res.status(httpStatusCodes.internalServerError).json(ErrorResponse);
  }
});

app.put('/update-business', validateFirebaseIdToken, async (req, res) => {

  try {
    const data = req.body;
    //const response= await updateBusinessData(data);
    return res.status(httpStatusCodes.created).json(response);
  } catch (error) {
    const ErrorResponse = getErrorResponseObject(error, "ALgo salió mal");
    return res.status(httpStatusCodes.internalServerError).json(ErrorResponse);
  }
});

app.delete('/delete-business', validateFirebaseIdToken, async (req, res) => {

  try {
    const data = req.body;
    //const response= await updateBusiness(data.businessId);
    return res.status(httpStatusCodes.created).json(response);
  } catch (error) {
    const ErrorResponse = getErrorResponseObject(error, "ALgo salió mal");
    return res.status(httpStatusCodes.internalServerError).json(ErrorResponse);
  }
});

//listo al parecer
