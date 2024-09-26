import { ObjectId, model, Schema } from "mongoose";

export interface experienciasInterface{
    id: number,
    user: ObjectId,
    description: string
}

export const experienciasSchema = new Schema<experienciasInterface>({
    id: Number,
    user: {type: Schema.Types.ObjectId, ref:'user'},
    description: String
})

export const experienciasofDB = model<experienciasInterface>('experiencias',experienciasSchema)