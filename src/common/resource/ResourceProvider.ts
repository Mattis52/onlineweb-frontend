
export interface IResourceProvider<T> {
  isAsync: () => boolean;
  provide?: () => IResource<T>;
  publish?: () => IResource<T>;
};


export type ResourceProvider<T> = IResourceProvider<T>;

export function asyncProvider(provider: () => Promise<IResource<T>>) : ResourceProvider<T> {
  return {
    isAsync: () => true,
    provider
  }
}

export function syncProvider(provider: () => IResource<T>) : ResourceProvider<T> {
  return {
    isAsync: () => false,
    provider
  }
}