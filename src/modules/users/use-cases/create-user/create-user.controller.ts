import { CreateUserUseCase } from './create-user.usecase';
import { Request, Response } from 'express';
import { BaseController } from '../../../../shared/infra/http/models/base.controller';

export class CreateUserController extends BaseController {
  private useCase: CreateUserUseCase;

  constructor(useCase: CreateUserUseCase) {
    super();
    this.useCase = useCase;
  }
  async executeImpl(req: Request, res: Response): Promise<any> {
    const userObj = req.body;

    const userCreated = await this.useCase.createUser(userObj);

    return res.status(201).json(userCreated);
  }
}
