export const paginatePosts = {
  paginate: {
    take: 5,
    orderBy: {
      createdAt: 'desc',
    },
  },
  menus: {
    where: [
      ['All posts', null],
      ['Published posts', { published: true }],
      ['Draft posts', { published: false }],
    ],
    orderBy: [
      ['Sort by Create', { createdAt: 'desc' }],
      ['Sort by Update', { updatedAt: 'desc' }],
      ['Sort by Update rev', { updatedAt: 'asc' }],
      ['Sort by Create rev', { createdAt: 'asc' }],
    ],
  },
}

export const paginateCategories = {
  paginate: {
    take: 5,
    orderBy: {
      id: 'desc',
    },
  },
}
