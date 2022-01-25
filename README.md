## Prerequisites for running the server:

- In the main folder > index.js make sure the 'port' and the 'host' variables are set to your will.
- In src/data/mysqldb.js make sure the 'host', 'user', 'password' and 'database' are set correctly.
- The above can use a .env file.

## SQL Tables

Since there's no migration added, make sure you have the following tables in your SQL database:

1. A table named 'users' that consists:

- A column called 'userId' (varchar(100)) and is set as the PK.
- A column called 'userName' (varchar(100)).

2. A table named 'items' that consists:

- A column called 'itemId' (varchar(100)) and is set as the PK.
- A column called 'userName' (varchar(100)).
- A column called 'date' (varchar(100)).
- A column called 'title' (varchar(100)).
- A column called 'description' (varchar(100)).
- A column called 'isDone' (varchar(1)).
