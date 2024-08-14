import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({ type: 'smallint' })
  age!: number;

  @Column({ type: 'varchar', length: 13 })
  firstContactPhone!: string;

  @Column({ type: 'varchar', length: 13, nullable: true })
  secondContactPhone?: string;
}
