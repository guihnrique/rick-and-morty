'use server';

import { GET_LOCATIONS } from '@/functions/api';
import apiError from '@/functions/api-error';
import { Location } from '@/types/location';

export default async function getLocationsInfo(page?: string) {
  try {
    const { url } = GET_LOCATIONS(page);

    const response = await fetch(url);

    if (!response.ok) throw new Error('Não conseguiu acessar a API');

    const data = (await response.json()) as Location;
    return {
      data,
    };
  } catch (error) {
    return apiError(error);
  }
}
