'use server';

import { GET_CHARACTERS } from '@/functions/api';
import apiError from '@/functions/api-error';
import { Character } from '@/types/character';

export default async function getCharactersInfo(page?: string) {
  try {
    const { url } = GET_CHARACTERS(page);

    const response = await fetch(url);

    if (!response.ok) throw new Error('Não conseguiu acessar a API');

    const data = (await response.json()) as Character;

    return {
      data,
    };
  } catch (error) {
    return apiError(error);
  }
}
