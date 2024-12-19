// @ts-nocheck
export const API_URL = 'https://rickandmortyapi.com/api';

export function GET_CHARACTERS(page = '') {
  return {
    url: API_URL + `/character?page=${page}`,
  };
}

export function GET_CHARACTER(id) {
  return {
    url: API_URL + `/character/${id}`,
  };
}

export function GET_LOCATIONS(page = '') {
  return {
    url: API_URL + `/location?page=${page}`,
  };
}
