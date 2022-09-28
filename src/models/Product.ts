import { getModelForClass, prop } from "@typegoose/typegoose";
import { Comment } from "./Comment";
//import  {nanoid} from 'nanoid';

class Product {
  @prop({ type: String, required: true, trim: true })
  name: string;

  @prop({ required: true })
  sku: string;

  @prop({ type: Number, default: 0 })
  price: number;

  @prop({ type: String, lowercase: true })
  url: string;

  @prop({ type: () => [String] })
  tags: string[];

  @prop({ type: () => [Comment] })
  comments: Comment[];
}

const ProductModel = getModelForClass(Product);
export default ProductModel;
