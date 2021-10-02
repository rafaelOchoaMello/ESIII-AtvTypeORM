import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateStudent1633202038698 implements MigrationInterface {
    name = 'CreateStudent1633202038698'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "student"`);
    }

}
