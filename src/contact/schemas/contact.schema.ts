import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContactDocument = HydratedDocument<Contact>;

@Schema({ timestamps: true })
export class Contact {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true })
  email: string;

  @Prop({ trim: true })
  phone?: string;

  @Prop({ trim: true })
  service?: string;

  @Prop({ trim: true })
  city?: string;

  @Prop({ required: true })
  message: string;

  @Prop({ default: 'website' })
  source: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
