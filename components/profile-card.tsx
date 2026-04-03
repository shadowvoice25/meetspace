import Link from "next/link";

export function ProfileCard({ profile }: { profile: any }) {
  return (
    <article className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
      <img src={profile.image} alt={profile.name} className="h-80 w-full object-cover" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-slate-950">{profile.name}, {profile.age}</h3>
            <div className="mt-1 text-slate-500">{profile.city}</div>
          </div>
          <div className="rounded-full bg-rose-50 px-4 py-2 text-sm font-bold text-rose-700">{profile.rate}</div>
        </div>
        <p className="mt-3 text-base text-slate-700">{profile.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {profile.interests.slice(0, 3).map((interest: string) => (
            <span key={interest} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
              {interest}
            </span>
          ))}
        </div>
        <Link
          href={`/profiles/${profile.id}`}
          className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white"
        >
          View profile
        </Link>
      </div>
    </article>
  );
}
