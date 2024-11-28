export const createServiceStub = <T>(
    serviceName: string,
    errorMessage = 'Попытка обратиться к неинициализированному сервису:',
) => {
    const serviceIsNotInitialized = (): never => {
        throw new Error(`${errorMessage} ${serviceName}`);
    };

    return new Proxy(() => {}, {
        get: serviceIsNotInitialized,
        apply: serviceIsNotInitialized,
    }) as unknown as T;
};
