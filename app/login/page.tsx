import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8] px-4 py-10 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[2rem] bg-white p-8 shadow-soft md:p-12">
          <div className="text-sm font-bold uppercase tracking-wide text-rose-600">Welcome back</div>
          <h1 className="mt-2 text-5xl font-black text-slate-950">Log in</h1>
          <form className="mt-8 space-y-4">
            <input className="h-14 w-full rounded-full border border-slate-200 px-5 text-sm" placeholder="Email address" />
            <input className="h-14 w-full rounded-full border border-slate-200 px-5 text-sm" placeholder="Password" type="password" />
            <button className="h-14 w-full rounded-full bg-rose-600 text-sm font-bold text-white">Log in</button>
          </form>
          <p className="mt-6 text-sm text-slate-500">Need an account? <Link href="/signup" className="font-semibold text-slate-900">Sign up</Link></p>
        </div>
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop" alt="Dating visual" className="h-full min-h-[460px] w-full object-cover" />
        </div>
      </div>
    </main>
  );
}
