export function BookingForm({ profile }: { profile: any }) {
  return (
    <form className="space-y-4 rounded-[2rem] bg-white p-6 shadow-soft">
      <div>
        <div className="text-sm font-semibold uppercase tracking-wide text-rose-600">Book {profile.name}</div>
        <h3 className="mt-2 text-2xl font-black text-slate-950">Request a meeting</h3>
      </div>
      <input className="h-14 w-full rounded-full border border-slate-200 px-5 text-sm" placeholder="Your name" />
      <input className="h-14 w-full rounded-full border border-slate-200 px-5 text-sm" placeholder="Your email" />
      <select className="h-14 w-full rounded-full border border-slate-200 px-5 text-sm">
        {profile.availability.map((slot: string) => <option key={slot}>{slot}</option>)}
      </select>
      <textarea className="min-h-32 w-full rounded-[1.5rem] border border-slate-200 p-5 text-sm" placeholder="Message and date idea" />
      <button className="h-14 w-full rounded-full bg-rose-600 text-sm font-bold text-white">Send booking request</button>
    </form>
  );
}
