
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model history
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type history = $Result.DefaultSelection<Prisma.$historyPayload>
/**
 * Model lecture
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type lecture = $Result.DefaultSelection<Prisma.$lecturePayload>
/**
 * Model lecture_room
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type lecture_room = $Result.DefaultSelection<Prisma.$lecture_roomPayload>
/**
 * Model lecture_schedule
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type lecture_schedule = $Result.DefaultSelection<Prisma.$lecture_schedulePayload>
/**
 * Model user
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_favorite
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type user_favorite = $Result.DefaultSelection<Prisma.$user_favoritePayload>
/**
 * Model user_usage
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type user_usage = $Result.DefaultSelection<Prisma.$user_usagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_favorite_weekday: {
  월: '월',
  화: '화',
  수: '수',
  목: '목',
  금: '금',
  토: '토',
  일: '일'
};

export type user_favorite_weekday = (typeof user_favorite_weekday)[keyof typeof user_favorite_weekday]


export const lecture_schedule_weekday: {
  월: '월',
  화: '화',
  수: '수',
  목: '목',
  금: '금',
  토: '토',
  일: '일'
};

export type lecture_schedule_weekday = (typeof lecture_schedule_weekday)[keyof typeof lecture_schedule_weekday]


export const user_user_type: {
  undergraduate: 'undergraduate',
  postgraduate: 'postgraduate',
  staff: 'staff'
};

export type user_user_type = (typeof user_user_type)[keyof typeof user_user_type]

}

export type user_favorite_weekday = $Enums.user_favorite_weekday

export const user_favorite_weekday: typeof $Enums.user_favorite_weekday

export type lecture_schedule_weekday = $Enums.lecture_schedule_weekday

export const lecture_schedule_weekday: typeof $Enums.lecture_schedule_weekday

export type user_user_type = $Enums.user_user_type

export const user_user_type: typeof $Enums.user_user_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Histories
 * const histories = await prisma.history.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Histories
   * const histories = await prisma.history.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.history`: Exposes CRUD operations for the **history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecture`: Exposes CRUD operations for the **lecture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lectures
    * const lectures = await prisma.lecture.findMany()
    * ```
    */
  get lecture(): Prisma.lectureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecture_room`: Exposes CRUD operations for the **lecture_room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lecture_rooms
    * const lecture_rooms = await prisma.lecture_room.findMany()
    * ```
    */
  get lecture_room(): Prisma.lecture_roomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecture_schedule`: Exposes CRUD operations for the **lecture_schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lecture_schedules
    * const lecture_schedules = await prisma.lecture_schedule.findMany()
    * ```
    */
  get lecture_schedule(): Prisma.lecture_scheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_favorite`: Exposes CRUD operations for the **user_favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_favorites
    * const user_favorites = await prisma.user_favorite.findMany()
    * ```
    */
  get user_favorite(): Prisma.user_favoriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_usage`: Exposes CRUD operations for the **user_usage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_usages
    * const user_usages = await prisma.user_usage.findMany()
    * ```
    */
  get user_usage(): Prisma.user_usageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    history: 'history',
    lecture: 'lecture',
    lecture_room: 'lecture_room',
    lecture_schedule: 'lecture_schedule',
    user: 'user',
    user_favorite: 'user_favorite',
    user_usage: 'user_usage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "history" | "lecture" | "lecture_room" | "lecture_schedule" | "user" | "user_favorite" | "user_usage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      history: {
        payload: Prisma.$historyPayload<ExtArgs>
        fields: Prisma.historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          findFirst: {
            args: Prisma.historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          findMany: {
            args: Prisma.historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>[]
          }
          create: {
            args: Prisma.historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          createMany: {
            args: Prisma.historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          update: {
            args: Prisma.historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          deleteMany: {
            args: Prisma.historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historyPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.historyCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
          }
        }
      }
      lecture: {
        payload: Prisma.$lecturePayload<ExtArgs>
        fields: Prisma.lectureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lectureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lectureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          findFirst: {
            args: Prisma.lectureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lectureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          findMany: {
            args: Prisma.lectureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>[]
          }
          create: {
            args: Prisma.lectureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          createMany: {
            args: Prisma.lectureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.lectureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          update: {
            args: Prisma.lectureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          deleteMany: {
            args: Prisma.lectureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lectureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.lectureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecturePayload>
          }
          aggregate: {
            args: Prisma.LectureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecture>
          }
          groupBy: {
            args: Prisma.lectureGroupByArgs<ExtArgs>
            result: $Utils.Optional<LectureGroupByOutputType>[]
          }
          count: {
            args: Prisma.lectureCountArgs<ExtArgs>
            result: $Utils.Optional<LectureCountAggregateOutputType> | number
          }
        }
      }
      lecture_room: {
        payload: Prisma.$lecture_roomPayload<ExtArgs>
        fields: Prisma.lecture_roomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lecture_roomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_roomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lecture_roomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_roomPayload>
          }
          findFirst: {
            args: Prisma.lecture_roomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_roomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lecture_roomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_roomPayload>
          }
          findMany: {
            args: Prisma.lecture_roomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_roomPayload>[]
          }
          create: {
            args: Prisma.lecture_roomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_roomPayload>
          }
          createMany: {
            args: Prisma.lecture_roomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.lecture_roomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_roomPayload>
          }
          update: {
            args: Prisma.lecture_roomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_roomPayload>
          }
          deleteMany: {
            args: Prisma.lecture_roomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lecture_roomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.lecture_roomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_roomPayload>
          }
          aggregate: {
            args: Prisma.Lecture_roomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecture_room>
          }
          groupBy: {
            args: Prisma.lecture_roomGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lecture_roomGroupByOutputType>[]
          }
          count: {
            args: Prisma.lecture_roomCountArgs<ExtArgs>
            result: $Utils.Optional<Lecture_roomCountAggregateOutputType> | number
          }
        }
      }
      lecture_schedule: {
        payload: Prisma.$lecture_schedulePayload<ExtArgs>
        fields: Prisma.lecture_scheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lecture_scheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_schedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lecture_scheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_schedulePayload>
          }
          findFirst: {
            args: Prisma.lecture_scheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_schedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lecture_scheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_schedulePayload>
          }
          findMany: {
            args: Prisma.lecture_scheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_schedulePayload>[]
          }
          create: {
            args: Prisma.lecture_scheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_schedulePayload>
          }
          createMany: {
            args: Prisma.lecture_scheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.lecture_scheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_schedulePayload>
          }
          update: {
            args: Prisma.lecture_scheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_schedulePayload>
          }
          deleteMany: {
            args: Prisma.lecture_scheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lecture_scheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.lecture_scheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lecture_schedulePayload>
          }
          aggregate: {
            args: Prisma.Lecture_scheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecture_schedule>
          }
          groupBy: {
            args: Prisma.lecture_scheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lecture_scheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.lecture_scheduleCountArgs<ExtArgs>
            result: $Utils.Optional<Lecture_scheduleCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      user_favorite: {
        payload: Prisma.$user_favoritePayload<ExtArgs>
        fields: Prisma.user_favoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_favoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_favoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_favoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_favoritePayload>
          }
          findFirst: {
            args: Prisma.user_favoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_favoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_favoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_favoritePayload>
          }
          findMany: {
            args: Prisma.user_favoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_favoritePayload>[]
          }
          create: {
            args: Prisma.user_favoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_favoritePayload>
          }
          createMany: {
            args: Prisma.user_favoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_favoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_favoritePayload>
          }
          update: {
            args: Prisma.user_favoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_favoritePayload>
          }
          deleteMany: {
            args: Prisma.user_favoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_favoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_favoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_favoritePayload>
          }
          aggregate: {
            args: Prisma.User_favoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_favorite>
          }
          groupBy: {
            args: Prisma.user_favoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_favoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_favoriteCountArgs<ExtArgs>
            result: $Utils.Optional<User_favoriteCountAggregateOutputType> | number
          }
        }
      }
      user_usage: {
        payload: Prisma.$user_usagePayload<ExtArgs>
        fields: Prisma.user_usageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_usageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_usagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_usageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_usagePayload>
          }
          findFirst: {
            args: Prisma.user_usageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_usagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_usageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_usagePayload>
          }
          findMany: {
            args: Prisma.user_usageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_usagePayload>[]
          }
          create: {
            args: Prisma.user_usageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_usagePayload>
          }
          createMany: {
            args: Prisma.user_usageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_usageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_usagePayload>
          }
          update: {
            args: Prisma.user_usageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_usagePayload>
          }
          deleteMany: {
            args: Prisma.user_usageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_usageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_usageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_usagePayload>
          }
          aggregate: {
            args: Prisma.User_usageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_usage>
          }
          groupBy: {
            args: Prisma.user_usageGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_usageGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_usageCountArgs<ExtArgs>
            result: $Utils.Optional<User_usageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    history?: historyOmit
    lecture?: lectureOmit
    lecture_room?: lecture_roomOmit
    lecture_schedule?: lecture_scheduleOmit
    user?: userOmit
    user_favorite?: user_favoriteOmit
    user_usage?: user_usageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LectureCountOutputType
   */

  export type LectureCountOutputType = {
    lecture_schedule: number
  }

  export type LectureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture_schedule?: boolean | LectureCountOutputTypeCountLecture_scheduleArgs
  }

  // Custom InputTypes
  /**
   * LectureCountOutputType without action
   */
  export type LectureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureCountOutputType
     */
    select?: LectureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LectureCountOutputType without action
   */
  export type LectureCountOutputTypeCountLecture_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lecture_scheduleWhereInput
  }


  /**
   * Count Type Lecture_roomCountOutputType
   */

  export type Lecture_roomCountOutputType = {
    history: number
    lecture_schedule: number
    user_favorite: number
    user_usage: number
  }

  export type Lecture_roomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | Lecture_roomCountOutputTypeCountHistoryArgs
    lecture_schedule?: boolean | Lecture_roomCountOutputTypeCountLecture_scheduleArgs
    user_favorite?: boolean | Lecture_roomCountOutputTypeCountUser_favoriteArgs
    user_usage?: boolean | Lecture_roomCountOutputTypeCountUser_usageArgs
  }

  // Custom InputTypes
  /**
   * Lecture_roomCountOutputType without action
   */
  export type Lecture_roomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture_roomCountOutputType
     */
    select?: Lecture_roomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Lecture_roomCountOutputType without action
   */
  export type Lecture_roomCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historyWhereInput
  }

  /**
   * Lecture_roomCountOutputType without action
   */
  export type Lecture_roomCountOutputTypeCountLecture_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lecture_scheduleWhereInput
  }

  /**
   * Lecture_roomCountOutputType without action
   */
  export type Lecture_roomCountOutputTypeCountUser_favoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_favoriteWhereInput
  }

  /**
   * Lecture_roomCountOutputType without action
   */
  export type Lecture_roomCountOutputTypeCountUser_usageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_usageWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    history: number
    user_usage: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | UserCountOutputTypeCountHistoryArgs
    user_usage?: boolean | UserCountOutputTypeCountUser_usageArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_usageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_usageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model history
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    history_id: number | null
    participant_count: number | null
  }

  export type HistorySumAggregateOutputType = {
    history_id: bigint | null
    participant_count: number | null
  }

  export type HistoryMinAggregateOutputType = {
    history_id: bigint | null
    user_id: string | null
    classId: string | null
    start_time: Date | null
    end_time: Date | null
    participant_count: number | null
    hashtags: string | null
    created_at: Date | null
  }

  export type HistoryMaxAggregateOutputType = {
    history_id: bigint | null
    user_id: string | null
    classId: string | null
    start_time: Date | null
    end_time: Date | null
    participant_count: number | null
    hashtags: string | null
    created_at: Date | null
  }

  export type HistoryCountAggregateOutputType = {
    history_id: number
    user_id: number
    classId: number
    start_time: number
    end_time: number
    participant_count: number
    hashtags: number
    created_at: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    history_id?: true
    participant_count?: true
  }

  export type HistorySumAggregateInputType = {
    history_id?: true
    participant_count?: true
  }

  export type HistoryMinAggregateInputType = {
    history_id?: true
    user_id?: true
    classId?: true
    start_time?: true
    end_time?: true
    participant_count?: true
    hashtags?: true
    created_at?: true
  }

  export type HistoryMaxAggregateInputType = {
    history_id?: true
    user_id?: true
    classId?: true
    start_time?: true
    end_time?: true
    participant_count?: true
    hashtags?: true
    created_at?: true
  }

  export type HistoryCountAggregateInputType = {
    history_id?: true
    user_id?: true
    classId?: true
    start_time?: true
    end_time?: true
    participant_count?: true
    hashtags?: true
    created_at?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which history to aggregate.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historyWhereInput
    orderBy?: historyOrderByWithAggregationInput | historyOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    history_id: bigint
    user_id: string
    classId: string
    start_time: Date
    end_time: Date
    participant_count: number | null
    hashtags: string | null
    created_at: Date
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    history_id?: boolean
    user_id?: boolean
    classId?: boolean
    start_time?: boolean
    end_time?: boolean
    participant_count?: boolean
    hashtags?: boolean
    created_at?: boolean
    lecture_room?: boolean | lecture_roomDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>



  export type historySelectScalar = {
    history_id?: boolean
    user_id?: boolean
    classId?: boolean
    start_time?: boolean
    end_time?: boolean
    participant_count?: boolean
    hashtags?: boolean
    created_at?: boolean
  }

  export type historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"history_id" | "user_id" | "classId" | "start_time" | "end_time" | "participant_count" | "hashtags" | "created_at", ExtArgs["result"]["history"]>
  export type historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture_room?: boolean | lecture_roomDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "history"
    objects: {
      lecture_room: Prisma.$lecture_roomPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      history_id: bigint
      user_id: string
      classId: string
      start_time: Date
      end_time: Date
      participant_count: number | null
      hashtags: string | null
      created_at: Date
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type historyGetPayload<S extends boolean | null | undefined | historyDefaultArgs> = $Result.GetResult<Prisma.$historyPayload, S>

  type historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['history'], meta: { name: 'history' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {historyFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historyFindUniqueArgs>(args: SelectSubset<T, historyFindUniqueArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {historyFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historyFindUniqueOrThrowArgs>(args: SelectSubset<T, historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historyFindFirstArgs>(args?: SelectSubset<T, historyFindFirstArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historyFindFirstOrThrowArgs>(args?: SelectSubset<T, historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `history_id`
     * const historyWithHistory_idOnly = await prisma.history.findMany({ select: { history_id: true } })
     * 
     */
    findMany<T extends historyFindManyArgs>(args?: SelectSubset<T, historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a History.
     * @param {historyCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends historyCreateArgs>(args: SelectSubset<T, historyCreateArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Histories.
     * @param {historyCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historyCreateManyArgs>(args?: SelectSubset<T, historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a History.
     * @param {historyDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends historyDeleteArgs>(args: SelectSubset<T, historyDeleteArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one History.
     * @param {historyUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historyUpdateArgs>(args: SelectSubset<T, historyUpdateArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Histories.
     * @param {historyDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historyDeleteManyArgs>(args?: SelectSubset<T, historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historyUpdateManyArgs>(args: SelectSubset<T, historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one History.
     * @param {historyUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends historyUpsertArgs>(args: SelectSubset<T, historyUpsertArgs<ExtArgs>>): Prisma__historyClient<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends historyCountArgs>(
      args?: Subset<T, historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historyGroupByArgs['orderBy'] }
        : { orderBy?: historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the history model
   */
  readonly fields: historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecture_room<T extends lecture_roomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lecture_roomDefaultArgs<ExtArgs>>): Prisma__lecture_roomClient<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the history model
   */
  interface historyFieldRefs {
    readonly history_id: FieldRef<"history", 'BigInt'>
    readonly user_id: FieldRef<"history", 'String'>
    readonly classId: FieldRef<"history", 'String'>
    readonly start_time: FieldRef<"history", 'DateTime'>
    readonly end_time: FieldRef<"history", 'DateTime'>
    readonly participant_count: FieldRef<"history", 'Int'>
    readonly hashtags: FieldRef<"history", 'String'>
    readonly created_at: FieldRef<"history", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * history findUnique
   */
  export type historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which history to fetch.
     */
    where: historyWhereUniqueInput
  }

  /**
   * history findUniqueOrThrow
   */
  export type historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which history to fetch.
     */
    where: historyWhereUniqueInput
  }

  /**
   * history findFirst
   */
  export type historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which history to fetch.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for histories.
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * history findFirstOrThrow
   */
  export type historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which history to fetch.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for histories.
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * history findMany
   */
  export type historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter, which histories to fetch.
     */
    where?: historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of histories to fetch.
     */
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing histories.
     */
    cursor?: historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * history create
   */
  export type historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * The data needed to create a history.
     */
    data: XOR<historyCreateInput, historyUncheckedCreateInput>
  }

  /**
   * history createMany
   */
  export type historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many histories.
     */
    data: historyCreateManyInput | historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * history update
   */
  export type historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * The data needed to update a history.
     */
    data: XOR<historyUpdateInput, historyUncheckedUpdateInput>
    /**
     * Choose, which history to update.
     */
    where: historyWhereUniqueInput
  }

  /**
   * history updateMany
   */
  export type historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update histories.
     */
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyInput>
    /**
     * Filter which histories to update
     */
    where?: historyWhereInput
    /**
     * Limit how many histories to update.
     */
    limit?: number
  }

  /**
   * history upsert
   */
  export type historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * The filter to search for the history to update in case it exists.
     */
    where: historyWhereUniqueInput
    /**
     * In case the history found by the `where` argument doesn't exist, create a new history with this data.
     */
    create: XOR<historyCreateInput, historyUncheckedCreateInput>
    /**
     * In case the history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historyUpdateInput, historyUncheckedUpdateInput>
  }

  /**
   * history delete
   */
  export type historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    /**
     * Filter which history to delete.
     */
    where: historyWhereUniqueInput
  }

  /**
   * history deleteMany
   */
  export type historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which histories to delete
     */
    where?: historyWhereInput
    /**
     * Limit how many histories to delete.
     */
    limit?: number
  }

  /**
   * history without action
   */
  export type historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
  }


  /**
   * Model lecture
   */

  export type AggregateLecture = {
    _count: LectureCountAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  export type LectureMinAggregateOutputType = {
    course_id: string | null
    course_name: string | null
    professor: string | null
  }

  export type LectureMaxAggregateOutputType = {
    course_id: string | null
    course_name: string | null
    professor: string | null
  }

  export type LectureCountAggregateOutputType = {
    course_id: number
    course_name: number
    professor: number
    _all: number
  }


  export type LectureMinAggregateInputType = {
    course_id?: true
    course_name?: true
    professor?: true
  }

  export type LectureMaxAggregateInputType = {
    course_id?: true
    course_name?: true
    professor?: true
  }

  export type LectureCountAggregateInputType = {
    course_id?: true
    course_name?: true
    professor?: true
    _all?: true
  }

  export type LectureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lecture to aggregate.
     */
    where?: lectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lectures
    **/
    _count?: true | LectureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LectureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LectureMaxAggregateInputType
  }

  export type GetLectureAggregateType<T extends LectureAggregateArgs> = {
        [P in keyof T & keyof AggregateLecture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecture[P]>
      : GetScalarType<T[P], AggregateLecture[P]>
  }




  export type lectureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lectureWhereInput
    orderBy?: lectureOrderByWithAggregationInput | lectureOrderByWithAggregationInput[]
    by: LectureScalarFieldEnum[] | LectureScalarFieldEnum
    having?: lectureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LectureCountAggregateInputType | true
    _min?: LectureMinAggregateInputType
    _max?: LectureMaxAggregateInputType
  }

  export type LectureGroupByOutputType = {
    course_id: string
    course_name: string
    professor: string
    _count: LectureCountAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  type GetLectureGroupByPayload<T extends lectureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LectureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LectureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LectureGroupByOutputType[P]>
            : GetScalarType<T[P], LectureGroupByOutputType[P]>
        }
      >
    >


  export type lectureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    course_id?: boolean
    course_name?: boolean
    professor?: boolean
    lecture_schedule?: boolean | lecture$lecture_scheduleArgs<ExtArgs>
    _count?: boolean | LectureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecture"]>



  export type lectureSelectScalar = {
    course_id?: boolean
    course_name?: boolean
    professor?: boolean
  }

  export type lectureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"course_id" | "course_name" | "professor", ExtArgs["result"]["lecture"]>
  export type lectureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture_schedule?: boolean | lecture$lecture_scheduleArgs<ExtArgs>
    _count?: boolean | LectureCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $lecturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lecture"
    objects: {
      lecture_schedule: Prisma.$lecture_schedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      course_id: string
      course_name: string
      professor: string
    }, ExtArgs["result"]["lecture"]>
    composites: {}
  }

  type lectureGetPayload<S extends boolean | null | undefined | lectureDefaultArgs> = $Result.GetResult<Prisma.$lecturePayload, S>

  type lectureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lectureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LectureCountAggregateInputType | true
    }

  export interface lectureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lecture'], meta: { name: 'lecture' } }
    /**
     * Find zero or one Lecture that matches the filter.
     * @param {lectureFindUniqueArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lectureFindUniqueArgs>(args: SelectSubset<T, lectureFindUniqueArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lectureFindUniqueOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lectureFindUniqueOrThrowArgs>(args: SelectSubset<T, lectureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureFindFirstArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lectureFindFirstArgs>(args?: SelectSubset<T, lectureFindFirstArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureFindFirstOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lectureFindFirstOrThrowArgs>(args?: SelectSubset<T, lectureFindFirstOrThrowArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lectures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lectures
     * const lectures = await prisma.lecture.findMany()
     * 
     * // Get first 10 Lectures
     * const lectures = await prisma.lecture.findMany({ take: 10 })
     * 
     * // Only select the `course_id`
     * const lectureWithCourse_idOnly = await prisma.lecture.findMany({ select: { course_id: true } })
     * 
     */
    findMany<T extends lectureFindManyArgs>(args?: SelectSubset<T, lectureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecture.
     * @param {lectureCreateArgs} args - Arguments to create a Lecture.
     * @example
     * // Create one Lecture
     * const Lecture = await prisma.lecture.create({
     *   data: {
     *     // ... data to create a Lecture
     *   }
     * })
     * 
     */
    create<T extends lectureCreateArgs>(args: SelectSubset<T, lectureCreateArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lectures.
     * @param {lectureCreateManyArgs} args - Arguments to create many Lectures.
     * @example
     * // Create many Lectures
     * const lecture = await prisma.lecture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lectureCreateManyArgs>(args?: SelectSubset<T, lectureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lecture.
     * @param {lectureDeleteArgs} args - Arguments to delete one Lecture.
     * @example
     * // Delete one Lecture
     * const Lecture = await prisma.lecture.delete({
     *   where: {
     *     // ... filter to delete one Lecture
     *   }
     * })
     * 
     */
    delete<T extends lectureDeleteArgs>(args: SelectSubset<T, lectureDeleteArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecture.
     * @param {lectureUpdateArgs} args - Arguments to update one Lecture.
     * @example
     * // Update one Lecture
     * const lecture = await prisma.lecture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lectureUpdateArgs>(args: SelectSubset<T, lectureUpdateArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lectures.
     * @param {lectureDeleteManyArgs} args - Arguments to filter Lectures to delete.
     * @example
     * // Delete a few Lectures
     * const { count } = await prisma.lecture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lectureDeleteManyArgs>(args?: SelectSubset<T, lectureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lectures
     * const lecture = await prisma.lecture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lectureUpdateManyArgs>(args: SelectSubset<T, lectureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lecture.
     * @param {lectureUpsertArgs} args - Arguments to update or create a Lecture.
     * @example
     * // Update or create a Lecture
     * const lecture = await prisma.lecture.upsert({
     *   create: {
     *     // ... data to create a Lecture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecture we want to update
     *   }
     * })
     */
    upsert<T extends lectureUpsertArgs>(args: SelectSubset<T, lectureUpsertArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureCountArgs} args - Arguments to filter Lectures to count.
     * @example
     * // Count the number of Lectures
     * const count = await prisma.lecture.count({
     *   where: {
     *     // ... the filter for the Lectures we want to count
     *   }
     * })
    **/
    count<T extends lectureCountArgs>(
      args?: Subset<T, lectureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LectureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LectureAggregateArgs>(args: Subset<T, LectureAggregateArgs>): Prisma.PrismaPromise<GetLectureAggregateType<T>>

    /**
     * Group by Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lectureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lectureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lectureGroupByArgs['orderBy'] }
        : { orderBy?: lectureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lectureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLectureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lecture model
   */
  readonly fields: lectureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lecture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lectureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecture_schedule<T extends lecture$lecture_scheduleArgs<ExtArgs> = {}>(args?: Subset<T, lecture$lecture_scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecture_schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lecture model
   */
  interface lectureFieldRefs {
    readonly course_id: FieldRef<"lecture", 'String'>
    readonly course_name: FieldRef<"lecture", 'String'>
    readonly professor: FieldRef<"lecture", 'String'>
  }
    

  // Custom InputTypes
  /**
   * lecture findUnique
   */
  export type lectureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lecture to fetch.
     */
    where: lectureWhereUniqueInput
  }

  /**
   * lecture findUniqueOrThrow
   */
  export type lectureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lecture to fetch.
     */
    where: lectureWhereUniqueInput
  }

  /**
   * lecture findFirst
   */
  export type lectureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lecture to fetch.
     */
    where?: lectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lectures.
     */
    cursor?: lectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * lecture findFirstOrThrow
   */
  export type lectureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lecture to fetch.
     */
    where?: lectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lectures.
     */
    cursor?: lectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * lecture findMany
   */
  export type lectureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter, which lectures to fetch.
     */
    where?: lectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lectures to fetch.
     */
    orderBy?: lectureOrderByWithRelationInput | lectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lectures.
     */
    cursor?: lectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lectures.
     */
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * lecture create
   */
  export type lectureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * The data needed to create a lecture.
     */
    data: XOR<lectureCreateInput, lectureUncheckedCreateInput>
  }

  /**
   * lecture createMany
   */
  export type lectureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lectures.
     */
    data: lectureCreateManyInput | lectureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lecture update
   */
  export type lectureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * The data needed to update a lecture.
     */
    data: XOR<lectureUpdateInput, lectureUncheckedUpdateInput>
    /**
     * Choose, which lecture to update.
     */
    where: lectureWhereUniqueInput
  }

  /**
   * lecture updateMany
   */
  export type lectureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lectures.
     */
    data: XOR<lectureUpdateManyMutationInput, lectureUncheckedUpdateManyInput>
    /**
     * Filter which lectures to update
     */
    where?: lectureWhereInput
    /**
     * Limit how many lectures to update.
     */
    limit?: number
  }

  /**
   * lecture upsert
   */
  export type lectureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * The filter to search for the lecture to update in case it exists.
     */
    where: lectureWhereUniqueInput
    /**
     * In case the lecture found by the `where` argument doesn't exist, create a new lecture with this data.
     */
    create: XOR<lectureCreateInput, lectureUncheckedCreateInput>
    /**
     * In case the lecture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lectureUpdateInput, lectureUncheckedUpdateInput>
  }

  /**
   * lecture delete
   */
  export type lectureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
    /**
     * Filter which lecture to delete.
     */
    where: lectureWhereUniqueInput
  }

  /**
   * lecture deleteMany
   */
  export type lectureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lectures to delete
     */
    where?: lectureWhereInput
    /**
     * Limit how many lectures to delete.
     */
    limit?: number
  }

  /**
   * lecture.lecture_schedule
   */
  export type lecture$lecture_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_schedule
     */
    select?: lecture_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_schedule
     */
    omit?: lecture_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_scheduleInclude<ExtArgs> | null
    where?: lecture_scheduleWhereInput
    orderBy?: lecture_scheduleOrderByWithRelationInput | lecture_scheduleOrderByWithRelationInput[]
    cursor?: lecture_scheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Lecture_scheduleScalarFieldEnum | Lecture_scheduleScalarFieldEnum[]
  }

  /**
   * lecture without action
   */
  export type lectureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture
     */
    select?: lectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture
     */
    omit?: lectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lectureInclude<ExtArgs> | null
  }


  /**
   * Model lecture_room
   */

  export type AggregateLecture_room = {
    _count: Lecture_roomCountAggregateOutputType | null
    _avg: Lecture_roomAvgAggregateOutputType | null
    _sum: Lecture_roomSumAggregateOutputType | null
    _min: Lecture_roomMinAggregateOutputType | null
    _max: Lecture_roomMaxAggregateOutputType | null
  }

  export type Lecture_roomAvgAggregateOutputType = {
    floor: number | null
    capacity: number | null
    current_occupancy: number | null
    cnt_alone_study: number | null
    cnt_group_meeting: number | null
    cnt_quiet: number | null
    cnt_free_talk: number | null
    cnt_short_stay: number | null
    cnt_comfortable: number | null
  }

  export type Lecture_roomSumAggregateOutputType = {
    floor: number | null
    capacity: number | null
    current_occupancy: number | null
    cnt_alone_study: number | null
    cnt_group_meeting: number | null
    cnt_quiet: number | null
    cnt_free_talk: number | null
    cnt_short_stay: number | null
    cnt_comfortable: number | null
  }

  export type Lecture_roomMinAggregateOutputType = {
    classId: string | null
    building: string | null
    room: string | null
    floor: number | null
    capacity: number | null
    current_occupancy: number | null
    cnt_alone_study: number | null
    cnt_group_meeting: number | null
    cnt_quiet: number | null
    cnt_free_talk: number | null
    cnt_short_stay: number | null
    cnt_comfortable: number | null
  }

  export type Lecture_roomMaxAggregateOutputType = {
    classId: string | null
    building: string | null
    room: string | null
    floor: number | null
    capacity: number | null
    current_occupancy: number | null
    cnt_alone_study: number | null
    cnt_group_meeting: number | null
    cnt_quiet: number | null
    cnt_free_talk: number | null
    cnt_short_stay: number | null
    cnt_comfortable: number | null
  }

  export type Lecture_roomCountAggregateOutputType = {
    classId: number
    building: number
    room: number
    floor: number
    capacity: number
    current_occupancy: number
    cnt_alone_study: number
    cnt_group_meeting: number
    cnt_quiet: number
    cnt_free_talk: number
    cnt_short_stay: number
    cnt_comfortable: number
    _all: number
  }


  export type Lecture_roomAvgAggregateInputType = {
    floor?: true
    capacity?: true
    current_occupancy?: true
    cnt_alone_study?: true
    cnt_group_meeting?: true
    cnt_quiet?: true
    cnt_free_talk?: true
    cnt_short_stay?: true
    cnt_comfortable?: true
  }

  export type Lecture_roomSumAggregateInputType = {
    floor?: true
    capacity?: true
    current_occupancy?: true
    cnt_alone_study?: true
    cnt_group_meeting?: true
    cnt_quiet?: true
    cnt_free_talk?: true
    cnt_short_stay?: true
    cnt_comfortable?: true
  }

  export type Lecture_roomMinAggregateInputType = {
    classId?: true
    building?: true
    room?: true
    floor?: true
    capacity?: true
    current_occupancy?: true
    cnt_alone_study?: true
    cnt_group_meeting?: true
    cnt_quiet?: true
    cnt_free_talk?: true
    cnt_short_stay?: true
    cnt_comfortable?: true
  }

  export type Lecture_roomMaxAggregateInputType = {
    classId?: true
    building?: true
    room?: true
    floor?: true
    capacity?: true
    current_occupancy?: true
    cnt_alone_study?: true
    cnt_group_meeting?: true
    cnt_quiet?: true
    cnt_free_talk?: true
    cnt_short_stay?: true
    cnt_comfortable?: true
  }

  export type Lecture_roomCountAggregateInputType = {
    classId?: true
    building?: true
    room?: true
    floor?: true
    capacity?: true
    current_occupancy?: true
    cnt_alone_study?: true
    cnt_group_meeting?: true
    cnt_quiet?: true
    cnt_free_talk?: true
    cnt_short_stay?: true
    cnt_comfortable?: true
    _all?: true
  }

  export type Lecture_roomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lecture_room to aggregate.
     */
    where?: lecture_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecture_rooms to fetch.
     */
    orderBy?: lecture_roomOrderByWithRelationInput | lecture_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lecture_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecture_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecture_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lecture_rooms
    **/
    _count?: true | Lecture_roomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Lecture_roomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Lecture_roomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lecture_roomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lecture_roomMaxAggregateInputType
  }

  export type GetLecture_roomAggregateType<T extends Lecture_roomAggregateArgs> = {
        [P in keyof T & keyof AggregateLecture_room]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecture_room[P]>
      : GetScalarType<T[P], AggregateLecture_room[P]>
  }




  export type lecture_roomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lecture_roomWhereInput
    orderBy?: lecture_roomOrderByWithAggregationInput | lecture_roomOrderByWithAggregationInput[]
    by: Lecture_roomScalarFieldEnum[] | Lecture_roomScalarFieldEnum
    having?: lecture_roomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lecture_roomCountAggregateInputType | true
    _avg?: Lecture_roomAvgAggregateInputType
    _sum?: Lecture_roomSumAggregateInputType
    _min?: Lecture_roomMinAggregateInputType
    _max?: Lecture_roomMaxAggregateInputType
  }

  export type Lecture_roomGroupByOutputType = {
    classId: string
    building: string
    room: string
    floor: number
    capacity: number
    current_occupancy: number
    cnt_alone_study: number
    cnt_group_meeting: number
    cnt_quiet: number
    cnt_free_talk: number
    cnt_short_stay: number
    cnt_comfortable: number
    _count: Lecture_roomCountAggregateOutputType | null
    _avg: Lecture_roomAvgAggregateOutputType | null
    _sum: Lecture_roomSumAggregateOutputType | null
    _min: Lecture_roomMinAggregateOutputType | null
    _max: Lecture_roomMaxAggregateOutputType | null
  }

  type GetLecture_roomGroupByPayload<T extends lecture_roomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lecture_roomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lecture_roomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lecture_roomGroupByOutputType[P]>
            : GetScalarType<T[P], Lecture_roomGroupByOutputType[P]>
        }
      >
    >


  export type lecture_roomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    classId?: boolean
    building?: boolean
    room?: boolean
    floor?: boolean
    capacity?: boolean
    current_occupancy?: boolean
    cnt_alone_study?: boolean
    cnt_group_meeting?: boolean
    cnt_quiet?: boolean
    cnt_free_talk?: boolean
    cnt_short_stay?: boolean
    cnt_comfortable?: boolean
    history?: boolean | lecture_room$historyArgs<ExtArgs>
    lecture_schedule?: boolean | lecture_room$lecture_scheduleArgs<ExtArgs>
    user_favorite?: boolean | lecture_room$user_favoriteArgs<ExtArgs>
    user_usage?: boolean | lecture_room$user_usageArgs<ExtArgs>
    _count?: boolean | Lecture_roomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecture_room"]>



  export type lecture_roomSelectScalar = {
    classId?: boolean
    building?: boolean
    room?: boolean
    floor?: boolean
    capacity?: boolean
    current_occupancy?: boolean
    cnt_alone_study?: boolean
    cnt_group_meeting?: boolean
    cnt_quiet?: boolean
    cnt_free_talk?: boolean
    cnt_short_stay?: boolean
    cnt_comfortable?: boolean
  }

  export type lecture_roomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"classId" | "building" | "room" | "floor" | "capacity" | "current_occupancy" | "cnt_alone_study" | "cnt_group_meeting" | "cnt_quiet" | "cnt_free_talk" | "cnt_short_stay" | "cnt_comfortable", ExtArgs["result"]["lecture_room"]>
  export type lecture_roomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | lecture_room$historyArgs<ExtArgs>
    lecture_schedule?: boolean | lecture_room$lecture_scheduleArgs<ExtArgs>
    user_favorite?: boolean | lecture_room$user_favoriteArgs<ExtArgs>
    user_usage?: boolean | lecture_room$user_usageArgs<ExtArgs>
    _count?: boolean | Lecture_roomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $lecture_roomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lecture_room"
    objects: {
      history: Prisma.$historyPayload<ExtArgs>[]
      lecture_schedule: Prisma.$lecture_schedulePayload<ExtArgs>[]
      user_favorite: Prisma.$user_favoritePayload<ExtArgs>[]
      user_usage: Prisma.$user_usagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      classId: string
      building: string
      room: string
      floor: number
      capacity: number
      current_occupancy: number
      cnt_alone_study: number
      cnt_group_meeting: number
      cnt_quiet: number
      cnt_free_talk: number
      cnt_short_stay: number
      cnt_comfortable: number
    }, ExtArgs["result"]["lecture_room"]>
    composites: {}
  }

  type lecture_roomGetPayload<S extends boolean | null | undefined | lecture_roomDefaultArgs> = $Result.GetResult<Prisma.$lecture_roomPayload, S>

  type lecture_roomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lecture_roomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lecture_roomCountAggregateInputType | true
    }

  export interface lecture_roomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lecture_room'], meta: { name: 'lecture_room' } }
    /**
     * Find zero or one Lecture_room that matches the filter.
     * @param {lecture_roomFindUniqueArgs} args - Arguments to find a Lecture_room
     * @example
     * // Get one Lecture_room
     * const lecture_room = await prisma.lecture_room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lecture_roomFindUniqueArgs>(args: SelectSubset<T, lecture_roomFindUniqueArgs<ExtArgs>>): Prisma__lecture_roomClient<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecture_room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lecture_roomFindUniqueOrThrowArgs} args - Arguments to find a Lecture_room
     * @example
     * // Get one Lecture_room
     * const lecture_room = await prisma.lecture_room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lecture_roomFindUniqueOrThrowArgs>(args: SelectSubset<T, lecture_roomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lecture_roomClient<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture_room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecture_roomFindFirstArgs} args - Arguments to find a Lecture_room
     * @example
     * // Get one Lecture_room
     * const lecture_room = await prisma.lecture_room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lecture_roomFindFirstArgs>(args?: SelectSubset<T, lecture_roomFindFirstArgs<ExtArgs>>): Prisma__lecture_roomClient<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture_room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecture_roomFindFirstOrThrowArgs} args - Arguments to find a Lecture_room
     * @example
     * // Get one Lecture_room
     * const lecture_room = await prisma.lecture_room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lecture_roomFindFirstOrThrowArgs>(args?: SelectSubset<T, lecture_roomFindFirstOrThrowArgs<ExtArgs>>): Prisma__lecture_roomClient<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lecture_rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecture_roomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lecture_rooms
     * const lecture_rooms = await prisma.lecture_room.findMany()
     * 
     * // Get first 10 Lecture_rooms
     * const lecture_rooms = await prisma.lecture_room.findMany({ take: 10 })
     * 
     * // Only select the `classId`
     * const lecture_roomWithClassIdOnly = await prisma.lecture_room.findMany({ select: { classId: true } })
     * 
     */
    findMany<T extends lecture_roomFindManyArgs>(args?: SelectSubset<T, lecture_roomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecture_room.
     * @param {lecture_roomCreateArgs} args - Arguments to create a Lecture_room.
     * @example
     * // Create one Lecture_room
     * const Lecture_room = await prisma.lecture_room.create({
     *   data: {
     *     // ... data to create a Lecture_room
     *   }
     * })
     * 
     */
    create<T extends lecture_roomCreateArgs>(args: SelectSubset<T, lecture_roomCreateArgs<ExtArgs>>): Prisma__lecture_roomClient<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lecture_rooms.
     * @param {lecture_roomCreateManyArgs} args - Arguments to create many Lecture_rooms.
     * @example
     * // Create many Lecture_rooms
     * const lecture_room = await prisma.lecture_room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lecture_roomCreateManyArgs>(args?: SelectSubset<T, lecture_roomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lecture_room.
     * @param {lecture_roomDeleteArgs} args - Arguments to delete one Lecture_room.
     * @example
     * // Delete one Lecture_room
     * const Lecture_room = await prisma.lecture_room.delete({
     *   where: {
     *     // ... filter to delete one Lecture_room
     *   }
     * })
     * 
     */
    delete<T extends lecture_roomDeleteArgs>(args: SelectSubset<T, lecture_roomDeleteArgs<ExtArgs>>): Prisma__lecture_roomClient<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecture_room.
     * @param {lecture_roomUpdateArgs} args - Arguments to update one Lecture_room.
     * @example
     * // Update one Lecture_room
     * const lecture_room = await prisma.lecture_room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lecture_roomUpdateArgs>(args: SelectSubset<T, lecture_roomUpdateArgs<ExtArgs>>): Prisma__lecture_roomClient<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lecture_rooms.
     * @param {lecture_roomDeleteManyArgs} args - Arguments to filter Lecture_rooms to delete.
     * @example
     * // Delete a few Lecture_rooms
     * const { count } = await prisma.lecture_room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lecture_roomDeleteManyArgs>(args?: SelectSubset<T, lecture_roomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecture_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecture_roomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lecture_rooms
     * const lecture_room = await prisma.lecture_room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lecture_roomUpdateManyArgs>(args: SelectSubset<T, lecture_roomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lecture_room.
     * @param {lecture_roomUpsertArgs} args - Arguments to update or create a Lecture_room.
     * @example
     * // Update or create a Lecture_room
     * const lecture_room = await prisma.lecture_room.upsert({
     *   create: {
     *     // ... data to create a Lecture_room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecture_room we want to update
     *   }
     * })
     */
    upsert<T extends lecture_roomUpsertArgs>(args: SelectSubset<T, lecture_roomUpsertArgs<ExtArgs>>): Prisma__lecture_roomClient<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lecture_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecture_roomCountArgs} args - Arguments to filter Lecture_rooms to count.
     * @example
     * // Count the number of Lecture_rooms
     * const count = await prisma.lecture_room.count({
     *   where: {
     *     // ... the filter for the Lecture_rooms we want to count
     *   }
     * })
    **/
    count<T extends lecture_roomCountArgs>(
      args?: Subset<T, lecture_roomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lecture_roomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecture_room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lecture_roomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Lecture_roomAggregateArgs>(args: Subset<T, Lecture_roomAggregateArgs>): Prisma.PrismaPromise<GetLecture_roomAggregateType<T>>

    /**
     * Group by Lecture_room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecture_roomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lecture_roomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lecture_roomGroupByArgs['orderBy'] }
        : { orderBy?: lecture_roomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lecture_roomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecture_roomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lecture_room model
   */
  readonly fields: lecture_roomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lecture_room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lecture_roomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends lecture_room$historyArgs<ExtArgs> = {}>(args?: Subset<T, lecture_room$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lecture_schedule<T extends lecture_room$lecture_scheduleArgs<ExtArgs> = {}>(args?: Subset<T, lecture_room$lecture_scheduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecture_schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_favorite<T extends lecture_room$user_favoriteArgs<ExtArgs> = {}>(args?: Subset<T, lecture_room$user_favoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_favoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_usage<T extends lecture_room$user_usageArgs<ExtArgs> = {}>(args?: Subset<T, lecture_room$user_usageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_usagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lecture_room model
   */
  interface lecture_roomFieldRefs {
    readonly classId: FieldRef<"lecture_room", 'String'>
    readonly building: FieldRef<"lecture_room", 'String'>
    readonly room: FieldRef<"lecture_room", 'String'>
    readonly floor: FieldRef<"lecture_room", 'Int'>
    readonly capacity: FieldRef<"lecture_room", 'Int'>
    readonly current_occupancy: FieldRef<"lecture_room", 'Int'>
    readonly cnt_alone_study: FieldRef<"lecture_room", 'Int'>
    readonly cnt_group_meeting: FieldRef<"lecture_room", 'Int'>
    readonly cnt_quiet: FieldRef<"lecture_room", 'Int'>
    readonly cnt_free_talk: FieldRef<"lecture_room", 'Int'>
    readonly cnt_short_stay: FieldRef<"lecture_room", 'Int'>
    readonly cnt_comfortable: FieldRef<"lecture_room", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * lecture_room findUnique
   */
  export type lecture_roomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_room
     */
    select?: lecture_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_room
     */
    omit?: lecture_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_roomInclude<ExtArgs> | null
    /**
     * Filter, which lecture_room to fetch.
     */
    where: lecture_roomWhereUniqueInput
  }

  /**
   * lecture_room findUniqueOrThrow
   */
  export type lecture_roomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_room
     */
    select?: lecture_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_room
     */
    omit?: lecture_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_roomInclude<ExtArgs> | null
    /**
     * Filter, which lecture_room to fetch.
     */
    where: lecture_roomWhereUniqueInput
  }

  /**
   * lecture_room findFirst
   */
  export type lecture_roomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_room
     */
    select?: lecture_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_room
     */
    omit?: lecture_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_roomInclude<ExtArgs> | null
    /**
     * Filter, which lecture_room to fetch.
     */
    where?: lecture_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecture_rooms to fetch.
     */
    orderBy?: lecture_roomOrderByWithRelationInput | lecture_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lecture_rooms.
     */
    cursor?: lecture_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecture_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecture_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lecture_rooms.
     */
    distinct?: Lecture_roomScalarFieldEnum | Lecture_roomScalarFieldEnum[]
  }

  /**
   * lecture_room findFirstOrThrow
   */
  export type lecture_roomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_room
     */
    select?: lecture_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_room
     */
    omit?: lecture_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_roomInclude<ExtArgs> | null
    /**
     * Filter, which lecture_room to fetch.
     */
    where?: lecture_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecture_rooms to fetch.
     */
    orderBy?: lecture_roomOrderByWithRelationInput | lecture_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lecture_rooms.
     */
    cursor?: lecture_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecture_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecture_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lecture_rooms.
     */
    distinct?: Lecture_roomScalarFieldEnum | Lecture_roomScalarFieldEnum[]
  }

  /**
   * lecture_room findMany
   */
  export type lecture_roomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_room
     */
    select?: lecture_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_room
     */
    omit?: lecture_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_roomInclude<ExtArgs> | null
    /**
     * Filter, which lecture_rooms to fetch.
     */
    where?: lecture_roomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecture_rooms to fetch.
     */
    orderBy?: lecture_roomOrderByWithRelationInput | lecture_roomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lecture_rooms.
     */
    cursor?: lecture_roomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecture_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecture_rooms.
     */
    skip?: number
    distinct?: Lecture_roomScalarFieldEnum | Lecture_roomScalarFieldEnum[]
  }

  /**
   * lecture_room create
   */
  export type lecture_roomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_room
     */
    select?: lecture_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_room
     */
    omit?: lecture_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_roomInclude<ExtArgs> | null
    /**
     * The data needed to create a lecture_room.
     */
    data: XOR<lecture_roomCreateInput, lecture_roomUncheckedCreateInput>
  }

  /**
   * lecture_room createMany
   */
  export type lecture_roomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lecture_rooms.
     */
    data: lecture_roomCreateManyInput | lecture_roomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lecture_room update
   */
  export type lecture_roomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_room
     */
    select?: lecture_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_room
     */
    omit?: lecture_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_roomInclude<ExtArgs> | null
    /**
     * The data needed to update a lecture_room.
     */
    data: XOR<lecture_roomUpdateInput, lecture_roomUncheckedUpdateInput>
    /**
     * Choose, which lecture_room to update.
     */
    where: lecture_roomWhereUniqueInput
  }

  /**
   * lecture_room updateMany
   */
  export type lecture_roomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lecture_rooms.
     */
    data: XOR<lecture_roomUpdateManyMutationInput, lecture_roomUncheckedUpdateManyInput>
    /**
     * Filter which lecture_rooms to update
     */
    where?: lecture_roomWhereInput
    /**
     * Limit how many lecture_rooms to update.
     */
    limit?: number
  }

  /**
   * lecture_room upsert
   */
  export type lecture_roomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_room
     */
    select?: lecture_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_room
     */
    omit?: lecture_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_roomInclude<ExtArgs> | null
    /**
     * The filter to search for the lecture_room to update in case it exists.
     */
    where: lecture_roomWhereUniqueInput
    /**
     * In case the lecture_room found by the `where` argument doesn't exist, create a new lecture_room with this data.
     */
    create: XOR<lecture_roomCreateInput, lecture_roomUncheckedCreateInput>
    /**
     * In case the lecture_room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lecture_roomUpdateInput, lecture_roomUncheckedUpdateInput>
  }

  /**
   * lecture_room delete
   */
  export type lecture_roomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_room
     */
    select?: lecture_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_room
     */
    omit?: lecture_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_roomInclude<ExtArgs> | null
    /**
     * Filter which lecture_room to delete.
     */
    where: lecture_roomWhereUniqueInput
  }

  /**
   * lecture_room deleteMany
   */
  export type lecture_roomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lecture_rooms to delete
     */
    where?: lecture_roomWhereInput
    /**
     * Limit how many lecture_rooms to delete.
     */
    limit?: number
  }

  /**
   * lecture_room.history
   */
  export type lecture_room$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    where?: historyWhereInput
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    cursor?: historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * lecture_room.lecture_schedule
   */
  export type lecture_room$lecture_scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_schedule
     */
    select?: lecture_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_schedule
     */
    omit?: lecture_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_scheduleInclude<ExtArgs> | null
    where?: lecture_scheduleWhereInput
    orderBy?: lecture_scheduleOrderByWithRelationInput | lecture_scheduleOrderByWithRelationInput[]
    cursor?: lecture_scheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Lecture_scheduleScalarFieldEnum | Lecture_scheduleScalarFieldEnum[]
  }

  /**
   * lecture_room.user_favorite
   */
  export type lecture_room$user_favoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_favorite
     */
    select?: user_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_favorite
     */
    omit?: user_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_favoriteInclude<ExtArgs> | null
    where?: user_favoriteWhereInput
    orderBy?: user_favoriteOrderByWithRelationInput | user_favoriteOrderByWithRelationInput[]
    cursor?: user_favoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_favoriteScalarFieldEnum | User_favoriteScalarFieldEnum[]
  }

  /**
   * lecture_room.user_usage
   */
  export type lecture_room$user_usageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_usage
     */
    select?: user_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_usage
     */
    omit?: user_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_usageInclude<ExtArgs> | null
    where?: user_usageWhereInput
    orderBy?: user_usageOrderByWithRelationInput | user_usageOrderByWithRelationInput[]
    cursor?: user_usageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_usageScalarFieldEnum | User_usageScalarFieldEnum[]
  }

  /**
   * lecture_room without action
   */
  export type lecture_roomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_room
     */
    select?: lecture_roomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_room
     */
    omit?: lecture_roomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_roomInclude<ExtArgs> | null
  }


  /**
   * Model lecture_schedule
   */

  export type AggregateLecture_schedule = {
    _count: Lecture_scheduleCountAggregateOutputType | null
    _min: Lecture_scheduleMinAggregateOutputType | null
    _max: Lecture_scheduleMaxAggregateOutputType | null
  }

  export type Lecture_scheduleMinAggregateOutputType = {
    course_id: string | null
    classId: string | null
    weekday: $Enums.lecture_schedule_weekday | null
    start_time: Date | null
    end_time: Date | null
  }

  export type Lecture_scheduleMaxAggregateOutputType = {
    course_id: string | null
    classId: string | null
    weekday: $Enums.lecture_schedule_weekday | null
    start_time: Date | null
    end_time: Date | null
  }

  export type Lecture_scheduleCountAggregateOutputType = {
    course_id: number
    classId: number
    weekday: number
    start_time: number
    end_time: number
    _all: number
  }


  export type Lecture_scheduleMinAggregateInputType = {
    course_id?: true
    classId?: true
    weekday?: true
    start_time?: true
    end_time?: true
  }

  export type Lecture_scheduleMaxAggregateInputType = {
    course_id?: true
    classId?: true
    weekday?: true
    start_time?: true
    end_time?: true
  }

  export type Lecture_scheduleCountAggregateInputType = {
    course_id?: true
    classId?: true
    weekday?: true
    start_time?: true
    end_time?: true
    _all?: true
  }

  export type Lecture_scheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lecture_schedule to aggregate.
     */
    where?: lecture_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecture_schedules to fetch.
     */
    orderBy?: lecture_scheduleOrderByWithRelationInput | lecture_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lecture_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecture_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecture_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lecture_schedules
    **/
    _count?: true | Lecture_scheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lecture_scheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lecture_scheduleMaxAggregateInputType
  }

  export type GetLecture_scheduleAggregateType<T extends Lecture_scheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateLecture_schedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecture_schedule[P]>
      : GetScalarType<T[P], AggregateLecture_schedule[P]>
  }




  export type lecture_scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lecture_scheduleWhereInput
    orderBy?: lecture_scheduleOrderByWithAggregationInput | lecture_scheduleOrderByWithAggregationInput[]
    by: Lecture_scheduleScalarFieldEnum[] | Lecture_scheduleScalarFieldEnum
    having?: lecture_scheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lecture_scheduleCountAggregateInputType | true
    _min?: Lecture_scheduleMinAggregateInputType
    _max?: Lecture_scheduleMaxAggregateInputType
  }

  export type Lecture_scheduleGroupByOutputType = {
    course_id: string
    classId: string
    weekday: $Enums.lecture_schedule_weekday
    start_time: Date
    end_time: Date
    _count: Lecture_scheduleCountAggregateOutputType | null
    _min: Lecture_scheduleMinAggregateOutputType | null
    _max: Lecture_scheduleMaxAggregateOutputType | null
  }

  type GetLecture_scheduleGroupByPayload<T extends lecture_scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lecture_scheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lecture_scheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lecture_scheduleGroupByOutputType[P]>
            : GetScalarType<T[P], Lecture_scheduleGroupByOutputType[P]>
        }
      >
    >


  export type lecture_scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    course_id?: boolean
    classId?: boolean
    weekday?: boolean
    start_time?: boolean
    end_time?: boolean
    lecture_room?: boolean | lecture_roomDefaultArgs<ExtArgs>
    lecture?: boolean | lectureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lecture_schedule"]>



  export type lecture_scheduleSelectScalar = {
    course_id?: boolean
    classId?: boolean
    weekday?: boolean
    start_time?: boolean
    end_time?: boolean
  }

  export type lecture_scheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"course_id" | "classId" | "weekday" | "start_time" | "end_time", ExtArgs["result"]["lecture_schedule"]>
  export type lecture_scheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture_room?: boolean | lecture_roomDefaultArgs<ExtArgs>
    lecture?: boolean | lectureDefaultArgs<ExtArgs>
  }

  export type $lecture_schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lecture_schedule"
    objects: {
      lecture_room: Prisma.$lecture_roomPayload<ExtArgs>
      lecture: Prisma.$lecturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      course_id: string
      classId: string
      weekday: $Enums.lecture_schedule_weekday
      start_time: Date
      end_time: Date
    }, ExtArgs["result"]["lecture_schedule"]>
    composites: {}
  }

  type lecture_scheduleGetPayload<S extends boolean | null | undefined | lecture_scheduleDefaultArgs> = $Result.GetResult<Prisma.$lecture_schedulePayload, S>

  type lecture_scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lecture_scheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lecture_scheduleCountAggregateInputType | true
    }

  export interface lecture_scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lecture_schedule'], meta: { name: 'lecture_schedule' } }
    /**
     * Find zero or one Lecture_schedule that matches the filter.
     * @param {lecture_scheduleFindUniqueArgs} args - Arguments to find a Lecture_schedule
     * @example
     * // Get one Lecture_schedule
     * const lecture_schedule = await prisma.lecture_schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lecture_scheduleFindUniqueArgs>(args: SelectSubset<T, lecture_scheduleFindUniqueArgs<ExtArgs>>): Prisma__lecture_scheduleClient<$Result.GetResult<Prisma.$lecture_schedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecture_schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lecture_scheduleFindUniqueOrThrowArgs} args - Arguments to find a Lecture_schedule
     * @example
     * // Get one Lecture_schedule
     * const lecture_schedule = await prisma.lecture_schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lecture_scheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, lecture_scheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lecture_scheduleClient<$Result.GetResult<Prisma.$lecture_schedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture_schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecture_scheduleFindFirstArgs} args - Arguments to find a Lecture_schedule
     * @example
     * // Get one Lecture_schedule
     * const lecture_schedule = await prisma.lecture_schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lecture_scheduleFindFirstArgs>(args?: SelectSubset<T, lecture_scheduleFindFirstArgs<ExtArgs>>): Prisma__lecture_scheduleClient<$Result.GetResult<Prisma.$lecture_schedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture_schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecture_scheduleFindFirstOrThrowArgs} args - Arguments to find a Lecture_schedule
     * @example
     * // Get one Lecture_schedule
     * const lecture_schedule = await prisma.lecture_schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lecture_scheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, lecture_scheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__lecture_scheduleClient<$Result.GetResult<Prisma.$lecture_schedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lecture_schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecture_scheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lecture_schedules
     * const lecture_schedules = await prisma.lecture_schedule.findMany()
     * 
     * // Get first 10 Lecture_schedules
     * const lecture_schedules = await prisma.lecture_schedule.findMany({ take: 10 })
     * 
     * // Only select the `course_id`
     * const lecture_scheduleWithCourse_idOnly = await prisma.lecture_schedule.findMany({ select: { course_id: true } })
     * 
     */
    findMany<T extends lecture_scheduleFindManyArgs>(args?: SelectSubset<T, lecture_scheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lecture_schedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecture_schedule.
     * @param {lecture_scheduleCreateArgs} args - Arguments to create a Lecture_schedule.
     * @example
     * // Create one Lecture_schedule
     * const Lecture_schedule = await prisma.lecture_schedule.create({
     *   data: {
     *     // ... data to create a Lecture_schedule
     *   }
     * })
     * 
     */
    create<T extends lecture_scheduleCreateArgs>(args: SelectSubset<T, lecture_scheduleCreateArgs<ExtArgs>>): Prisma__lecture_scheduleClient<$Result.GetResult<Prisma.$lecture_schedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lecture_schedules.
     * @param {lecture_scheduleCreateManyArgs} args - Arguments to create many Lecture_schedules.
     * @example
     * // Create many Lecture_schedules
     * const lecture_schedule = await prisma.lecture_schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lecture_scheduleCreateManyArgs>(args?: SelectSubset<T, lecture_scheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lecture_schedule.
     * @param {lecture_scheduleDeleteArgs} args - Arguments to delete one Lecture_schedule.
     * @example
     * // Delete one Lecture_schedule
     * const Lecture_schedule = await prisma.lecture_schedule.delete({
     *   where: {
     *     // ... filter to delete one Lecture_schedule
     *   }
     * })
     * 
     */
    delete<T extends lecture_scheduleDeleteArgs>(args: SelectSubset<T, lecture_scheduleDeleteArgs<ExtArgs>>): Prisma__lecture_scheduleClient<$Result.GetResult<Prisma.$lecture_schedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecture_schedule.
     * @param {lecture_scheduleUpdateArgs} args - Arguments to update one Lecture_schedule.
     * @example
     * // Update one Lecture_schedule
     * const lecture_schedule = await prisma.lecture_schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lecture_scheduleUpdateArgs>(args: SelectSubset<T, lecture_scheduleUpdateArgs<ExtArgs>>): Prisma__lecture_scheduleClient<$Result.GetResult<Prisma.$lecture_schedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lecture_schedules.
     * @param {lecture_scheduleDeleteManyArgs} args - Arguments to filter Lecture_schedules to delete.
     * @example
     * // Delete a few Lecture_schedules
     * const { count } = await prisma.lecture_schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lecture_scheduleDeleteManyArgs>(args?: SelectSubset<T, lecture_scheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lecture_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecture_scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lecture_schedules
     * const lecture_schedule = await prisma.lecture_schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lecture_scheduleUpdateManyArgs>(args: SelectSubset<T, lecture_scheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lecture_schedule.
     * @param {lecture_scheduleUpsertArgs} args - Arguments to update or create a Lecture_schedule.
     * @example
     * // Update or create a Lecture_schedule
     * const lecture_schedule = await prisma.lecture_schedule.upsert({
     *   create: {
     *     // ... data to create a Lecture_schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecture_schedule we want to update
     *   }
     * })
     */
    upsert<T extends lecture_scheduleUpsertArgs>(args: SelectSubset<T, lecture_scheduleUpsertArgs<ExtArgs>>): Prisma__lecture_scheduleClient<$Result.GetResult<Prisma.$lecture_schedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lecture_schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecture_scheduleCountArgs} args - Arguments to filter Lecture_schedules to count.
     * @example
     * // Count the number of Lecture_schedules
     * const count = await prisma.lecture_schedule.count({
     *   where: {
     *     // ... the filter for the Lecture_schedules we want to count
     *   }
     * })
    **/
    count<T extends lecture_scheduleCountArgs>(
      args?: Subset<T, lecture_scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lecture_scheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecture_schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lecture_scheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Lecture_scheduleAggregateArgs>(args: Subset<T, Lecture_scheduleAggregateArgs>): Prisma.PrismaPromise<GetLecture_scheduleAggregateType<T>>

    /**
     * Group by Lecture_schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lecture_scheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lecture_scheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lecture_scheduleGroupByArgs['orderBy'] }
        : { orderBy?: lecture_scheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lecture_scheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLecture_scheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lecture_schedule model
   */
  readonly fields: lecture_scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lecture_schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lecture_scheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecture_room<T extends lecture_roomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lecture_roomDefaultArgs<ExtArgs>>): Prisma__lecture_roomClient<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lecture<T extends lectureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lectureDefaultArgs<ExtArgs>>): Prisma__lectureClient<$Result.GetResult<Prisma.$lecturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lecture_schedule model
   */
  interface lecture_scheduleFieldRefs {
    readonly course_id: FieldRef<"lecture_schedule", 'String'>
    readonly classId: FieldRef<"lecture_schedule", 'String'>
    readonly weekday: FieldRef<"lecture_schedule", 'lecture_schedule_weekday'>
    readonly start_time: FieldRef<"lecture_schedule", 'DateTime'>
    readonly end_time: FieldRef<"lecture_schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * lecture_schedule findUnique
   */
  export type lecture_scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_schedule
     */
    select?: lecture_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_schedule
     */
    omit?: lecture_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which lecture_schedule to fetch.
     */
    where: lecture_scheduleWhereUniqueInput
  }

  /**
   * lecture_schedule findUniqueOrThrow
   */
  export type lecture_scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_schedule
     */
    select?: lecture_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_schedule
     */
    omit?: lecture_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which lecture_schedule to fetch.
     */
    where: lecture_scheduleWhereUniqueInput
  }

  /**
   * lecture_schedule findFirst
   */
  export type lecture_scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_schedule
     */
    select?: lecture_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_schedule
     */
    omit?: lecture_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which lecture_schedule to fetch.
     */
    where?: lecture_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecture_schedules to fetch.
     */
    orderBy?: lecture_scheduleOrderByWithRelationInput | lecture_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lecture_schedules.
     */
    cursor?: lecture_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecture_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecture_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lecture_schedules.
     */
    distinct?: Lecture_scheduleScalarFieldEnum | Lecture_scheduleScalarFieldEnum[]
  }

  /**
   * lecture_schedule findFirstOrThrow
   */
  export type lecture_scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_schedule
     */
    select?: lecture_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_schedule
     */
    omit?: lecture_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which lecture_schedule to fetch.
     */
    where?: lecture_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecture_schedules to fetch.
     */
    orderBy?: lecture_scheduleOrderByWithRelationInput | lecture_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lecture_schedules.
     */
    cursor?: lecture_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecture_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecture_schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lecture_schedules.
     */
    distinct?: Lecture_scheduleScalarFieldEnum | Lecture_scheduleScalarFieldEnum[]
  }

  /**
   * lecture_schedule findMany
   */
  export type lecture_scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_schedule
     */
    select?: lecture_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_schedule
     */
    omit?: lecture_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_scheduleInclude<ExtArgs> | null
    /**
     * Filter, which lecture_schedules to fetch.
     */
    where?: lecture_scheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lecture_schedules to fetch.
     */
    orderBy?: lecture_scheduleOrderByWithRelationInput | lecture_scheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lecture_schedules.
     */
    cursor?: lecture_scheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lecture_schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lecture_schedules.
     */
    skip?: number
    distinct?: Lecture_scheduleScalarFieldEnum | Lecture_scheduleScalarFieldEnum[]
  }

  /**
   * lecture_schedule create
   */
  export type lecture_scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_schedule
     */
    select?: lecture_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_schedule
     */
    omit?: lecture_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_scheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a lecture_schedule.
     */
    data: XOR<lecture_scheduleCreateInput, lecture_scheduleUncheckedCreateInput>
  }

  /**
   * lecture_schedule createMany
   */
  export type lecture_scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lecture_schedules.
     */
    data: lecture_scheduleCreateManyInput | lecture_scheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lecture_schedule update
   */
  export type lecture_scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_schedule
     */
    select?: lecture_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_schedule
     */
    omit?: lecture_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_scheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a lecture_schedule.
     */
    data: XOR<lecture_scheduleUpdateInput, lecture_scheduleUncheckedUpdateInput>
    /**
     * Choose, which lecture_schedule to update.
     */
    where: lecture_scheduleWhereUniqueInput
  }

  /**
   * lecture_schedule updateMany
   */
  export type lecture_scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lecture_schedules.
     */
    data: XOR<lecture_scheduleUpdateManyMutationInput, lecture_scheduleUncheckedUpdateManyInput>
    /**
     * Filter which lecture_schedules to update
     */
    where?: lecture_scheduleWhereInput
    /**
     * Limit how many lecture_schedules to update.
     */
    limit?: number
  }

  /**
   * lecture_schedule upsert
   */
  export type lecture_scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_schedule
     */
    select?: lecture_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_schedule
     */
    omit?: lecture_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_scheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the lecture_schedule to update in case it exists.
     */
    where: lecture_scheduleWhereUniqueInput
    /**
     * In case the lecture_schedule found by the `where` argument doesn't exist, create a new lecture_schedule with this data.
     */
    create: XOR<lecture_scheduleCreateInput, lecture_scheduleUncheckedCreateInput>
    /**
     * In case the lecture_schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lecture_scheduleUpdateInput, lecture_scheduleUncheckedUpdateInput>
  }

  /**
   * lecture_schedule delete
   */
  export type lecture_scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_schedule
     */
    select?: lecture_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_schedule
     */
    omit?: lecture_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_scheduleInclude<ExtArgs> | null
    /**
     * Filter which lecture_schedule to delete.
     */
    where: lecture_scheduleWhereUniqueInput
  }

  /**
   * lecture_schedule deleteMany
   */
  export type lecture_scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lecture_schedules to delete
     */
    where?: lecture_scheduleWhereInput
    /**
     * Limit how many lecture_schedules to delete.
     */
    limit?: number
  }

  /**
   * lecture_schedule without action
   */
  export type lecture_scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lecture_schedule
     */
    select?: lecture_scheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lecture_schedule
     */
    omit?: lecture_scheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lecture_scheduleInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
    name: string | null
    password: string | null
    user_type: $Enums.user_user_type | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
    name: string | null
    password: string | null
    user_type: $Enums.user_user_type | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    name: number
    password: number
    user_type: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    user_id?: true
    name?: true
    password?: true
    user_type?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    name?: true
    password?: true
    user_type?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    name?: true
    password?: true
    user_type?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: string
    name: string
    password: string
    user_type: $Enums.user_user_type
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    password?: boolean
    user_type?: boolean
    created_at?: boolean
    history?: boolean | user$historyArgs<ExtArgs>
    user_usage?: boolean | user$user_usageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    user_id?: boolean
    name?: boolean
    password?: boolean
    user_type?: boolean
    created_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "password" | "user_type" | "created_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | user$historyArgs<ExtArgs>
    user_usage?: boolean | user$user_usageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      history: Prisma.$historyPayload<ExtArgs>[]
      user_usage: Prisma.$user_usagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      name: string
      password: string
      user_type: $Enums.user_user_type
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends user$historyArgs<ExtArgs> = {}>(args?: Subset<T, user$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_usage<T extends user$user_usageArgs<ExtArgs> = {}>(args?: Subset<T, user$user_usageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_usagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly user_id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly user_type: FieldRef<"user", 'user_user_type'>
    readonly created_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.history
   */
  export type user$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the history
     */
    select?: historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the history
     */
    omit?: historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historyInclude<ExtArgs> | null
    where?: historyWhereInput
    orderBy?: historyOrderByWithRelationInput | historyOrderByWithRelationInput[]
    cursor?: historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * user.user_usage
   */
  export type user$user_usageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_usage
     */
    select?: user_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_usage
     */
    omit?: user_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_usageInclude<ExtArgs> | null
    where?: user_usageWhereInput
    orderBy?: user_usageOrderByWithRelationInput | user_usageOrderByWithRelationInput[]
    cursor?: user_usageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_usageScalarFieldEnum | User_usageScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model user_favorite
   */

  export type AggregateUser_favorite = {
    _count: User_favoriteCountAggregateOutputType | null
    _min: User_favoriteMinAggregateOutputType | null
    _max: User_favoriteMaxAggregateOutputType | null
  }

  export type User_favoriteMinAggregateOutputType = {
    user_id: string | null
    classId: string | null
    weekday: $Enums.user_favorite_weekday | null
    start_time: Date | null
    end_time: Date | null
    favorited_at: Date | null
  }

  export type User_favoriteMaxAggregateOutputType = {
    user_id: string | null
    classId: string | null
    weekday: $Enums.user_favorite_weekday | null
    start_time: Date | null
    end_time: Date | null
    favorited_at: Date | null
  }

  export type User_favoriteCountAggregateOutputType = {
    user_id: number
    classId: number
    weekday: number
    start_time: number
    end_time: number
    favorited_at: number
    _all: number
  }


  export type User_favoriteMinAggregateInputType = {
    user_id?: true
    classId?: true
    weekday?: true
    start_time?: true
    end_time?: true
    favorited_at?: true
  }

  export type User_favoriteMaxAggregateInputType = {
    user_id?: true
    classId?: true
    weekday?: true
    start_time?: true
    end_time?: true
    favorited_at?: true
  }

  export type User_favoriteCountAggregateInputType = {
    user_id?: true
    classId?: true
    weekday?: true
    start_time?: true
    end_time?: true
    favorited_at?: true
    _all?: true
  }

  export type User_favoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_favorite to aggregate.
     */
    where?: user_favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_favorites to fetch.
     */
    orderBy?: user_favoriteOrderByWithRelationInput | user_favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_favorites
    **/
    _count?: true | User_favoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_favoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_favoriteMaxAggregateInputType
  }

  export type GetUser_favoriteAggregateType<T extends User_favoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_favorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_favorite[P]>
      : GetScalarType<T[P], AggregateUser_favorite[P]>
  }




  export type user_favoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_favoriteWhereInput
    orderBy?: user_favoriteOrderByWithAggregationInput | user_favoriteOrderByWithAggregationInput[]
    by: User_favoriteScalarFieldEnum[] | User_favoriteScalarFieldEnum
    having?: user_favoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_favoriteCountAggregateInputType | true
    _min?: User_favoriteMinAggregateInputType
    _max?: User_favoriteMaxAggregateInputType
  }

  export type User_favoriteGroupByOutputType = {
    user_id: string
    classId: string
    weekday: $Enums.user_favorite_weekday
    start_time: Date
    end_time: Date
    favorited_at: Date
    _count: User_favoriteCountAggregateOutputType | null
    _min: User_favoriteMinAggregateOutputType | null
    _max: User_favoriteMaxAggregateOutputType | null
  }

  type GetUser_favoriteGroupByPayload<T extends user_favoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_favoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_favoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_favoriteGroupByOutputType[P]>
            : GetScalarType<T[P], User_favoriteGroupByOutputType[P]>
        }
      >
    >


  export type user_favoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    classId?: boolean
    weekday?: boolean
    start_time?: boolean
    end_time?: boolean
    favorited_at?: boolean
    lecture_room?: boolean | lecture_roomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_favorite"]>



  export type user_favoriteSelectScalar = {
    user_id?: boolean
    classId?: boolean
    weekday?: boolean
    start_time?: boolean
    end_time?: boolean
    favorited_at?: boolean
  }

  export type user_favoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "classId" | "weekday" | "start_time" | "end_time" | "favorited_at", ExtArgs["result"]["user_favorite"]>
  export type user_favoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lecture_room?: boolean | lecture_roomDefaultArgs<ExtArgs>
  }

  export type $user_favoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_favorite"
    objects: {
      lecture_room: Prisma.$lecture_roomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      classId: string
      weekday: $Enums.user_favorite_weekday
      start_time: Date
      end_time: Date
      favorited_at: Date
    }, ExtArgs["result"]["user_favorite"]>
    composites: {}
  }

  type user_favoriteGetPayload<S extends boolean | null | undefined | user_favoriteDefaultArgs> = $Result.GetResult<Prisma.$user_favoritePayload, S>

  type user_favoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_favoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_favoriteCountAggregateInputType | true
    }

  export interface user_favoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_favorite'], meta: { name: 'user_favorite' } }
    /**
     * Find zero or one User_favorite that matches the filter.
     * @param {user_favoriteFindUniqueArgs} args - Arguments to find a User_favorite
     * @example
     * // Get one User_favorite
     * const user_favorite = await prisma.user_favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_favoriteFindUniqueArgs>(args: SelectSubset<T, user_favoriteFindUniqueArgs<ExtArgs>>): Prisma__user_favoriteClient<$Result.GetResult<Prisma.$user_favoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_favoriteFindUniqueOrThrowArgs} args - Arguments to find a User_favorite
     * @example
     * // Get one User_favorite
     * const user_favorite = await prisma.user_favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_favoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, user_favoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_favoriteClient<$Result.GetResult<Prisma.$user_favoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_favoriteFindFirstArgs} args - Arguments to find a User_favorite
     * @example
     * // Get one User_favorite
     * const user_favorite = await prisma.user_favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_favoriteFindFirstArgs>(args?: SelectSubset<T, user_favoriteFindFirstArgs<ExtArgs>>): Prisma__user_favoriteClient<$Result.GetResult<Prisma.$user_favoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_favoriteFindFirstOrThrowArgs} args - Arguments to find a User_favorite
     * @example
     * // Get one User_favorite
     * const user_favorite = await prisma.user_favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_favoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, user_favoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_favoriteClient<$Result.GetResult<Prisma.$user_favoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_favoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_favorites
     * const user_favorites = await prisma.user_favorite.findMany()
     * 
     * // Get first 10 User_favorites
     * const user_favorites = await prisma.user_favorite.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_favoriteWithUser_idOnly = await prisma.user_favorite.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_favoriteFindManyArgs>(args?: SelectSubset<T, user_favoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_favoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_favorite.
     * @param {user_favoriteCreateArgs} args - Arguments to create a User_favorite.
     * @example
     * // Create one User_favorite
     * const User_favorite = await prisma.user_favorite.create({
     *   data: {
     *     // ... data to create a User_favorite
     *   }
     * })
     * 
     */
    create<T extends user_favoriteCreateArgs>(args: SelectSubset<T, user_favoriteCreateArgs<ExtArgs>>): Prisma__user_favoriteClient<$Result.GetResult<Prisma.$user_favoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_favorites.
     * @param {user_favoriteCreateManyArgs} args - Arguments to create many User_favorites.
     * @example
     * // Create many User_favorites
     * const user_favorite = await prisma.user_favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_favoriteCreateManyArgs>(args?: SelectSubset<T, user_favoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_favorite.
     * @param {user_favoriteDeleteArgs} args - Arguments to delete one User_favorite.
     * @example
     * // Delete one User_favorite
     * const User_favorite = await prisma.user_favorite.delete({
     *   where: {
     *     // ... filter to delete one User_favorite
     *   }
     * })
     * 
     */
    delete<T extends user_favoriteDeleteArgs>(args: SelectSubset<T, user_favoriteDeleteArgs<ExtArgs>>): Prisma__user_favoriteClient<$Result.GetResult<Prisma.$user_favoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_favorite.
     * @param {user_favoriteUpdateArgs} args - Arguments to update one User_favorite.
     * @example
     * // Update one User_favorite
     * const user_favorite = await prisma.user_favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_favoriteUpdateArgs>(args: SelectSubset<T, user_favoriteUpdateArgs<ExtArgs>>): Prisma__user_favoriteClient<$Result.GetResult<Prisma.$user_favoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_favorites.
     * @param {user_favoriteDeleteManyArgs} args - Arguments to filter User_favorites to delete.
     * @example
     * // Delete a few User_favorites
     * const { count } = await prisma.user_favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_favoriteDeleteManyArgs>(args?: SelectSubset<T, user_favoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_favoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_favorites
     * const user_favorite = await prisma.user_favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_favoriteUpdateManyArgs>(args: SelectSubset<T, user_favoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_favorite.
     * @param {user_favoriteUpsertArgs} args - Arguments to update or create a User_favorite.
     * @example
     * // Update or create a User_favorite
     * const user_favorite = await prisma.user_favorite.upsert({
     *   create: {
     *     // ... data to create a User_favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_favorite we want to update
     *   }
     * })
     */
    upsert<T extends user_favoriteUpsertArgs>(args: SelectSubset<T, user_favoriteUpsertArgs<ExtArgs>>): Prisma__user_favoriteClient<$Result.GetResult<Prisma.$user_favoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_favoriteCountArgs} args - Arguments to filter User_favorites to count.
     * @example
     * // Count the number of User_favorites
     * const count = await prisma.user_favorite.count({
     *   where: {
     *     // ... the filter for the User_favorites we want to count
     *   }
     * })
    **/
    count<T extends user_favoriteCountArgs>(
      args?: Subset<T, user_favoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_favoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_favoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_favoriteAggregateArgs>(args: Subset<T, User_favoriteAggregateArgs>): Prisma.PrismaPromise<GetUser_favoriteAggregateType<T>>

    /**
     * Group by User_favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_favoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_favoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_favoriteGroupByArgs['orderBy'] }
        : { orderBy?: user_favoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_favoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_favoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_favorite model
   */
  readonly fields: user_favoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_favoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lecture_room<T extends lecture_roomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lecture_roomDefaultArgs<ExtArgs>>): Prisma__lecture_roomClient<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_favorite model
   */
  interface user_favoriteFieldRefs {
    readonly user_id: FieldRef<"user_favorite", 'String'>
    readonly classId: FieldRef<"user_favorite", 'String'>
    readonly weekday: FieldRef<"user_favorite", 'user_favorite_weekday'>
    readonly start_time: FieldRef<"user_favorite", 'DateTime'>
    readonly end_time: FieldRef<"user_favorite", 'DateTime'>
    readonly favorited_at: FieldRef<"user_favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_favorite findUnique
   */
  export type user_favoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_favorite
     */
    select?: user_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_favorite
     */
    omit?: user_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_favoriteInclude<ExtArgs> | null
    /**
     * Filter, which user_favorite to fetch.
     */
    where: user_favoriteWhereUniqueInput
  }

  /**
   * user_favorite findUniqueOrThrow
   */
  export type user_favoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_favorite
     */
    select?: user_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_favorite
     */
    omit?: user_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_favoriteInclude<ExtArgs> | null
    /**
     * Filter, which user_favorite to fetch.
     */
    where: user_favoriteWhereUniqueInput
  }

  /**
   * user_favorite findFirst
   */
  export type user_favoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_favorite
     */
    select?: user_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_favorite
     */
    omit?: user_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_favoriteInclude<ExtArgs> | null
    /**
     * Filter, which user_favorite to fetch.
     */
    where?: user_favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_favorites to fetch.
     */
    orderBy?: user_favoriteOrderByWithRelationInput | user_favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_favorites.
     */
    cursor?: user_favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_favorites.
     */
    distinct?: User_favoriteScalarFieldEnum | User_favoriteScalarFieldEnum[]
  }

  /**
   * user_favorite findFirstOrThrow
   */
  export type user_favoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_favorite
     */
    select?: user_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_favorite
     */
    omit?: user_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_favoriteInclude<ExtArgs> | null
    /**
     * Filter, which user_favorite to fetch.
     */
    where?: user_favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_favorites to fetch.
     */
    orderBy?: user_favoriteOrderByWithRelationInput | user_favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_favorites.
     */
    cursor?: user_favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_favorites.
     */
    distinct?: User_favoriteScalarFieldEnum | User_favoriteScalarFieldEnum[]
  }

  /**
   * user_favorite findMany
   */
  export type user_favoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_favorite
     */
    select?: user_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_favorite
     */
    omit?: user_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_favoriteInclude<ExtArgs> | null
    /**
     * Filter, which user_favorites to fetch.
     */
    where?: user_favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_favorites to fetch.
     */
    orderBy?: user_favoriteOrderByWithRelationInput | user_favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_favorites.
     */
    cursor?: user_favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_favorites.
     */
    skip?: number
    distinct?: User_favoriteScalarFieldEnum | User_favoriteScalarFieldEnum[]
  }

  /**
   * user_favorite create
   */
  export type user_favoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_favorite
     */
    select?: user_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_favorite
     */
    omit?: user_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_favoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a user_favorite.
     */
    data: XOR<user_favoriteCreateInput, user_favoriteUncheckedCreateInput>
  }

  /**
   * user_favorite createMany
   */
  export type user_favoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_favorites.
     */
    data: user_favoriteCreateManyInput | user_favoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_favorite update
   */
  export type user_favoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_favorite
     */
    select?: user_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_favorite
     */
    omit?: user_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_favoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a user_favorite.
     */
    data: XOR<user_favoriteUpdateInput, user_favoriteUncheckedUpdateInput>
    /**
     * Choose, which user_favorite to update.
     */
    where: user_favoriteWhereUniqueInput
  }

  /**
   * user_favorite updateMany
   */
  export type user_favoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_favorites.
     */
    data: XOR<user_favoriteUpdateManyMutationInput, user_favoriteUncheckedUpdateManyInput>
    /**
     * Filter which user_favorites to update
     */
    where?: user_favoriteWhereInput
    /**
     * Limit how many user_favorites to update.
     */
    limit?: number
  }

  /**
   * user_favorite upsert
   */
  export type user_favoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_favorite
     */
    select?: user_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_favorite
     */
    omit?: user_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_favoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the user_favorite to update in case it exists.
     */
    where: user_favoriteWhereUniqueInput
    /**
     * In case the user_favorite found by the `where` argument doesn't exist, create a new user_favorite with this data.
     */
    create: XOR<user_favoriteCreateInput, user_favoriteUncheckedCreateInput>
    /**
     * In case the user_favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_favoriteUpdateInput, user_favoriteUncheckedUpdateInput>
  }

  /**
   * user_favorite delete
   */
  export type user_favoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_favorite
     */
    select?: user_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_favorite
     */
    omit?: user_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_favoriteInclude<ExtArgs> | null
    /**
     * Filter which user_favorite to delete.
     */
    where: user_favoriteWhereUniqueInput
  }

  /**
   * user_favorite deleteMany
   */
  export type user_favoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_favorites to delete
     */
    where?: user_favoriteWhereInput
    /**
     * Limit how many user_favorites to delete.
     */
    limit?: number
  }

  /**
   * user_favorite without action
   */
  export type user_favoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_favorite
     */
    select?: user_favoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_favorite
     */
    omit?: user_favoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_favoriteInclude<ExtArgs> | null
  }


  /**
   * Model user_usage
   */

  export type AggregateUser_usage = {
    _count: User_usageCountAggregateOutputType | null
    _avg: User_usageAvgAggregateOutputType | null
    _sum: User_usageSumAggregateOutputType | null
    _min: User_usageMinAggregateOutputType | null
    _max: User_usageMaxAggregateOutputType | null
  }

  export type User_usageAvgAggregateOutputType = {
    usage_id: number | null
    participant_count: number | null
  }

  export type User_usageSumAggregateOutputType = {
    usage_id: bigint | null
    participant_count: number | null
  }

  export type User_usageMinAggregateOutputType = {
    usage_id: bigint | null
    user_id: string | null
    classId: string | null
    usage_date: Date | null
    start_time: Date | null
    end_time: Date | null
    participant_count: number | null
    hashtags: string | null
    created_at: Date | null
  }

  export type User_usageMaxAggregateOutputType = {
    usage_id: bigint | null
    user_id: string | null
    classId: string | null
    usage_date: Date | null
    start_time: Date | null
    end_time: Date | null
    participant_count: number | null
    hashtags: string | null
    created_at: Date | null
  }

  export type User_usageCountAggregateOutputType = {
    usage_id: number
    user_id: number
    classId: number
    usage_date: number
    start_time: number
    end_time: number
    participant_count: number
    hashtags: number
    created_at: number
    _all: number
  }


  export type User_usageAvgAggregateInputType = {
    usage_id?: true
    participant_count?: true
  }

  export type User_usageSumAggregateInputType = {
    usage_id?: true
    participant_count?: true
  }

  export type User_usageMinAggregateInputType = {
    usage_id?: true
    user_id?: true
    classId?: true
    usage_date?: true
    start_time?: true
    end_time?: true
    participant_count?: true
    hashtags?: true
    created_at?: true
  }

  export type User_usageMaxAggregateInputType = {
    usage_id?: true
    user_id?: true
    classId?: true
    usage_date?: true
    start_time?: true
    end_time?: true
    participant_count?: true
    hashtags?: true
    created_at?: true
  }

  export type User_usageCountAggregateInputType = {
    usage_id?: true
    user_id?: true
    classId?: true
    usage_date?: true
    start_time?: true
    end_time?: true
    participant_count?: true
    hashtags?: true
    created_at?: true
    _all?: true
  }

  export type User_usageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_usage to aggregate.
     */
    where?: user_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_usages to fetch.
     */
    orderBy?: user_usageOrderByWithRelationInput | user_usageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_usages
    **/
    _count?: true | User_usageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_usageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_usageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_usageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_usageMaxAggregateInputType
  }

  export type GetUser_usageAggregateType<T extends User_usageAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_usage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_usage[P]>
      : GetScalarType<T[P], AggregateUser_usage[P]>
  }




  export type user_usageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_usageWhereInput
    orderBy?: user_usageOrderByWithAggregationInput | user_usageOrderByWithAggregationInput[]
    by: User_usageScalarFieldEnum[] | User_usageScalarFieldEnum
    having?: user_usageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_usageCountAggregateInputType | true
    _avg?: User_usageAvgAggregateInputType
    _sum?: User_usageSumAggregateInputType
    _min?: User_usageMinAggregateInputType
    _max?: User_usageMaxAggregateInputType
  }

  export type User_usageGroupByOutputType = {
    usage_id: bigint
    user_id: string
    classId: string
    usage_date: Date
    start_time: Date
    end_time: Date
    participant_count: number
    hashtags: string
    created_at: Date
    _count: User_usageCountAggregateOutputType | null
    _avg: User_usageAvgAggregateOutputType | null
    _sum: User_usageSumAggregateOutputType | null
    _min: User_usageMinAggregateOutputType | null
    _max: User_usageMaxAggregateOutputType | null
  }

  type GetUser_usageGroupByPayload<T extends user_usageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_usageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_usageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_usageGroupByOutputType[P]>
            : GetScalarType<T[P], User_usageGroupByOutputType[P]>
        }
      >
    >


  export type user_usageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usage_id?: boolean
    user_id?: boolean
    classId?: boolean
    usage_date?: boolean
    start_time?: boolean
    end_time?: boolean
    participant_count?: boolean
    hashtags?: boolean
    created_at?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    lecture_room?: boolean | lecture_roomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_usage"]>



  export type user_usageSelectScalar = {
    usage_id?: boolean
    user_id?: boolean
    classId?: boolean
    usage_date?: boolean
    start_time?: boolean
    end_time?: boolean
    participant_count?: boolean
    hashtags?: boolean
    created_at?: boolean
  }

  export type user_usageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usage_id" | "user_id" | "classId" | "usage_date" | "start_time" | "end_time" | "participant_count" | "hashtags" | "created_at", ExtArgs["result"]["user_usage"]>
  export type user_usageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    lecture_room?: boolean | lecture_roomDefaultArgs<ExtArgs>
  }

  export type $user_usagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_usage"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      lecture_room: Prisma.$lecture_roomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usage_id: bigint
      user_id: string
      classId: string
      usage_date: Date
      start_time: Date
      end_time: Date
      participant_count: number
      hashtags: string
      created_at: Date
    }, ExtArgs["result"]["user_usage"]>
    composites: {}
  }

  type user_usageGetPayload<S extends boolean | null | undefined | user_usageDefaultArgs> = $Result.GetResult<Prisma.$user_usagePayload, S>

  type user_usageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_usageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_usageCountAggregateInputType | true
    }

  export interface user_usageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_usage'], meta: { name: 'user_usage' } }
    /**
     * Find zero or one User_usage that matches the filter.
     * @param {user_usageFindUniqueArgs} args - Arguments to find a User_usage
     * @example
     * // Get one User_usage
     * const user_usage = await prisma.user_usage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_usageFindUniqueArgs>(args: SelectSubset<T, user_usageFindUniqueArgs<ExtArgs>>): Prisma__user_usageClient<$Result.GetResult<Prisma.$user_usagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_usage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_usageFindUniqueOrThrowArgs} args - Arguments to find a User_usage
     * @example
     * // Get one User_usage
     * const user_usage = await prisma.user_usage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_usageFindUniqueOrThrowArgs>(args: SelectSubset<T, user_usageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_usageClient<$Result.GetResult<Prisma.$user_usagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_usage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_usageFindFirstArgs} args - Arguments to find a User_usage
     * @example
     * // Get one User_usage
     * const user_usage = await prisma.user_usage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_usageFindFirstArgs>(args?: SelectSubset<T, user_usageFindFirstArgs<ExtArgs>>): Prisma__user_usageClient<$Result.GetResult<Prisma.$user_usagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_usage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_usageFindFirstOrThrowArgs} args - Arguments to find a User_usage
     * @example
     * // Get one User_usage
     * const user_usage = await prisma.user_usage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_usageFindFirstOrThrowArgs>(args?: SelectSubset<T, user_usageFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_usageClient<$Result.GetResult<Prisma.$user_usagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_usages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_usageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_usages
     * const user_usages = await prisma.user_usage.findMany()
     * 
     * // Get first 10 User_usages
     * const user_usages = await prisma.user_usage.findMany({ take: 10 })
     * 
     * // Only select the `usage_id`
     * const user_usageWithUsage_idOnly = await prisma.user_usage.findMany({ select: { usage_id: true } })
     * 
     */
    findMany<T extends user_usageFindManyArgs>(args?: SelectSubset<T, user_usageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_usagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_usage.
     * @param {user_usageCreateArgs} args - Arguments to create a User_usage.
     * @example
     * // Create one User_usage
     * const User_usage = await prisma.user_usage.create({
     *   data: {
     *     // ... data to create a User_usage
     *   }
     * })
     * 
     */
    create<T extends user_usageCreateArgs>(args: SelectSubset<T, user_usageCreateArgs<ExtArgs>>): Prisma__user_usageClient<$Result.GetResult<Prisma.$user_usagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_usages.
     * @param {user_usageCreateManyArgs} args - Arguments to create many User_usages.
     * @example
     * // Create many User_usages
     * const user_usage = await prisma.user_usage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_usageCreateManyArgs>(args?: SelectSubset<T, user_usageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_usage.
     * @param {user_usageDeleteArgs} args - Arguments to delete one User_usage.
     * @example
     * // Delete one User_usage
     * const User_usage = await prisma.user_usage.delete({
     *   where: {
     *     // ... filter to delete one User_usage
     *   }
     * })
     * 
     */
    delete<T extends user_usageDeleteArgs>(args: SelectSubset<T, user_usageDeleteArgs<ExtArgs>>): Prisma__user_usageClient<$Result.GetResult<Prisma.$user_usagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_usage.
     * @param {user_usageUpdateArgs} args - Arguments to update one User_usage.
     * @example
     * // Update one User_usage
     * const user_usage = await prisma.user_usage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_usageUpdateArgs>(args: SelectSubset<T, user_usageUpdateArgs<ExtArgs>>): Prisma__user_usageClient<$Result.GetResult<Prisma.$user_usagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_usages.
     * @param {user_usageDeleteManyArgs} args - Arguments to filter User_usages to delete.
     * @example
     * // Delete a few User_usages
     * const { count } = await prisma.user_usage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_usageDeleteManyArgs>(args?: SelectSubset<T, user_usageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_usageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_usages
     * const user_usage = await prisma.user_usage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_usageUpdateManyArgs>(args: SelectSubset<T, user_usageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_usage.
     * @param {user_usageUpsertArgs} args - Arguments to update or create a User_usage.
     * @example
     * // Update or create a User_usage
     * const user_usage = await prisma.user_usage.upsert({
     *   create: {
     *     // ... data to create a User_usage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_usage we want to update
     *   }
     * })
     */
    upsert<T extends user_usageUpsertArgs>(args: SelectSubset<T, user_usageUpsertArgs<ExtArgs>>): Prisma__user_usageClient<$Result.GetResult<Prisma.$user_usagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_usages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_usageCountArgs} args - Arguments to filter User_usages to count.
     * @example
     * // Count the number of User_usages
     * const count = await prisma.user_usage.count({
     *   where: {
     *     // ... the filter for the User_usages we want to count
     *   }
     * })
    **/
    count<T extends user_usageCountArgs>(
      args?: Subset<T, user_usageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_usageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_usageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_usageAggregateArgs>(args: Subset<T, User_usageAggregateArgs>): Prisma.PrismaPromise<GetUser_usageAggregateType<T>>

    /**
     * Group by User_usage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_usageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_usageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_usageGroupByArgs['orderBy'] }
        : { orderBy?: user_usageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_usageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_usageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_usage model
   */
  readonly fields: user_usageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_usage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_usageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lecture_room<T extends lecture_roomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, lecture_roomDefaultArgs<ExtArgs>>): Prisma__lecture_roomClient<$Result.GetResult<Prisma.$lecture_roomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_usage model
   */
  interface user_usageFieldRefs {
    readonly usage_id: FieldRef<"user_usage", 'BigInt'>
    readonly user_id: FieldRef<"user_usage", 'String'>
    readonly classId: FieldRef<"user_usage", 'String'>
    readonly usage_date: FieldRef<"user_usage", 'DateTime'>
    readonly start_time: FieldRef<"user_usage", 'DateTime'>
    readonly end_time: FieldRef<"user_usage", 'DateTime'>
    readonly participant_count: FieldRef<"user_usage", 'Int'>
    readonly hashtags: FieldRef<"user_usage", 'String'>
    readonly created_at: FieldRef<"user_usage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_usage findUnique
   */
  export type user_usageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_usage
     */
    select?: user_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_usage
     */
    omit?: user_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_usageInclude<ExtArgs> | null
    /**
     * Filter, which user_usage to fetch.
     */
    where: user_usageWhereUniqueInput
  }

  /**
   * user_usage findUniqueOrThrow
   */
  export type user_usageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_usage
     */
    select?: user_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_usage
     */
    omit?: user_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_usageInclude<ExtArgs> | null
    /**
     * Filter, which user_usage to fetch.
     */
    where: user_usageWhereUniqueInput
  }

  /**
   * user_usage findFirst
   */
  export type user_usageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_usage
     */
    select?: user_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_usage
     */
    omit?: user_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_usageInclude<ExtArgs> | null
    /**
     * Filter, which user_usage to fetch.
     */
    where?: user_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_usages to fetch.
     */
    orderBy?: user_usageOrderByWithRelationInput | user_usageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_usages.
     */
    cursor?: user_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_usages.
     */
    distinct?: User_usageScalarFieldEnum | User_usageScalarFieldEnum[]
  }

  /**
   * user_usage findFirstOrThrow
   */
  export type user_usageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_usage
     */
    select?: user_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_usage
     */
    omit?: user_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_usageInclude<ExtArgs> | null
    /**
     * Filter, which user_usage to fetch.
     */
    where?: user_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_usages to fetch.
     */
    orderBy?: user_usageOrderByWithRelationInput | user_usageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_usages.
     */
    cursor?: user_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_usages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_usages.
     */
    distinct?: User_usageScalarFieldEnum | User_usageScalarFieldEnum[]
  }

  /**
   * user_usage findMany
   */
  export type user_usageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_usage
     */
    select?: user_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_usage
     */
    omit?: user_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_usageInclude<ExtArgs> | null
    /**
     * Filter, which user_usages to fetch.
     */
    where?: user_usageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_usages to fetch.
     */
    orderBy?: user_usageOrderByWithRelationInput | user_usageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_usages.
     */
    cursor?: user_usageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_usages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_usages.
     */
    skip?: number
    distinct?: User_usageScalarFieldEnum | User_usageScalarFieldEnum[]
  }

  /**
   * user_usage create
   */
  export type user_usageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_usage
     */
    select?: user_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_usage
     */
    omit?: user_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_usageInclude<ExtArgs> | null
    /**
     * The data needed to create a user_usage.
     */
    data: XOR<user_usageCreateInput, user_usageUncheckedCreateInput>
  }

  /**
   * user_usage createMany
   */
  export type user_usageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_usages.
     */
    data: user_usageCreateManyInput | user_usageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_usage update
   */
  export type user_usageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_usage
     */
    select?: user_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_usage
     */
    omit?: user_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_usageInclude<ExtArgs> | null
    /**
     * The data needed to update a user_usage.
     */
    data: XOR<user_usageUpdateInput, user_usageUncheckedUpdateInput>
    /**
     * Choose, which user_usage to update.
     */
    where: user_usageWhereUniqueInput
  }

  /**
   * user_usage updateMany
   */
  export type user_usageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_usages.
     */
    data: XOR<user_usageUpdateManyMutationInput, user_usageUncheckedUpdateManyInput>
    /**
     * Filter which user_usages to update
     */
    where?: user_usageWhereInput
    /**
     * Limit how many user_usages to update.
     */
    limit?: number
  }

  /**
   * user_usage upsert
   */
  export type user_usageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_usage
     */
    select?: user_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_usage
     */
    omit?: user_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_usageInclude<ExtArgs> | null
    /**
     * The filter to search for the user_usage to update in case it exists.
     */
    where: user_usageWhereUniqueInput
    /**
     * In case the user_usage found by the `where` argument doesn't exist, create a new user_usage with this data.
     */
    create: XOR<user_usageCreateInput, user_usageUncheckedCreateInput>
    /**
     * In case the user_usage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_usageUpdateInput, user_usageUncheckedUpdateInput>
  }

  /**
   * user_usage delete
   */
  export type user_usageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_usage
     */
    select?: user_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_usage
     */
    omit?: user_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_usageInclude<ExtArgs> | null
    /**
     * Filter which user_usage to delete.
     */
    where: user_usageWhereUniqueInput
  }

  /**
   * user_usage deleteMany
   */
  export type user_usageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_usages to delete
     */
    where?: user_usageWhereInput
    /**
     * Limit how many user_usages to delete.
     */
    limit?: number
  }

  /**
   * user_usage without action
   */
  export type user_usageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_usage
     */
    select?: user_usageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_usage
     */
    omit?: user_usageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_usageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HistoryScalarFieldEnum: {
    history_id: 'history_id',
    user_id: 'user_id',
    classId: 'classId',
    start_time: 'start_time',
    end_time: 'end_time',
    participant_count: 'participant_count',
    hashtags: 'hashtags',
    created_at: 'created_at'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const LectureScalarFieldEnum: {
    course_id: 'course_id',
    course_name: 'course_name',
    professor: 'professor'
  };

  export type LectureScalarFieldEnum = (typeof LectureScalarFieldEnum)[keyof typeof LectureScalarFieldEnum]


  export const Lecture_roomScalarFieldEnum: {
    classId: 'classId',
    building: 'building',
    room: 'room',
    floor: 'floor',
    capacity: 'capacity',
    current_occupancy: 'current_occupancy',
    cnt_alone_study: 'cnt_alone_study',
    cnt_group_meeting: 'cnt_group_meeting',
    cnt_quiet: 'cnt_quiet',
    cnt_free_talk: 'cnt_free_talk',
    cnt_short_stay: 'cnt_short_stay',
    cnt_comfortable: 'cnt_comfortable'
  };

  export type Lecture_roomScalarFieldEnum = (typeof Lecture_roomScalarFieldEnum)[keyof typeof Lecture_roomScalarFieldEnum]


  export const Lecture_scheduleScalarFieldEnum: {
    course_id: 'course_id',
    classId: 'classId',
    weekday: 'weekday',
    start_time: 'start_time',
    end_time: 'end_time'
  };

  export type Lecture_scheduleScalarFieldEnum = (typeof Lecture_scheduleScalarFieldEnum)[keyof typeof Lecture_scheduleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    password: 'password',
    user_type: 'user_type',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_favoriteScalarFieldEnum: {
    user_id: 'user_id',
    classId: 'classId',
    weekday: 'weekday',
    start_time: 'start_time',
    end_time: 'end_time',
    favorited_at: 'favorited_at'
  };

  export type User_favoriteScalarFieldEnum = (typeof User_favoriteScalarFieldEnum)[keyof typeof User_favoriteScalarFieldEnum]


  export const User_usageScalarFieldEnum: {
    usage_id: 'usage_id',
    user_id: 'user_id',
    classId: 'classId',
    usage_date: 'usage_date',
    start_time: 'start_time',
    end_time: 'end_time',
    participant_count: 'participant_count',
    hashtags: 'hashtags',
    created_at: 'created_at'
  };

  export type User_usageScalarFieldEnum = (typeof User_usageScalarFieldEnum)[keyof typeof User_usageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const historyOrderByRelevanceFieldEnum: {
    user_id: 'user_id',
    classId: 'classId',
    hashtags: 'hashtags'
  };

  export type historyOrderByRelevanceFieldEnum = (typeof historyOrderByRelevanceFieldEnum)[keyof typeof historyOrderByRelevanceFieldEnum]


  export const lectureOrderByRelevanceFieldEnum: {
    course_id: 'course_id',
    course_name: 'course_name',
    professor: 'professor'
  };

  export type lectureOrderByRelevanceFieldEnum = (typeof lectureOrderByRelevanceFieldEnum)[keyof typeof lectureOrderByRelevanceFieldEnum]


  export const lecture_roomOrderByRelevanceFieldEnum: {
    classId: 'classId',
    building: 'building',
    room: 'room'
  };

  export type lecture_roomOrderByRelevanceFieldEnum = (typeof lecture_roomOrderByRelevanceFieldEnum)[keyof typeof lecture_roomOrderByRelevanceFieldEnum]


  export const lecture_scheduleOrderByRelevanceFieldEnum: {
    course_id: 'course_id',
    classId: 'classId'
  };

  export type lecture_scheduleOrderByRelevanceFieldEnum = (typeof lecture_scheduleOrderByRelevanceFieldEnum)[keyof typeof lecture_scheduleOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    password: 'password'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  export const user_favoriteOrderByRelevanceFieldEnum: {
    user_id: 'user_id',
    classId: 'classId'
  };

  export type user_favoriteOrderByRelevanceFieldEnum = (typeof user_favoriteOrderByRelevanceFieldEnum)[keyof typeof user_favoriteOrderByRelevanceFieldEnum]


  export const user_usageOrderByRelevanceFieldEnum: {
    user_id: 'user_id',
    classId: 'classId',
    hashtags: 'hashtags'
  };

  export type user_usageOrderByRelevanceFieldEnum = (typeof user_usageOrderByRelevanceFieldEnum)[keyof typeof user_usageOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'lecture_schedule_weekday'
   */
  export type Enumlecture_schedule_weekdayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'lecture_schedule_weekday'>
    


  /**
   * Reference to a field of type 'user_user_type'
   */
  export type Enumuser_user_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_user_type'>
    


  /**
   * Reference to a field of type 'user_favorite_weekday'
   */
  export type Enumuser_favorite_weekdayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_favorite_weekday'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type historyWhereInput = {
    AND?: historyWhereInput | historyWhereInput[]
    OR?: historyWhereInput[]
    NOT?: historyWhereInput | historyWhereInput[]
    history_id?: BigIntFilter<"history"> | bigint | number
    user_id?: StringFilter<"history"> | string
    classId?: StringFilter<"history"> | string
    start_time?: DateTimeFilter<"history"> | Date | string
    end_time?: DateTimeFilter<"history"> | Date | string
    participant_count?: IntNullableFilter<"history"> | number | null
    hashtags?: StringNullableFilter<"history"> | string | null
    created_at?: DateTimeFilter<"history"> | Date | string
    lecture_room?: XOR<Lecture_roomScalarRelationFilter, lecture_roomWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type historyOrderByWithRelationInput = {
    history_id?: SortOrder
    user_id?: SortOrder
    classId?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    participant_count?: SortOrderInput | SortOrder
    hashtags?: SortOrderInput | SortOrder
    created_at?: SortOrder
    lecture_room?: lecture_roomOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    _relevance?: historyOrderByRelevanceInput
  }

  export type historyWhereUniqueInput = Prisma.AtLeast<{
    history_id?: bigint | number
    AND?: historyWhereInput | historyWhereInput[]
    OR?: historyWhereInput[]
    NOT?: historyWhereInput | historyWhereInput[]
    user_id?: StringFilter<"history"> | string
    classId?: StringFilter<"history"> | string
    start_time?: DateTimeFilter<"history"> | Date | string
    end_time?: DateTimeFilter<"history"> | Date | string
    participant_count?: IntNullableFilter<"history"> | number | null
    hashtags?: StringNullableFilter<"history"> | string | null
    created_at?: DateTimeFilter<"history"> | Date | string
    lecture_room?: XOR<Lecture_roomScalarRelationFilter, lecture_roomWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "history_id">

  export type historyOrderByWithAggregationInput = {
    history_id?: SortOrder
    user_id?: SortOrder
    classId?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    participant_count?: SortOrderInput | SortOrder
    hashtags?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: historyCountOrderByAggregateInput
    _avg?: historyAvgOrderByAggregateInput
    _max?: historyMaxOrderByAggregateInput
    _min?: historyMinOrderByAggregateInput
    _sum?: historySumOrderByAggregateInput
  }

  export type historyScalarWhereWithAggregatesInput = {
    AND?: historyScalarWhereWithAggregatesInput | historyScalarWhereWithAggregatesInput[]
    OR?: historyScalarWhereWithAggregatesInput[]
    NOT?: historyScalarWhereWithAggregatesInput | historyScalarWhereWithAggregatesInput[]
    history_id?: BigIntWithAggregatesFilter<"history"> | bigint | number
    user_id?: StringWithAggregatesFilter<"history"> | string
    classId?: StringWithAggregatesFilter<"history"> | string
    start_time?: DateTimeWithAggregatesFilter<"history"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"history"> | Date | string
    participant_count?: IntNullableWithAggregatesFilter<"history"> | number | null
    hashtags?: StringNullableWithAggregatesFilter<"history"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"history"> | Date | string
  }

  export type lectureWhereInput = {
    AND?: lectureWhereInput | lectureWhereInput[]
    OR?: lectureWhereInput[]
    NOT?: lectureWhereInput | lectureWhereInput[]
    course_id?: StringFilter<"lecture"> | string
    course_name?: StringFilter<"lecture"> | string
    professor?: StringFilter<"lecture"> | string
    lecture_schedule?: Lecture_scheduleListRelationFilter
  }

  export type lectureOrderByWithRelationInput = {
    course_id?: SortOrder
    course_name?: SortOrder
    professor?: SortOrder
    lecture_schedule?: lecture_scheduleOrderByRelationAggregateInput
    _relevance?: lectureOrderByRelevanceInput
  }

  export type lectureWhereUniqueInput = Prisma.AtLeast<{
    course_id?: string
    AND?: lectureWhereInput | lectureWhereInput[]
    OR?: lectureWhereInput[]
    NOT?: lectureWhereInput | lectureWhereInput[]
    course_name?: StringFilter<"lecture"> | string
    professor?: StringFilter<"lecture"> | string
    lecture_schedule?: Lecture_scheduleListRelationFilter
  }, "course_id">

  export type lectureOrderByWithAggregationInput = {
    course_id?: SortOrder
    course_name?: SortOrder
    professor?: SortOrder
    _count?: lectureCountOrderByAggregateInput
    _max?: lectureMaxOrderByAggregateInput
    _min?: lectureMinOrderByAggregateInput
  }

  export type lectureScalarWhereWithAggregatesInput = {
    AND?: lectureScalarWhereWithAggregatesInput | lectureScalarWhereWithAggregatesInput[]
    OR?: lectureScalarWhereWithAggregatesInput[]
    NOT?: lectureScalarWhereWithAggregatesInput | lectureScalarWhereWithAggregatesInput[]
    course_id?: StringWithAggregatesFilter<"lecture"> | string
    course_name?: StringWithAggregatesFilter<"lecture"> | string
    professor?: StringWithAggregatesFilter<"lecture"> | string
  }

  export type lecture_roomWhereInput = {
    AND?: lecture_roomWhereInput | lecture_roomWhereInput[]
    OR?: lecture_roomWhereInput[]
    NOT?: lecture_roomWhereInput | lecture_roomWhereInput[]
    classId?: StringFilter<"lecture_room"> | string
    building?: StringFilter<"lecture_room"> | string
    room?: StringFilter<"lecture_room"> | string
    floor?: IntFilter<"lecture_room"> | number
    capacity?: IntFilter<"lecture_room"> | number
    current_occupancy?: IntFilter<"lecture_room"> | number
    cnt_alone_study?: IntFilter<"lecture_room"> | number
    cnt_group_meeting?: IntFilter<"lecture_room"> | number
    cnt_quiet?: IntFilter<"lecture_room"> | number
    cnt_free_talk?: IntFilter<"lecture_room"> | number
    cnt_short_stay?: IntFilter<"lecture_room"> | number
    cnt_comfortable?: IntFilter<"lecture_room"> | number
    history?: HistoryListRelationFilter
    lecture_schedule?: Lecture_scheduleListRelationFilter
    user_favorite?: User_favoriteListRelationFilter
    user_usage?: User_usageListRelationFilter
  }

  export type lecture_roomOrderByWithRelationInput = {
    classId?: SortOrder
    building?: SortOrder
    room?: SortOrder
    floor?: SortOrder
    capacity?: SortOrder
    current_occupancy?: SortOrder
    cnt_alone_study?: SortOrder
    cnt_group_meeting?: SortOrder
    cnt_quiet?: SortOrder
    cnt_free_talk?: SortOrder
    cnt_short_stay?: SortOrder
    cnt_comfortable?: SortOrder
    history?: historyOrderByRelationAggregateInput
    lecture_schedule?: lecture_scheduleOrderByRelationAggregateInput
    user_favorite?: user_favoriteOrderByRelationAggregateInput
    user_usage?: user_usageOrderByRelationAggregateInput
    _relevance?: lecture_roomOrderByRelevanceInput
  }

  export type lecture_roomWhereUniqueInput = Prisma.AtLeast<{
    classId?: string
    AND?: lecture_roomWhereInput | lecture_roomWhereInput[]
    OR?: lecture_roomWhereInput[]
    NOT?: lecture_roomWhereInput | lecture_roomWhereInput[]
    building?: StringFilter<"lecture_room"> | string
    room?: StringFilter<"lecture_room"> | string
    floor?: IntFilter<"lecture_room"> | number
    capacity?: IntFilter<"lecture_room"> | number
    current_occupancy?: IntFilter<"lecture_room"> | number
    cnt_alone_study?: IntFilter<"lecture_room"> | number
    cnt_group_meeting?: IntFilter<"lecture_room"> | number
    cnt_quiet?: IntFilter<"lecture_room"> | number
    cnt_free_talk?: IntFilter<"lecture_room"> | number
    cnt_short_stay?: IntFilter<"lecture_room"> | number
    cnt_comfortable?: IntFilter<"lecture_room"> | number
    history?: HistoryListRelationFilter
    lecture_schedule?: Lecture_scheduleListRelationFilter
    user_favorite?: User_favoriteListRelationFilter
    user_usage?: User_usageListRelationFilter
  }, "classId">

  export type lecture_roomOrderByWithAggregationInput = {
    classId?: SortOrder
    building?: SortOrder
    room?: SortOrder
    floor?: SortOrder
    capacity?: SortOrder
    current_occupancy?: SortOrder
    cnt_alone_study?: SortOrder
    cnt_group_meeting?: SortOrder
    cnt_quiet?: SortOrder
    cnt_free_talk?: SortOrder
    cnt_short_stay?: SortOrder
    cnt_comfortable?: SortOrder
    _count?: lecture_roomCountOrderByAggregateInput
    _avg?: lecture_roomAvgOrderByAggregateInput
    _max?: lecture_roomMaxOrderByAggregateInput
    _min?: lecture_roomMinOrderByAggregateInput
    _sum?: lecture_roomSumOrderByAggregateInput
  }

  export type lecture_roomScalarWhereWithAggregatesInput = {
    AND?: lecture_roomScalarWhereWithAggregatesInput | lecture_roomScalarWhereWithAggregatesInput[]
    OR?: lecture_roomScalarWhereWithAggregatesInput[]
    NOT?: lecture_roomScalarWhereWithAggregatesInput | lecture_roomScalarWhereWithAggregatesInput[]
    classId?: StringWithAggregatesFilter<"lecture_room"> | string
    building?: StringWithAggregatesFilter<"lecture_room"> | string
    room?: StringWithAggregatesFilter<"lecture_room"> | string
    floor?: IntWithAggregatesFilter<"lecture_room"> | number
    capacity?: IntWithAggregatesFilter<"lecture_room"> | number
    current_occupancy?: IntWithAggregatesFilter<"lecture_room"> | number
    cnt_alone_study?: IntWithAggregatesFilter<"lecture_room"> | number
    cnt_group_meeting?: IntWithAggregatesFilter<"lecture_room"> | number
    cnt_quiet?: IntWithAggregatesFilter<"lecture_room"> | number
    cnt_free_talk?: IntWithAggregatesFilter<"lecture_room"> | number
    cnt_short_stay?: IntWithAggregatesFilter<"lecture_room"> | number
    cnt_comfortable?: IntWithAggregatesFilter<"lecture_room"> | number
  }

  export type lecture_scheduleWhereInput = {
    AND?: lecture_scheduleWhereInput | lecture_scheduleWhereInput[]
    OR?: lecture_scheduleWhereInput[]
    NOT?: lecture_scheduleWhereInput | lecture_scheduleWhereInput[]
    course_id?: StringFilter<"lecture_schedule"> | string
    classId?: StringFilter<"lecture_schedule"> | string
    weekday?: Enumlecture_schedule_weekdayFilter<"lecture_schedule"> | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFilter<"lecture_schedule"> | Date | string
    end_time?: DateTimeFilter<"lecture_schedule"> | Date | string
    lecture_room?: XOR<Lecture_roomScalarRelationFilter, lecture_roomWhereInput>
    lecture?: XOR<LectureScalarRelationFilter, lectureWhereInput>
  }

  export type lecture_scheduleOrderByWithRelationInput = {
    course_id?: SortOrder
    classId?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    lecture_room?: lecture_roomOrderByWithRelationInput
    lecture?: lectureOrderByWithRelationInput
    _relevance?: lecture_scheduleOrderByRelevanceInput
  }

  export type lecture_scheduleWhereUniqueInput = Prisma.AtLeast<{
    course_id_classId_weekday_start_time?: lecture_scheduleCourse_idClassIdWeekdayStart_timeCompoundUniqueInput
    AND?: lecture_scheduleWhereInput | lecture_scheduleWhereInput[]
    OR?: lecture_scheduleWhereInput[]
    NOT?: lecture_scheduleWhereInput | lecture_scheduleWhereInput[]
    course_id?: StringFilter<"lecture_schedule"> | string
    classId?: StringFilter<"lecture_schedule"> | string
    weekday?: Enumlecture_schedule_weekdayFilter<"lecture_schedule"> | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFilter<"lecture_schedule"> | Date | string
    end_time?: DateTimeFilter<"lecture_schedule"> | Date | string
    lecture_room?: XOR<Lecture_roomScalarRelationFilter, lecture_roomWhereInput>
    lecture?: XOR<LectureScalarRelationFilter, lectureWhereInput>
  }, "course_id_classId_weekday_start_time">

  export type lecture_scheduleOrderByWithAggregationInput = {
    course_id?: SortOrder
    classId?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    _count?: lecture_scheduleCountOrderByAggregateInput
    _max?: lecture_scheduleMaxOrderByAggregateInput
    _min?: lecture_scheduleMinOrderByAggregateInput
  }

  export type lecture_scheduleScalarWhereWithAggregatesInput = {
    AND?: lecture_scheduleScalarWhereWithAggregatesInput | lecture_scheduleScalarWhereWithAggregatesInput[]
    OR?: lecture_scheduleScalarWhereWithAggregatesInput[]
    NOT?: lecture_scheduleScalarWhereWithAggregatesInput | lecture_scheduleScalarWhereWithAggregatesInput[]
    course_id?: StringWithAggregatesFilter<"lecture_schedule"> | string
    classId?: StringWithAggregatesFilter<"lecture_schedule"> | string
    weekday?: Enumlecture_schedule_weekdayWithAggregatesFilter<"lecture_schedule"> | $Enums.lecture_schedule_weekday
    start_time?: DateTimeWithAggregatesFilter<"lecture_schedule"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"lecture_schedule"> | Date | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    user_id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    user_type?: Enumuser_user_typeFilter<"user"> | $Enums.user_user_type
    created_at?: DateTimeFilter<"user"> | Date | string
    history?: HistoryListRelationFilter
    user_usage?: User_usageListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
    history?: historyOrderByRelationAggregateInput
    user_usage?: user_usageOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    user_type?: Enumuser_user_typeFilter<"user"> | $Enums.user_user_type
    created_at?: DateTimeFilter<"user"> | Date | string
    history?: HistoryListRelationFilter
    user_usage?: User_usageListRelationFilter
  }, "user_id">

  export type userOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    user_type?: Enumuser_user_typeWithAggregatesFilter<"user"> | $Enums.user_user_type
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type user_favoriteWhereInput = {
    AND?: user_favoriteWhereInput | user_favoriteWhereInput[]
    OR?: user_favoriteWhereInput[]
    NOT?: user_favoriteWhereInput | user_favoriteWhereInput[]
    user_id?: StringFilter<"user_favorite"> | string
    classId?: StringFilter<"user_favorite"> | string
    weekday?: Enumuser_favorite_weekdayFilter<"user_favorite"> | $Enums.user_favorite_weekday
    start_time?: DateTimeFilter<"user_favorite"> | Date | string
    end_time?: DateTimeFilter<"user_favorite"> | Date | string
    favorited_at?: DateTimeFilter<"user_favorite"> | Date | string
    lecture_room?: XOR<Lecture_roomScalarRelationFilter, lecture_roomWhereInput>
  }

  export type user_favoriteOrderByWithRelationInput = {
    user_id?: SortOrder
    classId?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    favorited_at?: SortOrder
    lecture_room?: lecture_roomOrderByWithRelationInput
    _relevance?: user_favoriteOrderByRelevanceInput
  }

  export type user_favoriteWhereUniqueInput = Prisma.AtLeast<{
    user_id_classId_weekday_start_time_end_time?: user_favoriteUser_idClassIdWeekdayStart_timeEnd_timeCompoundUniqueInput
    AND?: user_favoriteWhereInput | user_favoriteWhereInput[]
    OR?: user_favoriteWhereInput[]
    NOT?: user_favoriteWhereInput | user_favoriteWhereInput[]
    user_id?: StringFilter<"user_favorite"> | string
    classId?: StringFilter<"user_favorite"> | string
    weekday?: Enumuser_favorite_weekdayFilter<"user_favorite"> | $Enums.user_favorite_weekday
    start_time?: DateTimeFilter<"user_favorite"> | Date | string
    end_time?: DateTimeFilter<"user_favorite"> | Date | string
    favorited_at?: DateTimeFilter<"user_favorite"> | Date | string
    lecture_room?: XOR<Lecture_roomScalarRelationFilter, lecture_roomWhereInput>
  }, "user_id_classId_weekday_start_time_end_time">

  export type user_favoriteOrderByWithAggregationInput = {
    user_id?: SortOrder
    classId?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    favorited_at?: SortOrder
    _count?: user_favoriteCountOrderByAggregateInput
    _max?: user_favoriteMaxOrderByAggregateInput
    _min?: user_favoriteMinOrderByAggregateInput
  }

  export type user_favoriteScalarWhereWithAggregatesInput = {
    AND?: user_favoriteScalarWhereWithAggregatesInput | user_favoriteScalarWhereWithAggregatesInput[]
    OR?: user_favoriteScalarWhereWithAggregatesInput[]
    NOT?: user_favoriteScalarWhereWithAggregatesInput | user_favoriteScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"user_favorite"> | string
    classId?: StringWithAggregatesFilter<"user_favorite"> | string
    weekday?: Enumuser_favorite_weekdayWithAggregatesFilter<"user_favorite"> | $Enums.user_favorite_weekday
    start_time?: DateTimeWithAggregatesFilter<"user_favorite"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"user_favorite"> | Date | string
    favorited_at?: DateTimeWithAggregatesFilter<"user_favorite"> | Date | string
  }

  export type user_usageWhereInput = {
    AND?: user_usageWhereInput | user_usageWhereInput[]
    OR?: user_usageWhereInput[]
    NOT?: user_usageWhereInput | user_usageWhereInput[]
    usage_id?: BigIntFilter<"user_usage"> | bigint | number
    user_id?: StringFilter<"user_usage"> | string
    classId?: StringFilter<"user_usage"> | string
    usage_date?: DateTimeFilter<"user_usage"> | Date | string
    start_time?: DateTimeFilter<"user_usage"> | Date | string
    end_time?: DateTimeFilter<"user_usage"> | Date | string
    participant_count?: IntFilter<"user_usage"> | number
    hashtags?: StringFilter<"user_usage"> | string
    created_at?: DateTimeFilter<"user_usage"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    lecture_room?: XOR<Lecture_roomScalarRelationFilter, lecture_roomWhereInput>
  }

  export type user_usageOrderByWithRelationInput = {
    usage_id?: SortOrder
    user_id?: SortOrder
    classId?: SortOrder
    usage_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    participant_count?: SortOrder
    hashtags?: SortOrder
    created_at?: SortOrder
    user?: userOrderByWithRelationInput
    lecture_room?: lecture_roomOrderByWithRelationInput
    _relevance?: user_usageOrderByRelevanceInput
  }

  export type user_usageWhereUniqueInput = Prisma.AtLeast<{
    usage_id?: bigint | number
    AND?: user_usageWhereInput | user_usageWhereInput[]
    OR?: user_usageWhereInput[]
    NOT?: user_usageWhereInput | user_usageWhereInput[]
    user_id?: StringFilter<"user_usage"> | string
    classId?: StringFilter<"user_usage"> | string
    usage_date?: DateTimeFilter<"user_usage"> | Date | string
    start_time?: DateTimeFilter<"user_usage"> | Date | string
    end_time?: DateTimeFilter<"user_usage"> | Date | string
    participant_count?: IntFilter<"user_usage"> | number
    hashtags?: StringFilter<"user_usage"> | string
    created_at?: DateTimeFilter<"user_usage"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    lecture_room?: XOR<Lecture_roomScalarRelationFilter, lecture_roomWhereInput>
  }, "usage_id">

  export type user_usageOrderByWithAggregationInput = {
    usage_id?: SortOrder
    user_id?: SortOrder
    classId?: SortOrder
    usage_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    participant_count?: SortOrder
    hashtags?: SortOrder
    created_at?: SortOrder
    _count?: user_usageCountOrderByAggregateInput
    _avg?: user_usageAvgOrderByAggregateInput
    _max?: user_usageMaxOrderByAggregateInput
    _min?: user_usageMinOrderByAggregateInput
    _sum?: user_usageSumOrderByAggregateInput
  }

  export type user_usageScalarWhereWithAggregatesInput = {
    AND?: user_usageScalarWhereWithAggregatesInput | user_usageScalarWhereWithAggregatesInput[]
    OR?: user_usageScalarWhereWithAggregatesInput[]
    NOT?: user_usageScalarWhereWithAggregatesInput | user_usageScalarWhereWithAggregatesInput[]
    usage_id?: BigIntWithAggregatesFilter<"user_usage"> | bigint | number
    user_id?: StringWithAggregatesFilter<"user_usage"> | string
    classId?: StringWithAggregatesFilter<"user_usage"> | string
    usage_date?: DateTimeWithAggregatesFilter<"user_usage"> | Date | string
    start_time?: DateTimeWithAggregatesFilter<"user_usage"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"user_usage"> | Date | string
    participant_count?: IntWithAggregatesFilter<"user_usage"> | number
    hashtags?: StringWithAggregatesFilter<"user_usage"> | string
    created_at?: DateTimeWithAggregatesFilter<"user_usage"> | Date | string
  }

  export type historyCreateInput = {
    history_id?: bigint | number
    start_time: Date | string
    end_time: Date | string
    participant_count?: number | null
    hashtags?: string | null
    created_at?: Date | string
    lecture_room: lecture_roomCreateNestedOneWithoutHistoryInput
    user: userCreateNestedOneWithoutHistoryInput
  }

  export type historyUncheckedCreateInput = {
    history_id?: bigint | number
    user_id: string
    classId: string
    start_time: Date | string
    end_time: Date | string
    participant_count?: number | null
    hashtags?: string | null
    created_at?: Date | string
  }

  export type historyUpdateInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture_room?: lecture_roomUpdateOneRequiredWithoutHistoryNestedInput
    user?: userUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type historyUncheckedUpdateInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historyCreateManyInput = {
    history_id?: bigint | number
    user_id: string
    classId: string
    start_time: Date | string
    end_time: Date | string
    participant_count?: number | null
    hashtags?: string | null
    created_at?: Date | string
  }

  export type historyUpdateManyMutationInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historyUncheckedUpdateManyInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lectureCreateInput = {
    course_id: string
    course_name: string
    professor: string
    lecture_schedule?: lecture_scheduleCreateNestedManyWithoutLectureInput
  }

  export type lectureUncheckedCreateInput = {
    course_id: string
    course_name: string
    professor: string
    lecture_schedule?: lecture_scheduleUncheckedCreateNestedManyWithoutLectureInput
  }

  export type lectureUpdateInput = {
    course_id?: StringFieldUpdateOperationsInput | string
    course_name?: StringFieldUpdateOperationsInput | string
    professor?: StringFieldUpdateOperationsInput | string
    lecture_schedule?: lecture_scheduleUpdateManyWithoutLectureNestedInput
  }

  export type lectureUncheckedUpdateInput = {
    course_id?: StringFieldUpdateOperationsInput | string
    course_name?: StringFieldUpdateOperationsInput | string
    professor?: StringFieldUpdateOperationsInput | string
    lecture_schedule?: lecture_scheduleUncheckedUpdateManyWithoutLectureNestedInput
  }

  export type lectureCreateManyInput = {
    course_id: string
    course_name: string
    professor: string
  }

  export type lectureUpdateManyMutationInput = {
    course_id?: StringFieldUpdateOperationsInput | string
    course_name?: StringFieldUpdateOperationsInput | string
    professor?: StringFieldUpdateOperationsInput | string
  }

  export type lectureUncheckedUpdateManyInput = {
    course_id?: StringFieldUpdateOperationsInput | string
    course_name?: StringFieldUpdateOperationsInput | string
    professor?: StringFieldUpdateOperationsInput | string
  }

  export type lecture_roomCreateInput = {
    classId: string
    building: string
    room: string
    floor: number
    capacity: number
    current_occupancy?: number
    cnt_alone_study?: number
    cnt_group_meeting?: number
    cnt_quiet?: number
    cnt_free_talk?: number
    cnt_short_stay?: number
    cnt_comfortable?: number
    history?: historyCreateNestedManyWithoutLecture_roomInput
    lecture_schedule?: lecture_scheduleCreateNestedManyWithoutLecture_roomInput
    user_favorite?: user_favoriteCreateNestedManyWithoutLecture_roomInput
    user_usage?: user_usageCreateNestedManyWithoutLecture_roomInput
  }

  export type lecture_roomUncheckedCreateInput = {
    classId: string
    building: string
    room: string
    floor: number
    capacity: number
    current_occupancy?: number
    cnt_alone_study?: number
    cnt_group_meeting?: number
    cnt_quiet?: number
    cnt_free_talk?: number
    cnt_short_stay?: number
    cnt_comfortable?: number
    history?: historyUncheckedCreateNestedManyWithoutLecture_roomInput
    lecture_schedule?: lecture_scheduleUncheckedCreateNestedManyWithoutLecture_roomInput
    user_favorite?: user_favoriteUncheckedCreateNestedManyWithoutLecture_roomInput
    user_usage?: user_usageUncheckedCreateNestedManyWithoutLecture_roomInput
  }

  export type lecture_roomUpdateInput = {
    classId?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    current_occupancy?: IntFieldUpdateOperationsInput | number
    cnt_alone_study?: IntFieldUpdateOperationsInput | number
    cnt_group_meeting?: IntFieldUpdateOperationsInput | number
    cnt_quiet?: IntFieldUpdateOperationsInput | number
    cnt_free_talk?: IntFieldUpdateOperationsInput | number
    cnt_short_stay?: IntFieldUpdateOperationsInput | number
    cnt_comfortable?: IntFieldUpdateOperationsInput | number
    history?: historyUpdateManyWithoutLecture_roomNestedInput
    lecture_schedule?: lecture_scheduleUpdateManyWithoutLecture_roomNestedInput
    user_favorite?: user_favoriteUpdateManyWithoutLecture_roomNestedInput
    user_usage?: user_usageUpdateManyWithoutLecture_roomNestedInput
  }

  export type lecture_roomUncheckedUpdateInput = {
    classId?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    current_occupancy?: IntFieldUpdateOperationsInput | number
    cnt_alone_study?: IntFieldUpdateOperationsInput | number
    cnt_group_meeting?: IntFieldUpdateOperationsInput | number
    cnt_quiet?: IntFieldUpdateOperationsInput | number
    cnt_free_talk?: IntFieldUpdateOperationsInput | number
    cnt_short_stay?: IntFieldUpdateOperationsInput | number
    cnt_comfortable?: IntFieldUpdateOperationsInput | number
    history?: historyUncheckedUpdateManyWithoutLecture_roomNestedInput
    lecture_schedule?: lecture_scheduleUncheckedUpdateManyWithoutLecture_roomNestedInput
    user_favorite?: user_favoriteUncheckedUpdateManyWithoutLecture_roomNestedInput
    user_usage?: user_usageUncheckedUpdateManyWithoutLecture_roomNestedInput
  }

  export type lecture_roomCreateManyInput = {
    classId: string
    building: string
    room: string
    floor: number
    capacity: number
    current_occupancy?: number
    cnt_alone_study?: number
    cnt_group_meeting?: number
    cnt_quiet?: number
    cnt_free_talk?: number
    cnt_short_stay?: number
    cnt_comfortable?: number
  }

  export type lecture_roomUpdateManyMutationInput = {
    classId?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    current_occupancy?: IntFieldUpdateOperationsInput | number
    cnt_alone_study?: IntFieldUpdateOperationsInput | number
    cnt_group_meeting?: IntFieldUpdateOperationsInput | number
    cnt_quiet?: IntFieldUpdateOperationsInput | number
    cnt_free_talk?: IntFieldUpdateOperationsInput | number
    cnt_short_stay?: IntFieldUpdateOperationsInput | number
    cnt_comfortable?: IntFieldUpdateOperationsInput | number
  }

  export type lecture_roomUncheckedUpdateManyInput = {
    classId?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    current_occupancy?: IntFieldUpdateOperationsInput | number
    cnt_alone_study?: IntFieldUpdateOperationsInput | number
    cnt_group_meeting?: IntFieldUpdateOperationsInput | number
    cnt_quiet?: IntFieldUpdateOperationsInput | number
    cnt_free_talk?: IntFieldUpdateOperationsInput | number
    cnt_short_stay?: IntFieldUpdateOperationsInput | number
    cnt_comfortable?: IntFieldUpdateOperationsInput | number
  }

  export type lecture_scheduleCreateInput = {
    weekday: $Enums.lecture_schedule_weekday
    start_time: Date | string
    end_time: Date | string
    lecture_room: lecture_roomCreateNestedOneWithoutLecture_scheduleInput
    lecture: lectureCreateNestedOneWithoutLecture_scheduleInput
  }

  export type lecture_scheduleUncheckedCreateInput = {
    course_id: string
    classId: string
    weekday: $Enums.lecture_schedule_weekday
    start_time: Date | string
    end_time: Date | string
  }

  export type lecture_scheduleUpdateInput = {
    weekday?: Enumlecture_schedule_weekdayFieldUpdateOperationsInput | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture_room?: lecture_roomUpdateOneRequiredWithoutLecture_scheduleNestedInput
    lecture?: lectureUpdateOneRequiredWithoutLecture_scheduleNestedInput
  }

  export type lecture_scheduleUncheckedUpdateInput = {
    course_id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    weekday?: Enumlecture_schedule_weekdayFieldUpdateOperationsInput | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lecture_scheduleCreateManyInput = {
    course_id: string
    classId: string
    weekday: $Enums.lecture_schedule_weekday
    start_time: Date | string
    end_time: Date | string
  }

  export type lecture_scheduleUpdateManyMutationInput = {
    weekday?: Enumlecture_schedule_weekdayFieldUpdateOperationsInput | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lecture_scheduleUncheckedUpdateManyInput = {
    course_id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    weekday?: Enumlecture_schedule_weekdayFieldUpdateOperationsInput | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userCreateInput = {
    user_id: string
    name: string
    password: string
    user_type: $Enums.user_user_type
    created_at?: Date | string
    history?: historyCreateNestedManyWithoutUserInput
    user_usage?: user_usageCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    user_id: string
    name: string
    password: string
    user_type: $Enums.user_user_type
    created_at?: Date | string
    history?: historyUncheckedCreateNestedManyWithoutUserInput
    user_usage?: user_usageUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: historyUpdateManyWithoutUserNestedInput
    user_usage?: user_usageUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: historyUncheckedUpdateManyWithoutUserNestedInput
    user_usage?: user_usageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    user_id: string
    name: string
    password: string
    user_type: $Enums.user_user_type
    created_at?: Date | string
  }

  export type userUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_favoriteCreateInput = {
    user_id: string
    weekday: $Enums.user_favorite_weekday
    start_time: Date | string
    end_time: Date | string
    favorited_at?: Date | string
    lecture_room: lecture_roomCreateNestedOneWithoutUser_favoriteInput
  }

  export type user_favoriteUncheckedCreateInput = {
    user_id: string
    classId: string
    weekday: $Enums.user_favorite_weekday
    start_time: Date | string
    end_time: Date | string
    favorited_at?: Date | string
  }

  export type user_favoriteUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    weekday?: Enumuser_favorite_weekdayFieldUpdateOperationsInput | $Enums.user_favorite_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    favorited_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture_room?: lecture_roomUpdateOneRequiredWithoutUser_favoriteNestedInput
  }

  export type user_favoriteUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    weekday?: Enumuser_favorite_weekdayFieldUpdateOperationsInput | $Enums.user_favorite_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    favorited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_favoriteCreateManyInput = {
    user_id: string
    classId: string
    weekday: $Enums.user_favorite_weekday
    start_time: Date | string
    end_time: Date | string
    favorited_at?: Date | string
  }

  export type user_favoriteUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    weekday?: Enumuser_favorite_weekdayFieldUpdateOperationsInput | $Enums.user_favorite_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    favorited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_favoriteUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    weekday?: Enumuser_favorite_weekdayFieldUpdateOperationsInput | $Enums.user_favorite_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    favorited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_usageCreateInput = {
    usage_id?: bigint | number
    usage_date: Date | string
    start_time: Date | string
    end_time: Date | string
    participant_count: number
    hashtags: string
    created_at?: Date | string
    user: userCreateNestedOneWithoutUser_usageInput
    lecture_room: lecture_roomCreateNestedOneWithoutUser_usageInput
  }

  export type user_usageUncheckedCreateInput = {
    usage_id?: bigint | number
    user_id: string
    classId: string
    usage_date: Date | string
    start_time: Date | string
    end_time: Date | string
    participant_count: number
    hashtags: string
    created_at?: Date | string
  }

  export type user_usageUpdateInput = {
    usage_id?: BigIntFieldUpdateOperationsInput | bigint | number
    usage_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: IntFieldUpdateOperationsInput | number
    hashtags?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutUser_usageNestedInput
    lecture_room?: lecture_roomUpdateOneRequiredWithoutUser_usageNestedInput
  }

  export type user_usageUncheckedUpdateInput = {
    usage_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    usage_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: IntFieldUpdateOperationsInput | number
    hashtags?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_usageCreateManyInput = {
    usage_id?: bigint | number
    user_id: string
    classId: string
    usage_date: Date | string
    start_time: Date | string
    end_time: Date | string
    participant_count: number
    hashtags: string
    created_at?: Date | string
  }

  export type user_usageUpdateManyMutationInput = {
    usage_id?: BigIntFieldUpdateOperationsInput | bigint | number
    usage_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: IntFieldUpdateOperationsInput | number
    hashtags?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_usageUncheckedUpdateManyInput = {
    usage_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    usage_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: IntFieldUpdateOperationsInput | number
    hashtags?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Lecture_roomScalarRelationFilter = {
    is?: lecture_roomWhereInput
    isNot?: lecture_roomWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type historyOrderByRelevanceInput = {
    fields: historyOrderByRelevanceFieldEnum | historyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type historyCountOrderByAggregateInput = {
    history_id?: SortOrder
    user_id?: SortOrder
    classId?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    participant_count?: SortOrder
    hashtags?: SortOrder
    created_at?: SortOrder
  }

  export type historyAvgOrderByAggregateInput = {
    history_id?: SortOrder
    participant_count?: SortOrder
  }

  export type historyMaxOrderByAggregateInput = {
    history_id?: SortOrder
    user_id?: SortOrder
    classId?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    participant_count?: SortOrder
    hashtags?: SortOrder
    created_at?: SortOrder
  }

  export type historyMinOrderByAggregateInput = {
    history_id?: SortOrder
    user_id?: SortOrder
    classId?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    participant_count?: SortOrder
    hashtags?: SortOrder
    created_at?: SortOrder
  }

  export type historySumOrderByAggregateInput = {
    history_id?: SortOrder
    participant_count?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Lecture_scheduleListRelationFilter = {
    every?: lecture_scheduleWhereInput
    some?: lecture_scheduleWhereInput
    none?: lecture_scheduleWhereInput
  }

  export type lecture_scheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lectureOrderByRelevanceInput = {
    fields: lectureOrderByRelevanceFieldEnum | lectureOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type lectureCountOrderByAggregateInput = {
    course_id?: SortOrder
    course_name?: SortOrder
    professor?: SortOrder
  }

  export type lectureMaxOrderByAggregateInput = {
    course_id?: SortOrder
    course_name?: SortOrder
    professor?: SortOrder
  }

  export type lectureMinOrderByAggregateInput = {
    course_id?: SortOrder
    course_name?: SortOrder
    professor?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type HistoryListRelationFilter = {
    every?: historyWhereInput
    some?: historyWhereInput
    none?: historyWhereInput
  }

  export type User_favoriteListRelationFilter = {
    every?: user_favoriteWhereInput
    some?: user_favoriteWhereInput
    none?: user_favoriteWhereInput
  }

  export type User_usageListRelationFilter = {
    every?: user_usageWhereInput
    some?: user_usageWhereInput
    none?: user_usageWhereInput
  }

  export type historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_favoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_usageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lecture_roomOrderByRelevanceInput = {
    fields: lecture_roomOrderByRelevanceFieldEnum | lecture_roomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type lecture_roomCountOrderByAggregateInput = {
    classId?: SortOrder
    building?: SortOrder
    room?: SortOrder
    floor?: SortOrder
    capacity?: SortOrder
    current_occupancy?: SortOrder
    cnt_alone_study?: SortOrder
    cnt_group_meeting?: SortOrder
    cnt_quiet?: SortOrder
    cnt_free_talk?: SortOrder
    cnt_short_stay?: SortOrder
    cnt_comfortable?: SortOrder
  }

  export type lecture_roomAvgOrderByAggregateInput = {
    floor?: SortOrder
    capacity?: SortOrder
    current_occupancy?: SortOrder
    cnt_alone_study?: SortOrder
    cnt_group_meeting?: SortOrder
    cnt_quiet?: SortOrder
    cnt_free_talk?: SortOrder
    cnt_short_stay?: SortOrder
    cnt_comfortable?: SortOrder
  }

  export type lecture_roomMaxOrderByAggregateInput = {
    classId?: SortOrder
    building?: SortOrder
    room?: SortOrder
    floor?: SortOrder
    capacity?: SortOrder
    current_occupancy?: SortOrder
    cnt_alone_study?: SortOrder
    cnt_group_meeting?: SortOrder
    cnt_quiet?: SortOrder
    cnt_free_talk?: SortOrder
    cnt_short_stay?: SortOrder
    cnt_comfortable?: SortOrder
  }

  export type lecture_roomMinOrderByAggregateInput = {
    classId?: SortOrder
    building?: SortOrder
    room?: SortOrder
    floor?: SortOrder
    capacity?: SortOrder
    current_occupancy?: SortOrder
    cnt_alone_study?: SortOrder
    cnt_group_meeting?: SortOrder
    cnt_quiet?: SortOrder
    cnt_free_talk?: SortOrder
    cnt_short_stay?: SortOrder
    cnt_comfortable?: SortOrder
  }

  export type lecture_roomSumOrderByAggregateInput = {
    floor?: SortOrder
    capacity?: SortOrder
    current_occupancy?: SortOrder
    cnt_alone_study?: SortOrder
    cnt_group_meeting?: SortOrder
    cnt_quiet?: SortOrder
    cnt_free_talk?: SortOrder
    cnt_short_stay?: SortOrder
    cnt_comfortable?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enumlecture_schedule_weekdayFilter<$PrismaModel = never> = {
    equals?: $Enums.lecture_schedule_weekday | Enumlecture_schedule_weekdayFieldRefInput<$PrismaModel>
    in?: $Enums.lecture_schedule_weekday[]
    notIn?: $Enums.lecture_schedule_weekday[]
    not?: NestedEnumlecture_schedule_weekdayFilter<$PrismaModel> | $Enums.lecture_schedule_weekday
  }

  export type LectureScalarRelationFilter = {
    is?: lectureWhereInput
    isNot?: lectureWhereInput
  }

  export type lecture_scheduleOrderByRelevanceInput = {
    fields: lecture_scheduleOrderByRelevanceFieldEnum | lecture_scheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type lecture_scheduleCourse_idClassIdWeekdayStart_timeCompoundUniqueInput = {
    course_id: string
    classId: string
    weekday: $Enums.lecture_schedule_weekday
    start_time: Date | string
  }

  export type lecture_scheduleCountOrderByAggregateInput = {
    course_id?: SortOrder
    classId?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type lecture_scheduleMaxOrderByAggregateInput = {
    course_id?: SortOrder
    classId?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type lecture_scheduleMinOrderByAggregateInput = {
    course_id?: SortOrder
    classId?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
  }

  export type Enumlecture_schedule_weekdayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.lecture_schedule_weekday | Enumlecture_schedule_weekdayFieldRefInput<$PrismaModel>
    in?: $Enums.lecture_schedule_weekday[]
    notIn?: $Enums.lecture_schedule_weekday[]
    not?: NestedEnumlecture_schedule_weekdayWithAggregatesFilter<$PrismaModel> | $Enums.lecture_schedule_weekday
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumlecture_schedule_weekdayFilter<$PrismaModel>
    _max?: NestedEnumlecture_schedule_weekdayFilter<$PrismaModel>
  }

  export type Enumuser_user_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.user_user_type | Enumuser_user_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_user_type[]
    notIn?: $Enums.user_user_type[]
    not?: NestedEnumuser_user_typeFilter<$PrismaModel> | $Enums.user_user_type
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    created_at?: SortOrder
  }

  export type Enumuser_user_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_user_type | Enumuser_user_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_user_type[]
    notIn?: $Enums.user_user_type[]
    not?: NestedEnumuser_user_typeWithAggregatesFilter<$PrismaModel> | $Enums.user_user_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_user_typeFilter<$PrismaModel>
    _max?: NestedEnumuser_user_typeFilter<$PrismaModel>
  }

  export type Enumuser_favorite_weekdayFilter<$PrismaModel = never> = {
    equals?: $Enums.user_favorite_weekday | Enumuser_favorite_weekdayFieldRefInput<$PrismaModel>
    in?: $Enums.user_favorite_weekday[]
    notIn?: $Enums.user_favorite_weekday[]
    not?: NestedEnumuser_favorite_weekdayFilter<$PrismaModel> | $Enums.user_favorite_weekday
  }

  export type user_favoriteOrderByRelevanceInput = {
    fields: user_favoriteOrderByRelevanceFieldEnum | user_favoriteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_favoriteUser_idClassIdWeekdayStart_timeEnd_timeCompoundUniqueInput = {
    user_id: string
    classId: string
    weekday: $Enums.user_favorite_weekday
    start_time: Date | string
    end_time: Date | string
  }

  export type user_favoriteCountOrderByAggregateInput = {
    user_id?: SortOrder
    classId?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    favorited_at?: SortOrder
  }

  export type user_favoriteMaxOrderByAggregateInput = {
    user_id?: SortOrder
    classId?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    favorited_at?: SortOrder
  }

  export type user_favoriteMinOrderByAggregateInput = {
    user_id?: SortOrder
    classId?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    favorited_at?: SortOrder
  }

  export type Enumuser_favorite_weekdayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_favorite_weekday | Enumuser_favorite_weekdayFieldRefInput<$PrismaModel>
    in?: $Enums.user_favorite_weekday[]
    notIn?: $Enums.user_favorite_weekday[]
    not?: NestedEnumuser_favorite_weekdayWithAggregatesFilter<$PrismaModel> | $Enums.user_favorite_weekday
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_favorite_weekdayFilter<$PrismaModel>
    _max?: NestedEnumuser_favorite_weekdayFilter<$PrismaModel>
  }

  export type user_usageOrderByRelevanceInput = {
    fields: user_usageOrderByRelevanceFieldEnum | user_usageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type user_usageCountOrderByAggregateInput = {
    usage_id?: SortOrder
    user_id?: SortOrder
    classId?: SortOrder
    usage_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    participant_count?: SortOrder
    hashtags?: SortOrder
    created_at?: SortOrder
  }

  export type user_usageAvgOrderByAggregateInput = {
    usage_id?: SortOrder
    participant_count?: SortOrder
  }

  export type user_usageMaxOrderByAggregateInput = {
    usage_id?: SortOrder
    user_id?: SortOrder
    classId?: SortOrder
    usage_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    participant_count?: SortOrder
    hashtags?: SortOrder
    created_at?: SortOrder
  }

  export type user_usageMinOrderByAggregateInput = {
    usage_id?: SortOrder
    user_id?: SortOrder
    classId?: SortOrder
    usage_date?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    participant_count?: SortOrder
    hashtags?: SortOrder
    created_at?: SortOrder
  }

  export type user_usageSumOrderByAggregateInput = {
    usage_id?: SortOrder
    participant_count?: SortOrder
  }

  export type lecture_roomCreateNestedOneWithoutHistoryInput = {
    create?: XOR<lecture_roomCreateWithoutHistoryInput, lecture_roomUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: lecture_roomCreateOrConnectWithoutHistoryInput
    connect?: lecture_roomWhereUniqueInput
  }

  export type userCreateNestedOneWithoutHistoryInput = {
    create?: XOR<userCreateWithoutHistoryInput, userUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: userCreateOrConnectWithoutHistoryInput
    connect?: userWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type lecture_roomUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<lecture_roomCreateWithoutHistoryInput, lecture_roomUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: lecture_roomCreateOrConnectWithoutHistoryInput
    upsert?: lecture_roomUpsertWithoutHistoryInput
    connect?: lecture_roomWhereUniqueInput
    update?: XOR<XOR<lecture_roomUpdateToOneWithWhereWithoutHistoryInput, lecture_roomUpdateWithoutHistoryInput>, lecture_roomUncheckedUpdateWithoutHistoryInput>
  }

  export type userUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<userCreateWithoutHistoryInput, userUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: userCreateOrConnectWithoutHistoryInput
    upsert?: userUpsertWithoutHistoryInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutHistoryInput, userUpdateWithoutHistoryInput>, userUncheckedUpdateWithoutHistoryInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type lecture_scheduleCreateNestedManyWithoutLectureInput = {
    create?: XOR<lecture_scheduleCreateWithoutLectureInput, lecture_scheduleUncheckedCreateWithoutLectureInput> | lecture_scheduleCreateWithoutLectureInput[] | lecture_scheduleUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: lecture_scheduleCreateOrConnectWithoutLectureInput | lecture_scheduleCreateOrConnectWithoutLectureInput[]
    createMany?: lecture_scheduleCreateManyLectureInputEnvelope
    connect?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
  }

  export type lecture_scheduleUncheckedCreateNestedManyWithoutLectureInput = {
    create?: XOR<lecture_scheduleCreateWithoutLectureInput, lecture_scheduleUncheckedCreateWithoutLectureInput> | lecture_scheduleCreateWithoutLectureInput[] | lecture_scheduleUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: lecture_scheduleCreateOrConnectWithoutLectureInput | lecture_scheduleCreateOrConnectWithoutLectureInput[]
    createMany?: lecture_scheduleCreateManyLectureInputEnvelope
    connect?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
  }

  export type lecture_scheduleUpdateManyWithoutLectureNestedInput = {
    create?: XOR<lecture_scheduleCreateWithoutLectureInput, lecture_scheduleUncheckedCreateWithoutLectureInput> | lecture_scheduleCreateWithoutLectureInput[] | lecture_scheduleUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: lecture_scheduleCreateOrConnectWithoutLectureInput | lecture_scheduleCreateOrConnectWithoutLectureInput[]
    upsert?: lecture_scheduleUpsertWithWhereUniqueWithoutLectureInput | lecture_scheduleUpsertWithWhereUniqueWithoutLectureInput[]
    createMany?: lecture_scheduleCreateManyLectureInputEnvelope
    set?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    disconnect?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    delete?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    connect?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    update?: lecture_scheduleUpdateWithWhereUniqueWithoutLectureInput | lecture_scheduleUpdateWithWhereUniqueWithoutLectureInput[]
    updateMany?: lecture_scheduleUpdateManyWithWhereWithoutLectureInput | lecture_scheduleUpdateManyWithWhereWithoutLectureInput[]
    deleteMany?: lecture_scheduleScalarWhereInput | lecture_scheduleScalarWhereInput[]
  }

  export type lecture_scheduleUncheckedUpdateManyWithoutLectureNestedInput = {
    create?: XOR<lecture_scheduleCreateWithoutLectureInput, lecture_scheduleUncheckedCreateWithoutLectureInput> | lecture_scheduleCreateWithoutLectureInput[] | lecture_scheduleUncheckedCreateWithoutLectureInput[]
    connectOrCreate?: lecture_scheduleCreateOrConnectWithoutLectureInput | lecture_scheduleCreateOrConnectWithoutLectureInput[]
    upsert?: lecture_scheduleUpsertWithWhereUniqueWithoutLectureInput | lecture_scheduleUpsertWithWhereUniqueWithoutLectureInput[]
    createMany?: lecture_scheduleCreateManyLectureInputEnvelope
    set?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    disconnect?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    delete?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    connect?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    update?: lecture_scheduleUpdateWithWhereUniqueWithoutLectureInput | lecture_scheduleUpdateWithWhereUniqueWithoutLectureInput[]
    updateMany?: lecture_scheduleUpdateManyWithWhereWithoutLectureInput | lecture_scheduleUpdateManyWithWhereWithoutLectureInput[]
    deleteMany?: lecture_scheduleScalarWhereInput | lecture_scheduleScalarWhereInput[]
  }

  export type historyCreateNestedManyWithoutLecture_roomInput = {
    create?: XOR<historyCreateWithoutLecture_roomInput, historyUncheckedCreateWithoutLecture_roomInput> | historyCreateWithoutLecture_roomInput[] | historyUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: historyCreateOrConnectWithoutLecture_roomInput | historyCreateOrConnectWithoutLecture_roomInput[]
    createMany?: historyCreateManyLecture_roomInputEnvelope
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
  }

  export type lecture_scheduleCreateNestedManyWithoutLecture_roomInput = {
    create?: XOR<lecture_scheduleCreateWithoutLecture_roomInput, lecture_scheduleUncheckedCreateWithoutLecture_roomInput> | lecture_scheduleCreateWithoutLecture_roomInput[] | lecture_scheduleUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: lecture_scheduleCreateOrConnectWithoutLecture_roomInput | lecture_scheduleCreateOrConnectWithoutLecture_roomInput[]
    createMany?: lecture_scheduleCreateManyLecture_roomInputEnvelope
    connect?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
  }

  export type user_favoriteCreateNestedManyWithoutLecture_roomInput = {
    create?: XOR<user_favoriteCreateWithoutLecture_roomInput, user_favoriteUncheckedCreateWithoutLecture_roomInput> | user_favoriteCreateWithoutLecture_roomInput[] | user_favoriteUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: user_favoriteCreateOrConnectWithoutLecture_roomInput | user_favoriteCreateOrConnectWithoutLecture_roomInput[]
    createMany?: user_favoriteCreateManyLecture_roomInputEnvelope
    connect?: user_favoriteWhereUniqueInput | user_favoriteWhereUniqueInput[]
  }

  export type user_usageCreateNestedManyWithoutLecture_roomInput = {
    create?: XOR<user_usageCreateWithoutLecture_roomInput, user_usageUncheckedCreateWithoutLecture_roomInput> | user_usageCreateWithoutLecture_roomInput[] | user_usageUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: user_usageCreateOrConnectWithoutLecture_roomInput | user_usageCreateOrConnectWithoutLecture_roomInput[]
    createMany?: user_usageCreateManyLecture_roomInputEnvelope
    connect?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
  }

  export type historyUncheckedCreateNestedManyWithoutLecture_roomInput = {
    create?: XOR<historyCreateWithoutLecture_roomInput, historyUncheckedCreateWithoutLecture_roomInput> | historyCreateWithoutLecture_roomInput[] | historyUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: historyCreateOrConnectWithoutLecture_roomInput | historyCreateOrConnectWithoutLecture_roomInput[]
    createMany?: historyCreateManyLecture_roomInputEnvelope
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
  }

  export type lecture_scheduleUncheckedCreateNestedManyWithoutLecture_roomInput = {
    create?: XOR<lecture_scheduleCreateWithoutLecture_roomInput, lecture_scheduleUncheckedCreateWithoutLecture_roomInput> | lecture_scheduleCreateWithoutLecture_roomInput[] | lecture_scheduleUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: lecture_scheduleCreateOrConnectWithoutLecture_roomInput | lecture_scheduleCreateOrConnectWithoutLecture_roomInput[]
    createMany?: lecture_scheduleCreateManyLecture_roomInputEnvelope
    connect?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
  }

  export type user_favoriteUncheckedCreateNestedManyWithoutLecture_roomInput = {
    create?: XOR<user_favoriteCreateWithoutLecture_roomInput, user_favoriteUncheckedCreateWithoutLecture_roomInput> | user_favoriteCreateWithoutLecture_roomInput[] | user_favoriteUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: user_favoriteCreateOrConnectWithoutLecture_roomInput | user_favoriteCreateOrConnectWithoutLecture_roomInput[]
    createMany?: user_favoriteCreateManyLecture_roomInputEnvelope
    connect?: user_favoriteWhereUniqueInput | user_favoriteWhereUniqueInput[]
  }

  export type user_usageUncheckedCreateNestedManyWithoutLecture_roomInput = {
    create?: XOR<user_usageCreateWithoutLecture_roomInput, user_usageUncheckedCreateWithoutLecture_roomInput> | user_usageCreateWithoutLecture_roomInput[] | user_usageUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: user_usageCreateOrConnectWithoutLecture_roomInput | user_usageCreateOrConnectWithoutLecture_roomInput[]
    createMany?: user_usageCreateManyLecture_roomInputEnvelope
    connect?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type historyUpdateManyWithoutLecture_roomNestedInput = {
    create?: XOR<historyCreateWithoutLecture_roomInput, historyUncheckedCreateWithoutLecture_roomInput> | historyCreateWithoutLecture_roomInput[] | historyUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: historyCreateOrConnectWithoutLecture_roomInput | historyCreateOrConnectWithoutLecture_roomInput[]
    upsert?: historyUpsertWithWhereUniqueWithoutLecture_roomInput | historyUpsertWithWhereUniqueWithoutLecture_roomInput[]
    createMany?: historyCreateManyLecture_roomInputEnvelope
    set?: historyWhereUniqueInput | historyWhereUniqueInput[]
    disconnect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    delete?: historyWhereUniqueInput | historyWhereUniqueInput[]
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    update?: historyUpdateWithWhereUniqueWithoutLecture_roomInput | historyUpdateWithWhereUniqueWithoutLecture_roomInput[]
    updateMany?: historyUpdateManyWithWhereWithoutLecture_roomInput | historyUpdateManyWithWhereWithoutLecture_roomInput[]
    deleteMany?: historyScalarWhereInput | historyScalarWhereInput[]
  }

  export type lecture_scheduleUpdateManyWithoutLecture_roomNestedInput = {
    create?: XOR<lecture_scheduleCreateWithoutLecture_roomInput, lecture_scheduleUncheckedCreateWithoutLecture_roomInput> | lecture_scheduleCreateWithoutLecture_roomInput[] | lecture_scheduleUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: lecture_scheduleCreateOrConnectWithoutLecture_roomInput | lecture_scheduleCreateOrConnectWithoutLecture_roomInput[]
    upsert?: lecture_scheduleUpsertWithWhereUniqueWithoutLecture_roomInput | lecture_scheduleUpsertWithWhereUniqueWithoutLecture_roomInput[]
    createMany?: lecture_scheduleCreateManyLecture_roomInputEnvelope
    set?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    disconnect?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    delete?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    connect?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    update?: lecture_scheduleUpdateWithWhereUniqueWithoutLecture_roomInput | lecture_scheduleUpdateWithWhereUniqueWithoutLecture_roomInput[]
    updateMany?: lecture_scheduleUpdateManyWithWhereWithoutLecture_roomInput | lecture_scheduleUpdateManyWithWhereWithoutLecture_roomInput[]
    deleteMany?: lecture_scheduleScalarWhereInput | lecture_scheduleScalarWhereInput[]
  }

  export type user_favoriteUpdateManyWithoutLecture_roomNestedInput = {
    create?: XOR<user_favoriteCreateWithoutLecture_roomInput, user_favoriteUncheckedCreateWithoutLecture_roomInput> | user_favoriteCreateWithoutLecture_roomInput[] | user_favoriteUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: user_favoriteCreateOrConnectWithoutLecture_roomInput | user_favoriteCreateOrConnectWithoutLecture_roomInput[]
    upsert?: user_favoriteUpsertWithWhereUniqueWithoutLecture_roomInput | user_favoriteUpsertWithWhereUniqueWithoutLecture_roomInput[]
    createMany?: user_favoriteCreateManyLecture_roomInputEnvelope
    set?: user_favoriteWhereUniqueInput | user_favoriteWhereUniqueInput[]
    disconnect?: user_favoriteWhereUniqueInput | user_favoriteWhereUniqueInput[]
    delete?: user_favoriteWhereUniqueInput | user_favoriteWhereUniqueInput[]
    connect?: user_favoriteWhereUniqueInput | user_favoriteWhereUniqueInput[]
    update?: user_favoriteUpdateWithWhereUniqueWithoutLecture_roomInput | user_favoriteUpdateWithWhereUniqueWithoutLecture_roomInput[]
    updateMany?: user_favoriteUpdateManyWithWhereWithoutLecture_roomInput | user_favoriteUpdateManyWithWhereWithoutLecture_roomInput[]
    deleteMany?: user_favoriteScalarWhereInput | user_favoriteScalarWhereInput[]
  }

  export type user_usageUpdateManyWithoutLecture_roomNestedInput = {
    create?: XOR<user_usageCreateWithoutLecture_roomInput, user_usageUncheckedCreateWithoutLecture_roomInput> | user_usageCreateWithoutLecture_roomInput[] | user_usageUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: user_usageCreateOrConnectWithoutLecture_roomInput | user_usageCreateOrConnectWithoutLecture_roomInput[]
    upsert?: user_usageUpsertWithWhereUniqueWithoutLecture_roomInput | user_usageUpsertWithWhereUniqueWithoutLecture_roomInput[]
    createMany?: user_usageCreateManyLecture_roomInputEnvelope
    set?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    disconnect?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    delete?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    connect?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    update?: user_usageUpdateWithWhereUniqueWithoutLecture_roomInput | user_usageUpdateWithWhereUniqueWithoutLecture_roomInput[]
    updateMany?: user_usageUpdateManyWithWhereWithoutLecture_roomInput | user_usageUpdateManyWithWhereWithoutLecture_roomInput[]
    deleteMany?: user_usageScalarWhereInput | user_usageScalarWhereInput[]
  }

  export type historyUncheckedUpdateManyWithoutLecture_roomNestedInput = {
    create?: XOR<historyCreateWithoutLecture_roomInput, historyUncheckedCreateWithoutLecture_roomInput> | historyCreateWithoutLecture_roomInput[] | historyUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: historyCreateOrConnectWithoutLecture_roomInput | historyCreateOrConnectWithoutLecture_roomInput[]
    upsert?: historyUpsertWithWhereUniqueWithoutLecture_roomInput | historyUpsertWithWhereUniqueWithoutLecture_roomInput[]
    createMany?: historyCreateManyLecture_roomInputEnvelope
    set?: historyWhereUniqueInput | historyWhereUniqueInput[]
    disconnect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    delete?: historyWhereUniqueInput | historyWhereUniqueInput[]
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    update?: historyUpdateWithWhereUniqueWithoutLecture_roomInput | historyUpdateWithWhereUniqueWithoutLecture_roomInput[]
    updateMany?: historyUpdateManyWithWhereWithoutLecture_roomInput | historyUpdateManyWithWhereWithoutLecture_roomInput[]
    deleteMany?: historyScalarWhereInput | historyScalarWhereInput[]
  }

  export type lecture_scheduleUncheckedUpdateManyWithoutLecture_roomNestedInput = {
    create?: XOR<lecture_scheduleCreateWithoutLecture_roomInput, lecture_scheduleUncheckedCreateWithoutLecture_roomInput> | lecture_scheduleCreateWithoutLecture_roomInput[] | lecture_scheduleUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: lecture_scheduleCreateOrConnectWithoutLecture_roomInput | lecture_scheduleCreateOrConnectWithoutLecture_roomInput[]
    upsert?: lecture_scheduleUpsertWithWhereUniqueWithoutLecture_roomInput | lecture_scheduleUpsertWithWhereUniqueWithoutLecture_roomInput[]
    createMany?: lecture_scheduleCreateManyLecture_roomInputEnvelope
    set?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    disconnect?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    delete?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    connect?: lecture_scheduleWhereUniqueInput | lecture_scheduleWhereUniqueInput[]
    update?: lecture_scheduleUpdateWithWhereUniqueWithoutLecture_roomInput | lecture_scheduleUpdateWithWhereUniqueWithoutLecture_roomInput[]
    updateMany?: lecture_scheduleUpdateManyWithWhereWithoutLecture_roomInput | lecture_scheduleUpdateManyWithWhereWithoutLecture_roomInput[]
    deleteMany?: lecture_scheduleScalarWhereInput | lecture_scheduleScalarWhereInput[]
  }

  export type user_favoriteUncheckedUpdateManyWithoutLecture_roomNestedInput = {
    create?: XOR<user_favoriteCreateWithoutLecture_roomInput, user_favoriteUncheckedCreateWithoutLecture_roomInput> | user_favoriteCreateWithoutLecture_roomInput[] | user_favoriteUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: user_favoriteCreateOrConnectWithoutLecture_roomInput | user_favoriteCreateOrConnectWithoutLecture_roomInput[]
    upsert?: user_favoriteUpsertWithWhereUniqueWithoutLecture_roomInput | user_favoriteUpsertWithWhereUniqueWithoutLecture_roomInput[]
    createMany?: user_favoriteCreateManyLecture_roomInputEnvelope
    set?: user_favoriteWhereUniqueInput | user_favoriteWhereUniqueInput[]
    disconnect?: user_favoriteWhereUniqueInput | user_favoriteWhereUniqueInput[]
    delete?: user_favoriteWhereUniqueInput | user_favoriteWhereUniqueInput[]
    connect?: user_favoriteWhereUniqueInput | user_favoriteWhereUniqueInput[]
    update?: user_favoriteUpdateWithWhereUniqueWithoutLecture_roomInput | user_favoriteUpdateWithWhereUniqueWithoutLecture_roomInput[]
    updateMany?: user_favoriteUpdateManyWithWhereWithoutLecture_roomInput | user_favoriteUpdateManyWithWhereWithoutLecture_roomInput[]
    deleteMany?: user_favoriteScalarWhereInput | user_favoriteScalarWhereInput[]
  }

  export type user_usageUncheckedUpdateManyWithoutLecture_roomNestedInput = {
    create?: XOR<user_usageCreateWithoutLecture_roomInput, user_usageUncheckedCreateWithoutLecture_roomInput> | user_usageCreateWithoutLecture_roomInput[] | user_usageUncheckedCreateWithoutLecture_roomInput[]
    connectOrCreate?: user_usageCreateOrConnectWithoutLecture_roomInput | user_usageCreateOrConnectWithoutLecture_roomInput[]
    upsert?: user_usageUpsertWithWhereUniqueWithoutLecture_roomInput | user_usageUpsertWithWhereUniqueWithoutLecture_roomInput[]
    createMany?: user_usageCreateManyLecture_roomInputEnvelope
    set?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    disconnect?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    delete?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    connect?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    update?: user_usageUpdateWithWhereUniqueWithoutLecture_roomInput | user_usageUpdateWithWhereUniqueWithoutLecture_roomInput[]
    updateMany?: user_usageUpdateManyWithWhereWithoutLecture_roomInput | user_usageUpdateManyWithWhereWithoutLecture_roomInput[]
    deleteMany?: user_usageScalarWhereInput | user_usageScalarWhereInput[]
  }

  export type lecture_roomCreateNestedOneWithoutLecture_scheduleInput = {
    create?: XOR<lecture_roomCreateWithoutLecture_scheduleInput, lecture_roomUncheckedCreateWithoutLecture_scheduleInput>
    connectOrCreate?: lecture_roomCreateOrConnectWithoutLecture_scheduleInput
    connect?: lecture_roomWhereUniqueInput
  }

  export type lectureCreateNestedOneWithoutLecture_scheduleInput = {
    create?: XOR<lectureCreateWithoutLecture_scheduleInput, lectureUncheckedCreateWithoutLecture_scheduleInput>
    connectOrCreate?: lectureCreateOrConnectWithoutLecture_scheduleInput
    connect?: lectureWhereUniqueInput
  }

  export type Enumlecture_schedule_weekdayFieldUpdateOperationsInput = {
    set?: $Enums.lecture_schedule_weekday
  }

  export type lecture_roomUpdateOneRequiredWithoutLecture_scheduleNestedInput = {
    create?: XOR<lecture_roomCreateWithoutLecture_scheduleInput, lecture_roomUncheckedCreateWithoutLecture_scheduleInput>
    connectOrCreate?: lecture_roomCreateOrConnectWithoutLecture_scheduleInput
    upsert?: lecture_roomUpsertWithoutLecture_scheduleInput
    connect?: lecture_roomWhereUniqueInput
    update?: XOR<XOR<lecture_roomUpdateToOneWithWhereWithoutLecture_scheduleInput, lecture_roomUpdateWithoutLecture_scheduleInput>, lecture_roomUncheckedUpdateWithoutLecture_scheduleInput>
  }

  export type lectureUpdateOneRequiredWithoutLecture_scheduleNestedInput = {
    create?: XOR<lectureCreateWithoutLecture_scheduleInput, lectureUncheckedCreateWithoutLecture_scheduleInput>
    connectOrCreate?: lectureCreateOrConnectWithoutLecture_scheduleInput
    upsert?: lectureUpsertWithoutLecture_scheduleInput
    connect?: lectureWhereUniqueInput
    update?: XOR<XOR<lectureUpdateToOneWithWhereWithoutLecture_scheduleInput, lectureUpdateWithoutLecture_scheduleInput>, lectureUncheckedUpdateWithoutLecture_scheduleInput>
  }

  export type historyCreateNestedManyWithoutUserInput = {
    create?: XOR<historyCreateWithoutUserInput, historyUncheckedCreateWithoutUserInput> | historyCreateWithoutUserInput[] | historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: historyCreateOrConnectWithoutUserInput | historyCreateOrConnectWithoutUserInput[]
    createMany?: historyCreateManyUserInputEnvelope
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
  }

  export type user_usageCreateNestedManyWithoutUserInput = {
    create?: XOR<user_usageCreateWithoutUserInput, user_usageUncheckedCreateWithoutUserInput> | user_usageCreateWithoutUserInput[] | user_usageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_usageCreateOrConnectWithoutUserInput | user_usageCreateOrConnectWithoutUserInput[]
    createMany?: user_usageCreateManyUserInputEnvelope
    connect?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
  }

  export type historyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<historyCreateWithoutUserInput, historyUncheckedCreateWithoutUserInput> | historyCreateWithoutUserInput[] | historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: historyCreateOrConnectWithoutUserInput | historyCreateOrConnectWithoutUserInput[]
    createMany?: historyCreateManyUserInputEnvelope
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
  }

  export type user_usageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_usageCreateWithoutUserInput, user_usageUncheckedCreateWithoutUserInput> | user_usageCreateWithoutUserInput[] | user_usageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_usageCreateOrConnectWithoutUserInput | user_usageCreateOrConnectWithoutUserInput[]
    createMany?: user_usageCreateManyUserInputEnvelope
    connect?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
  }

  export type Enumuser_user_typeFieldUpdateOperationsInput = {
    set?: $Enums.user_user_type
  }

  export type historyUpdateManyWithoutUserNestedInput = {
    create?: XOR<historyCreateWithoutUserInput, historyUncheckedCreateWithoutUserInput> | historyCreateWithoutUserInput[] | historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: historyCreateOrConnectWithoutUserInput | historyCreateOrConnectWithoutUserInput[]
    upsert?: historyUpsertWithWhereUniqueWithoutUserInput | historyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: historyCreateManyUserInputEnvelope
    set?: historyWhereUniqueInput | historyWhereUniqueInput[]
    disconnect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    delete?: historyWhereUniqueInput | historyWhereUniqueInput[]
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    update?: historyUpdateWithWhereUniqueWithoutUserInput | historyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: historyUpdateManyWithWhereWithoutUserInput | historyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: historyScalarWhereInput | historyScalarWhereInput[]
  }

  export type user_usageUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_usageCreateWithoutUserInput, user_usageUncheckedCreateWithoutUserInput> | user_usageCreateWithoutUserInput[] | user_usageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_usageCreateOrConnectWithoutUserInput | user_usageCreateOrConnectWithoutUserInput[]
    upsert?: user_usageUpsertWithWhereUniqueWithoutUserInput | user_usageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_usageCreateManyUserInputEnvelope
    set?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    disconnect?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    delete?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    connect?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    update?: user_usageUpdateWithWhereUniqueWithoutUserInput | user_usageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_usageUpdateManyWithWhereWithoutUserInput | user_usageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_usageScalarWhereInput | user_usageScalarWhereInput[]
  }

  export type historyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<historyCreateWithoutUserInput, historyUncheckedCreateWithoutUserInput> | historyCreateWithoutUserInput[] | historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: historyCreateOrConnectWithoutUserInput | historyCreateOrConnectWithoutUserInput[]
    upsert?: historyUpsertWithWhereUniqueWithoutUserInput | historyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: historyCreateManyUserInputEnvelope
    set?: historyWhereUniqueInput | historyWhereUniqueInput[]
    disconnect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    delete?: historyWhereUniqueInput | historyWhereUniqueInput[]
    connect?: historyWhereUniqueInput | historyWhereUniqueInput[]
    update?: historyUpdateWithWhereUniqueWithoutUserInput | historyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: historyUpdateManyWithWhereWithoutUserInput | historyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: historyScalarWhereInput | historyScalarWhereInput[]
  }

  export type user_usageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_usageCreateWithoutUserInput, user_usageUncheckedCreateWithoutUserInput> | user_usageCreateWithoutUserInput[] | user_usageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_usageCreateOrConnectWithoutUserInput | user_usageCreateOrConnectWithoutUserInput[]
    upsert?: user_usageUpsertWithWhereUniqueWithoutUserInput | user_usageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_usageCreateManyUserInputEnvelope
    set?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    disconnect?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    delete?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    connect?: user_usageWhereUniqueInput | user_usageWhereUniqueInput[]
    update?: user_usageUpdateWithWhereUniqueWithoutUserInput | user_usageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_usageUpdateManyWithWhereWithoutUserInput | user_usageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_usageScalarWhereInput | user_usageScalarWhereInput[]
  }

  export type lecture_roomCreateNestedOneWithoutUser_favoriteInput = {
    create?: XOR<lecture_roomCreateWithoutUser_favoriteInput, lecture_roomUncheckedCreateWithoutUser_favoriteInput>
    connectOrCreate?: lecture_roomCreateOrConnectWithoutUser_favoriteInput
    connect?: lecture_roomWhereUniqueInput
  }

  export type Enumuser_favorite_weekdayFieldUpdateOperationsInput = {
    set?: $Enums.user_favorite_weekday
  }

  export type lecture_roomUpdateOneRequiredWithoutUser_favoriteNestedInput = {
    create?: XOR<lecture_roomCreateWithoutUser_favoriteInput, lecture_roomUncheckedCreateWithoutUser_favoriteInput>
    connectOrCreate?: lecture_roomCreateOrConnectWithoutUser_favoriteInput
    upsert?: lecture_roomUpsertWithoutUser_favoriteInput
    connect?: lecture_roomWhereUniqueInput
    update?: XOR<XOR<lecture_roomUpdateToOneWithWhereWithoutUser_favoriteInput, lecture_roomUpdateWithoutUser_favoriteInput>, lecture_roomUncheckedUpdateWithoutUser_favoriteInput>
  }

  export type userCreateNestedOneWithoutUser_usageInput = {
    create?: XOR<userCreateWithoutUser_usageInput, userUncheckedCreateWithoutUser_usageInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_usageInput
    connect?: userWhereUniqueInput
  }

  export type lecture_roomCreateNestedOneWithoutUser_usageInput = {
    create?: XOR<lecture_roomCreateWithoutUser_usageInput, lecture_roomUncheckedCreateWithoutUser_usageInput>
    connectOrCreate?: lecture_roomCreateOrConnectWithoutUser_usageInput
    connect?: lecture_roomWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUser_usageNestedInput = {
    create?: XOR<userCreateWithoutUser_usageInput, userUncheckedCreateWithoutUser_usageInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_usageInput
    upsert?: userUpsertWithoutUser_usageInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_usageInput, userUpdateWithoutUser_usageInput>, userUncheckedUpdateWithoutUser_usageInput>
  }

  export type lecture_roomUpdateOneRequiredWithoutUser_usageNestedInput = {
    create?: XOR<lecture_roomCreateWithoutUser_usageInput, lecture_roomUncheckedCreateWithoutUser_usageInput>
    connectOrCreate?: lecture_roomCreateOrConnectWithoutUser_usageInput
    upsert?: lecture_roomUpsertWithoutUser_usageInput
    connect?: lecture_roomWhereUniqueInput
    update?: XOR<XOR<lecture_roomUpdateToOneWithWhereWithoutUser_usageInput, lecture_roomUpdateWithoutUser_usageInput>, lecture_roomUncheckedUpdateWithoutUser_usageInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumlecture_schedule_weekdayFilter<$PrismaModel = never> = {
    equals?: $Enums.lecture_schedule_weekday | Enumlecture_schedule_weekdayFieldRefInput<$PrismaModel>
    in?: $Enums.lecture_schedule_weekday[]
    notIn?: $Enums.lecture_schedule_weekday[]
    not?: NestedEnumlecture_schedule_weekdayFilter<$PrismaModel> | $Enums.lecture_schedule_weekday
  }

  export type NestedEnumlecture_schedule_weekdayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.lecture_schedule_weekday | Enumlecture_schedule_weekdayFieldRefInput<$PrismaModel>
    in?: $Enums.lecture_schedule_weekday[]
    notIn?: $Enums.lecture_schedule_weekday[]
    not?: NestedEnumlecture_schedule_weekdayWithAggregatesFilter<$PrismaModel> | $Enums.lecture_schedule_weekday
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumlecture_schedule_weekdayFilter<$PrismaModel>
    _max?: NestedEnumlecture_schedule_weekdayFilter<$PrismaModel>
  }

  export type NestedEnumuser_user_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.user_user_type | Enumuser_user_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_user_type[]
    notIn?: $Enums.user_user_type[]
    not?: NestedEnumuser_user_typeFilter<$PrismaModel> | $Enums.user_user_type
  }

  export type NestedEnumuser_user_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_user_type | Enumuser_user_typeFieldRefInput<$PrismaModel>
    in?: $Enums.user_user_type[]
    notIn?: $Enums.user_user_type[]
    not?: NestedEnumuser_user_typeWithAggregatesFilter<$PrismaModel> | $Enums.user_user_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_user_typeFilter<$PrismaModel>
    _max?: NestedEnumuser_user_typeFilter<$PrismaModel>
  }

  export type NestedEnumuser_favorite_weekdayFilter<$PrismaModel = never> = {
    equals?: $Enums.user_favorite_weekday | Enumuser_favorite_weekdayFieldRefInput<$PrismaModel>
    in?: $Enums.user_favorite_weekday[]
    notIn?: $Enums.user_favorite_weekday[]
    not?: NestedEnumuser_favorite_weekdayFilter<$PrismaModel> | $Enums.user_favorite_weekday
  }

  export type NestedEnumuser_favorite_weekdayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_favorite_weekday | Enumuser_favorite_weekdayFieldRefInput<$PrismaModel>
    in?: $Enums.user_favorite_weekday[]
    notIn?: $Enums.user_favorite_weekday[]
    not?: NestedEnumuser_favorite_weekdayWithAggregatesFilter<$PrismaModel> | $Enums.user_favorite_weekday
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_favorite_weekdayFilter<$PrismaModel>
    _max?: NestedEnumuser_favorite_weekdayFilter<$PrismaModel>
  }

  export type lecture_roomCreateWithoutHistoryInput = {
    classId: string
    building: string
    room: string
    floor: number
    capacity: number
    current_occupancy?: number
    cnt_alone_study?: number
    cnt_group_meeting?: number
    cnt_quiet?: number
    cnt_free_talk?: number
    cnt_short_stay?: number
    cnt_comfortable?: number
    lecture_schedule?: lecture_scheduleCreateNestedManyWithoutLecture_roomInput
    user_favorite?: user_favoriteCreateNestedManyWithoutLecture_roomInput
    user_usage?: user_usageCreateNestedManyWithoutLecture_roomInput
  }

  export type lecture_roomUncheckedCreateWithoutHistoryInput = {
    classId: string
    building: string
    room: string
    floor: number
    capacity: number
    current_occupancy?: number
    cnt_alone_study?: number
    cnt_group_meeting?: number
    cnt_quiet?: number
    cnt_free_talk?: number
    cnt_short_stay?: number
    cnt_comfortable?: number
    lecture_schedule?: lecture_scheduleUncheckedCreateNestedManyWithoutLecture_roomInput
    user_favorite?: user_favoriteUncheckedCreateNestedManyWithoutLecture_roomInput
    user_usage?: user_usageUncheckedCreateNestedManyWithoutLecture_roomInput
  }

  export type lecture_roomCreateOrConnectWithoutHistoryInput = {
    where: lecture_roomWhereUniqueInput
    create: XOR<lecture_roomCreateWithoutHistoryInput, lecture_roomUncheckedCreateWithoutHistoryInput>
  }

  export type userCreateWithoutHistoryInput = {
    user_id: string
    name: string
    password: string
    user_type: $Enums.user_user_type
    created_at?: Date | string
    user_usage?: user_usageCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutHistoryInput = {
    user_id: string
    name: string
    password: string
    user_type: $Enums.user_user_type
    created_at?: Date | string
    user_usage?: user_usageUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutHistoryInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutHistoryInput, userUncheckedCreateWithoutHistoryInput>
  }

  export type lecture_roomUpsertWithoutHistoryInput = {
    update: XOR<lecture_roomUpdateWithoutHistoryInput, lecture_roomUncheckedUpdateWithoutHistoryInput>
    create: XOR<lecture_roomCreateWithoutHistoryInput, lecture_roomUncheckedCreateWithoutHistoryInput>
    where?: lecture_roomWhereInput
  }

  export type lecture_roomUpdateToOneWithWhereWithoutHistoryInput = {
    where?: lecture_roomWhereInput
    data: XOR<lecture_roomUpdateWithoutHistoryInput, lecture_roomUncheckedUpdateWithoutHistoryInput>
  }

  export type lecture_roomUpdateWithoutHistoryInput = {
    classId?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    current_occupancy?: IntFieldUpdateOperationsInput | number
    cnt_alone_study?: IntFieldUpdateOperationsInput | number
    cnt_group_meeting?: IntFieldUpdateOperationsInput | number
    cnt_quiet?: IntFieldUpdateOperationsInput | number
    cnt_free_talk?: IntFieldUpdateOperationsInput | number
    cnt_short_stay?: IntFieldUpdateOperationsInput | number
    cnt_comfortable?: IntFieldUpdateOperationsInput | number
    lecture_schedule?: lecture_scheduleUpdateManyWithoutLecture_roomNestedInput
    user_favorite?: user_favoriteUpdateManyWithoutLecture_roomNestedInput
    user_usage?: user_usageUpdateManyWithoutLecture_roomNestedInput
  }

  export type lecture_roomUncheckedUpdateWithoutHistoryInput = {
    classId?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    current_occupancy?: IntFieldUpdateOperationsInput | number
    cnt_alone_study?: IntFieldUpdateOperationsInput | number
    cnt_group_meeting?: IntFieldUpdateOperationsInput | number
    cnt_quiet?: IntFieldUpdateOperationsInput | number
    cnt_free_talk?: IntFieldUpdateOperationsInput | number
    cnt_short_stay?: IntFieldUpdateOperationsInput | number
    cnt_comfortable?: IntFieldUpdateOperationsInput | number
    lecture_schedule?: lecture_scheduleUncheckedUpdateManyWithoutLecture_roomNestedInput
    user_favorite?: user_favoriteUncheckedUpdateManyWithoutLecture_roomNestedInput
    user_usage?: user_usageUncheckedUpdateManyWithoutLecture_roomNestedInput
  }

  export type userUpsertWithoutHistoryInput = {
    update: XOR<userUpdateWithoutHistoryInput, userUncheckedUpdateWithoutHistoryInput>
    create: XOR<userCreateWithoutHistoryInput, userUncheckedCreateWithoutHistoryInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutHistoryInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutHistoryInput, userUncheckedUpdateWithoutHistoryInput>
  }

  export type userUpdateWithoutHistoryInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_usage?: user_usageUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutHistoryInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_usage?: user_usageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type lecture_scheduleCreateWithoutLectureInput = {
    weekday: $Enums.lecture_schedule_weekday
    start_time: Date | string
    end_time: Date | string
    lecture_room: lecture_roomCreateNestedOneWithoutLecture_scheduleInput
  }

  export type lecture_scheduleUncheckedCreateWithoutLectureInput = {
    classId: string
    weekday: $Enums.lecture_schedule_weekday
    start_time: Date | string
    end_time: Date | string
  }

  export type lecture_scheduleCreateOrConnectWithoutLectureInput = {
    where: lecture_scheduleWhereUniqueInput
    create: XOR<lecture_scheduleCreateWithoutLectureInput, lecture_scheduleUncheckedCreateWithoutLectureInput>
  }

  export type lecture_scheduleCreateManyLectureInputEnvelope = {
    data: lecture_scheduleCreateManyLectureInput | lecture_scheduleCreateManyLectureInput[]
    skipDuplicates?: boolean
  }

  export type lecture_scheduleUpsertWithWhereUniqueWithoutLectureInput = {
    where: lecture_scheduleWhereUniqueInput
    update: XOR<lecture_scheduleUpdateWithoutLectureInput, lecture_scheduleUncheckedUpdateWithoutLectureInput>
    create: XOR<lecture_scheduleCreateWithoutLectureInput, lecture_scheduleUncheckedCreateWithoutLectureInput>
  }

  export type lecture_scheduleUpdateWithWhereUniqueWithoutLectureInput = {
    where: lecture_scheduleWhereUniqueInput
    data: XOR<lecture_scheduleUpdateWithoutLectureInput, lecture_scheduleUncheckedUpdateWithoutLectureInput>
  }

  export type lecture_scheduleUpdateManyWithWhereWithoutLectureInput = {
    where: lecture_scheduleScalarWhereInput
    data: XOR<lecture_scheduleUpdateManyMutationInput, lecture_scheduleUncheckedUpdateManyWithoutLectureInput>
  }

  export type lecture_scheduleScalarWhereInput = {
    AND?: lecture_scheduleScalarWhereInput | lecture_scheduleScalarWhereInput[]
    OR?: lecture_scheduleScalarWhereInput[]
    NOT?: lecture_scheduleScalarWhereInput | lecture_scheduleScalarWhereInput[]
    course_id?: StringFilter<"lecture_schedule"> | string
    classId?: StringFilter<"lecture_schedule"> | string
    weekday?: Enumlecture_schedule_weekdayFilter<"lecture_schedule"> | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFilter<"lecture_schedule"> | Date | string
    end_time?: DateTimeFilter<"lecture_schedule"> | Date | string
  }

  export type historyCreateWithoutLecture_roomInput = {
    history_id?: bigint | number
    start_time: Date | string
    end_time: Date | string
    participant_count?: number | null
    hashtags?: string | null
    created_at?: Date | string
    user: userCreateNestedOneWithoutHistoryInput
  }

  export type historyUncheckedCreateWithoutLecture_roomInput = {
    history_id?: bigint | number
    user_id: string
    start_time: Date | string
    end_time: Date | string
    participant_count?: number | null
    hashtags?: string | null
    created_at?: Date | string
  }

  export type historyCreateOrConnectWithoutLecture_roomInput = {
    where: historyWhereUniqueInput
    create: XOR<historyCreateWithoutLecture_roomInput, historyUncheckedCreateWithoutLecture_roomInput>
  }

  export type historyCreateManyLecture_roomInputEnvelope = {
    data: historyCreateManyLecture_roomInput | historyCreateManyLecture_roomInput[]
    skipDuplicates?: boolean
  }

  export type lecture_scheduleCreateWithoutLecture_roomInput = {
    weekday: $Enums.lecture_schedule_weekday
    start_time: Date | string
    end_time: Date | string
    lecture: lectureCreateNestedOneWithoutLecture_scheduleInput
  }

  export type lecture_scheduleUncheckedCreateWithoutLecture_roomInput = {
    course_id: string
    weekday: $Enums.lecture_schedule_weekday
    start_time: Date | string
    end_time: Date | string
  }

  export type lecture_scheduleCreateOrConnectWithoutLecture_roomInput = {
    where: lecture_scheduleWhereUniqueInput
    create: XOR<lecture_scheduleCreateWithoutLecture_roomInput, lecture_scheduleUncheckedCreateWithoutLecture_roomInput>
  }

  export type lecture_scheduleCreateManyLecture_roomInputEnvelope = {
    data: lecture_scheduleCreateManyLecture_roomInput | lecture_scheduleCreateManyLecture_roomInput[]
    skipDuplicates?: boolean
  }

  export type user_favoriteCreateWithoutLecture_roomInput = {
    user_id: string
    weekday: $Enums.user_favorite_weekday
    start_time: Date | string
    end_time: Date | string
    favorited_at?: Date | string
  }

  export type user_favoriteUncheckedCreateWithoutLecture_roomInput = {
    user_id: string
    weekday: $Enums.user_favorite_weekday
    start_time: Date | string
    end_time: Date | string
    favorited_at?: Date | string
  }

  export type user_favoriteCreateOrConnectWithoutLecture_roomInput = {
    where: user_favoriteWhereUniqueInput
    create: XOR<user_favoriteCreateWithoutLecture_roomInput, user_favoriteUncheckedCreateWithoutLecture_roomInput>
  }

  export type user_favoriteCreateManyLecture_roomInputEnvelope = {
    data: user_favoriteCreateManyLecture_roomInput | user_favoriteCreateManyLecture_roomInput[]
    skipDuplicates?: boolean
  }

  export type user_usageCreateWithoutLecture_roomInput = {
    usage_id?: bigint | number
    usage_date: Date | string
    start_time: Date | string
    end_time: Date | string
    participant_count: number
    hashtags: string
    created_at?: Date | string
    user: userCreateNestedOneWithoutUser_usageInput
  }

  export type user_usageUncheckedCreateWithoutLecture_roomInput = {
    usage_id?: bigint | number
    user_id: string
    usage_date: Date | string
    start_time: Date | string
    end_time: Date | string
    participant_count: number
    hashtags: string
    created_at?: Date | string
  }

  export type user_usageCreateOrConnectWithoutLecture_roomInput = {
    where: user_usageWhereUniqueInput
    create: XOR<user_usageCreateWithoutLecture_roomInput, user_usageUncheckedCreateWithoutLecture_roomInput>
  }

  export type user_usageCreateManyLecture_roomInputEnvelope = {
    data: user_usageCreateManyLecture_roomInput | user_usageCreateManyLecture_roomInput[]
    skipDuplicates?: boolean
  }

  export type historyUpsertWithWhereUniqueWithoutLecture_roomInput = {
    where: historyWhereUniqueInput
    update: XOR<historyUpdateWithoutLecture_roomInput, historyUncheckedUpdateWithoutLecture_roomInput>
    create: XOR<historyCreateWithoutLecture_roomInput, historyUncheckedCreateWithoutLecture_roomInput>
  }

  export type historyUpdateWithWhereUniqueWithoutLecture_roomInput = {
    where: historyWhereUniqueInput
    data: XOR<historyUpdateWithoutLecture_roomInput, historyUncheckedUpdateWithoutLecture_roomInput>
  }

  export type historyUpdateManyWithWhereWithoutLecture_roomInput = {
    where: historyScalarWhereInput
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyWithoutLecture_roomInput>
  }

  export type historyScalarWhereInput = {
    AND?: historyScalarWhereInput | historyScalarWhereInput[]
    OR?: historyScalarWhereInput[]
    NOT?: historyScalarWhereInput | historyScalarWhereInput[]
    history_id?: BigIntFilter<"history"> | bigint | number
    user_id?: StringFilter<"history"> | string
    classId?: StringFilter<"history"> | string
    start_time?: DateTimeFilter<"history"> | Date | string
    end_time?: DateTimeFilter<"history"> | Date | string
    participant_count?: IntNullableFilter<"history"> | number | null
    hashtags?: StringNullableFilter<"history"> | string | null
    created_at?: DateTimeFilter<"history"> | Date | string
  }

  export type lecture_scheduleUpsertWithWhereUniqueWithoutLecture_roomInput = {
    where: lecture_scheduleWhereUniqueInput
    update: XOR<lecture_scheduleUpdateWithoutLecture_roomInput, lecture_scheduleUncheckedUpdateWithoutLecture_roomInput>
    create: XOR<lecture_scheduleCreateWithoutLecture_roomInput, lecture_scheduleUncheckedCreateWithoutLecture_roomInput>
  }

  export type lecture_scheduleUpdateWithWhereUniqueWithoutLecture_roomInput = {
    where: lecture_scheduleWhereUniqueInput
    data: XOR<lecture_scheduleUpdateWithoutLecture_roomInput, lecture_scheduleUncheckedUpdateWithoutLecture_roomInput>
  }

  export type lecture_scheduleUpdateManyWithWhereWithoutLecture_roomInput = {
    where: lecture_scheduleScalarWhereInput
    data: XOR<lecture_scheduleUpdateManyMutationInput, lecture_scheduleUncheckedUpdateManyWithoutLecture_roomInput>
  }

  export type user_favoriteUpsertWithWhereUniqueWithoutLecture_roomInput = {
    where: user_favoriteWhereUniqueInput
    update: XOR<user_favoriteUpdateWithoutLecture_roomInput, user_favoriteUncheckedUpdateWithoutLecture_roomInput>
    create: XOR<user_favoriteCreateWithoutLecture_roomInput, user_favoriteUncheckedCreateWithoutLecture_roomInput>
  }

  export type user_favoriteUpdateWithWhereUniqueWithoutLecture_roomInput = {
    where: user_favoriteWhereUniqueInput
    data: XOR<user_favoriteUpdateWithoutLecture_roomInput, user_favoriteUncheckedUpdateWithoutLecture_roomInput>
  }

  export type user_favoriteUpdateManyWithWhereWithoutLecture_roomInput = {
    where: user_favoriteScalarWhereInput
    data: XOR<user_favoriteUpdateManyMutationInput, user_favoriteUncheckedUpdateManyWithoutLecture_roomInput>
  }

  export type user_favoriteScalarWhereInput = {
    AND?: user_favoriteScalarWhereInput | user_favoriteScalarWhereInput[]
    OR?: user_favoriteScalarWhereInput[]
    NOT?: user_favoriteScalarWhereInput | user_favoriteScalarWhereInput[]
    user_id?: StringFilter<"user_favorite"> | string
    classId?: StringFilter<"user_favorite"> | string
    weekday?: Enumuser_favorite_weekdayFilter<"user_favorite"> | $Enums.user_favorite_weekday
    start_time?: DateTimeFilter<"user_favorite"> | Date | string
    end_time?: DateTimeFilter<"user_favorite"> | Date | string
    favorited_at?: DateTimeFilter<"user_favorite"> | Date | string
  }

  export type user_usageUpsertWithWhereUniqueWithoutLecture_roomInput = {
    where: user_usageWhereUniqueInput
    update: XOR<user_usageUpdateWithoutLecture_roomInput, user_usageUncheckedUpdateWithoutLecture_roomInput>
    create: XOR<user_usageCreateWithoutLecture_roomInput, user_usageUncheckedCreateWithoutLecture_roomInput>
  }

  export type user_usageUpdateWithWhereUniqueWithoutLecture_roomInput = {
    where: user_usageWhereUniqueInput
    data: XOR<user_usageUpdateWithoutLecture_roomInput, user_usageUncheckedUpdateWithoutLecture_roomInput>
  }

  export type user_usageUpdateManyWithWhereWithoutLecture_roomInput = {
    where: user_usageScalarWhereInput
    data: XOR<user_usageUpdateManyMutationInput, user_usageUncheckedUpdateManyWithoutLecture_roomInput>
  }

  export type user_usageScalarWhereInput = {
    AND?: user_usageScalarWhereInput | user_usageScalarWhereInput[]
    OR?: user_usageScalarWhereInput[]
    NOT?: user_usageScalarWhereInput | user_usageScalarWhereInput[]
    usage_id?: BigIntFilter<"user_usage"> | bigint | number
    user_id?: StringFilter<"user_usage"> | string
    classId?: StringFilter<"user_usage"> | string
    usage_date?: DateTimeFilter<"user_usage"> | Date | string
    start_time?: DateTimeFilter<"user_usage"> | Date | string
    end_time?: DateTimeFilter<"user_usage"> | Date | string
    participant_count?: IntFilter<"user_usage"> | number
    hashtags?: StringFilter<"user_usage"> | string
    created_at?: DateTimeFilter<"user_usage"> | Date | string
  }

  export type lecture_roomCreateWithoutLecture_scheduleInput = {
    classId: string
    building: string
    room: string
    floor: number
    capacity: number
    current_occupancy?: number
    cnt_alone_study?: number
    cnt_group_meeting?: number
    cnt_quiet?: number
    cnt_free_talk?: number
    cnt_short_stay?: number
    cnt_comfortable?: number
    history?: historyCreateNestedManyWithoutLecture_roomInput
    user_favorite?: user_favoriteCreateNestedManyWithoutLecture_roomInput
    user_usage?: user_usageCreateNestedManyWithoutLecture_roomInput
  }

  export type lecture_roomUncheckedCreateWithoutLecture_scheduleInput = {
    classId: string
    building: string
    room: string
    floor: number
    capacity: number
    current_occupancy?: number
    cnt_alone_study?: number
    cnt_group_meeting?: number
    cnt_quiet?: number
    cnt_free_talk?: number
    cnt_short_stay?: number
    cnt_comfortable?: number
    history?: historyUncheckedCreateNestedManyWithoutLecture_roomInput
    user_favorite?: user_favoriteUncheckedCreateNestedManyWithoutLecture_roomInput
    user_usage?: user_usageUncheckedCreateNestedManyWithoutLecture_roomInput
  }

  export type lecture_roomCreateOrConnectWithoutLecture_scheduleInput = {
    where: lecture_roomWhereUniqueInput
    create: XOR<lecture_roomCreateWithoutLecture_scheduleInput, lecture_roomUncheckedCreateWithoutLecture_scheduleInput>
  }

  export type lectureCreateWithoutLecture_scheduleInput = {
    course_id: string
    course_name: string
    professor: string
  }

  export type lectureUncheckedCreateWithoutLecture_scheduleInput = {
    course_id: string
    course_name: string
    professor: string
  }

  export type lectureCreateOrConnectWithoutLecture_scheduleInput = {
    where: lectureWhereUniqueInput
    create: XOR<lectureCreateWithoutLecture_scheduleInput, lectureUncheckedCreateWithoutLecture_scheduleInput>
  }

  export type lecture_roomUpsertWithoutLecture_scheduleInput = {
    update: XOR<lecture_roomUpdateWithoutLecture_scheduleInput, lecture_roomUncheckedUpdateWithoutLecture_scheduleInput>
    create: XOR<lecture_roomCreateWithoutLecture_scheduleInput, lecture_roomUncheckedCreateWithoutLecture_scheduleInput>
    where?: lecture_roomWhereInput
  }

  export type lecture_roomUpdateToOneWithWhereWithoutLecture_scheduleInput = {
    where?: lecture_roomWhereInput
    data: XOR<lecture_roomUpdateWithoutLecture_scheduleInput, lecture_roomUncheckedUpdateWithoutLecture_scheduleInput>
  }

  export type lecture_roomUpdateWithoutLecture_scheduleInput = {
    classId?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    current_occupancy?: IntFieldUpdateOperationsInput | number
    cnt_alone_study?: IntFieldUpdateOperationsInput | number
    cnt_group_meeting?: IntFieldUpdateOperationsInput | number
    cnt_quiet?: IntFieldUpdateOperationsInput | number
    cnt_free_talk?: IntFieldUpdateOperationsInput | number
    cnt_short_stay?: IntFieldUpdateOperationsInput | number
    cnt_comfortable?: IntFieldUpdateOperationsInput | number
    history?: historyUpdateManyWithoutLecture_roomNestedInput
    user_favorite?: user_favoriteUpdateManyWithoutLecture_roomNestedInput
    user_usage?: user_usageUpdateManyWithoutLecture_roomNestedInput
  }

  export type lecture_roomUncheckedUpdateWithoutLecture_scheduleInput = {
    classId?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    current_occupancy?: IntFieldUpdateOperationsInput | number
    cnt_alone_study?: IntFieldUpdateOperationsInput | number
    cnt_group_meeting?: IntFieldUpdateOperationsInput | number
    cnt_quiet?: IntFieldUpdateOperationsInput | number
    cnt_free_talk?: IntFieldUpdateOperationsInput | number
    cnt_short_stay?: IntFieldUpdateOperationsInput | number
    cnt_comfortable?: IntFieldUpdateOperationsInput | number
    history?: historyUncheckedUpdateManyWithoutLecture_roomNestedInput
    user_favorite?: user_favoriteUncheckedUpdateManyWithoutLecture_roomNestedInput
    user_usage?: user_usageUncheckedUpdateManyWithoutLecture_roomNestedInput
  }

  export type lectureUpsertWithoutLecture_scheduleInput = {
    update: XOR<lectureUpdateWithoutLecture_scheduleInput, lectureUncheckedUpdateWithoutLecture_scheduleInput>
    create: XOR<lectureCreateWithoutLecture_scheduleInput, lectureUncheckedCreateWithoutLecture_scheduleInput>
    where?: lectureWhereInput
  }

  export type lectureUpdateToOneWithWhereWithoutLecture_scheduleInput = {
    where?: lectureWhereInput
    data: XOR<lectureUpdateWithoutLecture_scheduleInput, lectureUncheckedUpdateWithoutLecture_scheduleInput>
  }

  export type lectureUpdateWithoutLecture_scheduleInput = {
    course_id?: StringFieldUpdateOperationsInput | string
    course_name?: StringFieldUpdateOperationsInput | string
    professor?: StringFieldUpdateOperationsInput | string
  }

  export type lectureUncheckedUpdateWithoutLecture_scheduleInput = {
    course_id?: StringFieldUpdateOperationsInput | string
    course_name?: StringFieldUpdateOperationsInput | string
    professor?: StringFieldUpdateOperationsInput | string
  }

  export type historyCreateWithoutUserInput = {
    history_id?: bigint | number
    start_time: Date | string
    end_time: Date | string
    participant_count?: number | null
    hashtags?: string | null
    created_at?: Date | string
    lecture_room: lecture_roomCreateNestedOneWithoutHistoryInput
  }

  export type historyUncheckedCreateWithoutUserInput = {
    history_id?: bigint | number
    classId: string
    start_time: Date | string
    end_time: Date | string
    participant_count?: number | null
    hashtags?: string | null
    created_at?: Date | string
  }

  export type historyCreateOrConnectWithoutUserInput = {
    where: historyWhereUniqueInput
    create: XOR<historyCreateWithoutUserInput, historyUncheckedCreateWithoutUserInput>
  }

  export type historyCreateManyUserInputEnvelope = {
    data: historyCreateManyUserInput | historyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_usageCreateWithoutUserInput = {
    usage_id?: bigint | number
    usage_date: Date | string
    start_time: Date | string
    end_time: Date | string
    participant_count: number
    hashtags: string
    created_at?: Date | string
    lecture_room: lecture_roomCreateNestedOneWithoutUser_usageInput
  }

  export type user_usageUncheckedCreateWithoutUserInput = {
    usage_id?: bigint | number
    classId: string
    usage_date: Date | string
    start_time: Date | string
    end_time: Date | string
    participant_count: number
    hashtags: string
    created_at?: Date | string
  }

  export type user_usageCreateOrConnectWithoutUserInput = {
    where: user_usageWhereUniqueInput
    create: XOR<user_usageCreateWithoutUserInput, user_usageUncheckedCreateWithoutUserInput>
  }

  export type user_usageCreateManyUserInputEnvelope = {
    data: user_usageCreateManyUserInput | user_usageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type historyUpsertWithWhereUniqueWithoutUserInput = {
    where: historyWhereUniqueInput
    update: XOR<historyUpdateWithoutUserInput, historyUncheckedUpdateWithoutUserInput>
    create: XOR<historyCreateWithoutUserInput, historyUncheckedCreateWithoutUserInput>
  }

  export type historyUpdateWithWhereUniqueWithoutUserInput = {
    where: historyWhereUniqueInput
    data: XOR<historyUpdateWithoutUserInput, historyUncheckedUpdateWithoutUserInput>
  }

  export type historyUpdateManyWithWhereWithoutUserInput = {
    where: historyScalarWhereInput
    data: XOR<historyUpdateManyMutationInput, historyUncheckedUpdateManyWithoutUserInput>
  }

  export type user_usageUpsertWithWhereUniqueWithoutUserInput = {
    where: user_usageWhereUniqueInput
    update: XOR<user_usageUpdateWithoutUserInput, user_usageUncheckedUpdateWithoutUserInput>
    create: XOR<user_usageCreateWithoutUserInput, user_usageUncheckedCreateWithoutUserInput>
  }

  export type user_usageUpdateWithWhereUniqueWithoutUserInput = {
    where: user_usageWhereUniqueInput
    data: XOR<user_usageUpdateWithoutUserInput, user_usageUncheckedUpdateWithoutUserInput>
  }

  export type user_usageUpdateManyWithWhereWithoutUserInput = {
    where: user_usageScalarWhereInput
    data: XOR<user_usageUpdateManyMutationInput, user_usageUncheckedUpdateManyWithoutUserInput>
  }

  export type lecture_roomCreateWithoutUser_favoriteInput = {
    classId: string
    building: string
    room: string
    floor: number
    capacity: number
    current_occupancy?: number
    cnt_alone_study?: number
    cnt_group_meeting?: number
    cnt_quiet?: number
    cnt_free_talk?: number
    cnt_short_stay?: number
    cnt_comfortable?: number
    history?: historyCreateNestedManyWithoutLecture_roomInput
    lecture_schedule?: lecture_scheduleCreateNestedManyWithoutLecture_roomInput
    user_usage?: user_usageCreateNestedManyWithoutLecture_roomInput
  }

  export type lecture_roomUncheckedCreateWithoutUser_favoriteInput = {
    classId: string
    building: string
    room: string
    floor: number
    capacity: number
    current_occupancy?: number
    cnt_alone_study?: number
    cnt_group_meeting?: number
    cnt_quiet?: number
    cnt_free_talk?: number
    cnt_short_stay?: number
    cnt_comfortable?: number
    history?: historyUncheckedCreateNestedManyWithoutLecture_roomInput
    lecture_schedule?: lecture_scheduleUncheckedCreateNestedManyWithoutLecture_roomInput
    user_usage?: user_usageUncheckedCreateNestedManyWithoutLecture_roomInput
  }

  export type lecture_roomCreateOrConnectWithoutUser_favoriteInput = {
    where: lecture_roomWhereUniqueInput
    create: XOR<lecture_roomCreateWithoutUser_favoriteInput, lecture_roomUncheckedCreateWithoutUser_favoriteInput>
  }

  export type lecture_roomUpsertWithoutUser_favoriteInput = {
    update: XOR<lecture_roomUpdateWithoutUser_favoriteInput, lecture_roomUncheckedUpdateWithoutUser_favoriteInput>
    create: XOR<lecture_roomCreateWithoutUser_favoriteInput, lecture_roomUncheckedCreateWithoutUser_favoriteInput>
    where?: lecture_roomWhereInput
  }

  export type lecture_roomUpdateToOneWithWhereWithoutUser_favoriteInput = {
    where?: lecture_roomWhereInput
    data: XOR<lecture_roomUpdateWithoutUser_favoriteInput, lecture_roomUncheckedUpdateWithoutUser_favoriteInput>
  }

  export type lecture_roomUpdateWithoutUser_favoriteInput = {
    classId?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    current_occupancy?: IntFieldUpdateOperationsInput | number
    cnt_alone_study?: IntFieldUpdateOperationsInput | number
    cnt_group_meeting?: IntFieldUpdateOperationsInput | number
    cnt_quiet?: IntFieldUpdateOperationsInput | number
    cnt_free_talk?: IntFieldUpdateOperationsInput | number
    cnt_short_stay?: IntFieldUpdateOperationsInput | number
    cnt_comfortable?: IntFieldUpdateOperationsInput | number
    history?: historyUpdateManyWithoutLecture_roomNestedInput
    lecture_schedule?: lecture_scheduleUpdateManyWithoutLecture_roomNestedInput
    user_usage?: user_usageUpdateManyWithoutLecture_roomNestedInput
  }

  export type lecture_roomUncheckedUpdateWithoutUser_favoriteInput = {
    classId?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    current_occupancy?: IntFieldUpdateOperationsInput | number
    cnt_alone_study?: IntFieldUpdateOperationsInput | number
    cnt_group_meeting?: IntFieldUpdateOperationsInput | number
    cnt_quiet?: IntFieldUpdateOperationsInput | number
    cnt_free_talk?: IntFieldUpdateOperationsInput | number
    cnt_short_stay?: IntFieldUpdateOperationsInput | number
    cnt_comfortable?: IntFieldUpdateOperationsInput | number
    history?: historyUncheckedUpdateManyWithoutLecture_roomNestedInput
    lecture_schedule?: lecture_scheduleUncheckedUpdateManyWithoutLecture_roomNestedInput
    user_usage?: user_usageUncheckedUpdateManyWithoutLecture_roomNestedInput
  }

  export type userCreateWithoutUser_usageInput = {
    user_id: string
    name: string
    password: string
    user_type: $Enums.user_user_type
    created_at?: Date | string
    history?: historyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_usageInput = {
    user_id: string
    name: string
    password: string
    user_type: $Enums.user_user_type
    created_at?: Date | string
    history?: historyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_usageInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_usageInput, userUncheckedCreateWithoutUser_usageInput>
  }

  export type lecture_roomCreateWithoutUser_usageInput = {
    classId: string
    building: string
    room: string
    floor: number
    capacity: number
    current_occupancy?: number
    cnt_alone_study?: number
    cnt_group_meeting?: number
    cnt_quiet?: number
    cnt_free_talk?: number
    cnt_short_stay?: number
    cnt_comfortable?: number
    history?: historyCreateNestedManyWithoutLecture_roomInput
    lecture_schedule?: lecture_scheduleCreateNestedManyWithoutLecture_roomInput
    user_favorite?: user_favoriteCreateNestedManyWithoutLecture_roomInput
  }

  export type lecture_roomUncheckedCreateWithoutUser_usageInput = {
    classId: string
    building: string
    room: string
    floor: number
    capacity: number
    current_occupancy?: number
    cnt_alone_study?: number
    cnt_group_meeting?: number
    cnt_quiet?: number
    cnt_free_talk?: number
    cnt_short_stay?: number
    cnt_comfortable?: number
    history?: historyUncheckedCreateNestedManyWithoutLecture_roomInput
    lecture_schedule?: lecture_scheduleUncheckedCreateNestedManyWithoutLecture_roomInput
    user_favorite?: user_favoriteUncheckedCreateNestedManyWithoutLecture_roomInput
  }

  export type lecture_roomCreateOrConnectWithoutUser_usageInput = {
    where: lecture_roomWhereUniqueInput
    create: XOR<lecture_roomCreateWithoutUser_usageInput, lecture_roomUncheckedCreateWithoutUser_usageInput>
  }

  export type userUpsertWithoutUser_usageInput = {
    update: XOR<userUpdateWithoutUser_usageInput, userUncheckedUpdateWithoutUser_usageInput>
    create: XOR<userCreateWithoutUser_usageInput, userUncheckedCreateWithoutUser_usageInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_usageInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_usageInput, userUncheckedUpdateWithoutUser_usageInput>
  }

  export type userUpdateWithoutUser_usageInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: historyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_usageInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: Enumuser_user_typeFieldUpdateOperationsInput | $Enums.user_user_type
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: historyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type lecture_roomUpsertWithoutUser_usageInput = {
    update: XOR<lecture_roomUpdateWithoutUser_usageInput, lecture_roomUncheckedUpdateWithoutUser_usageInput>
    create: XOR<lecture_roomCreateWithoutUser_usageInput, lecture_roomUncheckedCreateWithoutUser_usageInput>
    where?: lecture_roomWhereInput
  }

  export type lecture_roomUpdateToOneWithWhereWithoutUser_usageInput = {
    where?: lecture_roomWhereInput
    data: XOR<lecture_roomUpdateWithoutUser_usageInput, lecture_roomUncheckedUpdateWithoutUser_usageInput>
  }

  export type lecture_roomUpdateWithoutUser_usageInput = {
    classId?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    current_occupancy?: IntFieldUpdateOperationsInput | number
    cnt_alone_study?: IntFieldUpdateOperationsInput | number
    cnt_group_meeting?: IntFieldUpdateOperationsInput | number
    cnt_quiet?: IntFieldUpdateOperationsInput | number
    cnt_free_talk?: IntFieldUpdateOperationsInput | number
    cnt_short_stay?: IntFieldUpdateOperationsInput | number
    cnt_comfortable?: IntFieldUpdateOperationsInput | number
    history?: historyUpdateManyWithoutLecture_roomNestedInput
    lecture_schedule?: lecture_scheduleUpdateManyWithoutLecture_roomNestedInput
    user_favorite?: user_favoriteUpdateManyWithoutLecture_roomNestedInput
  }

  export type lecture_roomUncheckedUpdateWithoutUser_usageInput = {
    classId?: StringFieldUpdateOperationsInput | string
    building?: StringFieldUpdateOperationsInput | string
    room?: StringFieldUpdateOperationsInput | string
    floor?: IntFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    current_occupancy?: IntFieldUpdateOperationsInput | number
    cnt_alone_study?: IntFieldUpdateOperationsInput | number
    cnt_group_meeting?: IntFieldUpdateOperationsInput | number
    cnt_quiet?: IntFieldUpdateOperationsInput | number
    cnt_free_talk?: IntFieldUpdateOperationsInput | number
    cnt_short_stay?: IntFieldUpdateOperationsInput | number
    cnt_comfortable?: IntFieldUpdateOperationsInput | number
    history?: historyUncheckedUpdateManyWithoutLecture_roomNestedInput
    lecture_schedule?: lecture_scheduleUncheckedUpdateManyWithoutLecture_roomNestedInput
    user_favorite?: user_favoriteUncheckedUpdateManyWithoutLecture_roomNestedInput
  }

  export type lecture_scheduleCreateManyLectureInput = {
    classId: string
    weekday: $Enums.lecture_schedule_weekday
    start_time: Date | string
    end_time: Date | string
  }

  export type lecture_scheduleUpdateWithoutLectureInput = {
    weekday?: Enumlecture_schedule_weekdayFieldUpdateOperationsInput | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture_room?: lecture_roomUpdateOneRequiredWithoutLecture_scheduleNestedInput
  }

  export type lecture_scheduleUncheckedUpdateWithoutLectureInput = {
    classId?: StringFieldUpdateOperationsInput | string
    weekday?: Enumlecture_schedule_weekdayFieldUpdateOperationsInput | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lecture_scheduleUncheckedUpdateManyWithoutLectureInput = {
    classId?: StringFieldUpdateOperationsInput | string
    weekday?: Enumlecture_schedule_weekdayFieldUpdateOperationsInput | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historyCreateManyLecture_roomInput = {
    history_id?: bigint | number
    user_id: string
    start_time: Date | string
    end_time: Date | string
    participant_count?: number | null
    hashtags?: string | null
    created_at?: Date | string
  }

  export type lecture_scheduleCreateManyLecture_roomInput = {
    course_id: string
    weekday: $Enums.lecture_schedule_weekday
    start_time: Date | string
    end_time: Date | string
  }

  export type user_favoriteCreateManyLecture_roomInput = {
    user_id: string
    weekday: $Enums.user_favorite_weekday
    start_time: Date | string
    end_time: Date | string
    favorited_at?: Date | string
  }

  export type user_usageCreateManyLecture_roomInput = {
    usage_id?: bigint | number
    user_id: string
    usage_date: Date | string
    start_time: Date | string
    end_time: Date | string
    participant_count: number
    hashtags: string
    created_at?: Date | string
  }

  export type historyUpdateWithoutLecture_roomInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type historyUncheckedUpdateWithoutLecture_roomInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historyUncheckedUpdateManyWithoutLecture_roomInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lecture_scheduleUpdateWithoutLecture_roomInput = {
    weekday?: Enumlecture_schedule_weekdayFieldUpdateOperationsInput | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture?: lectureUpdateOneRequiredWithoutLecture_scheduleNestedInput
  }

  export type lecture_scheduleUncheckedUpdateWithoutLecture_roomInput = {
    course_id?: StringFieldUpdateOperationsInput | string
    weekday?: Enumlecture_schedule_weekdayFieldUpdateOperationsInput | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type lecture_scheduleUncheckedUpdateManyWithoutLecture_roomInput = {
    course_id?: StringFieldUpdateOperationsInput | string
    weekday?: Enumlecture_schedule_weekdayFieldUpdateOperationsInput | $Enums.lecture_schedule_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_favoriteUpdateWithoutLecture_roomInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    weekday?: Enumuser_favorite_weekdayFieldUpdateOperationsInput | $Enums.user_favorite_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    favorited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_favoriteUncheckedUpdateWithoutLecture_roomInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    weekday?: Enumuser_favorite_weekdayFieldUpdateOperationsInput | $Enums.user_favorite_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    favorited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_favoriteUncheckedUpdateManyWithoutLecture_roomInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    weekday?: Enumuser_favorite_weekdayFieldUpdateOperationsInput | $Enums.user_favorite_weekday
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    favorited_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_usageUpdateWithoutLecture_roomInput = {
    usage_id?: BigIntFieldUpdateOperationsInput | bigint | number
    usage_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: IntFieldUpdateOperationsInput | number
    hashtags?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutUser_usageNestedInput
  }

  export type user_usageUncheckedUpdateWithoutLecture_roomInput = {
    usage_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    usage_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: IntFieldUpdateOperationsInput | number
    hashtags?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_usageUncheckedUpdateManyWithoutLecture_roomInput = {
    usage_id?: BigIntFieldUpdateOperationsInput | bigint | number
    user_id?: StringFieldUpdateOperationsInput | string
    usage_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: IntFieldUpdateOperationsInput | number
    hashtags?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historyCreateManyUserInput = {
    history_id?: bigint | number
    classId: string
    start_time: Date | string
    end_time: Date | string
    participant_count?: number | null
    hashtags?: string | null
    created_at?: Date | string
  }

  export type user_usageCreateManyUserInput = {
    usage_id?: bigint | number
    classId: string
    usage_date: Date | string
    start_time: Date | string
    end_time: Date | string
    participant_count: number
    hashtags: string
    created_at?: Date | string
  }

  export type historyUpdateWithoutUserInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture_room?: lecture_roomUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type historyUncheckedUpdateWithoutUserInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type historyUncheckedUpdateManyWithoutUserInput = {
    history_id?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: StringFieldUpdateOperationsInput | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: NullableIntFieldUpdateOperationsInput | number | null
    hashtags?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_usageUpdateWithoutUserInput = {
    usage_id?: BigIntFieldUpdateOperationsInput | bigint | number
    usage_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: IntFieldUpdateOperationsInput | number
    hashtags?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    lecture_room?: lecture_roomUpdateOneRequiredWithoutUser_usageNestedInput
  }

  export type user_usageUncheckedUpdateWithoutUserInput = {
    usage_id?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: StringFieldUpdateOperationsInput | string
    usage_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: IntFieldUpdateOperationsInput | number
    hashtags?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_usageUncheckedUpdateManyWithoutUserInput = {
    usage_id?: BigIntFieldUpdateOperationsInput | bigint | number
    classId?: StringFieldUpdateOperationsInput | string
    usage_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_count?: IntFieldUpdateOperationsInput | number
    hashtags?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}