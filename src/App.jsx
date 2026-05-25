export default function App() {
  const services = [
    "Project Controls",
    "Scheduling",
    "Claims & Dispute Support",
    "Owner Representation",
    "Construction Management",
    "Project Recovery",
  ];

  const clients = [
    "Owners & Developers",
    "General Contractors",
    "Subcontractors",
    "Institutions",
  ];

  const markets = [
    "Commercial",
    "Healthcare",
    "Self Storage",
    "Retail",
    "Infrastructure",
    "Capital Programs",
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <img
            src="/logo.png"
            alt="Provara"
            className="h-14 w-auto object-contain lg:h-16"
          />

          <nav className="hidden gap-8 text-sm font-semibold text-zinc-600 md:flex">
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#markets">Markets</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="mailto:info@provarausa.com"
            className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#f5820b] hover:text-black"
          >
            Start a Review
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute right-[-15%] top-[-15%] h-[35rem] w-[35rem] rounded-full bg-[#f5820b]/10 blur-3xl" />
            <div className="absolute bottom-[-25%] left-[-15%] h-[35rem] w-[35rem] rounded-full bg-zinc-900/5 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
            <div>
              <div className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-zinc-600">
                Project Controls • Scheduling • Claims • Construction Advisory
              </div>

              <h1 className="mt-8 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl lg:leading-[0.94]">
                Control the project before the project controls you.
              </h1>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600">
                Provara provides project controls, scheduling, claims support,
                owner representation, and construction management advisory for
                owners, general contractors, and subcontractors who need
                clarity, control, and defensible documentation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:info@provarausa.com"
                  className="rounded-full bg-[#f5820b] px-7 py-4 text-sm font-bold text-black shadow-lg"
                >
                  Request Project Review
                </a>

                <a
                  href="#services"
                  className="rounded-full border border-zinc-300 px-7 py-4 text-sm font-bold"
                >
                  View Capabilities
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[3rem] border border-zinc-200 bg-zinc-950 p-10 shadow-2xl">
                <div className="relative flex min-h-[34rem] items-center justify-center overflow-hidden rounded-[2rem]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,130,11,0.28),transparent_40%)]" />

                  <div className="absolute left-10 top-0 text-[18rem] font-black tracking-[-0.18em] text-[#f5820b] opacity-90 va-v">
                    V
                  </div>

                  <div className="absolute bottom-0 right-10 text-[18rem] font-black tracking-[-0.18em] text-[#f5820b] opacity-90 va-a">
                    A
                  </div>

                  <div className="relative z-10 rounded-[2rem] border border-white/10 bg-white/10 p-8 text-white backdrop-blur-xl">
                    <div className="text-xs font-bold uppercase tracking-[0.24em] text-[#f5820b]">
                      Provara Control Layer
                    </div>

                    <div className="mt-4 text-3xl font-semibold">
                      One view. Better decisions.
                    </div>

                    <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
                      Cost, schedule, claims, documentation, risk, and
                      accountability brought into focus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between gap-10">
            <div>
              <div className="text-xs font-black uppercase tracking-[0.28em] text-[#f5820b]">
                Capabilities
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Built for control, not just reporting.
              </h2>
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#f5820b]/40 hover:shadow-md"
              >
                <div className="mb-5 h-1.5 w-12 rounded-full bg-[#f5820b]" />
                <h3 className="text-xl font-bold">{service}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="clients" className="bg-zinc-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-xs font-black uppercase tracking-[0.28em] text-[#f5820b]">
              Who We Serve
            </div>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Built for every party that needs defensible control.
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {clients.map((client) => (
                <div
                  key={client}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8"
                >
                  <h3 className="text-2xl font-bold">{client}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="markets" className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs font-black uppercase tracking-[0.28em] text-[#f5820b]">
            Markets
          </div>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Practical controls for complex built environments.
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((market, index) => (
              <div
                key={market}
                className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8"
              >
                <div className="text-sm font-black text-[#f5820b]">
                  0{index + 1}
                </div>

                <div className="mt-4 text-2xl font-bold">{market}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="px-6 pb-24">
          <div className="mx-auto max-w-7xl rounded-[3rem] bg-zinc-950 p-10 text-white">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <div className="text-xs font-black uppercase tracking-[0.28em] text-[#f5820b]">
                  Start Here
                </div>

                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Need project control, scheduling, claims support, or construction advisory?
                </h2>

                <p className="mt-6 text-lg leading-8 text-white/70">
                  Send a quick note with the project type, stage, and main concern.
                </p>
              </div>

              <form
                action="mailto:info@provarausa.com"
                method="post"
                encType="text/plain"
                className="grid gap-4"
              >
                <input className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white" placeholder="Name / Company" />
                <input className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white" placeholder="Project Type" />
                <textarea className="min-h-[10rem] rounded-2xl border border-white/10 bg-white/10 p-4 text-white" placeholder="Brief project description" />

                <button className="rounded-2xl bg-[#f5820b] px-6 py-4 font-bold text-black">
                  Open Email Draft
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
