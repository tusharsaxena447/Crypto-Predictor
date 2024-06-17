

const Navbar = () => {
//   const cryptoCodes = {
//     "BTC": "Bitcoin",
//     "ETH": "Ethereum",
//     "BNB": "Binance Coin",
//     "XRP": "Ripple",
//     "USDT": "Tether",
//     "ADA": "Cardano",
//     "SOL": "Solana",
//     "DOGE": "Dogecoin",
//     "DOT": "Polkadot",
//     "MATIC": "Polygon",
//     "AVAX": "Avalanche",
//     "LTC": "Litecoin",
//     "LINK": "Chainlink",
//     "BCH": "Bitcoin Cash",
//     "XLM": "Stellar",
//     "UNI": "Uniswap",
//     "ATOM": "Cosmos",
//     "ALGO": "Algorand",
//     "ETC": "Ethereum Classic",
//     "FIL": "Filecoin",
//     "VET": "VeChain",
//     "ICP": "Internet Computer",
//     "TRX": "TRON",
//     "FTT": "FTX Token",
//     "THETA": "Theta",
//     "XTZ": "Tezos",
//     "AAVE": "Aave",
//     "EOS": "EOS.IO",
//     "KSM": "Kusama",
//     "MKR": "Maker",
//     "NEO": "NEO",
//     "CAKE": "PancakeSwap",
//     "ZEC": "Zcash",
//     "GRT": "The Graph",
//     "MANA": "Decentraland",
//     "ENJ": "Enjin Coin",
//     "SUSHI": "SushiSwap",
//     "SNX": "Synthetix",
//     "YFI": "Yearn.finance",
//     "HNT": "Helium",
//     "FTM": "Fantom",
//     "ONE": "Harmony",
//     "CHZ": "Chiliz",
//     "STX": "Stacks",
//     "RUNE": "THORChain",
//     "BAT": "Basic Attention Token",
//     "CEL": "Celsius",
//     "ZEN": "Horizen",
//     "DCR": "Decred",
//     "ONT": "Ontology",
//     "ZIL": "Zilliqa"
// };

// Example usage
// console.log(cryptoCodes["BTC"]); // Output: Bitcoin
// console.log(cryptoCodes["ETH"]); // Output: Ethereum

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className=" flex flex-wrap items-center justify-between  p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src= "https://play-lh.googleusercontent.com/vfq-MIn7Z5talHbpfuAULiwOexc53SkmAesLNkq0FPC1AR-fRFIByR-g6yc0TUdRFQ=w240-h480-rw" className="h-10 rounded-full" alt="Flowbite Logo" />
          <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white">Crypto Buddy</span>
        </a>
        <div className="flex md:order-2">
          <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
          </div>
          <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Table</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 active:text-gray-900">Chart</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 active:text-gray-900">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
