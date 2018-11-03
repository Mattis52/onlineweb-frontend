
import { IResource, IResourceType, createResource } from './Resource';
import { isAsyncProvider, ResourceProvider } from './ResourceProvider';


export class ResourceManager {

  private resourceProviders : {
    [key: string]: ResourceProvider
  } = {};

  public bindResourceProvider(resourceType: IResourceType, resourceProvider : ResourceProvider<T>, ) {
    console.assert(this.resourceProviders[resourceType.uuid] === undefined, `Provider already bound for ${resourceType.name} with uuid ${resourceType.uuid}`);
    this.resourceProviders[resourceType.uuid] = resourceProvider;
  }

  public getResource(resourceType: IResourceType<T>, ...a) : IResource<T> | Promise<IResource<T>> {
    const resourceProvider = this.resourceProviders[resourceType.uuid];
    console.assert(resourceProvider !== undefined, `There is no provider for ${resourceType.name} with uuid ${resourceType.uuid}`)
    
    if(resourceProvider.isAsync()) {
      return resourceProvider.provider(...a).then(v => {
        return createResource(v, resourceType);
      });
    } else {
      return createResource(resourceProvider.provider(...a), resourceType);
    }
  }
}


export default new ResourceManager();