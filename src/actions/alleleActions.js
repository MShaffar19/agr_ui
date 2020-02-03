import {createFetchAction} from '../lib/createActions';
import {buildTableQueryString} from '../lib/utils';

export const FETCH_ALLELE = 'FETCH_ALLELE';
export const FETCH_ALLELE_DISEASE = 'FETCH_ALLELE_DISEASE';

export const fetchAllele = createFetchAction(FETCH_ALLELE, id => `/api/allele/${id}`);
export const fetchAlleleDisease = createFetchAction(
  FETCH_ALLELE_DISEASE,
  (id, opts) => `/api/allele/${id}/diseases?${buildTableQueryString(opts)}`
);
