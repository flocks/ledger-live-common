// @flow

import type {
  Currency,
  Unit,
  FiatCurrency,
  CryptoCurrency
} from "./currencies";

/**
 *
 *                            Common models types
 *                            ===================
 *
 * Reference types to inspire from as this will comes from the libcore:
 * https://github.com/KhalilBellakrid/lib-ledger-core/tree/develop/core/src/api
 *
 * NB some bug in documentation w\ flowtypes https://github.com/documentationjs/documentation/issues/742
 * ^as soon as fixed, will use /** in the types properties to export doc
 *
 */

import type { Account, AccountRaw } from "./account";
export type { Account, AccountRaw };

import type { Operation, OperationRaw, OperationType } from "./operation";
export type { Operation, OperationRaw, OperationType };

export type { Currency, Unit, FiatCurrency, CryptoCurrency };

/**
 * Other stuff
 * -----------
 */

export type DailyOperationsSection = {
  day: Date,
  data: Operation[]
};

export type DailyOperations = {
  // operations grouped by day
  sections: DailyOperationsSection[],
  // Is the sections complete? means there is no more operations to pull
  completed: boolean
};

export type BalanceHistory = Array<{ date: Date, value: number }>;
