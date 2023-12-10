# service-stub

Proxy wrapper for deferring interactions with uninitialized services until readiness.

## Install

```bash
yarn add @budarin/service-stub
```

## Usage

```ts
import { createServiceStub } from '@budarin/service-stub';

const stub = createServiceStub('Service not initialized');

stub.log('Hi World!'); // => Error: Service not initialized
```

## License

MIT
