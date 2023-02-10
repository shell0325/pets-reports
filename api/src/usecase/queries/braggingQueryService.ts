import { findBraggingRequestDto } from '~/adaptor/primary/api/bragging/requests/findBraggingRequest.dto';
import { Bragging } from '~/domain/bragging/bragging';

export const BRAGGING_QUERY_SERVICE_PROVIDE = 'BRAGGING_QUERY_SERVICE_PROVIDE';

export interface IBraggingQueryService {
  confirmBragging(bragging: Bragging): Promise<Bragging[] | null>;
  findBragging(param: findBraggingRequestDto): Promise<Bragging[]>;
}
