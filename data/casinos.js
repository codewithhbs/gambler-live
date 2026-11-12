import { AFFILIATE_URL } from "@/lib/affiliate";

// Source: "Online Casino Listings: Website Content Sheet".
// Field order per casino follows the sheet:
// website, operator, established, license, gameTypes, providers, currencies,
// payments, limits, availableIn, welcomeBonus, keyFeatures, support, responsibleGambling.
// Any field the sheet leaves out is omitted here and is NOT rendered on the site.
//
// Extra site fields:
//  - tagline:     short label derived from the sheet data
//  - tags:        drives /casinos/new, /fast-payout, /mobile, /crypto-casinos
//  - countries:   drives /casinos/[country] (codes from data/countries.js)
//  - visitUrl:    outbound CTA (affiliate link where we have one, else official site)
//  - rating / scores: optional — add editorial scores here when available and
//                 the UI will show them automatically.

const raw = [
  {
    slug: "2up",
    name: "2UP",
    tagline: "No-KYC crypto casino",
    visitUrl: AFFILIATE_URL,
    website: "https://2up.io",
    operator: "Uponly NV",
    established: 2024,
    license: "Anjouan, License No. ALSI-042308001-Fll",
    gameTypes: ["Slots", "Originals", "Live Casino", "Sports Betting", "Esports"],
    providers:
      "Evolution, Pragmatic Play, Pragmatic Play Live, NetEnt, Play'n GO, Hacksaw Gaming, Nolimit City, Relax Gaming, Red Tiger, Big Time Gaming, Yggdrasil, PG Soft, Quickspin, Thunderkick, Ezugi",
    currencies:
      "Crypto: BTC, ETH, USDT, USDC, SOL, TRX, BNB, XRP, TON, AVAX, POL, LTC, DOGE, SHIB, PEPE. Fiat: EUR, CNY, JPY, BRL, IDR, MYR, PHP, THB, VND, INR, BDT",
    payments: "Crypto Instantpay, Bank Transfer, E-wallet",
    availableIn:
      "Thailand, Vietnam, Malaysia, Indonesia, Philippines, Cambodia, Japan, South Korea, India, Taiwan, Pakistan, Bangladesh, Georgia, Brazil, Mexico, Canada, Turkey, Greece, Italy, Russia, Finland, Norway, France, Poland, Belgium, Bulgaria, Croatia, Czech Republic, Denmark, Hungary, Ireland, Lithuania, Luxembourg, Malta, Monaco, Netherlands, Romania, Slovakia, Sweden, Switzerland, Nigeria and other regions",
    welcomeBonus:
      "200% first deposit bonus up to $2,000, plus up to 500 free spins. Minimum deposit $20. Wagering requirement 35x.",
    keyFeatures: "No KYC required. Instant deposits and withdrawals. Provably fair games.",
    support: "Live chat, Telegram, email at support@2up.io",
    responsibleGambling: "https://2up.io/en/policy/responsible-gambling",
    tags: ["crypto", "fast-payout"],
    countries: ["india", "canada"],
    image: "/img/2up.png",
  },
  {
    slug: "zizobet",
    name: "Zizobet",
    tagline: "Hybrid fiat & crypto cashier",
    website: "https://zizobet.com/en",
    established: 2025,
    license: "Curacao",
    gameTypes: ["Slots", "Live Casino", "Sports Betting", "Esports"],
    providers:
      "NetEnt, Evolution Gaming, Pragmatic Play, Play'n GO, Microgaming, Nolimit City, Blueprint Gaming, Quickspin, Yggdrasil Gaming, Red Tiger Gaming, Thunderkick, Betsoft Gaming, Big Time Gaming, Playson, Push Gaming, BGaming, Relax Gaming",
    currencies: "USD, EUR, CAD, AUD, BRL, GBP, Bitcoin, Ethereum, Tether (USDT), Litecoin",
    payments:
      "Visa, Mastercard, Skrill, Neteller, Google Pay, Apple Pay, Paysafecard, Neosurf, Jeton, MiFinity, Interac e-Transfer, eCashout, PayOp, SEPA, Bank Transfer, Bitcoin, Ethereum, Tether, Litecoin",
    availableIn:
      "United Kingdom, Ireland, Germany, Austria, Switzerland, France, Belgium, United States, Denmark, Sweden, Norway, Canada, Australia, New Zealand and other European countries",
    keyFeatures:
      "Extensive casino and sports betting catalog. Hybrid cashier supporting both fiat and crypto. No native mobile apps (play through the mobile website).",
    support: "Website live chat, email",
    responsibleGambling: "Underage gambling enforcement and a support intervention model",
    tags: ["new", "crypto", "mobile"],
    countries: ["uk", "canada", "australia"],
    image: "/img/zizobet.jfif",
  },
  {
    slug: "winari",
    name: "Winari",
    tagline: "Casino + prediction markets",
    website: "https://winari.com",
    established: 2026,
    license: "Tobique Gaming Commission, License No. 0000146",
    gameTypes: ["Slots", "Crash Games", "Live Casino", "Poker", "Prediction Markets", "Sports Betting", "Esports"],
    providers:
      "Evolution, Ezugi, NetEnt, Microgaming Live, BetSoft, BGaming, Big Time Gaming, Booming Games, Hacksaw Gaming, Nolimit City, Habanero, Evoplay, Games Global, Playson, Novomatic, Amusnet",
    currencies: "CAD, EUR, USD, USDT",
    payments: {
      deposits:
        "Credit Cards, Interac, Apple Pay, Google Pay, Crypto, Bank Transfer, PayID, Revolut, Paysafecard, Skrill, Neteller, Rapid Transfer, EPS, TWINT, WERO",
      withdrawals: "Credit Cards, Interac, Bank Transfer, Crypto, PayID, Paysafecard, Skrill",
    },
    limits: "Card deposits up to $1,000. No limit on crypto deposits. Overall withdrawal limits of $1,000 to $5,000.",
    availableIn: "Canada, Germany, Australia",
    welcomeBonus: "610% welcome package across the first five deposits, plus 200 free spins",
    keyFeatures: [
      "15-level loyalty programme with cashback of up to 10%, paid out weekly",
      "Prediction markets for wagering on non-sporting world events, a feature few competitors offer",
      "Fast payments: crypto withdrawals processed in seconds to 1.5 hours",
      "Content from 50+ leading game studios across slots, live casino and sportsbook",
      "Recurring Quests and a Wheel of Fortune for extra engagement",
      "Distinctive masquerade-inspired brand design",
    ],
    support: "Email",
    responsibleGambling:
      "Self-exclusion is available and takes effect immediately. It applies across all brands and domains under the same license and cannot be reversed before it expires. During an exclusion, login, deposits and betting are blocked and marketing stops. Reinstatement is only possible by written request after the exclusion ends. If a minor or a self-excluded person gains access, deposits are refunded within 2 business days and the account is blocked.",
    tags: ["new", "crypto", "fast-payout"],
    countries: ["canada", "australia"],
    image: "/img/winari.jpg",
  },
  {
    slug: "voodoo-casino",
    name: "Voodoo Casino",
    tagline: "Slots-focused casino",
    website: "https://www.voodoo.casino",
    established: 2023,
    license: "Tobique Gaming Commission, E-gaming License No. 0000002",
    gameTypes: ["Slots"],
    providers:
      "Evolution, Pragmatic Play, Pragmatic Play Live, NetEnt, Play'n GO, Hacksaw Gaming, Nolimit City, Relax Gaming, Yggdrasil, Push Gaming, Thunderkick, Playson, Betsoft Gaming, Spinomenal, BGaming, Wazdan",
    currencies: "EUR, USD, NOK, CAD, NZD, AUD, Crypto",
    payments:
      "Visa, Mastercard, Maestro, Sofort, CashtoCode, AstroPay, MiFinity, Giropay, Jeton, eZeeWallet, Rapid Transfer, Paysafecard, Interac, Bank Transfer, EPS, Neteller, Neosurf, ecoPayz, PIX, Boleto, Crypto",
    availableIn: "Australia, Germany, Austria, Canada, New Zealand, Switzerland, Norway, Ireland, Denmark, Italy",
    tags: ["crypto"],
    countries: ["australia", "canada"],
    image: "/img/voodoo.png",
  },
  {
    slug: "slotsgem",
    name: "Slotsgem",
    tagline: "45+ currencies accepted",
    website: "https://slotsgem.net",
    established: 2025,
    license: "Anjouan, issued to Neomatrix Ltd (Reg. No. 000047447)",
    providers:
      "Pragmatic Play, Hacksaw, Playtech, Games Global, Play'n GO, Push Gaming, Nolimit City, Playson, Betsoft Gaming, BGaming, Booming Games, Big Time Gaming, ELK, Amusnet",
    currencies: "EUR, USD, AUD, CAD, NZD, PLN, CZK, HUF, CHF, NOK, BRL, INR, JPY, MXN, THB and 30+ more",
    limits:
      "Minimum deposit 10. Maximum withdrawal of EUR 4,000 per day, EUR 16,000 per week and EUR 50,000 per month (or the equivalent in another currency). Higher limits may apply to VIP players. Progressive jackpot wins are paid out in full.",
    availableIn:
      "Sweden, Australia, Canada, Spain, Italy, Greece, Finland, Czech Republic, Poland, Slovenia, Slovakia, Croatia, Austria, Denmark, Switzerland, Hungary, Ireland, Romania, Norway, New Zealand",
    support: "24-hour live chat, email at support@slotsgem.com",
    tags: ["new"],
    countries: ["australia", "canada"],
    image: "/img/Slotsgem.png",
  },
  {
    slug: "lucky-star",
    name: "Lucky Star",
    tagline: "24/7 multilingual support",
    operator: "WUNGroup B.V.",
    established: 2024,
    license: "Curacao, License No. 160576",
    gameTypes: ["Slots", "Live Games", "Sports Betting", "Crash Games"],
    providers:
      "Evolution, Ezugi, Pragmatic Play, NetEnt, Play'n GO, Hacksaw Gaming, Nolimit City, Red Tiger, Big Time Gaming, Playtech, Yggdrasil, Relax Gaming, Quickspin, Thunderkick, Playson, Betsoft, Spribe, Games Global, Habanero, Evoplay, BGaming",
    currencies: "150+ currencies including USD, EUR, GBP, BRL, INR, TRY, THB, IDR, MYR, PHP and BTC",
    payments: "Local payment methods for each country, plus cryptocurrency",
    limits: "Vary by country",
    availableIn:
      "Brazil, India, Kenya, Ivory Coast, Malaysia, Turkey, Thailand, Uzbekistan, Kazakhstan, Azerbaijan, Argentina, Indonesia, Colombia, Cameroon, Philippines, Chile, Bangladesh, South Korea, Peru",
    keyFeatures: "Young brand with 24/7 support in all languages worldwide, including call centers",
    support: "Email, on-site chat, call centers",
    tags: ["crypto"],
    countries: ["india"],
    image: "/img/luckystar.jpg",
  },
  {
    slug: "milkyway",
    name: "MilkyWay",
    tagline: "50+ game providers",
    website: "https://milkyway.casino",
    established: 2023,
    license: "Curacao, License No. OGL/2024/452/0687",
    gameTypes: ["Slots"],
    providers: "50+ game providers",
    currencies: "USD, EUR",
    payments: "Bank Transfer, Crypto, Skrill, Apple Pay, PayPal and others",
    limits: "No deposit limit. Withdrawals up to EUR 50,000.",
    availableIn: "Poland, Canada, Germany, Australia, Finland, Italy",
    support: "Live chat",
    responsibleGambling: "https://milkyway.casino/responsible-gaming",
    tags: ["crypto"],
    countries: ["canada", "australia"],
    image: "/img/milkyway.jpeg",
  },
  {
    slug: "winrolla",
    name: "Winrolla",
    tagline: "300% up to EUR 8,000",
    website: "https://winrolla.com",
    established: 2025,
    license: "Costa Rica",
    gameTypes: ["Slots"],
    providers:
      "Pragmatic Play, Pragmatic Play Live, Evolution, Play'n GO, Hacksaw Gaming, Nolimit City, Microgaming, NetEnt, Playtech, Yggdrasil, Relax Gaming, Big Time Gaming, Quickspin, Thunderkick, Playson, Betsoft, Spribe, Wazdan, BGaming",
    currencies: "CAD, NOK, USD, NZD, EUR, AUD, PLN, CHF, HUF, CZK",
    payments:
      "Visa/Mastercard, Apple Pay, Skrill, Neteller, Trustly, Sofort, Neosurf, SafetyPay, SticPay, EPS, Przelewy24, AstroPay, CartaSi, Bank Transfer, Local Bank Transfer, Flexepin, MiFinity, eZeeWallet, Rapid Transfer, Jeton, CashtoCode, Klarna, Pay4Fun, PicPay, Interac, MuchBetter, Paytm, UPI, Pago Efectivo, Khipu, Bitcoin, Bitcoin Cash, Ethereum, Litecoin, Ripple, Tether, USD Coin",
    limits: "Up to EUR 5,000 per day and EUR 75,000 per month",
    availableIn:
      "Australia, Canada, Switzerland, Czech Republic, Finland, Hungary, Iceland, Italy, Liechtenstein, Luxembourg, Latvia, Norway, New Zealand, Poland, Slovenia, Slovakia",
    welcomeBonus: "300% up to EUR 8,000 plus 300 free spins",
    support: "Live chat, email",
    tags: ["new", "crypto"],
    countries: ["australia", "canada"],
    image: "/img/Winrolla.jpeg",
  },
  {
    slug: "sirbetalot",
    name: "SirBetalot",
    tagline: "Up to 40% cashback",
    website: "https://sirbetalot.com",
    established: 2026,
    license: "Anjouan",
    gameTypes: ["Slots", "Live Casino", "Sports Betting", "Esports", "Casino Originals"],
    providers: "Pragmatic Play, Evolution, Hacksaw Gaming, Nolimit City, Booming Games",
    currencies: "Crypto: USDT, BTC, DOGE, ETH, LTC, SOL, USDC. Fiat: AUD, BRL, CAD, EUR, IDR, INR, USD",
    payments: "Cryptocurrency and fiat options",
    availableIn: "Germany, Austria, Switzerland, Netherlands, Canada, Norway, Philippines",
    welcomeBonus: "100% welcome bonus up to EUR/USD 1,000",
    keyFeatures: [
      "Medieval kingdom and royal-themed casino design",
      "Up to 40% cashback",
      "8-tier loyalty system with Crowns reward currency",
      "Twice-daily rewards",
      "Monthly tournaments and leaderboards",
    ],
    support: "24/7 live chat on the website, Help Centre / FAQ. Support language: English.",
    responsibleGambling:
      "Minimum age 18+. Self-exclusion, session limits, reality checks and cool-off / time-out are listed as available. Loss limits and wager limits are not available. The casino does not appear on an external self-exclusion register.",
    tags: ["new", "crypto"],
    countries: ["canada"],
    image: "/img/sirbetalot.png",
  },
  {
    slug: "spindragons",
    name: "Spindragons",
    tagline: "VIP programme & fast payouts",
    website: "https://spindragons.com",
    operator: "Round Square Limited",
    established: 2025,
    license: "Anjouan, License No. ALSI-202410052-FI2",
    gameTypes: ["Slots", "Table and Card Games", "Live Casino", "Crash Games", "Bingo and Keno", "Lottery", "Scratch Cards"],
    providers:
      "Pragmatic Play, Pragmatic Play Live, Evolution, Play'n GO, Hacksaw Gaming, Nolimit City, Playtech, Yggdrasil, Relax Gaming, Playson, Quickspin, Thunderkick, Microgaming, Wazdan, NetEnt, Novomatic, Big Time Gaming, BGaming",
    currencies: "EUR, CHF, CAD, NOK, AUD, NZD, PLN, HUF",
    payments:
      "Visa, Mastercard, Apple Pay, Google Pay, Revolut, Bank Transfer, Interac, Skrill, Neteller, Paysafecard, MiFinity, Bitcoin (BTC), Tether (USDT), Ethereum (ETH), TRON (TRX)",
    limits: "EUR 2,000 per day, EUR 10,000 per week, EUR 30,000 per month",
    availableIn:
      "Germany, Greece, Italy, Sweden, Switzerland, Poland, Portugal, Netherlands, Austria, Ireland, Finland, Norway",
    keyFeatures: "VIP programme, fast payouts",
    support: "Live chat, email at support@spindragons.com",
    responsibleGambling: "Self-exclusion and account closure",
    tags: ["new", "crypto", "fast-payout"],
    countries: [],
    image: "/img/spindragons.jpeg",
  },
  {
    slug: "bangawin",
    name: "Bangawin",
    tagline: "Localized site versions",
    website: "https://bangawin.com",
    operator: "Round Square Limited",
    established: 2026,
    license: "Anjouan, License No. ALSI-202410052-FI2",
    gameTypes: ["Slots", "Originals", "Live Casino", "Sports Betting", "Esports"],
    providers:
      "Pragmatic Play, Pragmatic Play Live, Evolution, Play'n GO, Hacksaw Gaming, Nolimit City, Playtech, Yggdrasil, Relax Gaming, Playson, Quickspin, Thunderkick, Microgaming, Wazdan, NetEnt, Novomatic, Big Time Gaming, BGaming",
    currencies: "EUR, CHF, CAD, NOK, AUD, NZD, PLN, HUF",
    payments:
      "Visa, Mastercard, Apple Pay, Google Pay, Revolut, Bank Transfer, Interac, Skrill, Neteller, Paysafecard, MiFinity, Bitcoin (BTC), Tether (USDT), Ethereum (ETH), TRON (TRX)",
    limits: "EUR 2,000 per day, EUR 10,000 per week, EUR 30,000 per month",
    availableIn:
      "Germany, Greece, Italy, Sweden, Switzerland, Poland, Portugal, Netherlands, Austria, Ireland, Finland, Norway",
    keyFeatures: "VIP programme, fast payouts, localized site versions",
    support: "Live chat, email at support@bangawin.com",
    responsibleGambling: "Self-exclusion and account closure",
    tags: ["new", "crypto", "fast-payout"],
    countries: [],
    image: "/img/bangawin.png",
  },
  {
    slug: "dicepalace",
    name: "DicePalace",
    tagline: "Tournaments & exclusive bonuses",
    website: "https://dicepalace.com",
    operator: "MBM Consulting Limited",
    established: 2026,
    license: "Costa Rica",
    gameTypes: ["Live Games", "Slots", "Table Games", "Bonus Buys", "Instant Games", "Jackpots", "Megaways", "Exclusive Games"],
    providers:
      "Pragmatic Play, NetEnt, Hacksaw Gaming, Yggdrasil, Quickspin, Red Tiger, Big Time Gaming, Playtech, Playson, Betsoft, Endorphina, Evoplay, BGaming, Ezugi, EGT, Novomatic, Amusnet",
    currencies: "EUR, USD, NOK, HUF, PLN, NZD, CAD, BRL, CZK, AUD, CLP, PEN, CHF",
    payments: "Credit Cards, Bank Transfer, Crypto, Skrill, Neteller, Paysafecard, Interac",
    limits:
      "Based on VIP tier, from EUR 500 per day / EUR 5,000 per month (Bronze) up to EUR 2,000 per day / EUR 20,000 per month (Diamond)",
    availableIn:
      "Netherlands, Finland, Norway, Australia, Czech Republic, Belgium, Canada, Austria, Switzerland, Hungary, Italy, Poland, New Zealand, Slovenia, Slovakia, Croatia",
    keyFeatures:
      "Fast payments, modern and user-friendly design, wide game selection, 24/7 support, tournaments and exclusive bonuses",
    support:
      "24/7 live chat, email at support@dicepalace.com. Languages: English, Portuguese, German, Spanish, Finnish, French, Hungarian, Norwegian, Polish, Italian, Czech, Arabic, Slovak, Slovenian, Croatian, Dutch, Latvian",
    responsibleGambling: "Self-exclusion and account blocking for gambling addiction",
    tags: ["new", "crypto", "fast-payout"],
    countries: ["australia", "canada"],
    image: "/img/DicePalace.png",
  },
  {
    slug: "spinbetter",
    name: "SpinBetter",
    tagline: "Average 10-minute payouts",
    visitUrl: "https://redirspinner.com/3fVM?p=%2Fregistration%2F",
    website: "https://spinbetter.games",
    operator: "Sprut Group Limitada (3-102-955890 Limitada)",
    established: 2019,
    license: "Anjouan Offshore Authority, License No. ALSI-202607036-FI2",
    gameTypes: ["Slots", "Sports Betting with Live Betting", "Esports", "Crash Games", "Live Casino"],
    providers:
      "Over 14,000 slots from 150+ providers, including Pragmatic Play, Play'n GO, NetEnt, Hacksaw Gaming, Red Tiger, Big Time Gaming, Nolimit City, Playtech, Quickspin, Thunderkick, Playson, Spribe, BGaming, Evoplay. Live casino: Evolution, Pragmatic Play Live, Playtech Live, Ezugi, XPG, Lucky Streak, Amusnet",
    currencies:
      "30 currencies including USD, EUR, USDT, AED, ARS, AUD, BDT, BRL, CAD, CHF, CZK, DKK, EGP, HUF, INR, ISK, KZT, MAD, MDL, MXN, NOK, NZD, PKR, PLN, RON, RUB, SAR, SEK, TZS, UZS",
    payments: "Cards, Bank Transfers (SEPA), E-wallets, Agents, Crypto",
    limits: "Minimum deposit 1 USD/EUR. Minimum withdrawal 1.5 USD/EUR. Maximum withdrawal EUR 1,500 per day.",
    availableIn:
      "Hungary, Poland, Czech Republic, Germany, Austria, Spain, Switzerland, Belgium, Italy, Sweden, Denmark, Estonia, Latvia, Bulgaria, Slovakia, Romania, Portugal",
    keyFeatures: "Crypto-friendly. Fast payouts (average 10 minutes). One-click registration. Web, iOS and Android apps.",
    support:
      "24/7 live chat in 10 languages (English, Russian, Turkish, Polish, German, Uzbek, Arabic, Portuguese, Bengali, Hindi), 24/7 phone callback, email at support@spinbetter.com",
    responsibleGambling:
      "18+ only. Self-exclusion on request via block@spinbetter.com. Complaints via claims@spinbetter.com.",
    tags: ["crypto", "fast-payout", "mobile"],
    countries: [],
    image: "/img/spinbetter.jpeg",
  },
  {
    slug: "neospin",
    name: "NeoSpin",
    tagline: "Four-deposit welcome package",
    website: "https://neospin.com",
    established: 2022,
    license: "Curacao, License No. ALSI-202509073-FI2",
    gameTypes: ["Slots", "Sports Betting"],
    providers:
      "Evolution, Ezugi, Pragmatic Play, NetEnt, Play'n GO, Nolimit City, Red Tiger, Playtech, Yggdrasil, Relax Gaming, Push Gaming, Quickspin, Thunderkick, Betsoft Gaming, Blueprint, Games Global, ELK, Habanero, Spinomenal, Evoplay, BGaming",
    currencies: "AUD, EUR, USD, NZD, CAD, NOK, BTC, ETH, USDT, LTC, DOGE, TRX, XRP, ADA, BCH, BNB",
    payments:
      "Visa, Mastercard, Online Banking, Bank Transfer, ecoPayz, Interac, Flexepin, Jeton, MiFinity, MuchBetter, Neosurf, Neteller, Skrill, CoinsPaid",
    limits: [
      "Minimum deposit: AUD 30 / CAD 30 / NZD 30 / USD 20 / EUR 20 / NOK 200 / BTC 0.0008 / BCH 0.13 / DOGE 250 / ETH 0.013 / LTC 0.30 / XRP 33.33 / USDT 20",
      "Minimum withdrawal: AUD 45 / CAD 45 / NZD 45 / EUR 30 / USD 30 / BTC 0.0012 / BCH 0.2 / DOGE 375 / ETH 0.03 / LTC 0.46 / XRP 50 / USDT 30",
    ],
    availableIn: "Australia, Portugal, New Zealand, Austria, Switzerland, Germany, Canada",
    welcomeBonus: [
      "1st deposit: 100% up to EUR 1,000 + 100 free spins",
      "1st deposit of EUR 1,000+ (High Roller): 125% up to EUR 3,000 + 10% cashback",
      "2nd deposit: 100% up to EUR 1,500 + 25 free spins",
      "3rd deposit: 75% up to EUR 2,000 + 75 free spins",
      "4th deposit: 25% up to EUR 2,500 + 100 free spins",
    ],
    support: "Email at support@neospin.com, or through the website",
    responsibleGambling: "https://www.neospin.com/responsible-gaming-km",
    tags: ["crypto"],
    countries: ["australia", "canada"],
    image: "/img/neospin.png",
  },
  {
    slug: "coldbet",
    name: "Coldbet",
    tagline: "Casino + large sportsbook",
    website: "https://coldbet.com",
    established: 2025,
    license: "Curacao, License No. OGL/2024/296/1093",
    gameTypes: ["Slots", "Originals", "Live Casino", "Sports Betting", "Esports"],
    games: [
      "Total number of games: Over 500",
      "Total number of live games: Over 500",
      "Total number of slots: Over 14,000",
    ],
    providers:
      "Evolution, Pragmatic Play, NetEnt, Play'n GO, Nolimit City, Red Tiger, Big Time Gaming, Playtech, Yggdrasil, Playson, Betsoft Gaming, Habanero, Aviatrix",
    providerCount: ["Slots: 147 providers", "Live: 20 providers", "Other: 19 providers"],
    currencies: "100+ currencies including USD, EUR, PLN, UZS, TRY, INR, BRL, GBP, CHF, NOK, SEK",
    payments:
      "Visa/Mastercard, Apple Pay, Google Pay, Skrill, Neteller, Blik, Binance Pay, UPI, Paytm, PhonePe, bKash, Nagad, Payme, Click, UZCARD, HUMO, Sberpay, Cryptocurrency and other regional methods",
    limits:
      "Minimum withdrawal EUR 3. No daily or monthly withdrawal limits. Per-transaction limits depend on the payment system.",
    availableIn:
      "Bangladesh (BD), Benin (BJ), Burkina Faso (BF), Cameroon (CM), Côte d’Ivoire (CI), Egypt (EG), India (IN), Morocco (MA), Poland (PL), Russia (RU), Senegal (SN), Sri Lanka (LK), Tanzania (TZ), Togo (TG), Uzbekistan (UZ), Portugal (PT) and DACH (Germany, Austria, Switzerland)",
    welcomeBonus: "Casino Welcome Package up to €1,500 + 150 Free Spins (FS)",
    keyFeatures: [
      "Thousands of slots, table games, live dealer games and virtual sports",
      "Large sportsbook with diverse markets and live betting",
      "Crypto-friendly",
      "Fast registration, including one-click sign-up",
      "Welcome package, free spins, cashback and ongoing promotions",
      "Mobile-optimized website and apps",
    ],
    support:
      "Email by language: support-en@cold.bet (English), support-ru@cold.bet (Russian), support-uz@cold.bet (Uzbek), support-pl@cold.bet (Polish), support-fr@cold.bet (French). Complaints and feedback: complaints@cold.bet. Blocked account queries: block@cold.bet",
    tags: ["new", "crypto", "mobile"],
    countries: ["india"],
    image: "/img/coldbet.jfif",
  },
  {
    slug: "hugo-casino",
    name: "Hugo Casino",
    tagline: "24/7 live chat support",
    website: "https://hugocasino.com",
    established: 2023,
    license: "Curacao, License No. OGL/2024/589/0556",
    gameTypes: ["Slots"],
    providers:
      "Evolution, Ezugi, Pragmatic Play, NetEnt, Play'n GO, Nolimit City, Red Tiger, Big Time Gaming, Playtech, Yggdrasil, Relax Gaming, Push Gaming, Quickspin, Thunderkick, Playson, Blueprint, Spribe, Endorphina, Habanero, Spinomenal, Evoplay, BGaming, ELK, Wazdan",
    currencies: "EUR, CAD, NOK, PLN, NZD, AUD, Bitcoin, Tether, Ethereum, Litecoin, Dogecoin",
    payments:
      "Visa/Mastercard, Google Pay, Apple Pay, Pay via Bank, Sparkasse, Deutsche Bank, Commerzbank, Raiffeisenbanken, MiFinity, CASHlib, Binance Pay, Paysafecard, Rapid Transfer, Skrill, Neteller, Revolut, Sofort. Other methods depend on the country.",
    limits:
      "Minimum deposit EUR/USD 10. Minimum withdrawal EUR/USD 20. Maximum withdrawal EUR/USD 500 per day and EUR/USD 15,000 per month.",
    availableIn:
      "Canada, Estonia, Austria, Switzerland, Sweden, Norway, Ireland, Denmark, Germany, Spain, Italy, Czech Republic, Slovenia, New Zealand, Hungary, Australia, Finland, Poland, Greece, Portugal",
    keyFeatures: "Fast payouts, responsible gambling friendly, 24/7 live chat support",
    support: "24/7 live chat",
    responsibleGambling: "Self-exclusion, account closure (with the option of a 1, 3 or 7 day break), reality checks",
    tags: ["crypto", "fast-payout"],
    countries: ["canada", "australia"],
    image: "/img/hugo.jfif",
  },
  {
    slug: "cosmobet",
    name: "Cosmobet",
    tagline: "Up to 400% + 1,000 free spins",
    website: "https://cosmobet.com/en",
    established: 2024,
    license: "Curacao",
    gameTypes: ["Slots", "Originals", "Live Casino", "Sports Betting", "Esports"],
    providers:
      "NetEnt, Evolution Gaming, Pragmatic Play, Play'n GO, Microgaming, Nolimit City, Blueprint Gaming, Quickspin, Yggdrasil Gaming, Red Tiger Gaming, Thunderkick, Betsoft Gaming, Big Time Gaming, Playson, Push Gaming, BGaming, Relax Gaming",
    currencies:
      "USD, EUR, CAD, BRL, AUD, AZN, GBP, Bitcoin, Bitcoin Cash, Ethereum, Tether (USDT), Litecoin, Ripple, Monero, Dash",
    payments: {
      deposits:
        "Visa, Mastercard, Discover, Skrill, Neteller, AstroPay, Google Pay, Apple Pay, Paysafecard, ecoPayz, Neosurf, Interac e-Transfer, eCashout, Zelle, MiFinity, PayOp, SEPA, Sofort, Swift, Bank Transfer, Bitcoin, Bitcoin Cash, Dash, Monero, Ethereum, Ripple, Tether, Litecoin",
      withdrawals:
        "Mastercard, Skrill, Neteller, Paysafecard, SEPA, Swift, Bitcoin, Ethereum, Tether, Bitcoin Cash, Litecoin, Dash, Ripple, Monero",
    },
    limits: "Deposits up to USD 50,000. Withdrawals up to EUR 7,500 per week and EUR 15,000 per month.",
    availableIn: "All countries permitted under the Curacao license",
    welcomeBonus: "Up to 400% bonus plus 1,000 free spins",
    keyFeatures: "Fast payments, top game providers, live chat, regular promotions",
    support: "Live chat, email at support@cosmobet.com",
    tags: ["crypto", "fast-payout"],
    countries: [],
    image: "/img/cosmobet.png",
  },
];

