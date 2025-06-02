import { type SchemaTypeDefinition } from 'sanity'
import { Lndingpage } from './landingpage'
import { ValueItem } from './valueitem'
import { Product } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Lndingpage, ValueItem, Product ],
}
