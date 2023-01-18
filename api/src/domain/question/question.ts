import { UserCode } from '../user/userCode';
import { QuestionCode } from './questionCode';

/**
 * 質問
 *
 * @property id - 質問ID
 * @property title - タイトル
 * @property content - 質問内容
 * @property question_genre - 質問ジャンル
 * @property question_time - 質問した時間
 * @property answered - 回答有無
 * @property questioner_id - 質問者ID
 */

export type Question = Readonly<{
  id: QuestionCode;
  title: string;
  content: string;
  question_genre: string; //変更する
  question_time: Date;
  answered: boolean;
  questioner_id: UserCode;
}>;
