export function getParseData(data, url, API_BASE_EASYBROKER, API_BASE) {
  const next_page =
    data?.pagination?.next_page?.replace(API_BASE_EASYBROKER, API_BASE) || null;

  const prev_page = next_page
    ? next_page?.replace(
        `page=${data?.pagination?.page + 1 || 1}`,
        `page=${data?.pagination?.page - 1 || 1}`
      )
    : (API_BASE + url).replace(
        `page=${data?.pagination?.page || 1}`,
        `page=${data?.pagination?.page - 1 || 1}`
      );

  return {
    ...data,
    ...(data.pagination && {
      pagination: {
        ...data.pagination,
        next_page: next_page,
        ...(data.pagination.page !== 1 && {
          prev_page: prev_page,
        }),
      },
    }),
  };
}
