import { Answer } from '../../enterprise/entities/answer';

export interface AnswersRepository {
  create(anwser: Answer): Promise<void>;
}
