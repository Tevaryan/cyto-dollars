import React, { useState } from "react";

const brand = {
  gold: "#D4A017",
  black: "#0A0A0A",
  light: "#FAF7F0",
  border: "#E8DFC8",
  text: "#5E5A52",
};

const logoSrc = "/cyto-logo-large.png.png";

function CytoLogo({ dark = false }) {
  return (
    <div className="logoWrap" style={dark ? { backgroundColor: "#fff" } : undefined}>
      <img src={logoSrc} alt="Cyto Dollars logo" className="logo" />
    </div>
  );
}

function ServiceIcon({ label }) {
  return (
    <div className="serviceIcon" aria-hidden="true">
      {label}
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
    // {
    //   title: "Digital Asset Advisory",
    //   icon: "DA",
    //   description:
    //     "Advisory on digital assets and how companies can incorporate them into treasury and financial systems to improve efficiency, diversify reserves, and support modern financial operations.",
    // },
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
        .policyCard h2 { margin-top: 32px; margin-bottom: 20px; font-size: 26px; }
        .policyCard h2:first-child { margin-top: 0; }
        .policyCard p, .policyCard li { color: ${brand.text}; line-height: 1.75; }
        .policyCard p + p { margin-top: 22px; }
        .policyCard > p { padding-left: 32px; }
        .policyCard > h2 + p { padding-left: 32px; }
        .policyCard .numberedParagraph { padding-left: 32px; }
        .policyCard .policyRoman { list-style-type: lower-roman; padding-left: 96px; margin-top: 16px; margin-bottom: 16px; }
        .policyCard .policyRoman li { padding-left: 8px; }
        .policyCard ul { list-style-type: disc; padding-left: 96px; margin-top: 16px; margin-bottom: 16px; }
        .policyCard .policyContact p { padding-left: 0; }
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
                  Cyto Dollars Sdn Bhd (“CDSB“) is committed to the protection of your personal
                  data in and outside of Malaysia. This personal data protection notice
                  (“Notice“) explains the collection, processing, storing and disclosure of your
                  personal data pursuant to the Personal Data Protection Act 2010 (“Act”).
                </p>

                <p>
                  By visiting our website or by interacting with us or by providing your personal
                  data to us, you are deemed to have read and consent to the using, collecting,
                  processing and storing of your personal data in the manner described in this
                  Notice by the CDSB or on behalf of the CDSB.
                </p>

                <p>
                  Kindly note that the CDSB reserves the right to change, amend and/or vary this
                  Notice at any time. You are advised to check this Notice on our website from
                  time to time for amendments or updates. By continuing to communicate with
                  the CDSB, you signify your acceptance to such amendments and updates.
                </p>

                <h2>B. Collection of Personal Data</h2>

                <p className="numberedParagraph">
                  1. The CDSB will collect your personal data upon and throughout the course
                  of your dealings with the CDSB including, but not limited to:-
                </p>

                <ol className="policyRoman" type="i">
                  <li>
                    Your personal details, including details relating to other person(s)
                    who may be identified from your details provided to us, such as
                    name, identity card number, age, nationality, contact number,
                    residential address, e-mail address, birth date, gender, occupation,
                    designation, bank account details and information of spouse/
                    children;
                  </li>

                  <li>
                    Any sensitive personal data which may include but not limited to
                    medical conditions and medication taken by you (where
                    applicable);
                  </li>

                  <li>
                    Details of any person(s) identifiable from your personal data;
                    and/or
                  </li>

                  <li>
                    Other information from which you are identifiable from.
                  </li>
                </ol>

                <p>(Collectively referred to as “Personal Data“)</p>

                <p className="numberedParagraph">
                  2. In addition to the Personal Data you provide to the CDSB directly, the
                  CDSB may also collect your Personal Data from a variety of other sources,
                  including without limitation at any events organised by the CDSB and/or
                  from the cookies used on the CDSB’s website.
                </p>

                <p className="numberedParagraph">
                  3. Where you have provided Personal Data of another individual (“Third
                  Party“), you must ensure that you have informed the Third Party that you
                  are providing the Third Party’s Personal Data to us, and have obtained
                  the Third Party’s consent to do so.
                </p>

                <p className="numberedParagraph">
                  4. Kindly note that it would be obligatory for you to provide us with the
                  abovementioned Personal Data for us to fulfil the purposes as provided
                  for in Paragraph 5.
                </p>

                <h2>C. Purposes</h2>

                <p className="numberedParagraph">
                  5. Personal Data collected by the CDSB may be used for, but not limited to
                  the following purposes:-
                </p>

                <ol className="policyRoman" type="i">
                  <li>Providing services to you or responding to any query from you and/or your representative;</li>
                  <li>The CDSB’s internal record keeping;</li>
                  <li>The CDSB’s internal investigations;</li>
                  <li>Communicating with you;</li>
                  <li>Taxation and/or auditing purposes;</li>
                  <li>
                    Conducting events and programmes, client promotional activities,
                    marketing, promotional and client profiling activities in
                    connection with our services;
                  </li>
                  <li>Sending material such as newsletters, articles and other updates;</li>
                  <li>
                    For the exercise of any functions conferred or obligation imposed
                    on any person by law and/or towards the administration of justice;
                    and/or
                  </li>
                  <li>
                    For any purpose incidental, ancillary or in furtherance to the
                    abovementioned purposes.
                  </li>
                </ol>

                <p>(collectively referred to as “Purposes”)</p>

                <p>
                  If you do not consent to the CDSB processing your Personal Data or the Personal
                  Data of any person which may be identified from the Personal Data provided to
                  the CDSB for any of the Purposes listed in this Notice, please notify the CDSB
                  using the contact details stated in Section H below.
                </p>

                <h2>D. Disclosure to Third Parties</h2>

                <p className="numberedParagraph">
                  6. If and when necessary, your Personal Data may be disclosed to the
                  following third-parties:-
                </p>

                <ol className="policyRoman" type="i">
                  <li>External professional advisors, auditors, service & product providers and subcontractors;</li>
                  <li>Governmental departments and authorities;</li>
                  <li>Insurance agents or companies;</li>
                  <li>Banks and financial institutions;</li>
                  <li>
                    CDSBs or providers of corporate advisory services or due diligence
                    services in connection with due diligence exercises that may be
                    carried out by the CDSB; and/or
                  </li>
                  <li>
                    Any assignee or transferee (whether actual or prospective) to
                    facilitate any transactions involving the CDSB.
                  </li>
                </ol>

                <h2>E. Security of Personal Data</h2>

                <p className="numberedParagraph">
                  7. The CDSB’s main data server is located in Malaysia. In the event that your
                  Personal Data is transferred to a location outside of Malaysia, the CDSB
                  ensures that confidentiality safeguards have been put in place to ensure
                  your rights to personal data protection remains unaffected. Where we
                  consider it necessary or appropriate for the purposes of data storage or
                  processing or providing any service or deliverable on our behalf to you,
                  we may transfer Personal Data to a third-party service or product
                  providers within or outside the country in which we are established,
                  under conditions of confidentiality and similar levels of security
                  safeguards.
                </p>

                <h2>F. Access and Correction</h2>

                <p className="numberedParagraph">
                  8. The Personal Data must be accurate, complete, not misleading and kept
                  up-to-date. Should you be made aware of any inaccurate, incomplete or
                  misleading Personal Data or where the Personal Data provided to the CDSB
                  earlier have become incorrect or out of date, kindly notify the CDSB at the
                  details provided for in paragraph 11.
                </p>

                <p className="numberedParagraph">
                  9. Except as provided by law, you have the right to request access and
                  correct your Personal Data. Such request however, may be subject to the
                  requirements in the Act.
                </p>

                <h2>G. Retention Standard</h2>

                <p className="numberedParagraph">
                  10. Any Personal Data shall not be kept longer than is necessary for the
                  fulfilment of the Purposes mentioned in this Notice. The CDSB shall
                  undertake to ensure that all Personal Data is destroyed or permanently
                  deleted if it is no longer required for the Purposes for which it was to be
                  processed.
                </p>

                <h2>H. Inquiries</h2>

                <div className="policyContact">
                  <p>
                    11. For all further queries, complaints or request(s), kindly attention them to
                    the following email:-
                  </p>

                  <p><strong>info@cytodollars.com</strong></p>
                </div>
              </article>
            </div>
          </section>
        </main>
      )}

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footerLogo">
            <CytoLogo dark />
          </div>
          <h2 style={{ color: "#fff" }}>Speak with our advisory team.</h2>
          <p className="footerText">
            If you would like to discuss your financial structure, operations, or international business needs,
            our team would be happy to connect.
          </p>

          <div className="formGrid">
            <input value={form.name} onChange={(e) => updateForm("name", e.target.value)} placeholder="Name" />
            <input value={form.company} onChange={(e) => updateForm("company", e.target.value)} placeholder="Company" />
            <input value={form.email} onChange={(e) => updateForm("email", e.target.value)} placeholder="Email" />
          </div>
          <textarea
            value={form.message}
            onChange={(e) => updateForm("message", e.target.value)}
            placeholder="Tell us briefly about your business"
          />
          <a className="footerBtn" href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Schedule Consultation
          </a>

           <p>
            CYTO DOLLARS SDN BHD (202601004652 (1666749-A))
          </p>

          <p className="address">
            Wisma UOA 2, Level 15 Unit 13A (15-13A), No. 21, Jalan Pinang, 50450 Kuala Lumpur,
            Wilayah Persekutuan Kuala Lumpur, Malaysia.
          </p>
          <button type="button" className="footerLink" onClick={() => goToPage("privacy")}>Privacy Policy</button>
          <p className="copyright">© {new Date().getFullYear()} Cyto Dollars. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
