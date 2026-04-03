import { notFound } from "next/navigation";
import { BookingForm } from "@/components/booking-form";
import { profiles } from "@/lib/data";

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = profiles.find((item) => item.id === id);
  if (!profile) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-soft">
          <img src={profile.image} alt={profile.name} className="h-[520px] w-full object-cover" />
          <div className="p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-5xl font-black text-slate-950">{profile.name}, {profile.age}</h1>
                <div className="mt-2 text-lg text-slate-500">{profile.city}</div>
              </div>
              <div className="rounded-full bg-rose-50 px-5 py-3 text-base font-bold text-rose-700">{profile.rate}</div>
            </div>
            <p className="mt-5 text-lg text-slate-700">{profile.bio}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span key={interest} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">{interest}</span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <BookingForm profile={profile} />
        </div>
      </div>
    </main>
  );
}
