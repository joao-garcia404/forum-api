import { CommentOnAnswerUseCase } from './comment-on-answer';

import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository';
import { InMemoryAnswerCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository';
import { makeAnswer } from 'test/factories/make-answer';

let inMemoryAnswersRepository: InMemoryAnswersRepository;
let inMemoryAnswerCommentsRepository: InMemoryAnswerCommentsRepository;
let sut: CommentOnAnswerUseCase;

describe('Comment On Answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository();
    inMemoryAnswerCommentsRepository = new InMemoryAnswerCommentsRepository();
    sut = new CommentOnAnswerUseCase(
      inMemoryAnswersRepository,
      inMemoryAnswerCommentsRepository
    );
  });

  it('should be able to comment on answer', async () => {
    const answer = makeAnswer();

    await inMemoryAnswersRepository.create(answer);

    await sut.execute({
      answerId: answer.id.toString(),
      authorId: answer.id.toString(),
      content: 'Answer comment test'
    })

    expect(inMemoryAnswerCommentsRepository.items[0].content).toEqual('Answer comment test')
  });
})
