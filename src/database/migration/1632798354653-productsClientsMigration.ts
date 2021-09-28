import {MigrationInterface, QueryRunner} from "typeorm";

export class productsClientsMigration1632798354653 implements MigrationInterface {
    name = 'productsClientsMigration1632798354653'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" integer NOT NULL, "code" integer NOT NULL, CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "code" integer NOT NULL, "description" character varying NOT NULL, "buyPrice" integer NOT NULL, "sellPrice" integer NOT NULL, "tags" integer array NOT NULL, "lovers" integer NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
