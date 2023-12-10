export const createServiceStub = (errorMessage?: string) => {
    const serviceIsNotInitialized = (): never => {
        throw new Error(errorMessage || 'Попытка обратиться к неинициализированному сервису.');
    };

    return new Proxy(() => {}, {
        get: serviceIsNotInitialized,
        apply: serviceIsNotInitialized,
    });
};
