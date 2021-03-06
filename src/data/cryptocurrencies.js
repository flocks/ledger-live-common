//@flow
import type { CryptoCurrency, Unit } from "../types";

const bitcoinUnits: Unit[] = [
  {
    name: "bitcoin",
    code: "BTC",
    symbol: "Ƀ",
    magnitude: 8
  },
  {
    name: "mBTC",
    code: "mBTC",
    symbol: "Ƀ",
    magnitude: 5
  },
  {
    name: "bit",
    code: "bit",
    symbol: "Ƀ",
    magnitude: 2
  },
  {
    name: "satoshi",
    code: "satoshi",
    symbol: "Ƀ",
    magnitude: 0
  }
];

const ethereumUnits = [
  {
    name: "ether",
    code: "ETH",
    symbol: "Ξ",
    magnitude: 18
  },
  {
    name: "Gwei",
    code: "Gwei",
    symbol: "Ξ",
    magnitude: 9
  },
  {
    name: "Mwei",
    code: "Mwei",
    symbol: "Ξ",
    magnitude: 6
  },
  {
    name: "Kwei",
    code: "Kwei",
    symbol: "Ξ",
    magnitude: 3
  },
  {
    name: "wei",
    code: "wei",
    symbol: "Ξ",
    magnitude: 0
  }
];

const ethereumUnitsClassic = [
  {
    name: "ETC",
    code: "ETC",
    symbol: "Ξ",
    magnitude: 18
  }
];

// for id, we use by convention lowercased coin name with _ instead of space.
// for coinType look at https://github.com/satoshilabs/slips/blob/master/slip-0044.md
// for ticker, make sure it works in countervalues api

