// import { dbQuery } from "../oldConnection";
const queries = `
CREATE TABLE IF not EXISTS user(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL UNIQUE,
    email VARCHAR(40) NOT NULL UNIQUE,
    mobile_number VARCHAR(40),
    description VARCHAR(200),
    password VARCHAR(100) NOT NULL,
    profile_photo VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(ID)
);


CREATE TABLE IF not EXISTS resources(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    parent_id int,
    description text,
    photo VARCHAR(100),
    created_by int,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);



CREATE TABLE IF not EXISTS notes(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    content text,
    created_by int,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY (created_by) REFERENCES user(id)
);

CREATE TABLE IF not EXISTS flashcards(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(40) NOT NULL,
    question text, 
    answer text,
    parent_id int,
    content text,
    created_by int,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP on UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY (created_by) REFERENCES user(id)
);


CREATE TABLE IF not EXISTS resource_central(
    id INT NOT NULL AUTO_INCREMENT,
    resource_id int NOT NULL,
    notes_id  int NOT NULL,
    flashcard_id  int NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (resource_id) REFERENCES resource(id),
    FOREIGN KEY (notes_id) REFERENCES notes(id),
    FOREIGN KEY (flashcard_id) REFERENCES flashcards(id)

);
select (1 + 1);
`;

// export const createTables = async () => await dbQuery(queries);
