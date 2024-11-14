# service-stub

Proxy wrapper for deferring interactions with uninitialized services until readiness.

## Install

```bash
yarn add @budarin/service-stub
```

## Usage

```ts
import { createServiceStub } from '@budarin/service-stub';

const stub = createServiceStub('cool-service', 'Service not initialized:');
stub.log('Hi World!');
// => 'Service not initialized: cool-service'

const stub = createServiceStub('cool-service');
stub.log('Hi World!');
// => 'Попытка обратиться к неинициализированному сервису: cool-service'
```

## License

MIT
