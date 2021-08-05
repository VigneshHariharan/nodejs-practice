import { dbQuery } from "../connection";
import { IResources, IResourcesIndexModel } from "./IResources";

export const getResourcesIndex = async (): Promise<IResourcesIndexModel> => {
  const resources: IResourcesIndexModel = await dbQuery(
    "select id,title, parent_id, description, photo, created_by from resources"
  );
  return resources;
};

export const addResource = async (resources: IResources) => {
  const columnsName: string[] = Object.keys(resources);
  const fieldValues: string[] = Object.values(resources);

  const resourcesQuery = await dbQuery(
    `insert into resources (??) values(?);`,
    [columnsName, fieldValues]
  );

  return resourcesQuery;
};

export const updateResource = async (resources: IResources, id: number) => {
  const columnsName: string[] = Object.keys(resources);
  const fieldValues: string[] = Object.values(resources);

  let updateQuery = "";
  for (let col = 0; col < columnsName.length; col++) {
    updateQuery = ` ${columnsName[col]}=${fieldValues[col]} `;
  }

  const resourcesQuery = await dbQuery(
    `update resources set ${updateQuery} where id=(?) ;`,
    [id]
  );

  return resourcesQuery;
};

export const deleteResource = async (id: number) => {
  let resources;

  // take all the level 1 nested resource to the parent
  const updateResourceRelations = await dbQuery(
    "update resources set parent_id=0 where parent_id=(?)",
    [id]
  );
  resources = await dbQuery("delete into resources where id = (?)", [id]);
  return resources;
};

export const getResourceshow = async (id: number) => {};
