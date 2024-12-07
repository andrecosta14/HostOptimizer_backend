const mongoose = require('mongoose');

const ConfiguracaoSchema = new mongoose.Schema({
  nameHousing: { type: String, required: true },
  typeHousing: { type: String, required: true },
  nRooms: { type: Number, required: true },
  nBedrooms: { type: Number, required: true },
  nWC: { type: Number, required: true },
  eCleaning: { type: Number, required: true },
  eComfort: { type: Number, required: true },
  eService: { type: Number, required: true },
  eAddservices: { type: Number, required: true },
  location: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

module.exports = mongoose.model('Configuracao', ConfiguracaoSchema);