// Short licence label for cards, e.g. "Anjouan", "Curacao", "Tobique Gaming Commission".
function licenseShort(license) {
  if (!license) return undefined;
  return license.split(",")[0].trim();
}

function firstLine(value) {
  if (!value) return undefined;
  return Array.isArray(value) ? value[0] : value;
}

// Factual one-paragraph summary built only from sheet fields (used for meta
// descriptions and the intro paragraph on the review page).
function buildSummary(c) {
  const parts = [`${c.name} is an online casino`];
  if (c.established) parts.push(` established in ${c.established}`);
  if (c.license) parts.push(`, holding a ${licenseShort(c.license)} license`);
  let s = parts.join("") + ".";
  if (c.gameTypes?.length) s += ` Games include ${c.gameTypes.join(", ").toLowerCase()}.`;
  const bonus = firstLine(c.welcomeBonus);
  if (bonus) s += ` Welcome offer: ${bonus.replace(/\.$/, "")}.`;
  return s;
}

export const casinos = raw.map((c, i) => ({
  ...c,
  position: i + 1,
  licenseShort: licenseShort(c.license),
  bonusHeadline: firstLine(c.welcomeBonus),
  summary: buildSummary(c),
  visitUrl: c.visitUrl || c.website || null,
}));

export function getCasinoBySlug(slug) {
  return casinos.find((c) => c.slug === slug);
}

export function getCasinosByTag(tag) {
  return casinos.filter((c) => c.tags.includes(tag));
}

export function getCasinosByCountry(country) {
  return casinos.filter((c) => c.countries.includes(country));
}
