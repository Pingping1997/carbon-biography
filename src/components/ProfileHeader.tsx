import type { PersonProfile } from '../types/models'
export function ProfileHeader({ profile }: { profile: PersonProfile }) {
  return <div className={`profile-header ${profile.status==='placeholder'?'placeholder-profile':''}`}>
    <div className="profile-kicker">{profile.status==='placeholder'?'Comparison placeholder':'Biography profile'}</div>
    <div className="profile-name">{profile.name} {profile.flag}</div>
    <div className="profile-tagline">{profile.tagline}</div>
  </div>
}
