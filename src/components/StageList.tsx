import type { LifeStage } from '../types/models'
interface Props { stages: LifeStage[]; selectedId: string; onSelect: (id:string)=>void }
export function StageList({ stages, selectedId, onSelect }: Props) {
  return <div className="stage-list">{stages.map(stage => (
    <button key={stage.id} className={`stage-button ${stage.id===selectedId?'selected':''}`} onClick={()=>onSelect(stage.id)}>
      <div className="stage-button-top"><strong>{stage.startYear}–{stage.endYear}</strong><span className="chip">{stage.estimate ? `${stage.estimate.central.toFixed(1)} t/y` : 'TBD'}</span></div>
      <div className="stage-place">{stage.place}</div>
      <div className="stage-sub">{stage.lifeStage}</div>
    </button>
  ))}</div>
}
