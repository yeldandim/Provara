export default function Website() {
  const painPoints = [
    {
      title: "Scope gaps",
      text: "Drawings can look complete until the change orders start. Provara helps identify gaps before they become expensive surprises.",
    },
    {
      title: "Weak coordination",
      text: "Architects, engineers, contractors, vendors, and consultants each manage their own lane. Provara keeps the full picture tied together for the owner.",
    },
    {
      title: "Permit and schedule drift",
      text: "Projects rarely fail all at once. They drift. Provara tracks the critical path, decisions, permits, and approvals before delays compound.",
    },
    {
      title: "Payment and lien exposure",
      text: "Owners should not discover payment problems after the fact. Provara reviews pay applications, backup, and lien waiver discipline.",
    },
  ];

  const services = [
    {
      title: "Preconstruction Risk Review",
      text: "Budget review, scope gap detection, bid leveling, constructability questions, schedule pressure points, and early risk control before the project starts spending real money.",
    },
    {
      title: "Owner Representation",
      text: "Owner-side leadership across design, permitting, bidding, construction, billing, and closeout with one clear priority: protect the owner's investment.",
    },
    {
      title: "Project Control During Construction",
      text: "Pay application review, change order control, schedule oversight, coordination follow-up, documentation discipline, and contractor accountability.",
    },
    {
      title: "Project Rescue",
      text: "For jobs that are drifting, over budget, delayed, or poorly coordinated. Provara steps in, stabilizes the situation, and re-establishes control.",
    },
    {
      title: "Portfolio & Multi-Site Oversight",
      text: "Support for owners managing multiple projects, rollouts, facility upgrades, capital improvements, or rebranding programs across locations.",
    },
    {
      title: "Payment & Lien Protection",
      text: "Review of pay applications, backup, conditional and unconditional lien waivers, and billing discipline to protect the property and the owner's cash.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "See the risk early",
      text: "We review the project before momentum hides the real issues.",
    },
    {
      step: "02",
      title: "Pressure the weak points",
      text: "We push scope, permitting, schedule, coordination, and decision-making where projects usually start to drift.",
    },
    {
      step: "03",
      title: "Control the money",
      text: "We challenge weak change orders, questionable billing, and unsupported assumptions before they hit the owner.",
    },
    {
      step: "04",
      title: "Protect the outcome",
      text: "We keep the project aligned to the owner's goals on cost, time, quality, and risk.",
    },
  ];

  const reasons = [
    "You want someone in the room whose interests are aligned only with yours.",
    "You want decisions challenged before they turn into cost overruns.",
    "You want the design team, contractor, and vendors pushed toward the same outcome.",
    "You want stronger control over money, schedule, and accountability without building a full internal team.",
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#F5820B] selection:text-black">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(245,130,11,0.11),transparent_24%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_18%),linear-gradient(to_bottom,rgba(255,255,255,0.012),transparent_14%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-black p-2">
              <img src="/logo.png" alt="Provara logo" className="h-24 w-auto sm:h-28 lg:h-32" />
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#why" className="transition hover:text-[#F5820B]">Why Provara</a>
            <a href="#services" className="transition hover:text-[#F5820B]">Services</a>
            <a href="#process" className="transition hover:text-[#F5820B]">Process</a>
            <a href="#contact" className="transition hover:text-[#F5820B]">Contact</a>
          </nav>

          <a
            href="mailto:info@provara.us?subject=Project Inquiry - Provara"
            className="hidden rounded-2xl bg-[#F5820B] px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(245,130,11,0.2)] transition hover:-translate-y-0.5 lg:inline-block"
          >
            Talk About Your Project
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-6 backdrop-blur-sm lg:px-8">
              <div className="text-sm font-medium uppercase tracking-[0.32em] text-[#F5820B]">
                Construction Advisory & Owner Representation
              </div>
              <div className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                We represent the owner. No conflicts. No blind spots.
              </div>
              <div className="mt-2 text-sm tracking-[0.08em] text-white/55 sm:text-base">
                Vision aligned. Value assured. Cost, scope, schedule, and risk protected.
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24 items-center">
            <div>
              <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Construction projects are built around everyone protecting themselves.
                <span className="mt-3 block text-[#F5820B]">Provara makes sure someone is protecting you.</span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72">
                Architects protect design liability. Contractors protect margin. Consultants protect their own scope. The owner is often the only party without a real shield. Provara represents the owner across design, permitting, bidding, construction, billing, and closeout with one objective: protect cost, control risk, and keep the project aligned with the owner's outcome.
              </p>

              <div className="mt-5 text-sm text-white/55">
                Led by Mithul Yeldandi, CCM, PMP
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="mailto:info@provara.us?subject=Project Inquiry - Provara"
                  className="rounded-2xl bg-[#F5820B] px-6 py-3.5 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(245,130,11,0.2)] transition hover:-translate-y-0.5"
                >
                  Request a Project Review
                </a>
                <a
                  href="#why"
                  className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-[#F5820B]/40 hover:bg-white/[0.07]"
                >
                  See How We Protect Owners
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <div className="text-2xl font-semibold text-[#F5820B]">Owner-Side</div>
                  <div className="mt-2 text-sm leading-6 text-white/60">
                    Aligned to the owner, not the contractor, design team, or vendor.
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <div className="text-2xl font-semibold text-[#F5820B]">Control</div>
                  <div className="mt-2 text-sm leading-6 text-white/60">
                    Cost, coordination, schedule, payment discipline, and project accountability.
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                  <div className="text-2xl font-semibold text-[#F5820B]">Clarity</div>
                  <div className="mt-2 text-sm leading-6 text-white/60">
                    Strong decisions, fewer blind spots, and better protection for the owner.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#F5820B]/20 via-transparent to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-[0.2em] text-white/40">What owners need</div>
                    <div className="mt-2 text-2xl font-semibold">A clear voice in a crowded process.</div>
                  </div>
                  <div className="rounded-full border border-[#F5820B]/30 bg-[#F5820B]/10 px-3 py-1 text-xs font-semibold text-[#F5820B]">
                    Owner Shield
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {painPoints.map((item) => (
                    <div
                      key={item.title}
                      className="group rounded-[1.5rem] border border-white/10 bg-black/25 p-5 transition hover:border-[#F5820B]/35 hover:bg-black/35"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-base font-semibold text-white">{item.title}</div>
                          <p className="mt-2 text-sm leading-6 text-white/68">{item.text}</p>
                        </div>
                        <div className="mt-1 h-3 w-3 rounded-full bg-[#F5820B] shadow-[0_0_18px_rgba(245,130,11,0.5)]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 items-start">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F5820B]">Why Provara</div>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Not another generic construction manager. An owner-side control partner.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
                The market has plenty of firms that coordinate meetings, issue reports, and repeat what everyone already knows. Owners do not need more noise. They need someone who understands how projects actually go sideways, where the money leaks out, where the schedule quietly slips, and where weak documentation turns into claims, billing problems, and leverage against the owner.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
                Provara is built for that role. We look across the full picture, push the right questions at the right time, and keep the project tied to the owner's goals on cost, schedule, quality, and risk.
              </p>
            </div>

            <div className="grid gap-4">
              {reasons.map((reason, index) => (
                <div key={reason} className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6">
                  <div className="text-sm font-semibold text-[#F5820B]">0{index + 1}</div>
                  <p className="mt-2 text-base leading-7 text-white/80">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F5820B]">Who is representing you</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Experience that understands how projects actually fail
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72">
                Provara is led by Mithul Yeldandi, a construction professional with experience managing complex projects, multi-site portfolios, and owner-side operations across design and construction.
              </p>
              <p className="mt-5 text-lg leading-8 text-white/72">
                With a background in civil engineering and construction management, and credentials including CCM and PMP, the focus is not just on managing projects, but on controlling outcomes.
              </p>
              <p className="mt-5 text-lg leading-8 text-white/72">
                The approach is simple: understand where projects break down, identify risks early, and step in before those risks turn into cost overruns, delays, and disputes.
              </p>
              <div className="mt-6 text-sm text-white/50">Mithul Yeldandi, CCM, PMP</div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7">
              <div className="text-sm text-white/45">What this means for you</div>
              <div className="mt-5 space-y-3 text-sm leading-6 text-white/80">
                <div>Decisions are challenged before they become expensive problems</div>
                <div>Contracts, scope, and documentation are reviewed with an owner mindset</div>
                <div>Contractors and consultants are held accountable to clear expectations</div>
                <div>You get clarity, control, and protection without building an internal team</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F5820B]">Services</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Services built around what owners actually need.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Clear, practical, owner-side services focused on controlling money, reducing exposure, and driving the project toward the right outcome.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#F5820B]/35 hover:bg-white/[0.06]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#F5820B]/10 blur-2xl transition group-hover:bg-[#F5820B]/20" />
                <h3 className="relative text-xl font-semibold">{service.title}</h3>
                <p className="relative mt-4 leading-7 text-white/70">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="border-y border-white/10 bg-[#0A0A0A]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F5820B]">Process</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                A disciplined approach to keeping projects under control.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
                  <div className="text-sm font-semibold tracking-[0.2em] text-[#F5820B]">{item.step}</div>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 lg:p-10">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F5820B]">Who this is for</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Owners, developers, and operators who need stronger control without building a full internal project team.
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
                  Best fit for private commercial projects, capital improvements, facility upgrades, tenant improvements, rollout programs, and projects where the owner wants experienced control over cost, coordination, permitting, and billing discipline.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7">
                <div className="text-sm text-white/45">Typical owner concerns we address</div>
                <div className="mt-5 space-y-3 text-sm leading-6 text-white/80">
                  <div>Am I being exposed by scope gaps no one is calling out?</div>
                  <div>Are we paying for work that is not fully complete or properly backed up?</div>
                  <div>Is permitting and design coordination slipping without anyone owning it?</div>
                  <div>Who is keeping the contractor, consultants, and vendors aligned to my goals?</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-black">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.95fr] lg:px-8 items-start">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.2em] text-[#F5820B]">Contact</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                If your project needs stronger owner-side control, let's talk.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                Whether you are evaluating a new project, struggling with change orders, reviewing contractor billing, or trying to get a drifting job back under control, Provara can help you protect the outcome before the damage gets worse.
              </p>

              <div className="mt-8 space-y-3 text-white/75">
                <div>
                  <span className="font-medium text-white">Email:</span> info@provara.us
                </div>
                <div>
                  <span className="font-medium text-white">Location:</span> San Antonio, Texas
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm">
              <div className="text-xl font-semibold">Start with a direct conversation</div>
              <p className="mt-3 text-sm leading-6 text-white/58">
                Send a quick note with your project type, stage, and main concern. This opens your email with a structured message already prepared.
              </p>

              <form
                className="mt-6 grid gap-4"
                action="mailto:info@provara.us"
                method="post"
                encType="text/plain"
              >
                <input
                  type="text"
                  name="Project Type"
                  placeholder="Project type"
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#F5820B]/45"
                />
                <input
                  type="text"
                  name="Project Stage"
                  placeholder="Project stage"
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#F5820B]/45"
                />
                <input
                  type="text"
                  name="Main Concern"
                  placeholder="Main concern: cost, schedule, coordination, billing, or risk"
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#F5820B]/45"
                />
                <textarea
                  name="Project Description"
                  placeholder="Brief project description"
                  className="min-h-32 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#F5820B]/45"
                />
                <button
                  type="submit"
                  className="inline-block rounded-2xl bg-[#F5820B] px-6 py-3.5 text-center text-sm font-semibold text-black shadow-[0_12px_40px_rgba(245,130,11,0.2)] transition hover:-translate-y-0.5"
                >
                  Open Email Draft
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/45 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>© 2026 Provara. All rights reserved.</div>
          <div>Construction Advisory & Owner Representation | San Antonio, Texas</div>
        </div>
      </footer>
    </div>
  );
}
