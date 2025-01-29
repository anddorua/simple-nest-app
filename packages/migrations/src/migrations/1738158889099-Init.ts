import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1738158889099 implements MigrationInterface {
    name = 'Init1738158889099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`author\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`dateOfBirth\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`book\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`book_authors_author\` (\`bookId\` int NOT NULL, \`authorId\` int NOT NULL, INDEX \`IDX_9bf58ffb2a12a8609a738ee8ca\` (\`bookId\`), INDEX \`IDX_a4cafdf2ec9974524a5321c751\` (\`authorId\`), PRIMARY KEY (\`bookId\`, \`authorId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`book_authors_author\` ADD CONSTRAINT \`FK_9bf58ffb2a12a8609a738ee8cae\` FOREIGN KEY (\`bookId\`) REFERENCES \`book\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`book_authors_author\` ADD CONSTRAINT \`FK_a4cafdf2ec9974524a5321c7516\` FOREIGN KEY (\`authorId\`) REFERENCES \`author\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book_authors_author\` DROP FOREIGN KEY \`FK_a4cafdf2ec9974524a5321c7516\``);
        await queryRunner.query(`ALTER TABLE \`book_authors_author\` DROP FOREIGN KEY \`FK_9bf58ffb2a12a8609a738ee8cae\``);
        await queryRunner.query(`DROP INDEX \`IDX_a4cafdf2ec9974524a5321c751\` ON \`book_authors_author\``);
        await queryRunner.query(`DROP INDEX \`IDX_9bf58ffb2a12a8609a738ee8ca\` ON \`book_authors_author\``);
        await queryRunner.query(`DROP TABLE \`book_authors_author\``);
        await queryRunner.query(`DROP TABLE \`book\``);
        await queryRunner.query(`DROP TABLE \`author\``);
    }

}
