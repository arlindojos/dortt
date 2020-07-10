import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn } from "typeorm";
import { pwdReset } from "./pwdReset";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    idUsr: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    emailUsr: string;

    @Column()
    passwordUsr: string;

    @Column()
    websites: boolean;

    @Column()
    program: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

    @ManyToMany(type => pwdReset, {
        cascade: true
    })
    @JoinTable()
    categories: pwdReset[];

}