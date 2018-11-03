

import {v4 as uuid} from 'uuid'

export interface IResource<T> {
  uuid: string;
  value: T;
}

export interface IResourceType {
  uuid: string;
  name: string;
};

export function createResource(value : T, rtype : IResourceType) : IResource<T> {
  return {
    uuid: uuid(),
    value,
    type: rtype
  }
}

export function createResourceType(name : string) {
  return {
    uuid: uuid(),
    name
  }
}