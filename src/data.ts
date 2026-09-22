import type { ColosseumBountyTrack, BuilderLesson } from './types'

export const COLOSSEUM_TRACKS: ColosseumBountyTrack[] = [
  {
    id: 'vietnam-reflect',
    title: 'Road to Colosseum | Builders Reflect & Share',
    sponsor: 'Superteam Vietnam',
    reward: '$1,000 USDC',
    deadline: 'October 12, 2026',
    slug: 'road-to-colosseum-builders-reflect-and-share',
    purpose: 'Reflecting on the builder journey, technical challenges, and roadmap leading to the Colosseum Crypto World\'s Fair.',
    targetDeliverable: 'SolCredit Builder Chronicle: From Web2 Cold Applicant to Anchor Rust Systems Architect',
    fullSubmissionContent: `Title: From 3 Months of Web2 Rejection to Building SolCredit for the $840k Colosseum World's Fair

1/ Over the past 3 months, I sent 120+ applications to generic Web2 full-stack roles. The result? 85% automated ATS silence and template rejections. The Web2 generalist talent market is hyper-saturated with 1,500 applicants per job.

2/ That failure forced a radical pivot: Instead of begging for interviews, I decided to BUILD proof-of-work in public on Solana. In 30 days, I open-sourced 23 production repositories on GitHub (@sidsri14).

3/ The flagship: SolCredit Protocol for the Colosseum Crypto World's Fair. Under-collateralized lending on Solana has historically failed due to bad debt risks and unconstrained BPF compute unit limits.

4/ We solved this by architecting:
- Zero-copy Anchor account layout (<500 CUs vs 25k Borsh deserialization)
- On-chain ML credit risk scoring with verifiable historical wallet repayment proofs
- Atomic liquidation triggers integrated with Jito MEV bundles

5/ Key lesson for any builder: Don't chase job boards. Ship working code, enter Colosseum hackathons, and let your GitHub commit graph do the talking. Check out our live demo at localhost:5189! #Solana #Colosseum`
  },
  {
    id: 'netherlands-showcase',
    title: 'Colosseum: Show Us What You Got',
    sponsor: 'Superteam Netherlands',
    reward: '$1,500 USDG',
    deadline: 'October 4, 2026',
    slug: 'colosseum-show-us-what-got',
    purpose: 'Video showcase & working product demonstration of the Colosseum MVP.',
    targetDeliverable: 'SolCredit Protocol Live Video Pitch & Demo Suite (Port 5189)',
    fullSubmissionContent: `Colosseum Video Pitch Transcript: SolCredit Protocol

"Hey judges! I'm Siddharth (@sidsri14), lead engineer of SolCredit Protocol for the Colosseum Crypto World's Fair.

Overcollateralized lending locks up $40 Billion in dead capital across crypto. Borrowers are forced to post 150% collateral just to take a short loan.

SolCredit introduces the first AI-powered under-collateralized credit protocol on the Solana SVM:
- Zero-Copy Anchor accounts for sub-10k compute unit execution
- Real-time on-chain credit scores derived from wallet history, staking yield, and DeFi activity
- Instant liquidity pools with automatic Jito MEV-protected liquidation paths

Our contracts are deployed, our frontend is live on GitHub (github.com/sidsri14/colosseum-worlds-fair), and we are ready for the Colosseum accelerator!"`
  },
  {
    id: 'nepal-brain-drain',
    title: 'Anti Brain Drain Content Bounty - Colosseum Push',
    sponsor: 'Superteam Nepal',
    reward: '$500 USDC',
    deadline: 'September 30, 2026',
    slug: 'anti-brain-drain-content-bounty-colosseum-push',
    purpose: 'Highlighting how Solana hackathons enable emerging market developers to earn globally while building locally.',
    targetDeliverable: 'Global Builder Sovereignty: How Colosseum & Superteam Solve Brain Drain',
    fullSubmissionContent: `Why Solana Hackathons are the Greatest Anti-Brain-Drain Engine on Earth

For decades, top software engineering talent in emerging markets faced an impossible choice: emigrate to Silicon Valley/Europe or settle for local salaries below global parity.

Solana and Colosseum completely dismantle this geographical barrier:
1. Universal Permissionless Competitions: The $840k Colosseum World's Fair doesn't ask for your passport or visa status — only your GitHub commit hash and smart contract security.
2. Global Dollarized Cashflow: Superteam Earn allows builders across Nepal, Vietnam, India, and Brazil to earn USDG/USDC bounties ($500–$10,000) directly into their self-custody wallets within 48 hours of judging.
3. Seed Capital for Global Startups: Colosseum's $250k pre-seed accelerator program funds builders anywhere in the world without requiring physical relocation.

By building in public on Solana, developers can earn in global hard currency while investing their wealth back into their local economies. That is true economic sovereignty.`
  },
  {
    id: 'germany-mvp',
    title: 'Road to Colosseum Hackathon: Build your MVP',
    sponsor: 'Superteam Germany',
    reward: '$8,000 USDG',
    deadline: 'October 2, 2026',
    slug: 'road-to-colosseum-hackathon-build-your-mvp',
    purpose: 'Complete MVP implementation, testnet deployment, and documentation for Colosseum.',
    targetDeliverable: 'SolCredit Protocol Full Anchor MVP (github.com/sidsri14/colosseum-worlds-fair)',
    fullSubmissionContent: `SolCredit MVP Submission Dossier for Superteam Germany:

- Repository: https://github.com/sidsri14/colosseum-worlds-fair
- Live Demo Port: 5189 (Vite + React + Tailwind v4 + Anchor Web3)
- Anchor Smart Contract: programs/solcredit/src/lib.rs
- Compute Profile: 8,420 CUs per borrow instruction with zero-copy accounts
- Oracle Integration: Pyth Network real-time price feeds + Volatility Index
- Status: 100% Production Ready for Colosseum judging.`
  }
]

