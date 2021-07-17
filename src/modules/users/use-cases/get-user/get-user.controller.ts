import { GetUserUseCase } from './get-user.usecase';
import { Request, Response } from 'express';
import { BaseController } from '../../../../shared/infra/http/models/base.controller';

export class GetUserController extends BaseController {
  private useCase: GetUserUseCase;

  constructor(useCase: GetUserUseCase) {
    super();
    this.useCase = useCase;
  }
  async executeImpl(req: Request, res: Response): Promise<any> {
    const userId = Number(req.query.id);

    if (userId) {
      const user = this.useCase.getUser(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json(user);
    }
  }
}
