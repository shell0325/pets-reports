import { PetCode } from '../pet/petCode';
import { SpendingCode } from './spendingCode';

/**
 * 支出
 *
 * @property id - 支出ID
 * @property name - 支出名称
 * @property category - 支出カテゴリー
 * @property amount - 支出金額
 * @property spending_date - 支出日
 * @property petId - ペットID
 */

export type Spending = Readonly<{
  id: SpendingCode;
  name: string;
  category: string;
  amount: number;
  spending_date: Date;
  petId: PetCode;
  createdAt: Date;
  updatedAt: Date;
}>;
