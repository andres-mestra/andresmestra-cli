export const listNavEditor = {
  title: 'Manage',
  items: [
    {
      text: 'posts',
      icon: 'icon-text',
      head: ['title', 'status', 'last update'],
    },
    {
      text: 'tags',
      icon: 'icon-bookmark',
      head: ['tag', 'slug', 'no. of posts'],
    },
    {
      text: 'users',
      icon: 'icon-v-card',
      head: ['title', 'status', 'last update'],
    },
  ],
  active: {
    text: 'posts',
    icon: 'icon-text',
    head: ['title', 'status', 'last update'],
  },
}
