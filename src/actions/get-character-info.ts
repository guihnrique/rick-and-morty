'use server';

import { GET_CHARACTER } from '@/functions/api';
import apiError from '@/functions/api-error';
import { CharacterInfo } from '@/types/character';

export default async function getCharacterInfo(id?: string) {
  try {
    const { url } = GET_CHARACTER(id);

    const response = await fetch(url);

    if (!response.ok) throw new Error('Não conseguiu acessar a API');

    const data = (await response.json()) as CharacterInfo;

    return {
      data,
    };
  } catch (error) {
    return apiError(error);
  }
}
