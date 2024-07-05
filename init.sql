\c utesa;
CREATE TABLE IF NOT EXISTS user (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

docker exec -it api-graphql-db-1 psql -U postgres -d utesa