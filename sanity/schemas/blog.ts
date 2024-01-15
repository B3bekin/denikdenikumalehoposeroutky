export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Blog Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'titleImage',
      title: 'Title Image',
      type: 'image',
    },
    {
        name: 'author',
        title: 'Author',
        type: 'string',
    },
    {
        name: 'date',
        title: 'Date',
        type: 'date',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: '3 min', value: '3min'},
          {title: '5 min', value: '5min'},
          {title: '10 min', value: '10min'},
        ],
      },
    },
    {
      name: 'smallDescription',
      title: 'Small Description',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
