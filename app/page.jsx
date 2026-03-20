import { ContactForm } from "../components/contact-form";

const tickerItems = [
  "Artificial Intelligence",
  "Robotics",
  "Biotechnology",
  "Gaming & Web3",
  "ZK Proofs",
  "Chinese founders",
  "muShanghai 2026",
];

const weeks = [
  {
    number: "W1",
    title: "Artificial Intelligence",
    description:
      "Applications, infrastructure, and AI startups across the Chinese ecosystem",
  },
  {
    number: "W2",
    title: "Robotics & Biotechnology",
    description:
      "Hardware, bio-engineering, and the sector's most ambitious bets",
  },
  {
    number: "W3",
    title: "Gaming & ZK / MPC",
    description:
      "Bootcamp on zero-knowledge proofs, MPC, and onchain gaming",
  },
  {
    number: "W4",
    title: "Culture & Demo Day",
    description:
      "Tech tours, networking with local funds, and project presentations",
  },
];

const deliverables = [
  {
    icon: "01",
    title: "Monthly report",
    description:
      "A direct analysis of the Chinese tech ecosystem: startups, trends, and opportunities in AI, robotics, and biotech.",
  },
  {
    icon: "02",
    title: "Direct connections",
    description:
      "Introductions to founders, investors, and funds inside the Chinese ecosystem. Relationships that would take years to build from Buenos Aires.",
  },
  {
    icon: "03",
    title: "Social visibility",
    description:
      "Mentions throughout the program on Instagram and TikTok, in front of an active and growing tech audience.",
  },
  {
    icon: "04",
    title: "Private debrief",
    description:
      "A 60-minute session with your team after I return, sharing everything learned firsthand.",
  },
  {
    icon: "05",
    title: "Technical content",
    description:
      "Posts, articles, or demos produced during the program showing real use cases with your tools.",
  },
  {
    icon: "06",
    title: "Opportunity map",
    description:
      "A deal flow report with projects and startups relevant to funds and investors interested in Asia.",
  },
];

const packages = [
  {
    name: "Ally",
    price: "1,000",
    currency: "USD — one-time payment",
    features: [
      "Monthly ecosystem report",
      "2 social media mentions",
      "Logo on the project website",
      "Access to the post-trip newsletter",
    ],
    cta: "Become an Ally",
  },
  {
    name: "Partner",
    price: "3,000",
    currency: "USD — one-time payment",
    features: [
      "Everything in the Ally package",
      "Introductions to 3 Chinese founders or funds",
      "Private team debrief (60 min)",
      "5 social mentions + dedicated content",
      "Monthly call during the program",
    ],
    cta: "Become a Partner",
    featured: true,
  },
  {
    name: "Lead Sponsor",
    price: "5,000+",
    currency: "USD — negotiable",
    features: [
      "Everything in the Partner package",
      "Co-branding across all content",
      "Full deal flow report",
      "Workshop or demo at the event",
      "100% custom deliverables",
    ],
    cta: "Let's talk",
  },
];

