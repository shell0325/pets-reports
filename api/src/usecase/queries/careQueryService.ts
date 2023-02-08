import { GetCareRequestDto } from '~/adaptor/primary/api/care/requests/getCareRequest.dto';
import { Care } from '~/domain/care/care';

export const CARE_QUERY_SERVICE_PROVIDE = 'CARE_QUERY_SERVICE_PROVIDE';

export interface ICareQueryService {
  confirmCare(care: Care): Promise<Care[] | null>;
  findCare(param: GetCareRequestDto): Promise<Care[]>;
}
