type Mode =
  | 'undefined'
  | 'null'
  | 'array'
  | 'object'
  | 'boolean'
  | 'NaN'
  | 'number'
  | 'bigint'
  | 'string'
  | 'symbol'
  | 'function'
  | '==='
  | '!=='
  | '<'
  | '<='
  | '>='
  | '>'

/**
 * 100% coverage makes your life easier.
 * ```js
 * // type mode
 * ESTest(1, 'number')
 * ESTest(1n, 'bigint')
 * ESTest('foo', 'string')
 * ESTest(true, 'boolean')
 * ESTest([], 'array')
 * ESTest({}, 'object')
 * ESTest(NaN, 'NaN')
 * ESTest(null, 'null')
 * ESTest(undefined, 'undefined')
 * ESTest(Symbol(), 'symbol')
 * ESTest(function () {}, 'function')
 * ESTest(1, 'object') // error
 * ESTest(1, 'object', 'mike 09062024 1') // The error message should provide a unique ID for troubleshooting
 *
 * // operator mode
 * ESTest(1, '<', 5)
 * ESTest(5, '>', 1)
 * ESTest(1, '<=', 5)
 * ESTest(5, '>=', 1)
 * ESTest(1, '!==', 2)
 * ESTest(1, '===', 1)
 * ESTest(1, '===', 100) // error
 * ESTest(1, '===', 100, 'mike 09062024 1') // The error message should provide a unique ID for troubleshooting
 * ```
 */
export function ESTest(
  input: unknown,
  mode: Mode,
  msgOrInput2?: unknown,
  msg?: string,
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
): void | Error
