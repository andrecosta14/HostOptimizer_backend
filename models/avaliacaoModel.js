const mongoose = require('mongoose');

const AvaliacaoSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    configuracaoId: { type:mongoose.Schema.Types.ObjectId, ref: 'Configuracao', required:true },// Reference to Configuracao model
    eCleaning: { type: Number, required: true },
    eComfort: { type: Number, required: true },
    eService: { type: Number, required: true },
    eAddservices: { type: Number, required: true },
    isConfiguracao:{ type: Boolean, required: true },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

module.exports = mongoose.model('Avaliacao', AvaliacaoSchema);