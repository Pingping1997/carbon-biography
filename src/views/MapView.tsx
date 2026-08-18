import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import type { PersonProfile } from '../types/models'

export function MapView({ profile }: { profile: PersonProfile }) {
  const mapNode = useRef<HTMLDivElement|null>(null)
  const mapRef = useRef<L.Map|null>(null)
  useEffect(()=>{
    if(!mapNode.current || mapRef.current) return
    const map=L.map(mapNode.current,{scrollWheelZoom:false})
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors'}).addTo(map)
    const coords = profile.stages.map(s=>[s.coordinates.lat,s.coordinates.lon] as [number,number])
    profile.stages.forEach(stage=>{
      const radius=6+(stage.estimate?.central ?? 1)
      L.circleMarker([stage.coordinates.lat,stage.coordinates.lon],{radius,color:'#2f6b4c',fillColor:'#2f6b4c',fillOpacity:.58,weight:2})
        .bindPopup(`<b>${stage.place}</b><br>${stage.startYear}–${stage.endYear}<br>${stage.estimate ? `${stage.estimate.central.toFixed(1)} t CO₂e/y · illustrative` : 'Estimate TBD'}`)
        .addTo(map)
    })
    if(coords.length>1) L.polyline(coords,{color:'#2f6b4c',weight:3,opacity:.62,dashArray:'8 6'}).addTo(map)
    if(coords.length) map.fitBounds(coords,{padding:[35,35]})
    mapRef.current=map
    return ()=>{map.remove();mapRef.current=null}
  },[profile])

  return <div className="map-grid"><div ref={mapNode} className="map-canvas"/><aside className="panel"><div className="section-title">Life geography</div>{profile.stages.map(s=><div key={s.id} className="route-item"><strong>{s.startYear}–{s.endYear} · {s.place}</strong><span>{s.lifeStage}</span></div>)}<div className="empty">Future: migration emissions, route-specific flights, and country-average layers by historical year.</div></aside></div>
}