export default function HomePage() {
  return (
    <>
      <nav>
        <div className="nav-logo">
          mu<span>Shanghai</span> · 2026
        </div>
        <a href="#contact" className="nav-cta">
          Become a sponsor
        </a>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-bg-text">上海</div>
          <div className="hero-left">
            <div className="hero-eyebrow">Buenos Aires → Shanghai · May 10, 2026</div>
            <h1 className="hero-title">
              Building
              <br />
              the future
              <br />
              <em>from China.</em>
            </h1>
            <p className="hero-lead">
              I'm Tomás Deluca — Huevo — founder of{" "}
              <a href="https://huevsite.com" target="_blank" rel="noreferrer">
                huevsite.com
              </a>
              . In May 2026, I'll spend 28 days at muShanghai — a hub for AI,
              robotics, and biotech builders in the heart of the Chinese tech
              ecosystem. I'm looking for sponsors who want to be part of this
              journey.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                I want to sponsor
              </a>
              <a href="#program" className="btn-secondary">
                View the program
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="stat-card accent">
              <div className="stat-number">28</div>
              <div className="stat-label">Days in Shanghai</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Builders worldwide</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Thematic weeks</div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-inner">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span className="ticker-item" key={`${item}-${index}`}>
                <span>·</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <section id="about">
          <div className="section-label" data-n="01">
            Who I am
          </div>
          <div className="about-grid reveal-grid">
            <div>
              <div className="about-name">
                Tomás
                <br />
                Deluca
              </div>
              <div className="about-role">Founder — "Huevo"</div>
              <div className="about-tags">
                <span className="tag">AI / ML</span>
                <span className="tag">Product</span>
                <span className="tag">Startups</span>
                <span className="tag">Buenos Aires</span>
              </div>
            </div>
            <div>
              <p className="about-text">
                I'm a Buenos Aires-based founder building{" "}
                <a href="https://huevsite.com" target="_blank" rel="noreferrer">
                  <strong>huevsite.com</strong>
                </a>{" "}
                — a Linktree alternative for{" "}
                <strong>
                  professionals who want to present their work in a visually
                  compelling way
                </strong>
                , with a focus on building a stronger tech ecosystem across
                Argentina and LatAm.
              </p>
              <p className="about-text">
                muShanghai is more than a program — it's a chance to spend{" "}
                <strong>
                  28 days embedded in one of the most dynamic tech ecosystems in
                  the world
                </strong>
                , alongside builders shaping the future from China. I want to
                bring you with me.
              </p>
            </div>
          </div>
        </section>

        <section id="program">
          <div className="section-label" data-n="02">
            The program
          </div>
          <div className="event-grid reveal-grid">
            <div>
              <h2 className="event-headline">
                28 days living
                <br />
                in the <em>epicenter</em>
                <br />
                of China's tech scene.
              </h2>
              <p className="event-text">
                <a href="https://muShanghai.xyz" target="_blank" rel="noreferrer">
                  muShanghai
                </a>{" "}
                is a pop-up village for technology builders that takes over
                Shanghai for a month. Part of the global the-mu network — which
                has already landed in Chiang Mai, Buenos Aires, and Accra — the
                program brings founders, developers, and researchers together in
                a space built for work, learning, and intense networking.
              </p>
              <div className="weeks-list">
                {weeks.map((week) => (
                  <div className="week-item" key={week.number}>
                    <span className="week-num">{week.number}</span>
                    <div>
                      <div className="week-name">{week.title}</div>
                      <div className="week-desc">{week.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <aside className="event-sidebar">
              <div className="info-block">
                <div className="info-block-label">Start</div>
                <div className="info-block-value">May 10, 2026</div>
              </div>
              <div className="info-block">
                <div className="info-block-label">Duration</div>
                <div className="info-block-value">28 days</div>
              </div>
              <div className="info-block">
                <div className="info-block-label">City</div>
                <div className="info-block-value red">Shanghai, China</div>
              </div>
              <div className="info-block">
                <div className="info-block-label">Community</div>
                <div className="info-block-value">100+ builders</div>
              </div>
            </aside>
          </div>
        </section>

        <section id="value">
          <div className="section-label" data-n="03">
            What comes back with you
          </div>
          <p className="section-intro">
            As a sponsor, you're not buying generic visibility. You're investing
            in real market intelligence, direct connections, and content created
            from inside the ecosystem itself.
          </p>
          <div className="deliverables-grid">
            {deliverables.map((item) => (
              <article className="deliverable" key={item.title}>
                <div className="deliv-icon">{item.icon}</div>
                <div className="deliv-title">{item.title}</div>
                <div className="deliv-desc">{item.description}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="packages">
          <div className="section-label" data-n="04">
            Sponsorship packages
          </div>
          <p className="packages-intro">
            Three ways to
            <br />
            back the journey.
          </p>
          <div className="packages-grid">
            {packages.map((pkg) => (
              <article
                className={`package${pkg.featured ? " featured" : ""}`}
                key={pkg.name}
              >
                {pkg.featured ? <div className="package-badge">Recommended</div> : null}
                <div className="package-name">{pkg.name}</div>
                <div className="package-price">{pkg.price}</div>
                <div className="package-currency">{pkg.currency}</div>
                <ul className="package-features">
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a href="#contact" className="pkg-btn">
                  {pkg.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="section-label" data-n="05">
            Contact
          </div>
          <div className="contact-grid reveal-grid">
            <div>
              <h2 className="contact-headline">
                Want to join
                <br />
                the <em>journey?</em>
              </h2>
              <p className="contact-sub">
                If your company or fund is interested in China's tech ecosystem,
                firsthand market intelligence, or simply wants to back an
                Argentine founder building on the other side of the world — send
                me a note. Deliverables are always negotiable.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">
          mu<span>Shanghai</span>
        </div>
        <div className="footer-copy">
          Buenos Aires → Shanghai · 2026
          <br />
          A project by Tomás Deluca
        </div>
      </footer>
    </>
  );
}
