export const paginationDefaultSetting = {
  limit: 1,
}

export const paginationParams = ({ limit, cursor }: { limit: number, cursor?: string | null | undefined }) => {
  return {
    take: limit + 1,
    cursor: cursor ? { id: cursor } : undefined
  }
}