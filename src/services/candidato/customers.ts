import * as Sentry from '@sentry/react';

import { api } from './api';
import { CustomerListResponse, CustomerResponse } from '../../types';

type GetCustomersParams = {
  consultantId: string | null;
  page: number;
  size: number;
  sort: string | null;
  showHistory: boolean;
  details: string | null;
  detailTextSearch: string | null;
};

const customersUrl = '/v1/portfolios/home-refi/customers';

export const getCustomerList = ({
  consultantId,
  page = 0,
  size,
  sort = null,
  showHistory = false,
  details = null,
  detailTextSearch = '',
}: GetCustomersParams): Promise<CustomerListResponse> => {
  return api.get(customersUrl, {
    params: {
      consultantId,
      page: page > 0 ? page - 1 : page,
      size,
      sort,
      showHistory,
      details,
      detailTextSearch,
    },
  });
};

export const getCustomer = (referenceId: string, includeDetails = false): Promise<CustomerResponse> =>
  api.get(`${customersUrl}/${referenceId}`, { params: { includeDetails } }).catch((error: any) => {
    Sentry.captureException(error);
    return error;
  });
