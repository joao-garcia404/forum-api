import { AnswerComment } from "../../enterprise/entities/answer-comment";

export interface AnswerCommentsRepository {
  findById(id: string): Promise<AnswerComment | null>;
  create(answer: AnswerComment): Promise<void>;
  delete(answer: AnswerComment): Promise<void>;
}