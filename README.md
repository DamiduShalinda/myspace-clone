#### on fireship Next JS fullstack cource Prisma Setup

```
[next-auth][error][JWT_SESSION_ERROR] 
https://next-auth.js.org/errors#jwt_session_error Invalid Compact JWE {
  message: 'Invalid Compact JWE',
  stack: 'JWEInvalid: Invalid Compact JWE\n' +
    '    at compactDecrypt (webpack-internal:///(rsc)/./node_modules/jose/dist/node/cjs/jwe/compact/decrypt.js:18:15)\n' +
    '    at jwtDecrypt (webpack-internal:///(rsc)/./node_modules/jose/dist/node/cjs/jwt/decrypt.js:10:61)\n' +
    '    at Object.decode (webpack-internal:///(rsc)/./node_modules/next-auth/jwt/index.js:44:52)\n' +
    '    at async Object.session (webpack-internal:///(rsc)/./node_modules/next-auth/core/routes/session.js:25:34)\n' +
    '    at async AuthHandler (webpack-internal:///(rsc)/./node_modules/next-auth/core/index.js:161:37)\n' +
    '    at async getServerSession (webpack-internal:///(rsc)/./node_modules/next-auth/next/index.js:125:21)\n' +
    '    at async Home (webpack-internal:///(rsc)/./src/app/page.tsx:15:21)',
  name: 'JWEInvalid'
}
```