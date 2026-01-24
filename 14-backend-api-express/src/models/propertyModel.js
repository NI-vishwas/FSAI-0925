import mongoose from "mongoose";

// Schema
const propertySchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Location name is required'],
      trim: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true,
      uppercase: true,
      minlength: 2,
      maxlength: 2
    },
    photo: {
      type: String,
      required: true
    },
    availableUnits: {
      type: Number,
      default: 0,
      min: 0
    },
    wifi: {
      type: Boolean,
      default: false
    },
    laundry: {
      type: Boolean,
      default: false
    }
  }, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
  });

const Property = mongoose.model('Property', propertySchema);

export default Property;
