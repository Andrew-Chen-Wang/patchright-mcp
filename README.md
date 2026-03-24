# `@andrew-chen-wang/patchright-mcp`

Patchright-backed MCP server package mirroring the public surface of `@playwright/mcp`.

Supports both CommonJS and ESM imports.

## Install

```bash
npm install @andrew-chen-wang/patchright-mcp
```

## CLI

```bash
npx @andrew-chen-wang/patchright-mcp --help
```

## API

CommonJS:

```js
const { createConnection } = require('@andrew-chen-wang/patchright-mcp');
```

ESM:

```js
import { createConnection } from '@andrew-chen-wang/patchright-mcp';
```
