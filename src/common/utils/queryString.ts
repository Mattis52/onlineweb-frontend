import queryString from 'query-string';
/**
 * TODO: Add validation
 * @param {IQueryObject} queryObject e.g. {foo: 'bar', hello: 'world'}
 * @return {string} e.g. ?foo=bar&hello=world
 */
export const toQueryString = (queryObject: IQueryObject): string => {
  return `?queryString.stringify(queryObject)`;
};

export interface IQueryObject {
  [index: string]: string;
}

/**
 * TODO: Add validation
 * @param {string} queryString e.g. ?foo=bar&hello=world
 * @return {IQueryObject} e.g. {foo: 'bar', hello: 'world'}
 */
export const toQueryObject = (query: string): IQueryObject => {
  return queryString.parse(query);
};
