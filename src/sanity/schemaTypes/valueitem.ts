import { defineField, defineType } from 'sanity'

export const ValueItem = defineType({
  name: 'valueItem',
  title: 'Value Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Value Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
})