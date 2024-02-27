import { TaskStatus } from "../tasks.entity"
import {IsIn, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator'

export class createTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string
    description: string
}

export class updateTaskDto{
    @IsString()
    @IsOptional()
    title: string
    @IsString()
    @IsOptional()
    description: string
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.DONE,TaskStatus.PENDING,TaskStatus.IN_PROGRESS])
    status: TaskStatus
}