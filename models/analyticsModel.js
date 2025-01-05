const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
    qualAnalytics: {
        typeHousing: { type: String, required: true },
    },
    quantAnalytics: {
        avgeCleaning: { type: Number, required: true },
        avgeComfort: { type: Number, required: true },
        avgeService: { type: Number, required: true },
        avgeAddservices: { type: Number, required: true },
    },
    configuracaoId: { type:mongoose.Schema.Types.ObjectId, ref: 'Configuracao', required:true },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

module.exports = mongoose.model('Analytics', AnalyticsSchema);
