import { QueryBuilder } from "./QueryBuilder";
import { ObjectLiteral } from "../common/ObjectLiteral";
import { ObjectType } from "../common/ObjectType";
import { QueryPartialEntity } from "./QueryPartialEntity";
import { InsertResult } from "./result/InsertResult";
import { ColumnMetadata } from "../metadata/ColumnMetadata";
import { EntitySchema } from "../";
/**
 * Allows to build complex sql queries in a fashion way and execute those queries.
 */
export declare class InsertQueryBuilder<Entity> extends QueryBuilder<Entity> {
    /**
     * Gets generated sql query without parameters being replaced.
     */
    getQuery(): string;
    /**
     * Executes sql generated by query builder and returns raw database results.
     */
    execute(): Promise<InsertResult>;
    /**
     * Specifies INTO which entity's table insertion will be executed.
     */
    into<T>(entityTarget: ObjectType<T> | EntitySchema<T> | string, columns?: string[]): InsertQueryBuilder<T>;
    /**
     * Values needs to be inserted into table.
     */
    values(values: QueryPartialEntity<Entity> | QueryPartialEntity<Entity>[]): this;
    /**
     * Optional returning/output clause.
     * This will return given column values.
     */
    output(columns: string[]): this;
    /**
     * Optional returning/output clause.
     * Returning is a SQL string containing returning statement.
     */
    output(output: string): this;
    /**
     * Optional returning/output clause.
     */
    output(output: string | string[]): this;
    /**
     * Optional returning/output clause.
     * This will return given column values.
     */
    returning(columns: string[]): this;
    /**
     * Optional returning/output clause.
     * Returning is a SQL string containing returning statement.
     */
    returning(returning: string): this;
    /**
     * Optional returning/output clause.
     */
    returning(returning: string | string[]): this;
    /**
     * Indicates if entity must be updated after insertion operations.
     * This may produce extra query or use RETURNING / OUTPUT statement (depend on database).
     * Enabled by default.
     */
    updateEntity(enabled: boolean): this;
    /**
     * Adds additional ON CONFLICT statement supported in postgres.
     */
    onConflict(statement: string): this;
    /**
     * Adds additional ignore statement supported in databases.
     */
    orIgnore(statement?: string | boolean): this;
    /**
     * Adds additional update statement supported in databases.
     */
    orUpdate(statement?: {
        columns?: string[];
        conflict_target?: string | string[];
    }): this;
    /**
     * Creates INSERT express used to perform insert query.
     */
    protected createInsertExpression(): string;
    /**
     * Gets list of columns where values must be inserted to.
     */
    protected getInsertedColumns(): ColumnMetadata[];
    /**
     * Creates a columns string where values must be inserted to for INSERT INTO expression.
     */
    protected createColumnNamesExpression(): string;
    /**
     * Creates list of values needs to be inserted in the VALUES expression.
     */
    protected createValuesExpression(): string;
    /**
     * Gets array of values need to be inserted into the target table.
     */
    protected getValueSets(): ObjectLiteral[];
}
