## Node

```
pnpm dev:node
npx tsx ./src/client.ts
```

Stream will work, 1, 2, 3 will be logged after each second

## Cloudflare

```
pnpm dev:cloudflare
npx tsx ./src/client.ts
```

Stream will not work, 1, 2, 3 will be logged at once

## Vanilla Stream with Cloudflare

```
pnpm dev:cloudflare
npx tsx ./src/vanillaStreamClient.ts
```

Not work, Will log 1, 2, 3 one at a time## Vanilla Stream with Cloudflare

```
pnpm dev:cloudflare
npx tsx ./src/vanillaStreamClient.ts
```

Not work, Will log 1, 2, 3 one at a time
