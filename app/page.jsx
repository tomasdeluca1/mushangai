import { ContactForm } from "../components/contact-form";

const tickerItems = [
  "Inteligencia Artificial",
  "Robótica",
  "Biotecnología",
  "Gaming & Web3",
  "ZK Proofs",
  "Founders chinos",
  "muShanghai 2026",
];

const weeks = [
  {
    number: "W1",
    title: "Inteligencia Artificial",
    description:
      "Aplicaciones, infraestructura y startups de IA en el ecosistema chino",
  },
  {
    number: "W2",
    title: "Robótica & Biotecnología",
    description:
      "Hardware, bio-engineering y las apuestas más ambiciosas del sector",
  },
  {
    number: "W3",
    title: "Gaming & ZK / MPC",
    description:
      "Bootcamp de zero-knowledge proofs, MPC y gaming onchain",
  },
  {
    number: "W4",
    title: "Cultura & Demo Day",
    description:
      "Tours tech, networking con fondos locales y presentación de proyectos",
  },
];

const deliverables = [
  {
    icon: "01",
    title: "Reporte mensual",
    description:
      "Análisis del ecosistema tech chino: startups, tendencias y oportunidades en IA, robótica y biotech. Sin intermediarios.",
  },
  {
    icon: "02",
    title: "Conexiones directas",
    description:
      "Introducciones a founders, inversores y fondos del ecosistema chino. Relaciones que desde Buenos Aires llevarían años construir.",
  },
  {
    icon: "03",
    title: "Visibilidad en redes",
    description:
      "Menciones durante el programa en Instagram y TikTok, ante una comunidad tech activa y en crecimiento.",
  },
  {
    icon: "04",
    title: "Charla interna",
    description:
      "Sesión de 60 minutos con el equipo de tu empresa al regreso, con todo lo aprendido en primera persona.",
  },
  {
    icon: "05",
    title: "Contenido técnico",
    description:
      "Posts, artículos o demos producidos durante el programa mostrando casos de uso reales con tus herramientas.",
  },
  {
    icon: "06",
    title: "Mapa de oportunidades",
    description:
      "Deal flow report con proyectos y startups relevantes del ecosistema para fondos e inversores interesados en Asia.",
  },
];

const packages = [
  {
    name: "Aliado",
    price: "1.000",
    currency: "USD — pago único",
    features: [
      "Reporte mensual del ecosistema",
      "2 menciones en redes sociales",
      "Logo en la web del proyecto",
      "Acceso al newsletter post-viaje",
    ],
    cta: "Ser Aliado",
  },
  {
    name: "Partner",
    price: "3.000",
    currency: "USD — pago único",
    features: [
      "Todo lo del paquete Aliado",
      "Intros a 3 fundadores o fondos chinos",
      "Charla interna para tu equipo (60 min)",
      "5 menciones en redes + contenido dedicado",
      "Call mensual durante el programa",
    ],
    cta: "Ser Partner",
    featured: true,
  },
  {
    name: "Sponsor Principal",
    price: "5.000+",
    currency: "USD — negociable",
    features: [
      "Todo lo del paquete Partner",
      "Co-branding en todo el contenido",
      "Reporte de deal flow completo",
      "Workshop o demo en el evento",
      "Entregables 100% a medida",
    ],
    cta: "Hablemos",
  },
];

