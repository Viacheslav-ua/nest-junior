import { plainToInstance } from "class-transformer"
import { validate } from "class-validator"
import { Status } from "../task.interface"
import { CreateTaskDto } from "./create-task.dto"

describe('create-task.dto', () => {
  let dto
  beforeAll(() => {
    dto = {
      task: '',
      tags: [],
      status: '',
    }
  })

  it('task пустая', async () => {
    const ofImportDto = plainToInstance(CreateTaskDto, dto)
    const errors = await validate(ofImportDto)
      console.log(errors);


    expect(errors.map(err => err.property).includes('task')).toBeTruthy()
  })

  it('task непустая', async () => {
    dto.task = 'test-1'
    const ofImportDto = plainToInstance(CreateTaskDto, dto)
    const errors = await validate(ofImportDto)
    expect(errors.map(err => err.property).includes('task')).toBeFalsy()
  })

  it('tags пустой', async () => {
    const ofImportDto = plainToInstance(CreateTaskDto, dto)
    const errors = await validate(ofImportDto)
    expect(errors.map(err => err.property).includes('tags')).toBeTruthy()
    expect(dto.tags.length).toBe(0)
  })

  it('выдаст ошибку если не все элементы tags является строкой и массив не пустой',
  async () => {
    dto.tags = ['строка', '2']
    const ofImportDto = plainToInstance(CreateTaskDto, dto)
    const errors = await validate(ofImportDto)
    expect(errors.map(err => err.property).includes('tags')).toBeFalsy()
  })

  it('каждый элемент tags является строкой', async () => {
    dto.tags = ['строка', 2]
    const ofImportDto = plainToInstance(CreateTaskDto, dto)
    const errors = await validate(ofImportDto)
    expect(errors.map(err => err.property).includes('tags')).toBeTruthy()
    expect(dto.tags.length).not.toBe(0)
    expect(dto.tags.every(item => typeof(item) === 'string')).not.toBeTruthy()
  })

  it('тип status не является значением enum Status', async () => {
    dto.status = 'status'
    const ofImportDto = plainToInstance(CreateTaskDto, dto)
    const errors = await validate(ofImportDto)
    expect(errors.map(err => err.property).includes('status')).toBeTruthy()
  })

  it('тип status является значением enum Status', async () => {
    dto.status = Status.PROCESSING
    const ofImportDto = plainToInstance(CreateTaskDto, dto)
    const errors = await validate(ofImportDto)
    expect(errors.map(err => err.property).includes('status')).toBeFalsy()
    expect(dto.status).toBe('process')
  })
})