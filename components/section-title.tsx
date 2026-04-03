export function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mb-6">
      {eyebrow ? <div className="text-sm font-semibold uppercase tracking-wide text-rose-600">{eyebrow}</div> : null}
      <h2 className="mt-2 text-4xl font-black tracking-tight text-slate-950">{title}</h2>
      {text ? <p className="mt-2 max-w-2xl text-slate-600">{text}</p> : null}
    </div>
  );
}
