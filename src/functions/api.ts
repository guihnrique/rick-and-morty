// @ts-nocheck
export const API_URL = 'https://rickandmortyapi.com/api';

export function GET_CHARACTERS(page = '') {
  return {
    url: API_URL + `/character?page=${page}`,
  };
}