import React, { useState } from "react";
import { Briefcase, Settings, RefreshCcw, Globe } from "lucide-react";

const brand = {
  gold: "#D4A017",
  black: "#0A0A0A",
  light: "#FAF7F0",
  border: "#E8DFC8",
  text: "#5E5A52",
};

// Cloudflare Pages / Vite production setup:
// put the logo at public/cyto-logo.png and reference it from the site root.
const logoSrc = "/cyto-logo-large.png.png";

function CytoLogo({ dark = false, className = "" }) {
  return (
    <div
      className={`inline-flex items-center ${className}`}
      style={dark ? { backgroundColor: "#FFFFFF", padding: "10px 14px", borderRadius: "16px" } : undefined}
    >
      <img
        src={logoSrc}
        alt="CYTO logo"
        className="h-12 w-auto object-contain block"
        style={{ maxWidth: dark ? "320px" : "280px" }}
      />
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState(() => window.location.hash === "#privacy" ? "privacy" : "home");

  const goToPage = (nextPage) => {
    setPage(nextPage);
    window.location.hash = nextPage === "privacy" ? "privacy" : "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const updateForm = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const calendlyUrl = `https://calendly.com/ryan-cytodollars/new-meeting?name=${encodeURIComponent(
    form.name
  )}&email=${encodeURIComponent(form.email)}&a1=${encodeURIComponent(
    form.company
  )}&a2=${encodeURIComponent(form.message)}`;

  const services = [
    {
      title: "Financial Advisory",
      icon: "FA",
      description:
        "Strategic financial advisory for founders, corporations, and international businesses seeking clarity in capital planning, financial structure, and long-term growth decisions.",
    },
    {
      title: "Digital Asset Advisory",
      icon: "DA",
      description:
        "Advisory on digital assets and how companies can incorporate them into treasury and financial systems to improve efficiency, diversify reserves, and support modern financial operations.",
    },
    {
      title: "Business Operations Advisory",
      icon: "BO",
      description:
        "Operational advisory focused on improving internal processes, financial workflows, and decision-making frameworks across growing organizations.",
    },
    {
      title: "Operations Restructuring",
      icon: "OR",
      description:
        "Support for companies undergoing structural change, including operational redesign, financial process improvement, and organizational realignment.",
    },
    {
      title: "International Payment Optimization",
      icon: "IP",
      description:
        "Advisory for companies operating across borders to improve payment flows, treasury coordination, and international financial operations.",
    },
    {
      title: "Counterparty Risk & Compliance Screening",
      icon: "CR",
      description:
        "We support companies with institutional-grade counterparty screening and compliance checks, leveraging industry-standard tools to assess risk exposure, strengthen onboarding decisions, and ensure regulatory alignment.",
    },
  ];

  const highlights = [
    "Corporate-focused financial advisory",
    "Support for founders, SMEs, and international businesses",
    "Experience across finance, operations, and business structuring",
    "Practical advice focused on real business outcomes",
  ];

  return (
    <div className="site">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Inter, Arial, sans-serif; background: #fff; }
        .site { background: #fff; color: ${brand.black}; min-height: 100vh; }
        .container { max-width: 1152px; margin: 0 auto; padding-left: 24px; padding-right: 24px; }
        .nav { border-bottom: 1px solid ${brand.border}; }
        .navInner { display: flex; align-items: center; justify-content: space-between; padding-top: 20px; padding-bottom: 20px; gap: 24px; }
        .navLinks { display: flex; gap: 32px; font-size: 14px; font-weight: 600; }
        .navLinks a { color: ${brand.text}; text-decoration: none; }
        .logoWrap { display: inline-flex; align-items: center; border-radius: 16px; padding: 0; }
        .logoWrap[style] { padding: 10px 14px; }
        .logo { height: 54px; max-width: 300px; object-fit: contain; display: block; }
        .hero { border-bottom: 1px solid ${brand.border}; }
        .heroGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; padding-top: 80px; padding-bottom: 80px; }
        .badge { display: inline-flex; align-items: center; border-radius: 999px; padding: 8px 16px; font-size: 14px; font-weight: 700; color: ${brand.gold}; background: rgba(212,160,23,0.12); }
        h1 { margin: 24px 0 0; font-size: 56px; line-height: 1.05; letter-spacing: -0.04em; color: ${brand.black}; }
        h2 { margin: 0; font-size: 34px; line-height: 1.18; letter-spacing: -0.02em; color: ${brand.black}; }
        h3 { margin: 0; font-size: 20px; color: ${brand.black}; }
        p { line-height: 1.7; }
        .lead { margin-top: 24px; font-size: 18px; color: ${brand.text}; }
        .buttons { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 40px; }
        .primaryBtn, .secondaryBtn, .footerBtn { display: inline-flex; align-items: center; justify-content: center; text-decoration: none; font-weight: 700; border-radius: 12px; padding: 14px 24px; transition: opacity 0.2s ease; }
        .primaryBtn, .footerBtn { background: ${brand.gold}; color: #fff; }
        .secondaryBtn { border: 1px solid ${brand.black}; color: ${brand.black}; }
        .primaryBtn:hover, .secondaryBtn:hover, .footerBtn:hover { opacity: 0.85; }
        .imageFrame { position: relative; }
        .imageGlow { position: absolute; inset: -16px; border-radius: 32px; background: rgba(212,160,23,0.10); pointer-events: none; }
        .heroImage, .aboutImage { position: relative; width: 100%; height: 420px; object-fit: cover; border-radius: 32px; box-shadow: 0 20px 60px rgba(0,0,0,0.12); display: block; }
        .section { padding-top: 80px; padding-bottom: 80px; }
        .twoCol { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
        .bodyText { margin-top: 24px; color: ${brand.text}; }
        .highlightBox { margin-top: 24px; padding: 24px; border: 1px solid ${brand.border}; border-radius: 24px; background: ${brand.light}; }
        .highlightList { list-style: none; padding: 0; margin: 0; display: grid; gap: 16px; }
        .highlightList li { display: flex; gap: 12px; align-items: flex-start; color: ${brand.black}; }
        .dot { width: 10px; height: 10px; border-radius: 999px; background: ${brand.gold}; margin-top: 7px; flex: 0 0 auto; }
        .servicesSection { border-top: 1px solid ${brand.border}; border-bottom: 1px solid ${brand.border}; background: ${brand.light}; }
        .sectionIntro { max-width: 680px; }
        .sectionIntro p { color: ${brand.text}; margin-top: 16px; }
        .servicesGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 48px; }
        .serviceCard { background: #fff; border: 1px solid ${brand.border}; border-radius: 24px; padding: 28px; }
        .serviceHeader { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
        .serviceIcon { height: 48px; width: 48px; border-radius: 14px; background: rgba(212,160,23,0.14); color: ${brand.gold}; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px; }
        .serviceCard p { color: ${brand.text}; margin: 0; }
        .footer { background: ${brand.black}; color: #fff; padding-top: 80px; padding-bottom: 80px; }
        .footerLogo { margin-bottom: 32px; }
        .footerText { color: rgba(255,255,255,0.75); max-width: 680px; margin-top: 16px; }
        .formGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 40px; }
        input, textarea { width: 100%; border: 1px solid ${brand.gold}; background: transparent; color: #fff; border-radius: 10px; padding: 14px 16px; font-size: 16px; font-family: inherit; outline: none; }
        textarea { min-height: 140px; margin-top: 16px; resize: vertical; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.65); }
        .address { margin-top: 40px; font-size: 14px; color: rgba(255,255,255,0.72); max-width: 850px; }
        .copyright { margin-top: 16px; font-size: 14px; color: rgba(255,255,255,0.55); }
        .privacyHero { border-bottom: 1px solid ${brand.border}; background: ${brand.light}; padding-top: 72px; padding-bottom: 72px; }
        .privacyContent { padding-top: 72px; padding-bottom: 72px; }
        .policyCard { background: #fff; border: 1px solid ${brand.border}; border-radius: 28px; padding: 36px; box-shadow: 0 20px 60px rgba(0,0,0,0.06); }
        .policyCard h2 { margin-top: 32px; font-size: 26px; }
        .policyCard h2:first-child { margin-top: 0; }
        .policyCard p, .policyCard li { color: ${brand.text}; line-height: 1.75; }
        .policyCard p + p { margin-top: 22px; }
        .policyCard ol, .policyCard ul { padding-left: 28px; margin-top: 16px; margin-bottom: 16px; }
        .policyCard ol { list-style-type: decimal; }
        .policyCard ul { list-style-type: disc; }
        .policyCard ol li::marker, .policyCard ul li::marker { color: ${brand.gold}; font-weight: 700; }
        .policyCard li { margin-bottom: 10px; }
        .policyContact { margin-top: 28px; padding: 20px; border-radius: 18px; background: ${brand.light}; border: 1px solid ${brand.border}; }
        .navButton { background: transparent; border: 0; color: ${brand.text}; font: inherit; font-weight: 600; cursor: pointer; padding: 0; }
        .footerLink { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 14px; background: transparent; border: 0; cursor: pointer; padding: 0; margin-top: 18px; display: inline-flex; }

        @media (max-width: 768px) {
          .container { padding-left: 20px; padding-right: 20px; }
          .navInner { flex-direction: column; text-align: center; }
          .navLinks { justify-content: center; flex-wrap: wrap; }
          .logo { height: 48px; max-width: 260px; }
          .heroGrid, .twoCol, .servicesGrid, .formGrid { grid-template-columns: 1fr; }
          .heroGrid, .section { padding-top: 56px; padding-bottom: 56px; }
          h1 { font-size: 34px; }
          h2 { font-size: 28px; }
          .lead { font-size: 16px; }
          .buttons { flex-direction: column; }
          .primaryBtn, .secondaryBtn, .footerBtn { width: 100%; }
          .heroImage, .aboutImage { height: 260px; }
        }
      `}</style>

      <header className="nav">
        <div className="container navInner">
          <CytoLogo />
          <nav className="navLinks">
            <button type="button" className="navButton" onClick={() => goToPage("home")}>Services</button>
            <button type="button" className="navButton" onClick={() => goToPage("home")}>Contact</button>
            <button type="button" className="navButton" onClick={() => goToPage("privacy")}>Privacy Policy</button>
          </nav>
        </div>
      </header>

      {page === "home" ? (
        <main>
          <section className="hero">
            <div className="container heroGrid">
              <div>
                <div className="badge">Financial Advisory • Operations • International Payments</div>
                <h1>Practical advisory for businesses managing finance, operations, and international growth.</h1>
                <p className="lead">
                  Cyto Dollars supports companies that need sharper financial clarity, stronger internal processes,
                  and more efficient international payment coordination.
                </p>
                <div className="buttons">
                  <a className="primaryBtn" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                    Schedule a Consultation
                  </a>
                  <a className="secondaryBtn" href="#services">Our Services</a>
                </div>
              </div>

              <div className="imageFrame">
                <div className="imageGlow" />
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                  alt="Business advisors meeting"
                  className="heroImage"
                />
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container twoCol">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Team collaboration"
                className="aboutImage"
              />
              <div>
                <h2>Financial and operational guidance built for real business decisions.</h2>
                <p className="bodyText">
                  Cyto Dollars works with businesses that need clear financial thinking, practical restructuring support,
                  and stronger operational discipline. We help organizations improve their financial foundations while
                  supporting growth across local and international markets.
                </p>
                <div className="highlightBox">
                  <ul className="highlightList">
                    {highlights.map((item) => (
                      <li key={item}>
                        <span className="dot" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="section servicesSection">
            <div className="container">
              <div className="sectionIntro">
                <h2>Advisory Services</h2>
                <p>
                  A focused suite of advisory services for businesses looking to strengthen finance, improve operations,
                  and optimize international business processes.
                </p>
              </div>
              <div className="servicesGrid">
                {services.map((service) => (
                  <div className="serviceCard" key={service.title}>
                    <div className="serviceHeader">
                      <ServiceIcon label={service.icon} />
                      <h3>{service.title}</h3>
                    </div>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      ) : (
        <main>
          <section className="privacyHero">
            <div className="container">
              <div className="badge">Personal Data Protection Notice</div>
              <h1>Privacy Policy</h1>
              <p className="lead">
                This notice explains how Cyto Dollars Sdn Bhd collects, processes, stores and discloses personal data pursuant to Malaysia’s Personal Data Protection Act 2010.
              </p>
            </div>
          </section>

          <section className="privacyContent">
            <div className="container">
              <article className="policyCard">
                <h2>A. Introduction</h2>
                <p>
                  Cyto Dollars Sdn Bhd (“CDSB”) is committed to the protection of your personal data in and outside of Malaysia. This Personal Data Protection Notice explains the collection, processing, storing and disclosure of your personal data pursuant to the Personal Data Protection Act 2010.
                </p>
                <p>
                  By visiting our website, interacting with us, or providing personal data to us, you are deemed to have read and consented to the use, collection, processing and storing of your personal data in the manner described in this Notice by CDSB or on behalf of CDSB.
                </p>
                <p>
                  CDSB reserves the right to change, amend and/or vary this Notice at any time. You are advised to check this Notice on our website from time to time for amendments or updates.
                </p>

                <h2>B. Collection of Personal Data</h2>
                <p>CDSB may collect your personal data upon and throughout the course of your dealings with CDSB, including but not limited to:</p>
                <ol>
                  <li>Your personal details, including details relating to other persons who may be identified from your details provided to us, such as name, identity card number, age, nationality, contact number, residential address, email address, birth date, gender, occupation, designation, bank account details and information of spouse or children.</li>
                  <li>Any sensitive personal data which may include, but is not limited to, medical conditions and medication taken by you where applicable.</li>
                  <li>Details of any person identifiable from your personal data.</li>
                  <li>Other information from which you are identifiable.</li>
                </ol>
                <p>
                  CDSB may also collect Personal Data from other sources, including events organised by CDSB and cookies used on CDSB’s website. Where you provide Personal Data of another individual, you must ensure that you have informed that individual and obtained their consent.
                </p>

                <h2>C. Purposes</h2>
                <p>Personal Data collected by CDSB may be used for the following purposes:</p>
                <ol>
                  <li>Providing services to you or responding to queries from you and/or your representative.</li>
                  <li>Internal record keeping and internal investigations.</li>
                  <li>Communicating with you.</li>
                  <li>Taxation and/or auditing purposes.</li>
                  <li>Conducting events, programmes, client promotional activities, marketing, promotional and client profiling activities.</li>
                  <li>Sending newsletters, articles and other updates.</li>
                  <li>Exercising any function or obligation imposed by law and/or towards the administration of justice.</li>
                  <li>Any purpose incidental, ancillary or in furtherance of the above purposes.</li>
                </ol>

                <h2>D. Disclosure to Third Parties</h2>
                <p>Your Personal Data may be disclosed to third parties where necessary, including:</p>
                <ol>
                  <li>External professional advisors, auditors, service and product providers and subcontractors.</li>
                  <li>Governmental departments and authorities.</li>
                  <li>Insurance agents or companies.</li>
                  <li>Banks and financial institutions.</li>
                  <li>Companies or providers of corporate advisory or due diligence services in connection with due diligence exercises carried out by CDSB.</li>
                  <li>Any assignee or transferee, whether actual or prospective, to facilitate transactions involving CDSB.</li>
                </ol>

                <h2>E. Security of Personal Data</h2>
                <p>
                  CDSB’s main data server is located in Malaysia. Where Personal Data is transferred outside Malaysia, CDSB ensures that confidentiality safeguards are in place so that your rights to personal data protection remain unaffected.
                </p>

                <h2>F. Access and Correction</h2>
                <p>
                  Personal Data must be accurate, complete, not misleading and kept up to date. If any Personal Data provided to CDSB has become inaccurate, incomplete, misleading, incorrect or out of date, you should notify CDSB using the contact details below.
                </p>
                <p>
                  Except as provided by law, you have the right to request access to and correction of your Personal Data, subject to the requirements of the Act.
                </p>

                <h2>G. Retention Standard</h2>
                <p>
                  Personal Data shall not be kept longer than necessary for the fulfilment of the purposes stated in this Notice. CDSB shall ensure that Personal Data is destroyed or permanently deleted if it is no longer required for the purposes for which it was processed.
                </p>

                <h2>H. Inquiries</h2>
                <div className="policyContact">
                  <p>For all further queries, complaints or requests, kindly contact:</p>
                  <p><strong>info@cytodollars.com</strong></p>
                </div>
              </article>
            </div>
          </section>
        </main>
      )}
      
      <section id="contact" className="py-20" style={{ backgroundColor: brand.black, color: "white" }}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <CytoLogo dark className="[&>img]:h-16" />
          </div>

          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">Speak with our advisory team.</h2>

            <p className="mt-4 text-white/75">
              If you would like to discuss your financial structure, operations, or international business needs,
              our team would be happy to connect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-10" style={{ gridTemplateColumns: isMobile ? '1fr' : undefined }}>
            <input value={form.name} onChange={(e)=>handleChange("name",e.target.value)} className="rounded-lg px-4 py-3 text-gold border" style={{ borderColor: brand.gold }} placeholder="Name" />
            <input value={form.company} onChange={(e)=>handleChange("company",e.target.value)} className="rounded-lg px-4 py-3 text-gold border" style={{ borderColor: brand.gold }} placeholder="Company" />
            <input value={form.email} onChange={(e)=>handleChange("email",e.target.value)} className="rounded-lg px-4 py-3 text-gold border" style={{ borderColor: brand.gold }} placeholder="Email" />
          </div>

          <textarea value={form.message} onChange={(e)=>handleChange("message",e.target.value)} className="mt-4 w-full rounded-lg px-4 py-3 text-gold min-h-[140px] border" style={{ borderColor: brand.gold }} placeholder="Tell us briefly about your business"></textarea>

          <a
            href={openCalendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-4 px-6 py-3 rounded-lg font-medium transition hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: brand.gold, color: "white", pointerEvents: "auto" }}
          >
            Schedule Consultation
          </a>

          <p className="mt-10 text-sm text-white/70">
            Wisma UOA 2, Level 15 Unit 13A (15-13A), No. 21, Jalan Pinang, 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia.
          </p>

          <p className="mt-10 text-sm text-white/60">
            © {new Date().getFullYear()} Cyto Dollars. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
