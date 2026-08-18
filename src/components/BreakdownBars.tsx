import type { FootprintBreakdown } from '../types/models'
import { categoryLabels } from '../services/footprintEngine'

export function BreakdownBars({ breakdown }: { breakdown: FootprintBreakdown }) {
  const entries = Object.entries(breakdown) as [keyof FootprintBreakdown, number][]
  const total = entries.reduce((s,[,v])=>s+v,0) || 1
  return <div className="breakdown-list">{entries.sort((a,b)=>b[1]-a[1]).map(([key,value])=>{
    const pct = Math.round(value/total*100)
    return <div key={key} className="breakdown-row">
      <div className="breakdown-head"><span>{categoryLabels[key]}</span><span>{pct}%</span></div>
      <div className="track"><div className="fill" style={{width:`${pct}%`}}/></div>
    </div>
  })}</div>
}