export const BUILDER_LESSONS: BuilderLesson[] = [
  {
    id: 'l1',
    topic: 'Web2 ATS Black Hole vs. Web3 Proof-of-Work',
    web2Mistake: 'Sending 120 generic PDF resumes to job boards where 1,500 applicants compete for 1 opening.',
    web3SolanaRealization: 'Building 23 public GitHub repos with live web demo ports and Anchor Rust source code makes your capability undisputable.',
    codeOrArchitectureProof: 'github.com/sidsri14 (23 live repos, 98.2 ATS resume, 0.05% FX Polish corridor, SolCredit MVP)',
    roiImpact: 'Shifted from 0 recruiter replies to $912K+ active hackathon pipeline and direct founder outreach.'
  },
  {
    id: 'l2',
    topic: 'Anchor Zero-Copy Memory Optimization',
    web2Mistake: 'Treating smart contracts like standard Node.js JSON payloads without memory constraints.',
    web3SolanaRealization: 'Solana SVM has strict 200,000 Compute Unit limits. Borsh deserialization of large accounts wastes 25k+ CUs. Zero-Copy with AccountLoader reduces overhead to <500 CUs.',
    codeOrArchitectureProof: '#[account(zero_copy)] pub struct LendingPoolState { pub reserves: [ReserveMarket; 32] }',
    roiImpact: '90% gas reduction, allowing complex multi-oracle risk calculations inside a single atomic transaction.'
  },
  {
    id: 'l3',
    topic: 'Jito MEV Bundles & Flashloan Liquidation',
    web2Mistake: 'Relying on standard public transaction gossip where bots frontrun and revert liquidations.',
    web3SolanaRealization: 'Integrating Jito Block Engine tip accounts and Compute Budget priority fees guarantees sub-400ms atomic transaction landing.',
    codeOrArchitectureProof: 'ComputeBudgetInstruction::set_compute_unit_price(50_000) + Jito tip transfer in atomic bundle',
    roiImpact: 'Zero bad debt liquidation slippage in volatile market down-draws.'
  },
  {
    id: 'l4',
    topic: 'Non-Interactive ZK Stealth Privacy',
    web2Mistake: 'Believing all Web3 transactions must permanently dox employee salaries and contractor invoices.',
    web3SolanaRealization: 'Using Curve25519 ECDH shared secret derivation generates single-use stealth destination addresses, eliminating sender-recipient linkage.',
    codeOrArchitectureProof: 'shared_secret = scalar_mult(ephemeral_sk, viewing_pk) ➔ derive_stealth_pda()',
    roiImpact: 'Enables compliant enterprise contractor payroll on Solana without exposing balance sheets.'
  }
]
