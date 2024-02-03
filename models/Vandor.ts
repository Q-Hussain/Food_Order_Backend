import mongoose, { Schema, Document, Model } from 'mongoose';

interface VandorDoc extends Document {
    name: string;
    ownerName: string;
    foodType: [string];
    pincode: string;
    address: string;
    phone: string;
    email: string;
    password: string;
    salt: string;
    serviceAvailable: string;
    converImages: [string];
    rating: number;
    // foods: any;
}

const VandorSchema = new Schema({
    name: { type: String, require: true },
    ownerName: { type: String, require: true },
    foodType: { type: [String] },
    pincode: { type: String, require: true },
    address: { type: String },
    phone: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    salt: { type: String, require: true },
    serviceAvailable: { type: Boolean },
    converImages: { type: [String] },
    rating: { type: Number },
    // foods: [{
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: 'food'
    // }]
}, {
    timestamps: true
});

const Vandor = mongoose.model<VandorDoc>('vandor', VandorSchema);

export { Vandor };