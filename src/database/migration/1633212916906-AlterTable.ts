import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterTable1633212916906 implements MigrationInterface {
    name = 'AlterTable1633212916906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."student" ADD "created_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "public"."student" ADD "updated_At" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "public"."student" DROP CONSTRAINT "PK_3d8016e1cb58429474a3c041904"`);
        await queryRunner.query(`ALTER TABLE "public"."student" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."student" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "public"."student" ADD CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."student" DROP CONSTRAINT "PK_3d8016e1cb58429474a3c041904"`);
        await queryRunner.query(`ALTER TABLE "public"."student" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "public"."student" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."student" ADD CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "public"."student" DROP COLUMN "updated_At"`);
        await queryRunner.query(`ALTER TABLE "public"."student" DROP COLUMN "created_At"`);
    }

}
