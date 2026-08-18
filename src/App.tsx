import { useState } from 'react'
import { BiographyView } from './views/BiographyView'
import { MapView } from './views/MapView'
import { CompareView } from './views/CompareView'
import { WorldView } from './views/WorldView'
import { pingpingProfile, davidePlaceholder } from './data/demoProfiles'

type View='bio'|'map'|'compare'|'world'
const labels: Record<View,string>={bio:'My Life',map:'Map',compare:'Compare Lives',world:'Explore the World'}

export default function App(){
 const [view,setView]=useState<View>('bio')
 return <div className="app-shell"><header className="topbar"><div className="brand">Carbon Biography <span>research prototype</span></div><nav>{(Object.keys(labels) as View[]).map(v=><button key={v} className={view===v?'active':''} onClick={()=>setView(v)}>{labels[v]}</button>)}</nav></header>
 <section className="hero"><div><div className="eyebrow">A life-course carbon footprint</div><h1>There is no universal “normal” life.</h1><p>Understand how place, time, household resources, infrastructure, migration and expanding opportunities shape environmental impact across a lifetime.</p></div><div className="hero-note"><strong>Not a guilt score.</strong><p>Separate context, opportunity and personal variation — then compare lives without assuming one person's world is universal.</p></div></section>
 {view==='bio'&&<BiographyView profile={pingpingProfile}/>} {view==='map'&&<MapView profile={pingpingProfile}/>} {view==='compare'&&<CompareView a={pingpingProfile} b={davidePlaceholder}/>} {view==='world'&&<WorldView/>}
 <footer>Prototype values in the biography are illustrative. Production estimates require versioned datasets, explicit system boundaries, historical emission factors and uncertainty propagation.</footer></div>
}
