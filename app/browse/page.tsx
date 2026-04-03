import { ProfileCard } from "@/components/profile-card";
import { SectionTitle } from "@/components/section-title";
import { profiles } from "@/lib/data";

export default function BrowsePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <SectionTitle eyebrow="Browse" title="Find your companion" text="Choose based on vibe, city, and chemistry." />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {profiles.map((profile) => <ProfileCard key={profile.id} profile={profile} />)}
      </div>
    </main>
  );
}
