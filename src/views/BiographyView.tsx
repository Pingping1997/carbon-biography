import { useMemo, useState } from 'react'
import type { PersonProfile } from '../types/models'
import { MetricCard } from '../components/MetricCard'
import { StageList } from '../components/StageList'
import { BreakdownBars } from '../components/BreakdownBars'
import { dominantCategory, lifetimeFootprint, categoryLabels } from '../services/footprintEngine'

export function BiographyView({ profile }: { profile: PersonProfile }) {
  const [selectedId,setSelectedId]=useState(profile.stages[profile.stages.length-1]?.id ?? '')
  const stage = profile.stages.find(s=>s.id===selectedId) ?? profile.stages[0]
  const lifetime = useMemo(()=>lifetimeFootprint(profile),[profile])
  const dominant = stage ? dominantCategory(stage) : null
  const max = Math.max(...profile.stages.map(s=>s.estimate?.central ?? 0),1)

  return <div className="page-grid">
    <aside className="panel sticky-panel">
      <div className="section-title">Life stages</div>
      <StageList stages={profile.stages} selectedId={stage.id} onSelect={setSelectedId}/>
    </aside>
    <main className="stack">
      <div className="metrics-grid">
        <MetricCard label="Lifetime estimate" value={lifetime ? `~${Math.round(lifetime)} t` : 'TBD'} note="illustrative CO₂e"/>
        <MetricCard label="Selected stage" value={stage.estimate ? `${stage.estimate.central.toFixed(1)} t/y` : 'TBD'} note={`${stage.startYear}–${stage.endYear}`}/>
        <MetricCard label="Main driver" value={dominant ? categoryLabels[dominant] : 'TBD'} note="largest modeled category"/>
        <MetricCard label="Confidence" value={stage.estimate?.confidence ?? 'unknown'} note="improve with more detail"/>
      </div>

      <section className="panel">
        <div className="section-title">Annual footprint through life</div>
        <div className="timeline-bars">{profile.stages.map(s=><button key={s.id} className={`timeline-col ${s.id===stage.id?'active':''}`} onClick={()=>setSelectedId(s.id)}>
          <span className="timeline-value">{s.estimate ? s.estimate.central.toFixed(1) : '—'}</span>
          <span className="timeline-bar" style={{height:`${32+((s.estimate?.central ?? 0)/max)*130}px`}}/>
          <span className="timeline-label">{s.startYear}<br/>{s.place}</span>
        </button>)}</div>
      </section>

      <div className="two-col">
        <section className="panel"><div className="section-title">What shaped this stage?</div>{stage.estimate ? <BreakdownBars breakdown={stage.estimate.breakdown}/> : <div className="empty">Add data to calculate this stage.</div>}</section>
        <section className="callout"><strong>{stage.label}</strong><p>{stage.narrative}</p><div className="range">{stage.estimate ? `Likely range: ${stage.estimate.low.toFixed(1)}–${stage.estimate.high.toFixed(1)} t CO₂e/year` : 'Estimate not available yet.'}</div></section>
      </div>
    </main>
  </div>
}
