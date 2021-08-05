import { createConnection } from "mysql";

export const connection = createConnection({
  user: "vignesh",
  password: "learnyst",
  database: "nemo",
});

connection.connect();

export const database = connection;

export const dbQuery: any = function (query: string, args?: any[] | object) {
  return new Promise((resolve, reject) => {
    connection.query(query, args, function (error, results, fields) {
      if (error) {
        reject(error);
      }
      resolve({ results, fields });
    });
  });
};
