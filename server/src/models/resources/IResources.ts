export interface IResources {
  id?: number;
  title: string;
  parent_id: number;
  description?: string;
  photo?: string;
  created_by?: number;
}

export interface IResourcesIndexModel {
  results: IResources[];
}
