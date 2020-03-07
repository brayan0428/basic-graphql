const mongoose = require('mongoose')
const {MONGO_URI} = require('../config/index.js')

mongoose.connect(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(console.log('Conectado')).catch(console.error)

