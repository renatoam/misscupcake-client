export type UseCase<DTO = unknown, Response = unknown> = (dto: DTO) => Response
