import { get, IAPIData } from 'common/utils/api';
import { getStateCache } from 'common/utils/stateCacheResolver';
import { IOfflineIssue } from '../models/Offline';

const API_URL = '/api/v1/offline/';

export const getOfflines = async (page: number = 1): Promise<IOfflineIssue[]> => {
  const res: IAPIData<IOfflineIssue> = await get(API_URL, { format: 'json', page });
  return res.results;
};

export const getServerCacheOfflines = (): IOfflineIssue[] => {
  const cache = getStateCache();
  return (cache && cache.offline) || [];
};
