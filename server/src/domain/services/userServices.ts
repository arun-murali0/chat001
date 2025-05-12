export interface MappingService<T, U> {
	mapToDomainModel(data: T): U | null;
}

export interface ValidationServiceProp<T> {
	validate: (data: T) => { success: boolean; data: T; errors?: any };
}
