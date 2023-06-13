import { Answer } from '../../enterprise/entities/answer';

export interface AnswersRepository {
  findById(id: string): Promise<Answer | null>;
  create(anwser: Answer): Promise<void>;
  save(anwser: Answer): Promise<void>;
  delete(anwser: Answer): Promise<void>;
}
