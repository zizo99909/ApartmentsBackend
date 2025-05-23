import Apartment from "../models/apartment";

export const generateUniqueReference = async (): Promise<number> => {
  try {
    let isUnique = false;
    let reference = 0;

    while (!isUnique) {
      reference = Math.floor(1000 + Math.random() * 9000); // 1000–9999
      const existing = await Apartment.findOne({ reference });
      if (!existing) isUnique = true;
    }

    return reference;
  } catch (error) {
    console.error("Error generating unique reference:", error);

    throw new Error("Failed to generate unique reference.");
  }
};
