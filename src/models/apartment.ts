import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema({
  name: {
    // name of the apartment
    type: String,
    required: true,
  },
  reference: {
    // reference number of the apartment
    type: Number,
    required: true,
    unique: true,
  },
  price: {
    // price of the apartment
    type: String,
    required: true,
  },
  bedrooms: {
    // number of bedrooms in the apartment
    type: String,
    required: true,
  },
  bathrooms: {
    // number of bathrooms in the apartment
    type: String,
    required: true,
  },
  size: {
    // size of the apartment
    type: String,
    required: true,
  },
  delivery: {
    // delivery date of the apartment
    type: String,
    required: true,
  },
  location: {
    // location of the apartment
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    validate: {
      validator: async function (url: string) {
        // Check if the URL is a valid image URL
        return /\.(jpeg|jpg|gif|png|webp)$/i.test(url);
      },
      message: (props: any) => `${props.value} is not a valid image URL!`,
    },
    required: false,
  },
  about: {
    // description of the apartment
    type: String,
    required: false,
  },
  compound: {
    // compound name of the apartment
    type: String,
    required: true,
  },
  saleType: {
    // sale type of the apartment
    type: String,
    required: true,
  },
  finishing: {
    // finishing type of the apartment
    type: String,
    required: true,
  },
  downPayment: {
    // down payment amount for the apartment
    type: String,
    required: true,
  },
  installmentYears: {
    // number of years for installment payment
    type: Number,
    required: true,
  },
  installment: {
    // monthly installment amount
    type: String,
    required: true,
  },
});

export default mongoose.model("Apartment", apartmentSchema);
