import { ArrayNotEmpty, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { Status } from "../task.interface"

export class CreateTaskDto {
    @IsString({message: 'Название обязательно'})
    @IsNotEmpty({message: 'Не має бути пустою'})
    task: string

    // @IsOptional()
    @ArrayNotEmpty({message: 'Массив не повинен бути пустим'})
    @IsString({each: true})
    tags?: string[]

    @IsOptional()
    @IsEnum(Status)
    status?: Status
}