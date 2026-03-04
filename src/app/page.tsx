import Image from "next/image";

const features = [
  {
    title: "AI Diet Planner",
    description:
      "Generate ultra-personalized meal plans in seconds based on your body, goals, and preferences.",
    accent: "from-sky-500/80 to-cyan-400/40",
  },
  {
    title: "Food Calorie Scanner",
    description:
      "Snap a photo of your meal and let NutriAI estimate calories and macros instantly.",
    accent: "from-emerald-500/80 to-lime-400/40",
  },
  {
    title: "AI Health Coach",
    description:
      "Chat with an always-on coach that explains your data and keeps you accountable.",
    accent: "from-violet-500/80 to-fuchsia-400/40",
  },
  {
    title: "Progress Tracking",
    description:
      "Beautiful analytics that visualize weight, calories, protein, and adherence over time.",
    accent: "from-amber-500/80 to-rose-400/40",
  },
];

const steps = [
  {
    label: "Step 01",
    title: "Create Profile",
    body: "Tell NutriAI about your body, lifestyle, and goals so we can calibrate your nutrition engine.",
  },
  {
    label: "Step 02",
    title: "Get AI Diet Plan",
    body: "Receive a tailored meal blueprint with smart calorie and macro targets for every day.",
  },
  {
    label: "Step 03",
    title: "Track Your Health",
    body: "Log meals, update weight, and let NutriAI adapt your plan as your body changes.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        {/* Top nav */}
        <header className="mb-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="glass-card flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/70 via-emerald-400/60 to-indigo-500/70 shadow-lg shadow-sky-500/50">
              <span className="text-xl font-bold text-slate-950">N</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.2em] text-slate-400">
                NUTRIAI
              </span>
              <span className="text-xs text-slate-500">
                Precision AI nutrition engine
              </span>
            </div>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <button className="secondary-btn h-10 px-4 text-xs">
              Login
            </button>
            <button className="primary-btn h-10 px-5 text-xs">
              Start Free
            </button>
          </div>
        </header>

        {/* Hero */}
        <section className="mb-20 grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-8">
            <div className="pill">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.35)]" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-slate-300">
                Your AI Nutritionist
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="gradient-text">Your AI Nutritionist</span>
                <br />
                for a{" "}
                <span className="text-slate-100">stronger, smarter body.</span>
              </h1>
              <p className="max-w-xl text-balance text-sm leading-relaxed text-slate-300 sm:text-base">
                NutriAI creates personalized diet plans, tracks calories, and
                helps you eat healthier using AI. Built for founders, athletes,
                and anyone serious about high-performance living.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="primary-btn text-sm">
                Start Free
                <span className="text-xs text-slate-900/80">No card needed</span>
              </button>
              <button className="secondary-btn text-sm">
                View live dashboard
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 text-[10px] font-semibold text-slate-950 shadow-md shadow-sky-500/50">
                  <span className="flex h-full w-full items-center justify-center">
                    24/7
                  </span>
                </span>
                <span>Real-time guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
                <span>Built for billion-dollar health brands</span>
              </div>
            </div>
          </div>

          {/* Hero visual card */}
          <div className="glass-panel relative mx-auto w-full max-w-md overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.26),transparent_60%)] mix-blend-screen opacity-80" />
            <div className="relative z-10 p-6 sm:p-7">
              <div className="mb-5 flex items-center justify-between text-xs text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live metabolic snapshot
                </span>
                <span className="rounded-full bg-slate-900/60 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  v1.0 • Nutri Core
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="glass-card p-3">
                  <p className="text-[11px] text-slate-400">Daily calories</p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">
                    2,150
                  </p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-900/80">
                    <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 shadow-[0_0_20px_rgba(56,189,248,0.7)]" />
                  </div>
                  <p className="mt-1 text-[10px] text-slate-400">
                    68% of target reached
                  </p>
                </div>

                <div className="glass-card p-3">
                  <p className="text-[11px] text-slate-400">Protein today</p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">
                    104g
                  </p>
                  <p className="mt-1 text-[10px] text-emerald-300">
                    +24g above baseline
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Carbs</span>
                    <span>Fats</span>
                    <span>Fiber</span>
                  </div>
                  <div className="mt-1 flex h-1.5 w-full overflow-hidden rounded-full bg-slate-900/80">
                    <div className="h-full w-[42%] bg-sky-400" />
                    <div className="h-full w-[28%] bg-emerald-400" />
                    <div className="h-full w-[18%] bg-indigo-400" />
                    <div className="h-full w-[12%] bg-slate-500" />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-3">
                <div className="glass-card flex flex-col justify-between p-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Today&apos;s AI diet plan</span>
                    <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                      Adaptive
                    </span>
                  </div>
                  <div className="mt-2 space-y-1.5 text-[11px] text-slate-200">
                    <p>• High-protein breakfast bowl</p>
                    <p>• Smart-carb training lunch</p>
                    <p>• Micronutrient-focused dinner</p>
                  </div>
                </div>
                <div className="glass-card relative flex flex-col items-center justify-center overflow-hidden p-3">
                  <Image
                    src="https://images.pexels.com/photos/6543016/pexels-photo-6543016.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="NutriAI health dashboard"
                    width={400}
                    height={400}
                    className="h-28 w-full rounded-xl object-cover object-center opacity-70"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent" />
                  <div className="relative z-10 mt-2 w-full text-left">
                    <p className="text-[11px] font-medium text-slate-50">
                      NutriAI • Coach Insight
                    </p>
                    <p className="mt-1 text-[10px] text-slate-300">
                      &ldquo;You&apos;re 82% consistent this week. Keep protein
                      above 100g and we&apos;ll lower calories by 5% next
                      cycle.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-max-width mb-20 space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Features
              </p>
              <h2 className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">
                Built for precision health founders & high-performers.
              </h2>
            </div>
            <p className="max-w-md text-xs text-slate-400 sm:text-sm">
              NutriAI blends clinical-grade nutrition science with generative AI
              to design, track, and optimize your entire diet workflow.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-card group relative overflow-hidden p-5 transition hover:border-sky-400/60 hover:shadow-sky-500/30"
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b ${feature.accent} opacity-30 blur-3xl transition group-hover:opacity-60`}
                />
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-50">
                      {feature.title}
                    </h3>
                    <span className="rounded-full border border-white/10 bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-400">
                      AI-native
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="section-max-width mb-20 space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                How it works
              </p>
              <h2 className="mt-1 text-xl font-semibold text-slate-50 sm:text-2xl">
                Getting started takes under 2 minutes.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="glass-card relative flex flex-col justify-between p-5"
              >
                <div className="mb-4 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                    {step.label}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-max-width glass-panel relative overflow-hidden px-6 py-7 sm:px-10 sm:py-9">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.3),transparent_55%)] opacity-80" />
          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
                Start now
              </p>
              <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
                Start your AI health journey today.
              </h2>
              <p className="max-w-md text-xs text-slate-200/80 sm:text-sm">
                Turn every meal into a data point and every day into progress.
                NutriAI is your always-on cofounder for health.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:items-end">
              <button className="primary-btn w-full text-sm sm:w-auto">
                Start Free
              </button>
              <p className="text-[11px] text-slate-200/80">
                <span className="text-emerald-300">30-day free trial</span> •
                cancel anytime
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
