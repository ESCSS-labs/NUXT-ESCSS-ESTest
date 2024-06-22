type Mode = 'undefined' | 'null' | 'array' | 'object' | 'boolean' | 'NaN' | 'number' | 'bigint' | 'string' | 'symbol' | 'function' | '===' | '!==' | '<' | '<=' | '>=' | '>'

/**
 * 100% function coverage makes your life easier.
 * @example
 * ```js
 * // operator mode
 * esTest(1, '<', 5)
 * esTest(5, '>', 1)
 * esTest(1, '<=', 5)
 * esTest(5, '>=', 1)
 * esTest(1, '!==', 2)
 * esTest(1, '===', 1)
 * esTest(1, '===', 100) // error
 * esTest(1, '===', 100, 'foo') // error & message
 *
 * // type mode
 * esTest(1, 'number')
 * esTest(1n, 'bigint')
 * esTest('foo', 'string')
 * esTest(true, 'boolean')
 * esTest([], 'array')
 * esTest({}, 'object')
 * esTest(NaN, 'NaN')
 * esTest(null, 'null')
 * esTest(undefined, 'undefined')
 * esTest(Symbol(), 'symbol')
 * esTest(function () {}, 'function')
 * esTest(1, 'object') // error
 * esTest(1, 'object', 'foo') // error & message
 * ```
 */
export function esTest(input: unknown, mode: Mode, input2?: unknown, msg?: string): void
