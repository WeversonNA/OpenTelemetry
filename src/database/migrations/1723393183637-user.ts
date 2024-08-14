import { MigrationInterface, QueryRunner } from 'typeorm';

export class User1723393183637 implements MigrationInterface {
  name = 'User1723393183637';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "age" smallint NOT NULL, "firstContactPhone" character varying(13) NOT NULL, "secondContactPhone" character varying(13), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "User"`);
  }
}
