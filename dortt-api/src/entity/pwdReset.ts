import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class pwdReset {

    @PrimaryGeneratedColumn()
    pwdResetId: number;

    @Column()
    pwdResetmail: string;

    @Column()
    pwdResetSelector: string;

    @Column()
    pwdResetToken: string;

    @CreateDateColumn()
    pwdResetExpires: Date;
}