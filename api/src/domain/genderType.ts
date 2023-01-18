import { rawStrArr2EnumLikeObj } from "~/common/utils/enumLikeObj";

/**
 * 雇用タイプ
 *
 * @property MEN - 男性
 * @property WOMEN - 女性
 * @property OTHERS - その他
 */

export const GENDER_TYPE = rawStrArr2EnumLikeObj(['MEN', 'WOMEN', 'OTHERS']);

export type GenderType = keyof typeof GENDER_TYPE;
