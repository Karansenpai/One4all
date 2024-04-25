import mongoose, { Model, Document } from "mongoose";

export interface ICgpaModel {
    RollNo?: string;
    data?: {
        sem: number,
        cgpa: number,
    }[],
}

export interface ICgpaModelDocument extends ICgpaModel, Document {
    createdAt: Date;
    updatedAt: Date;
}

const cgpaSchema = new mongoose.Schema<ICgpaModelDocument>(
    {
        RollNo: {
            type: String,
            required: true,
        },
        data: {
            type: [
                {
                    sem: {
                        type: Number,
                        required: true,
                    },
                    cgpa: {
                        type: Number,
                        default: 0,
                    },
                },
            ],
            required: true,
        },

    },
    { timestamps: true }

);

const Cgpa: Model<ICgpaModelDocument> = mongoose.models?.Cgpa || mongoose.model("Cgpa", cgpaSchema);

export default Cgpa;