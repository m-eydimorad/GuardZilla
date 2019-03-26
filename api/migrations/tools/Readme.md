# Migrations Guide

## Running Migrations

1. If you haven't run migrations before, please run **install.bat** first. This will install **golang-migrate** on your machine.
2. Create an empty database in PostgresSql named **GuardZilla**.
3. Run **Migration-up.bat** for migrating to latest version and **Migration-down.bat** for reverting all steps.


## Writing Migrations
The ordering and direction of the migration files is determined by the filenames used for them. migrate expects the filenames of migrations to have the format:

```
{version}_{title}.up.{extension}
{version}_{title}.down.{extension}
```
The title of each migration is unused, and is only for readability. Similarly, the extension of the migration files is not checked by the library, and should be an appropriate format for the database in use (.sql for SQL variants, for instance).

Versions of migrations may be represented as any 64 bit unsigned integer. All migrations are applied upward in order of increasing version number, and downward by decreasing version number.

For detailed information about writing migrations, please read the following document :
https://github.com/golang-migrate/migrate/blob/master/MIGRATIONS.md

## More info
For more information on GoLang migration please visit the following github repository :
https://github.com/golang-migrate/migrate