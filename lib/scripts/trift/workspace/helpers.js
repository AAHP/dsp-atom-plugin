'use babel';

import { perPage } from '../../../config';

const commonTypes = require('../../../../js-contracts/js-node/common_types');

export const getListObject_paginated = (client) => {
  const mergeListObject = (acc = { objects: [] }, nextPage) => ({
    parent: nextPage.parent,
    objects: [ ...acc.objects || [], ...nextPage.objects ],
  });

  const loadAll = (merge, page = 1, acc) => method => (...params) =>
    method(null, ...params, new commonTypes.PageParams({ page, perPage }))
    .then(
      result =>
        result.pagination.hasNext
          ? loadAll(merge, page + 1, merge(acc, result))(method)(...params)
          : merge(acc, result));

  return loadAll(mergeListObject)(client.listObject.bind(client));
};
