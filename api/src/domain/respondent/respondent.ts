import { QuestionCode } from '../question/questionCode';
import { UserCode } from '../user/userCode';
import { RespondentCode } from './respondentCode';

/**
 * 回答
 *
 * @property id - 回答ID
 * @property content - 回答内容
 * @property respondent_id - 回答者ID
 * @property question_id - 質問ID
 */

export type Respondent = Readonly<{
  id: RespondentCode;
  content: string;
  respondent_id: UserCode;
  question_id: QuestionCode;
  createdAt: Date;
  updatedAt: Date;
}>;
