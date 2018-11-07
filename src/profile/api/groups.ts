import { get } from 'common/utils/api';
import { IGroup } from 'core/models/Group';

const API_URL = '/v1/groups';

export const getGroups = async (): Promise<string[]> => {
  // const { data } = await get(API_URL, { format: 'json' }) as { data: IGroup[] }
  const data: string[] = [
    'Alle grupper',
    'arrkom',
    'bedkom',
    'bankom',
    'dotkom',
    'fagkom',
    'hovedstyret',
    'prokom',
    'seniorkom',
    'trikom',
  ];
  return data;
};
