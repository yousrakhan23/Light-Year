import { defineField, defineType } from "sanity";

export const Lndingpage = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text'
        }),
        defineField({
          name: 'ctaButton',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'Shop Now'
        }),
        defineField({
          name: 'heroImage',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true
          }
        })
      ]
    }),
    defineField({
      name: 'valuesSection',
      title: 'Our Values',
      type: 'array',
      of: [{ type: 'valueItem' }]
    })
  ]
})