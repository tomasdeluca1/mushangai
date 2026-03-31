"use client";

import { useEffect, useState } from "react";
import { ContactForm } from "./contact-form";
import { defaultLanguage, getTranslation, languageOptions } from "../lib/translations";

const STORAGE_KEY = "mushangai-language";

export function HomePage() {
  const [language, setLanguage] = useState(defaultLanguage);
  const content = getTranslation(language);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = content.htmlLang;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [content.htmlLang, language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav>
        <div className="nav-brand">
          <div className="nav-logo">
            mu<span>Shanghai</span> · 2026
          </div>
          <div className="language-switcher" aria-label="Language switcher">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                className={`language-option${language === option.code ? " active" : ""}`}
                onClick={() => setLanguage(option.code)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <a href="#contact" className="nav-cta">
          {content.navCta}
        </a>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-bg-text">上海</div>
          <div className="hero-left">
            <div className="hero-eyebrow">{content.heroEyebrow}</div>
            <h1 className="hero-title">
              {content.heroTitle[0]}
              <br />
              {content.heroTitle[1]}
              <br />
              <em>{content.heroTitle[2]}</em>
            </h1>
            <p className="hero-lead">
              {content.heroLeadBefore}
              <a href="https://huevsite.com" target="_blank" rel="noreferrer">
                huevsite.com
              </a>
              {content.heroLeadAfter}
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                {content.heroPrimary}
              </a>
              <a href="#program" className="btn-secondary">
                {content.heroSecondary}
              </a>
            </div>
          </div>
          <div className="hero-right">
            {content.stats.map((stat, index) => (
              <div className={`stat-card${index === 0 ? " accent" : ""}`} key={stat.label}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-inner">
            {[...content.tickerItems, ...content.tickerItems].map((item, index) => (
              <span className="ticker-item" key={`${language}-${item}-${index}`}>
                <span>·</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <section id="about">
          <div className="section-label" data-n="01">
            {content.aboutSectionLabel}
          </div>
          <div className="about-grid reveal">
            <div>
              <div className="founder-photo">
                <img src="/founder.jpg" alt="Tomás Deluca" />
              </div>
              <div className="about-name">
                Tomás
                <br />
                Deluca
              </div>
              <div className="about-role">{content.aboutRole}</div>
              <div className="about-tags">
                {content.aboutTags.map((tag) => (
                  <span className="tag" key={`${language}-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <blockquote className="about-quote">{content.aboutQuote}</blockquote>
              <p className="about-text">
                {content.aboutStoryBefore}
                <a href="https://huevsite.io" target="_blank" rel="noreferrer">
                  <strong>huevsite.io</strong>
                </a>
                {content.aboutStoryAfter}
              </p>
              <p className="about-text about-challenge">{content.aboutChallenge}</p>
              <div className="proof-strip">
                <p className="proof-intro">{content.socialProofIntro}</p>
                <div className="proof-links">
                  {content.socialLinks.map((link) => (
                    <a
                      key={`${language}-${link.label}`}
                      className="proof-link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{link.label}</span>
                      <small>{link.meta}</small>
                    </a>
                  ))}
                </div>
                <div className="proof-examples">
                  <div className="proof-examples-label">{content.contentExamplesLabel}</div>
                  <div className="proof-example-list">
                    {content.contentExamples.map((example) => (
                      <a
                        key={`${language}-${example.title}`}
                        className="proof-example"
                        href={example.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{example.title}</span>
                        <small>{example.meta}</small>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="program">
          <div className="section-label" data-n="02">
            {content.programSectionLabel}
          </div>
          <div className="event-grid reveal">
            <div>
              <h2 className="event-headline">
                {content.programHeadline[0]}
                <br />
                {content.programHeadline[1]} <em>{content.programHeadline[2]}</em>
                <br />
                {content.programHeadline[3]}
              </h2>
              <p className="event-text">
                <a href="https://muShanghai.xyz" target="_blank" rel="noreferrer">
                  muShanghai
                </a>
                {content.programTextAfterLink}
              </p>
              <div className="weeks-list">
                {content.weeks.map((week) => (
                  <div className="week-item" key={`${language}-${week.number}`}>
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
              {content.sidebar.map((item) => (
                <div className="info-block" key={`${language}-${item.label}`}>
                  <div className="info-block-label">{item.label}</div>
                  <div className={`info-block-value${item.accent ? " red" : ""}`}>
                    {item.value}
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section id="results">
          <div className="section-label" data-n="03">
            {content.resultsSectionLabel}
          </div>
          <div className="results-content reveal">
            <h2 className="results-headline">
              {content.resultsHeadline[0]}
              <br />
              <em>{content.resultsHeadline[1]}</em>
            </h2>
            <p className="section-intro">{content.resultsIntro}</p>
          </div>
          <div className="results-grid reveal">
            {content.results.map((item) => (
              <div className="result-card" key={`${language}-${item.label}`}>
                <div className="result-metric">{item.metric}</div>
                <div className="result-label">{item.label}</div>
                <div className="result-desc">{item.description}</div>
              </div>
            ))}
          </div>
          <p className="results-note reveal">{content.resultsNote}</p>
        </section>

        <section id="value">
          <div className="section-label" data-n="04">
            {content.valueSectionLabel}
          </div>
          <p className="section-intro reveal">{content.valueIntro}</p>
          <div className="deliverables-grid reveal">
            {content.deliverables.map((item) => (
              <article className="deliverable" key={`${language}-${item.title}`}>
                <div className="deliv-icon">{item.icon}</div>
                <div className="deliv-title">{item.title}</div>
                <div className="deliv-desc">{item.description}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="china-content">
          <div className="section-label" data-n="05">
            {content.correspondentSectionLabel}
          </div>
          <div className="branded-grid reveal">
            <div>
              <h2 className="packages-intro">
                {content.correspondentIntro[0]}
                <br />
                {content.correspondentIntro[1]}
              </h2>
              <p className="section-intro">{content.correspondentBody}</p>
              <p className="branded-note">{content.correspondentNote}</p>
              <p className="branded-audience">{content.correspondentAudience}</p>
            </div>
            <article className="branded-card">
              <div className="package-badge">{content.recommended}</div>
              <ul className="branded-list">
                {content.correspondentDeliverables.map((item) => (
                  <li key={`${language}-${item}`}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className="pkg-btn branded-btn">
                {content.correspondentCta}
              </a>
            </article>
          </div>
        </section>

        <section id="packages">
          <div className="section-label" data-n="06">
            {content.packagesSectionLabel}
          </div>
          <p className="packages-intro reveal">
            {content.packagesIntro[0]}
            <br />
            {content.packagesIntro[1]}
          </p>
          <div className="packages-grid reveal">
            {content.packages.map((pkg) => (
              <article className={`package${pkg.featured ? " featured" : ""}`} key={`${language}-${pkg.name}`}>
                {pkg.featured ? <div className="package-badge">{content.recommended}</div> : null}
                <div className="package-name">{pkg.name}</div>
                <div className="package-price">{pkg.price}</div>
                <div className="package-currency">{pkg.currency}</div>
                <ul className="package-features">
                  {pkg.features.map((feature) => (
                    <li key={`${language}-${feature}`}>{feature}</li>
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
          <div className="section-label" data-n="07">
            {content.contactSectionLabel}
          </div>
          <div className="contact-grid reveal">
            <div>
              <h2 className="contact-headline">
                {content.contactHeadline[0]}
                <br />
                <em>{content.contactHeadline[1]}</em>
              </h2>
              <p className="contact-sub">{content.contactSub}</p>
            </div>
            <ContactForm language={language} copy={content.form} />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">
          mu<span>Shanghai</span>
        </div>
        <div className="footer-copy">
          {content.footerCopy[0]}
          <br />
          {content.footerCopy[1]}
        </div>
      </footer>
    </>
  );
}
