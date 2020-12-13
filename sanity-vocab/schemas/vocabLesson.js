export default {
  name: 'vocab_lesson',
  title: 'Vocab Lessons',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Lesson Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Lesson Content',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
    }
  ],
  preview: {
    select: {
      levelNumber: 'level',
      title: 'title'
    },
    prepare: ({ levelNumber, title }) => {
      const level = `Level ${levelNumber}`;
      return {
        title: title,
        subtitle: level,
      }
    }
  }
}