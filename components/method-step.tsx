import type { MethodStep as MethodStepType } from "@/content/site";

type MethodStepProps = {
  item: MethodStepType;
};

export default function MethodStep({ item }: MethodStepProps) {
  return (
    <article className="panel panel-hover h-full rounded-[30px] p-6 sm:p-7">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-400/18 bg-red-400/8 font-display text-lg text-red-200">
          {item.step}
        </span>
        <h3 className="font-display text-2xl tracking-tight text-white">
          {item.title}
        </h3>
      </div>

      <p className="mt-5 text-base leading-7 text-slate-300">{item.description}</p>

      <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-200">
        {item.points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