export default function HomePage() {
  return (
    <>
      <nav>
        <div className="nav-logo">
          mu<span>Shanghai</span> · 2026
        </div>
        <a href="#contacto" className="nav-cta">
          Ser sponsor
        </a>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-bg-text">上海</div>
          <div className="hero-left">
            <div className="hero-eyebrow">Buenos Aires → Shanghái · 10 mayo 2026</div>
            <h1 className="hero-title">
              Construyendo
              <br />
              el futuro
              <br />
              <em>desde China.</em>
            </h1>
            <p className="hero-lead">
              Soy Tomás Deluca — Huevo — founder de{" "}
              <a href="https://huevsite.com" target="_blank" rel="noreferrer">
                huevsite.com
              </a>
              . En mayo 2026 voy a pasar 28 días en muShanghai — un hub de builders
              de IA, robótica y biotech en el corazón del ecosistema tech chino.
              Estoy buscando sponsors que quieran ser parte de este viaje.
            </p>
            <div className="hero-actions">
              <a href="#contacto" className="btn-primary">
                Quiero ser sponsor
              </a>
              <a href="#programa" className="btn-secondary">
                Ver el programa
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="stat-card accent">
              <div className="stat-number">28</div>
              <div className="stat-label">Días en Shanghái</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Builders del mundo</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Semanas temáticas</div>
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

        <section id="sobre-mi">
          <div className="section-label" data-n="01">
            Quién soy
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
                <span className="tag">IA / ML</span>
                <span className="tag">Product</span>
                <span className="tag">Startups</span>
                <span className="tag">Buenos Aires</span>
              </div>
            </div>
            <div>
              <p className="about-text">
                Soy founder con base en Buenos Aires, construyendo{" "}
                <a href="https://huevsite.com" target="_blank" rel="noreferrer">
                  <strong>huevsite.com</strong>
                </a>{" "}
                — una alternativa a Linktree para{" "}
                <strong>
                  profesionales que quieren mostrar su trabajo de forma visualmente
                  atractiva
                </strong>
                , con foco en armar ecosistema tech en Argentina y Latam.
              </p>
              <p className="about-text">
                muShanghai no es solo un programa — es una oportunidad de estar{" "}
                <strong>
                  28 días embedded en el ecosistema tech más dinámico del mundo
                </strong>
                , junto a builders que están construyendo el futuro desde China.
                Quiero llevarte conmigo.
              </p>
            </div>
          </div>
        </section>

        <section id="programa">
          <div className="section-label" data-n="02">
            El programa
          </div>
          <div className="event-grid reveal-grid">
            <div>
              <h2 className="event-headline">
                28 días viviendo
                <br />
                en el <em>epicentro</em>
                <br />
                tech de China.
              </h2>
              <p className="event-text">
                <a href="https://muShanghai.xyz" target="_blank" rel="noreferrer">
                  muShanghai
                </a>{" "}
                es un pop-up village para builders de tecnología que se instala en
                Shanghái durante un mes. Parte de la red global the-mu — que ya pasó
                por Chiang Mai, Buenos Aires y Accra — este programa reúne founders,
                developers e investigadores en un espacio de trabajo, aprendizaje y
                networking intensivo.
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
                <div className="info-block-label">Inicio</div>
                <div className="info-block-value">10 mayo 2026</div>
              </div>
              <div className="info-block">
                <div className="info-block-label">Duración</div>
                <div className="info-block-value">28 días</div>
              </div>
              <div className="info-block">
                <div className="info-block-label">Ciudad</div>
                <div className="info-block-value red">Shanghái, China</div>
              </div>
              <div className="info-block">
                <div className="info-block-label">Comunidad</div>
                <div className="info-block-value">100+ builders</div>
              </div>
            </aside>
          </div>
        </section>

        <section id="valor">
          <div className="section-label" data-n="03">
            Lo que traés de vuelta
          </div>
          <p className="section-intro">
            Como sponsor, no estás comprando visibilidad genérica. Estás invirtiendo
            en inteligencia de mercado real, conexiones directas y contenido
            generado desde adentro del ecosistema.
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

        <section id="paquetes">
          <div className="section-label" data-n="04">
            Paquetes de sponsorship
          </div>
          <p className="packages-intro">
            Tres formas de
            <br />
            acompañar el viaje.
          </p>
          <div className="packages-grid">
            {packages.map((pkg) => (
              <article
                className={`package${pkg.featured ? " featured" : ""}`}
                key={pkg.name}
              >
                {pkg.featured ? <div className="package-badge">Recomendado</div> : null}
                <div className="package-name">{pkg.name}</div>
                <div className="package-price">{pkg.price}</div>
                <div className="package-currency">{pkg.currency}</div>
                <ul className="package-features">
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a href="#contacto" className="pkg-btn">
                  {pkg.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto">
          <div className="section-label" data-n="05">
            Contacto
          </div>
          <div className="contact-grid reveal-grid">
            <div>
              <h2 className="contact-headline">
                ¿Te sumás
                <br />
                al <em>viaje?</em>
              </h2>
              <p className="contact-sub">
                Si tu empresa o fondo tiene interés en el ecosistema tech chino, en
                inteligencia de mercado de primera mano, o simplemente querés apoyar
                a un founder argentino que va a construir al otro lado del mundo —
                escribime. Los entregables son siempre negociables.
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
          Buenos Aires → Shanghái · 2026
          <br />
          Un proyecto de Tomás Deluca
        </div>
      </footer>
    </>
  );
}
