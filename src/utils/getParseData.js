export function getParseData(data, API_BASE_EASYBROKER, API_BASE) {
  return {
    ...data,
    ...(data.pagination && {
      pagination: {
        ...data.pagination,
        next_page:
          data.pagination?.next_page?.replace(API_BASE_EASYBROKER, API_BASE) ||
          null,
      },
    }),
  };
}
