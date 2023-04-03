import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
  TableIndex,
} from 'typeorm';

export class CreateCatBreed1679535215637 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'breeds',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'breed',
            type: 'varchar',
          },
        ],
      }),
      true,
    );
    await queryRunner.createIndex(
      'breeds',
      new TableIndex({
        name: 'IDX_BREED',
        columnNames: ['breed'],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'cats',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'age',
            type: 'int4',
          },
          {
            name: 'createAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updateAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
      true,
    );
    await queryRunner.addColumn(
      'cats',
      new TableColumn({
        name: 'breedId',
        type: 'uuid',
      }),
    );

    await queryRunner.createForeignKey(
      'cats',
      new TableForeignKey({
        referencedTableName: 'breeds',
        referencedColumnNames: ['id'],
        columnNames: ['breedId'],
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('cats');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('breedId') !== -1,
    );

    await queryRunner.dropForeignKey('cats', foreignKey);
    await queryRunner.dropColumn('cats', 'breedId');
    await queryRunner.dropTable('cats');
    await queryRunner.dropIndex('breeds', 'IDX_BREED');
    await queryRunner.dropTable('breeds');
  }
}
