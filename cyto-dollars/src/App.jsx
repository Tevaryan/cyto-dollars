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
const logoSrc = "/cyto-logo.png";

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

export default function CytoDollarsSite() {
  // Form state for Calendly
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const calendlyUrl = `https://calendly.com/ryan-cytodollars/new-meeting?name=${encodeURIComponent(form.name)}&email=${encodeURIComponent(form.email)}&a1=${encodeURIComponent(form.company)}&a2=${encodeURIComponent(form.message)}`;

  const openCalendly = calendlyUrl; // direct link for reliability
  // Mobile-friendly tweaks via media query
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
  const services = [
    {
      title: "Financial Advisory",
      icon: Briefcase,
      description:
        "Strategic financial advisory for founders, corporations, and international businesses seeking clarity in capital planning, financial structure, and long-term growth decisions.",
    },
    {
      title: "Digital Asset Advisory",
      icon: Briefcase,
      description:
        "Advisory on digital assets and how companies can incorporate them into treasury and financial systems to improve efficiency, diversify reserves, and support modern financial operations.",
    },
    {
      title: "Business Operations Advisory",
      icon: Settings,
      description:
        "Operational advisory focused on improving internal processes, financial workflows, and decision-making frameworks across growing organizations.",
    },
    {
      title: "Operations Restructuring",
      icon: RefreshCcw,
      description:
        "Support for companies undergoing structural change, including operational redesign, financial process improvement, and organizational realignment.",
    },
    {
      title: "International Payment Optimization",
      icon: Globe,
      description:
        "Advisory for companies operating across borders to improve payment flows, treasury coordination, and international financial operations.",
    },
  ];

  const highlights = [
    "Corporate-focused financial advisory",
    "Support for founders, SMEs, and international businesses",
    "Experience across finance, operations, and business structuring",
    "Practical advice focused on real business outcomes",
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFFFF", color: brand.black }}>
      <div className="border-b" style={{ borderColor: brand.border }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center" style={{ flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '12px' : '0' }}>
          <CytoLogo className="[&>img]:h-14" />
          <div className="flex gap-8 text-sm font-medium" style={{ color: brand.text, flexWrap: isMobile ? 'wrap' : 'nowrap', justifyContent: isMobile ? 'center' : 'flex-end' }}>
            <a href="#services" className="hover:opacity-70 transition">Services</a>
            <a href="#contact" className="hover:opacity-70 transition">Contact</a>
          </div>
        </div>
      </div>

      <section className="border-b" style={{ borderColor: brand.border }}>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 grid lg:grid-cols-2 gap-14 items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : undefined }}>
          <div>
            <div
              className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
              style={{ backgroundColor: "rgba(212,160,23,0.12)", color: brand.gold }}
            >
              Financial Advisory • Operations • International Payments
            </div>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl" style={{ fontSize: isMobile ? '32px' : undefined, color: brand.black }}>
              Practical advisory for businesses managing finance, operations, and international growth.
            </h1>

            <p className="mt-6 text-lg leading-8" style={{ color: brand.text }}>
              Cyto Dollars supports companies that need sharper financial clarity, stronger internal processes,
              and more efficient international payment coordination.
            </p>

            <div className="mt-10 flex gap-4 flex-wrap" style={{ flexDirection: isMobile ? 'column' : 'row' }}>
              <a
                href={openCalendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white font-medium transition hover:opacity-90 cursor-pointer"
                style={{ backgroundColor: brand.gold, pointerEvents: "auto" }}
              >
                Schedule a Consultation
              </a>

              <a
                href="#services"
                className="rounded-xl border px-6 py-3 font-medium transition hover:bg-black/5"
                style={{ borderColor: brand.black, color: brand.black }}
              >
                Our Services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] opacity-80" style={{ backgroundColor: "rgba(212,160,23,0.10)", pointerEvents: "none" }} />
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
              alt="business advisors meeting"
              className="relative rounded-[2rem] shadow-lg object-cover w-full h-[420px]" style={{ height: isMobile ? '260px' : '420px' }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ gridTemplateColumns: isMobile ? '1fr' : undefined }}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="team collaboration"
              className="rounded-[2rem] shadow-lg w-full h-[420px] object-cover" style={{ height: isMobile ? '260px' : '420px' }}
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold" style={{ color: brand.black }}>
              Financial and operational guidance built for real business decisions.
            </h2>

            <p className="mt-6 leading-7" style={{ color: brand.text }}>
              Cyto Dollars works with businesses that need clear financial thinking, practical restructuring support,
              and stronger operational discipline. We help organizations improve their financial foundations while
              supporting growth across local and international markets.
            </p>

            <div className="rounded-[1.5rem] p-6 border mt-6" style={{ backgroundColor: brand.light, borderColor: brand.border }}>
              <ul className="space-y-4">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="w-2.5 h-2.5 rounded-full mt-2" style={{ backgroundColor: brand.gold }} />
                    <span style={{ color: brand.black }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y" style={{ borderColor: brand.border, backgroundColor: brand.light }}>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold" style={{ color: brand.black }}>
              Advisory Services
            </h2>

            <p className="mt-4" style={{ color: brand.text }}>
              A focused suite of advisory services for businesses looking to strengthen finance, improve operations,
              and optimize international business processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12" style={{ gridTemplateColumns: isMobile ? '1fr' : undefined }}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-[1.5rem] p-7 border bg-white"
                  style={{ borderColor: brand.border }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl" style={{ backgroundColor: "rgba(212,160,23,0.14)" }}>
                      <Icon className="w-6 h-6" style={{ color: brand.gold }} />
                    </div>

                    <h3 className="text-xl font-semibold" style={{ color: brand.black }}>
                      {service.title}
                    </h3>
                  </div>

                  <p style={{ color: brand.text }} className="leading-7">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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

          <p className="mt-10 text-sm text-white/60">
            © {new Date().getFullYear()} Cyto Dollars. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}
