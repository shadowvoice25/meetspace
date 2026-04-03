export function HeroSearch() {
  return (
    <form className="mt-8 rounded-[2rem] bg-white p-4 shadow-soft md:p-5">
      <div className="grid gap-3 md:grid-cols-[1.3fr_1fr_1fr_auto]">
        <input className="h-14 rounded-full border border-slate-200 px-5 text-sm" placeholder="Search city or vibe" />
        <select className="h-14 rounded-full border border-slate-200 px-5 text-sm">
          <option>Any city</option>
          <option>Philadelphia</option>
          <option>New York</option>
          <option>Miami</option>
          <option>Los Angeles</option>
        </select>
        <select className="h-14 rounded-full border border-slate-200 px-5 text-sm">
          <option>Any style</option>
          <option>Luxury</option>
          <option>Soft & Romantic</option>
          <option>Nightlife</option>
          <option>Casual & Cute</option>
        </select>
        <button className="h-14 rounded-full bg-rose-600 px-6 text-sm font-bold text-white">Search</button>
      </div>
    </form>
  );
}