const cryptocurrenciesArray: CryptoCurrency[] = [
  {
    id: "bitcoin",
    coinType: 0,
    name: "Bitcoin",
    ticker: "BTC",
    scheme: "bitcoin",
    color: "#ffae35",
    units: bitcoinUnits,
    supportsSegwit: true
  },
  {
    id: "ethereum",
    coinType: 60,
    name: "Ethereum",
    ticker: "ETH",
    scheme: "ethereum",
    color: "#0ebdcd",
    units: ethereumUnits
  },
  {
    id: "ripple",
    coinType: 144,
    name: "Ripple",
    ticker: "XRP",
    scheme: "ripple",
    color: "#27a2db",
    units: [
      {
        name: "XRP",
        code: "XRP",
        symbol: "XRP",
        magnitude: 6
      },
      {
        name: "drop",
        code: "drop",
        symbol: "drop",
        magnitude: 0
      }
    ]
  },
  {
    id: "bitcoin_cash",
    coinType: 145,
    name: "Bitcoin Cash",
    ticker: "BCH",
    scheme: "bch",
    color: "#3ca569",
    units: [
      {
        name: "bitcoin cash",
        code: "BCH",
        symbol: "Ƀ",
        magnitude: 8
      },
      {
        name: "mBCH",
        code: "mBCH",
        symbol: "Ƀ",
        magnitude: 5
      },
      {
        name: "bit",
        code: "bit",
        symbol: "Ƀ",
        magnitude: 2
      },
      {
        name: "satoshi",
        code: "satoshi",
        symbol: "Ƀ",
        magnitude: 0
      }
    ]
  },
  {
    id: "litecoin",
    coinType: 2,
    name: "Litecoin",
    ticker: "LTC",
    scheme: "litecoin",
    color: "#cccccc",
    supportsSegwit: true,
    units: [
      {
        name: "litecoin",
        code: "LTC",
        symbol: "Ł",
        magnitude: 8
      }
    ]
  },
  {
    id: "dash",
    coinType: 5,
    name: "Dash",
    ticker: "DASH",
    scheme: "dash",
    color: "#0e76aa",
    units: [
      {
        name: "dash",
        code: "DASH",
        magnitude: 8
      }
    ]
  },
  {
    id: "ethereum_classic",
    coinType: 61,
    name: "Ethereum Classic",
    ticker: "ETC",
    scheme: "ethereumclassic",
    color: "#3ca569",
    units: ethereumUnitsClassic
  },
  {
    id: "qtum",
    coinType: 88,
    name: "Qtum",
    ticker: "QTUM",
    scheme: "qtum",
    color: "#2e9ad0",
    units: [
      {
        name: "qtum",
        code: "QTUM",
        magnitude: 8
      }
    ]
  },
  {
    id: "zcash",
    coinType: 133,
    name: "Zcash",
    ticker: "ZEC",
    scheme: "zcash",
    color: "#3790ca",
    units: [
      {
        name: "zcash",
        code: "ZEC",
        magnitude: 8
      }
    ]
  },
  {
    id: "bitcoin_gold",
    coinType: 156,
    name: "Bitcoin Gold",
    ticker: "BTG",
    scheme: "btg",
    color: "#132c47",
    supportsSegwit: true,
    units: [
      {
        name: "bitcoin gold",
        code: "BTG",
        symbol: "Ƀ",
        magnitude: 8
      },
      {
        name: "mBTG",
        code: "mBTG",
        symbol: "Ƀ",
        magnitude: 5
      },
      {
        name: "bit",
        code: "bit",
        symbol: "Ƀ",
        magnitude: 2
      },
      {
        name: "satoshi",
        code: "satoshi",
        symbol: "Ƀ",
        magnitude: 0
      }
    ]
  },
  {
    id: "stratis",
    coinType: 105,
    name: "Stratis",
    ticker: "STRAT",
    scheme: "stratis",
    color: "#1382c6",
    units: [
      {
        name: "stratis",
        code: "STRAT",
        magnitude: 8
      }
    ]
  },
  {
    id: "dogecoin",
    coinType: 3,
    name: "Dogecoin",
    ticker: "DOGE",
    scheme: "dogecoin",
    color: "#65d196",
    units: [
      {
        name: "dogecoin",
        code: "DOGE",
        symbol: "Ð",
        magnitude: 8
      }
    ]
  },
  {
    id: "hshare",
    coinType: 171,
    name: "Hshare",
    ticker: "HSR",
    scheme: "hshare",
    color: "#56438c",
    units: [
      {
        name: "hshare",
        code: "HSR",
        magnitude: 8
      }
    ]
  },
  {
    id: "komodo",
    coinType: 141,
    name: "Komodo",
    ticker: "KMD",
    scheme: "komodo",
    color: "#326464",
    units: [
      {
        name: "komodo",
        code: "KMD",
        magnitude: 8
      }
    ]
  },
  {
    id: "pivx",
    coinType: 77,
    name: "PivX",
    ticker: "PIVX",
    scheme: "pivx",
    color: "#46385d",
    units: [
      {
        name: "pivx",
        code: "PIVX",
        magnitude: 8
      }
    ]
  },
  {
    id: "zencash",
    coinType: 121,
    name: "ZenCash",
    ticker: "ZEN",
    scheme: "zencash",
    color: "#152f5c",
    units: [
      {
        name: "zencash",
        code: "ZEN",
        magnitude: 8
      }
    ]
  },
  {
    id: "vertcoin",
    coinType: 28,
    name: "Vertcoin",
    ticker: "VTC",
    scheme: "vertcoin",
    color: "#1b5c2e",
    supportsSegwit: true,
    units: [
      {
        name: "vertcoin",
        code: "VTC",
        magnitude: 8
      }
    ]
  },
  {
    id: "peercoin",
    coinType: 6,
    name: "Peercoin",
    ticker: "PPC",
    scheme: "peercoin",
    color: "#3cb054",
    units: [
      {
        name: "peercoin",
        code: "PPC",
        magnitude: 6
      }
    ]
  },
  {
    id: "viacoin",
    coinType: 14,
    name: "Viacoin",
    ticker: "VIA",
    scheme: "viacoin",
    color: "#414141",
    supportsSegwit: true,
    units: [
      {
        name: "viacoin",
        code: "VIA",
        magnitude: 8
      }
    ]
  },
  {
    id: "stealthcoin",
    coinType: 125,
    name: "Stealth",
    ticker: "XST",
    scheme: "stealth",
    color: "#000000",
    units: [
      {
        name: "stealth",
        code: "XST",
        magnitude: 8
      }
    ]
  },
  {
    id: "digibyte",
    coinType: 20,
    name: "Digibyte",
    ticker: "DGB",
    scheme: "digibyte",
    color: "#0066cc",
    units: [
      {
        name: "digibyte",
        code: "DGB",
        magnitude: 8
      }
    ]
  },

  // Testnets
  {
    id: "bitcoin_testnet",
    coinType: 1,
    name: "Bitcoin Testnet",
    ticker: "BTC",
    scheme: "testnet",
    color: "#00ff00",
    units: bitcoinUnits,
    supportsSegwit: true,
    isTestnetFor: "bitcoin"
  },
  {
    id: "ethereum_testnet",
    coinType: 1,
    name: "Ethereum Testnet",
    ticker: "ETH",
    scheme: "ethereum_testnet",
    color: "#00ff00",
    units: ethereumUnits,
    isTestnetFor: "ethereum"
  }
];

const cryptocurrenciesById: { [_: string]: CryptoCurrency } = {};
const cryptocurrenciesByScheme: { [_: string]: CryptoCurrency } = {};
const cryptocurrenciesByTicker: { [_: string]: CryptoCurrency } = {};
const prodCryptoArray = [];
cryptocurrenciesArray.forEach(c => {
  cryptocurrenciesById[c.id] = c;
  cryptocurrenciesByScheme[c.scheme] = c;
  cryptocurrenciesByTicker[c.ticker] = c;
  if (!c.isTestnetFor) {
    prodCryptoArray.push(c);
  }
});

export function listCryptoCurrencies(
  withDevCrypto: boolean = false
): CryptoCurrency[] {
  return withDevCrypto ? cryptocurrenciesArray : prodCryptoArray;
}

export function findCryptoCurrencyByScheme(scheme: string): ?CryptoCurrency {
  return cryptocurrenciesByScheme[scheme];
}

export function findCryptoCurrencyByTicker(ticker: string): ?CryptoCurrency {
  return cryptocurrenciesByTicker[ticker];
}

export function findCryptoCurrencyById(id: string): ?CryptoCurrency {
  return cryptocurrenciesById[id];
}

export const hasCryptoCurrencyId = (id: string): boolean =>
  id in cryptocurrenciesById;

export function getCryptoCurrencyById(id: string): CryptoCurrency {
  const currency = findCryptoCurrencyById(id);
  if (!currency) {
    throw new Error(`currency with id "${id}" not found`);
  }
  return currency;
}
