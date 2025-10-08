require("../config/environment")

const functions = require('firebase-functions');
const express = require('express');
const cors = require("cors");

const { getBusinessId } = require('../src/services/business.service')
