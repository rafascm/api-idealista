import db from '../db'

type Column ='name' | 'color'

abstract class GeneralModel {
  private static _name: string

  constructor (private tableName: string) {
    GeneralModel._name = this.tableName
  }

  static async findAll (): Promise<any[]> {
    return (await db.query(`SELECT * FROM ${GeneralModel._name}`)).rows
  }

  async addRow (column: Column, name: string): Promise<any> {
    return (await db.query(
      `INSERT INTO ${GeneralModel._name} ${column} VALUES $1 RETURNING *`,
      [name]
    )).rows[0]
  }
}

export default GeneralModel

/* olhar type column = 'name' | 'color' */
