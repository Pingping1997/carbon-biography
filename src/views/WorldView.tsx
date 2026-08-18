import { useEffect, useMemo, useRef, useState } from 'react'
import L from 'leaflet'
import type { CountryReference } from '../types/models'
import { countryReferences, referenceRegistry } from '../data/references'

export function WorldView() {
  const [metric,setMetric]=useState<CountryReference['metric']>('territorial_co2')
  const mapNode=useRef<HTMLDivElement|null>(null)
  const mapRef=useRef<L.Map|null>(null)
  const markerLayer=useRef<L.LayerGroup|null>(null)
  const rows=useMemo(()=>countryReferences.filter(r=>r.metric===metric),[metric])

  useEffect(()=>{
    if(!mapNode.current || mapRef.current) return
    const map=L.map(mapNode.current,{scrollWheelZoom:false}).setView([25,15],2)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors'}).addTo(map)
    markerLayer.current=L.layerGroup().addTo(map); mapRef.current=map
    return ()=>{map.remove();mapRef.current=null}
  },[])
  useEffect(()=>{
    if(!markerLayer.current) return
    markerLayer.current.clearLayers()
    rows.forEach(r=>L.circleMarker([r.coordinates.lat,r.coordinates.lon],{radius:10,color:'#2f6b4c',fillColor:'#2f6b4c',fillOpacity:.55,weight:2}).bindPopup(`<b>${r.name}</b><br>${r.value===null?'Value intentionally not loaded':`${r.value} ${r.unit}`}<br>${r.year}`).addTo(markerLayer.current!))
  },[rows])

  const source=referenceRegistry.find(r=>r.id==='owid-gcb-territorial-co2')
  return <div className="stack"><section className="world-head"><div><div className="section-title">Explore the world</div><p>Country averages are a structural reference layer, not a personal score. The production version should support historical year + metric selection.</p></div><div className="segmented"><button className={metric==='territorial_co2'?'active':''} onClick={()=>setMetric('territorial_co2')}>Territorial CO₂</button><button className={metric==='consumption_co2'?'active':''} onClick={()=>setMetric('consumption_co2')}>Consumption-based</button></div></section><div ref={mapNode} className="map-canvas world-map"/><div className="country-cards">{rows.map(r=><div className="country-card" key={r.iso3}><strong>{r.name}</strong><div className="country-value">{r.value===null?'—':`${r.value} t`}</div><span>{r.year} · {r.metric.replaceAll('_',' ')}</span></div>)}</div><section className="callout"><strong>Reference layer ≠ biography model</strong><p>Country averages help explain infrastructure and socioeconomic context. Personal aviation, household details, spending and life-stage data are modeled separately.</p>{source && <a href={source.url} target="_blank" rel="noreferrer">Reference registry: {source.publisher}</a>}</section></div>
}
