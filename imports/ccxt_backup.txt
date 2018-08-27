//Ccxt implementation
const ccxt = require('ccxt');

(async function main () {
    // Exchange Instantiation
    const exchange = new ccxt.binance ({
        apiKey: 'PtDunO2A9dmPTdBRacmztqMLm23s5Z3Z5quTUuHGxKEEbPlCRu2bPetvfpY5HNox',
        secret: 'lnDmDxAFcWc5MPXI0Jez6VLlFCrHMysMbObacWUoqhn2bLHOlhKwDRDczWvMZatq',
        'enableRateLimit': true,
    });

    //Pre-loading markets
    let markets = await exchange.loadMarkets ();

    //Ticker data for a single symbol
    let data = await exchange.fetchTicker('ETH/BTC');
    console.log(data)

    //CandleStick Bar
    /*const index = 4 // [ timestamp, open, high, low, close, volume ]
    const ohlcv = await new ccxt.binance ().fetchOHLCV ('ETH/BTC', '15m')
    const lastPrice = ohlcv[ohlcv.length - 1][index] // closing price
    const bitcoinRate = ('ETH = BTC ' + lastPrice).green
    log ("\nLast price (Binance):", bitcoinRate, "\n")
    process.exit ()*/
}) ();