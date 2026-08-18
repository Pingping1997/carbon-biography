import { useMemo, useState } from 'react'
import type { PersonProfile } from '../types/models'
import { ProfileHeader } from '../components/ProfileHeader'
import { compareAtAge } from '../services/comparisonEngine'
import { cumulativeByAge } from '../services/footprintEngine'

function StageCard({ title, stage, placeholder=false }: { title:string; stage?: ReturnType<typeof compareAtAge>['a']; placeholder?:boolean }) {
  return <section className={`compare-stage ${placeholder?'warm':''}`}>
    <div className="profile-kicker">{title}</div>
    <div className="compare-place">{stage?.place ?? 'No stage data'}</div>
    <div className="compare-life">{stage?.lifeStage ?? '—'} · {stage?.estimate ? `${stage.estimate.central.toFixed(1)} t/y` : 'TBD'}</div>
    <div className="context-cards">
      <div><b>Home</b><span>{stage?.inputs.dwelling ?? 'Add housing'}</span></div>
      <div><b>Mobility</b><span>{stage?.inputs.schoolOrWorkMobility ?? 'Add mobility'}</span></div>
      <div className="wide"><b>What felt normal?</b><span>{stage?.narrative ?? 'Add the lived context for this stage.'}</span></div>
    </div>
    {placeholder && <div className="empty">This profile is intentionally incomplete. Replace it with real answers instead of a “typical Italian” assumption.</div>}
  </section>
}

export function CompareView({ a,b }: { a:PersonProfile; b:PersonProfile }) {
  const [age,setAge]=useState(18)
  const comparison=compareAtAge(a,b,age)
  const ca=useMemo(()=>cumulativeByAge(a,30),[a])
  const cb=useMemo(()=>cumulativeByAge(b,30),[b])
  const max=Math.max(...ca.map(x=>x.cumulative??0),...cb.map(x=>x.cumulative??0),1)
  const points=(rows: typeof ca)=>rows.filter(r=>r.age<=29&&r.cumulative!==null).map(r=>`${r.age/29*700},${220-(r.cumulative!/max*190)}`).join(' ')

  return <div className="stack">
    <div className="compare-head"><ProfileHeader profile={a}/><div className="vs">VS</div><ProfileHeader profile={b}/></div>
    <section className="panel"><div className="slider-head"><strong>Compare at the same age</strong><span>Age <b>{age}</b></span></div><input className="age-slider" type="range" min="5" max="29" value={age} onChange={e=>setAge(Number(e.target.value))}/><div className="slider-labels"><span>5</span><span>10</span><span>15</span><span>20</span><span>25</span><span>29</span></div></section>
    <div className="two-col"><StageCard title={`${a.name} at age ${age}`} stage={comparison.a}/><StageCard title={`${b.name} at age ${age}`} stage={comparison.b} placeholder={b.status==='placeholder'}/></div>
    <section className="panel"><div className="section-title">Cumulative footprint by age</div><svg className="curve-svg" viewBox="0 0 700 220" preserveAspectRatio="none"><line x1="0" y1="220" x2="700" y2="220" className="axis"/><polyline points={points(ca)} className="curve-a"/><polyline points={points(cb)} className="curve-b"/><line x1={age/29*700} x2={age/29*700} y1="0" y2="220" className="age-line"/></svg><div className="legend"><span><i className="dot a"/>{a.name}</span><span><i className="dot b"/>{b.name} {b.status==='placeholder'?'(placeholder)':''}</span></div><div className="empty">The comparison is designed to explain divergence and convergence — not to rank people morally.</div></section>
  </div>
}
