export const paginationDefaultSetting = {
  page: 1,
  pageSize: 10
}

export const paginationParams = ({ page, pageSize }: { page: number, pageSize: number}) => {
  return {
    skip: (page - 1) * pageSize,
    take: pageSize
  }
}