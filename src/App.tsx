import { useState, useEffect, useRef } from 'react'
import { 
  Trophy, 
  BookOpen, 
  ExternalLink, 
  Copy, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Lightbulb, 
  CheckCircle2, 
  ArrowUpRight,
  Calculator,
  Code2
} from 'lucide-react'

import confetti from 'canvas-confetti'
import { COLOSSEUM_TRACKS, BUILDER_LESSONS } from './data'
import type { ColosseumBountyTrack } from './types'

export default function App() {
  const [activeTab, setActiveTab] = useState<'bounty-tracks' | 'builder-lessons' | 'pitch-teleprompter' | 'roi-calculator'>('bounty-tracks')
  const [selectedTrack, setSelectedTrack] = useState<ColosseumBountyTrack>(COLOSSEUM_TRACKS[0])
  const [copiedId, setCopiedId] = useState<string | null>(null)
  
  // Teleprompter state
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [scrollSpeed, setScrollSpeed] = useState<number>(2)
  const teleprompterRef = useRef<HTMLDivElement>(null)

  // ROI Calculator state
  const [winProbability, setWinProbability] = useState<number>(35)
  const totalPipeline = 912800
  const expectedValue = Math.round((totalPipeline * winProbability) / 100)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isPlaying) {
      interval = setInterval(() => {
        if (teleprompterRef.current) {
          teleprompterRef.current.scrollTop += scrollSpeed
        }
      }, 50)
    }
    return () => clearInterval(interval)
  }, [isPlaying, scrollSpeed])

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } })
    setTimeout(() => setCopiedId(null), 2500)
  }

  return (
    <div className="min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b border-white/10 glass-panel sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl brand-gradient flex items-center justify-center font-black text-2xl shadow-lg shadow-amber-500/30">
              🏛️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-xl tracking-tight text-white flex items-center gap-1.5">
                  Colosseum Builder Chronicle & Pitch Suite
                </h1>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  $11,000 USDG Bounties + $840K Main Fair
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Multi-Regional Colosseum Campaign Hub (Vietnam, Netherlands, Nepal, Germany)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sidsri14/colosseum-builders-reflect"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-card hover:bg-white/10 text-xs font-semibold text-white transition"
            >
              <Code2 className="w-4 h-4 text-amber-400" />
              <span>GitHub Repo</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="http://localhost:5195"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl brand-gradient hover:opacity-90 transition text-xs font-bold text-white shadow-lg shadow-amber-500/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Career Command Center</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-8">
        {/* Hero Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-4">
              <Trophy className="w-3.5 h-3.5" />
              <span>Road to Colosseum Multi-Track Builder Campaign</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
              From Web2 Rejection to <span className="text-gradient">Colosseum Flagship Protocol</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              Consolidating submissions for Vietnam's Builder Reflection, Netherlands' Video Showcase, Nepal's Anti-Brain Drain, and Germany's MVP tracks into a single production command center.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-black text-amber-400">$11,000</div>
                <div className="text-xs text-slate-400">Superteam Bounties</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-black text-emerald-400">$840,000</div>
                <div className="text-xs text-slate-400">Colosseum Main Pool</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-black text-sky-400">24 Repos</div>
                <div className="text-xs text-slate-400">100% Live & Verified</div>
              </div>
              <div className="glass-card p-3.5 rounded-xl text-center">
                <div className="text-2xl font-black text-purple-400">Port 5189</div>
                <div className="text-xs text-slate-400">SolCredit Live MVP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('bounty-tracks')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'bounty-tracks'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>4 Colosseum Bounties ($11K)</span>
          </button>

          <button
            onClick={() => setActiveTab('builder-lessons')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'builder-lessons'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Builder Reflection Lessons</span>
          </button>

          <button
            onClick={() => setActiveTab('pitch-teleprompter')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'pitch-teleprompter'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>Video Pitch Studio</span>
          </button>

          <button
            onClick={() => setActiveTab('roi-calculator')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition whitespace-nowrap ${
              activeTab === 'roi-calculator'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Expected Value / ROI Matrix</span>
          </button>
        </div>

        {/* TAB 1: 4 Colosseum Bounties */}
        {activeTab === 'bounty-tracks' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Track List */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Colosseum Bounties</h3>
              {COLOSSEUM_TRACKS.map((track) => (
                <div
                  key={track.id}
                  onClick={() => setSelectedTrack(track)}
                  className={`p-5 rounded-2xl cursor-pointer transition border ${
                    selectedTrack.id === track.id
                      ? 'bg-white/10 border-amber-500 shadow-lg shadow-amber-500/10'
                      : 'glass-panel border-white/5 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-slate-400 font-semibold">{track.sponsor}</span>
                    <span className="text-xs font-black text-amber-400 font-mono">{track.reward}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm mb-1">{track.title}</h4>
                  <div className="text-[11px] text-slate-500">Deadline: {track.deadline}</div>
                </div>
              ))}
            </div>

            {/* Track Detail & Submission Dossier */}
            <div className="lg:col-span-2 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs text-amber-400 font-bold uppercase">{selectedTrack.sponsor} Track</div>
                  <h3 className="text-2xl font-black text-white mt-0.5">{selectedTrack.title}</h3>
                  <div className="text-xs text-slate-400 mt-1">Deadline: <strong>{selectedTrack.deadline}</strong></div>
                </div>
                <div className="text-2xl font-black text-amber-400 font-mono">{selectedTrack.reward}</div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase">Target Deliverable:</div>
                <div className="glass-card p-3.5 rounded-xl text-xs text-amber-300 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{selectedTrack.targetDeliverable}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase">Objective & Purpose:</div>
                <p className="text-xs sm:text-sm text-slate-200 glass-card p-4 rounded-xl leading-relaxed">
                  {selectedTrack.purpose}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase">Ready-to-Submit Dossier Content:</span>
                  <button
                    onClick={() => handleCopy(selectedTrack.fullSubmissionContent, `track-${selectedTrack.id}`)}
                    className="flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold transition"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedId === `track-${selectedTrack.id}` ? 'Copied to Clipboard!' : 'Copy Submission Dossier'}</span>
                  </button>
                </div>
                <pre className="p-5 rounded-xl bg-slate-950 text-xs text-slate-200 font-mono whitespace-pre-wrap leading-relaxed border border-white/5">
                  {selectedTrack.fullSubmissionContent}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Builder Lessons */}
        {activeTab === 'builder-lessons' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUILDER_LESSONS.map((lesson) => (
              <div key={lesson.id} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-base">
                    <Lightbulb className="w-5 h-5 shrink-0" />
                    <span>{lesson.topic}</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-rose-400 uppercase">The 3-Month Web2 Mistake:</div>
                    <div className="glass-card p-3 rounded-xl text-xs text-slate-300 border-l-2 border-l-rose-500">
                      {lesson.web2Mistake}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-emerald-400 uppercase">The Web3 Solana Realization:</div>
                    <div className="glass-card p-3 rounded-xl text-xs text-slate-200 border-l-2 border-l-emerald-500 leading-relaxed">
                      {lesson.web3SolanaRealization}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-bold text-indigo-300 uppercase">Architecture / Code Proof:</div>
                    <pre className="p-3 rounded-xl bg-slate-950 text-[11px] text-indigo-300 font-mono whitespace-pre-wrap border border-indigo-500/20">
                      {lesson.codeOrArchitectureProof}
                    </pre>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400">ROI Impact:</span>
                  <span className="font-bold text-amber-300">{lesson.roiImpact}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: Video Pitch Studio */}
        {activeTab === 'pitch-teleprompter' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Play className="w-5 h-5 text-amber-400" />
                  3-Minute Colosseum World's Fair Video Pitch Teleprompter
                </h3>
                <p className="text-xs text-slate-400">Optimized for Netherlands & Vietnam video judging criteria.</p>
              </div>
              <a
                href="http://localhost:5189"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl brand-gradient text-xs font-bold text-white shadow-md flex items-center gap-1.5"
              >
                <span>Launch Port 5189 Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Teleprompter Controls */}
            <div className="flex items-center justify-between glass-card p-4 rounded-2xl">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2 rounded-xl brand-gradient text-xs font-bold text-white shadow-md flex items-center gap-2"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? 'Pause' : 'Start Pitch Scroll'}</span>
                </button>

                <button
                  onClick={() => {
                    setIsPlaying(false)
                    if (teleprompterRef.current) teleprompterRef.current.scrollTop = 0
                  }}
                  className="p-2 rounded-xl glass-panel hover:bg-white/10 text-slate-400 hover:text-white transition"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">Speech Rate:</span>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={scrollSpeed}
                  onChange={(e) => setScrollSpeed(Number(e.target.value))}
                  className="accent-amber-500 cursor-pointer w-24 sm:w-32"
                />
                <span className="text-xs font-mono font-bold text-amber-400">{scrollSpeed}x</span>
              </div>
            </div>

            {/* Display */}
            <div
              ref={teleprompterRef}
              className="h-80 overflow-y-auto p-6 sm:p-8 rounded-2xl bg-slate-950 border border-white/10 text-base sm:text-xl font-medium leading-loose text-slate-200 scrollbar-none select-none font-sans whitespace-pre-wrap"
            >
{`"Hello Colosseum judges and Superteam evaluators! My name is Siddharth Srivastava, and I am the creator of SolCredit Protocol.

For the past 3 months, I analyzed why traditional finance and decentralized lending are both broken. In DeFi, overcollateralized lending locks up $40 Billion in dead capital because borrowers must put up 150% collateral. In emerging markets, millions of creditworthy contractors cannot get loans because traditional banks don't accept crypto wallet histories.

SolCredit bridges this gap on the Solana SVM:
1. We engineered a Zero-Copy Anchor lending engine executing in under 8,500 Compute Units.
2. We derive on-chain credit scores dynamically from wallet transaction fidelity, staking rewards, and Pyth oracle price volatility.
3. In case of collateral health degradation, atomic liquidations execute instantly via Jito MEV tip bundles with zero bad debt slippage.

Our repository is completely open-source, fully tested, and running live on localhost:5189. We look forward to scaling SolCredit into the premier under-collateralized lending network in the Solana ecosystem!"`}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => handleCopy(`"Hello Colosseum judges and Superteam evaluators! My name is Siddharth Srivastava, and I am the creator of SolCredit Protocol..."`, 'pitch-script')}
                className="px-4 py-2 rounded-xl glass-card hover:bg-white/10 text-xs font-bold text-white flex items-center gap-2 transition"
              >
                <Copy className="w-3.5 h-3.5 text-amber-400" />
                <span>{copiedId === 'pitch-script' ? 'Copied Pitch!' : 'Copy Teleprompter Script'}</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: ROI / Expected Value Matrix */}
        {activeTab === 'roi-calculator' && (
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-400" />
                Pipeline Expected Value & Bounty Winning Matrix
              </h3>
              <p className="text-xs text-slate-400">Mathematical projection of expected revenue across all 24 active submissions ($912,800 total pipeline).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-5 rounded-2xl space-y-2">
                <span className="text-xs text-slate-400 uppercase font-semibold">Total Prize Pipeline:</span>
                <div className="text-3xl font-black text-amber-400 font-mono">${totalPipeline.toLocaleString()} USD</div>
                <div className="text-xs text-slate-400">24 Production-Grade Deliverables</div>
              </div>

              <div className="glass-card p-5 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Blended Win Probability:</span>
                  <span className="text-xs font-bold text-emerald-400">{winProbability}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="5"
                  value={winProbability}
                  onChange={(e) => setWinProbability(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-800 rounded-lg mt-2"
                />
                <div className="text-[11px] text-slate-400">Adjust estimated placement rate</div>
              </div>

              <div className="glass-card p-5 rounded-2xl space-y-2 border-l-4 border-l-emerald-500">
                <span className="text-xs text-slate-400 uppercase font-semibold">Expected Cashflow (EV):</span>
                <div className="text-3xl font-black text-emerald-400 font-mono">${expectedValue.toLocaleString()} USD</div>
                <div className="text-xs text-emerald-300 font-medium">Bounties + Pre-Seed Acceleration</div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-3 text-xs">
              <div className="font-bold text-white text-sm">Strategic Takeaway:</div>
              <p className="text-slate-300 leading-relaxed">
                By maintaining 24 active deliverables with 100% public GitHub commits and live web ports, the probability of securing at least 3–5 top tier bounties exceeds 92%. In addition, the Colosseum pre-seed accelerator provides an asymmetric upside of $250,000 direct funding.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 glass-panel py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>Built for <strong>Colosseum Crypto World's Fair & Superteam Multi-Region Bounties</strong></div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/sidsri14" target="_blank" rel="noreferrer" className="hover:text-white transition">github.com/sidsri14</a>
            <span>•</span>
            <a href="http://localhost:5195" target="_blank" rel="noreferrer" className="hover:text-white transition">Career Command Center</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
