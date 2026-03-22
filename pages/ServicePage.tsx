import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICE_DETAILS } from '../serviceDetails';
import { ArrowLeft, CheckCircle2, Phone, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_xi2ojhz';
const EMAILJS_TEMPLATE_ID = 'template_2rtaaar';
const EMAILJS_PUBLIC_KEY = 'rTisv9mUzGUKgvShR';

const ServicePage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = SERVICE_DETAILS.find(s => s.id === serviceId);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (service) {
      // Update page title and meta description for SEO
      document.title = service.seoTitle;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', service.seoDescription);
      }

      // Add keywords meta tag
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', service.seoKeywords.join(', '));

      // Update Open Graph meta tags for social sharing
      const ogUrl = `https://royalqualityconstructionllc.com/services/${service.id}`;
      const ogImage = `https://royalqualityconstructionllc.com${service.image}`;

      const updateOrCreateMeta = (property: string, content: string) => {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      updateOrCreateMeta('og:type', 'website');
      updateOrCreateMeta('og:url', ogUrl);
      updateOrCreateMeta('og:title', service.seoTitle);
      updateOrCreateMeta('og:description', service.seoDescription);
      updateOrCreateMeta('og:image', ogImage);
      updateOrCreateMeta('og:image:width', '1200');
      updateOrCreateMeta('og:image:height', '630');
      updateOrCreateMeta('og:image:alt', `${service.title} - Royal Quality Construction LLC`);

      // Update Twitter meta tags for social sharing
      updateOrCreateMeta('twitter:card', 'summary_large_image');
      updateOrCreateMeta('twitter:url', ogUrl);
      updateOrCreateMeta('twitter:title', service.seoTitle);
      updateOrCreateMeta('twitter:description', service.seoDescription);
      updateOrCreateMeta('twitter:image', ogImage);
      updateOrCreateMeta('twitter:image:alt', `${service.title} - Royal Quality Construction LLC`);

      // Add JSON-LD structured data for SEO
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.seoDescription,
        "provider": {
          "@type": "LocalBusiness",
          "name": BUSINESS_INFO.name,
          "telephone": BUSINESS_INFO.phone,
          "email": BUSINESS_INFO.email,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Seattle",
            "addressRegion": "WA",
            "addressCountry": "US"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Seattle"
            },
            {
              "@type": "City",
              "name": "Tacoma"
            },
            {
              "@type": "City",
              "name": "Puyallup"
            }
          ]
        },
        "image": ogImage,
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD"
          }
        }
      });
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Service Not Found</h1>
          <Link to="/" className="text-accent hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <button
          onClick={() => navigate('/#services')}
          className="flex items-center gap-2 text-charcoal/60 hover:text-accent transition-colors font-semibold"
        >
          <ArrowLeft size={20} />
          Back to Services
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Premium Service
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-charcoal leading-tight mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-charcoal/70 mb-8 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#quote"
                  className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Request Free Quote
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="bg-charcoal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-charcoal/90 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-accent text-white p-4 rounded-2xl shadow-xl">
                {service.icon}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-charcoal mb-4">
              {service.process.title}
            </h2>
            <p className="text-xl text-charcoal/60">
              From consultation to completion, we guide you every step of the way
            </p>
          </div>
          <div className="space-y-8">
            {service.process.steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal mb-2">{step.title}</h3>
                  <p className="text-charcoal/70 text-lg leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Why Choose <span className="text-accent italic">Royal Quality</span>
            </h2>
            <p className="text-xl text-white/60">
              Trusted by homeowners across Seattle, Tacoma, and Puyallup
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-accent/50 transition-all"
              >
                <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                <p className="text-lg font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-charcoal mb-6">Proudly Serving</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Seattle', 'Tacoma', 'Puyallup', 'Bellevue', 'Kirkland', 'Renton', 'Kent', 'Federal Way'].map((city) => (
                <div
                  key={city}
                  className="bg-white px-6 py-3 rounded-full font-bold text-charcoal shadow-md"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="bg-cream p-10 rounded-3xl shadow-2xl border border-charcoal/10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-extrabold text-charcoal mb-4">
                Request Your Free Quote
              </h2>
              <p className="text-xl text-charcoal/60">
                Get a detailed estimate within 24 hours
              </p>
            </div>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-2">Request Sent!</h3>
                <p className="text-charcoal/60 mb-6">
                  Thanks! We'll get back to you with a detailed estimate within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-accent font-bold hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Hidden fields required by EmailJS template */}
                <input type="hidden" name="service_needed" value={service.title} />
                <input type="hidden" name="submitted_at" value={new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} />
                <input type="hidden" name="page_name" value={`Service Page - ${service.title}`} />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-charcoal/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-white border border-charcoal/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal/80 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(206) 555-0123"
                      required
                      className="w-full bg-white border border-charcoal/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white border border-charcoal/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-charcoal/80 mb-2">
                      City *
                    </label>
                    <select
                      required
                      className="w-full bg-white border border-charcoal/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    >
                      <option value="">Select City</option>
                      <option value="Seattle">Seattle</option>
                      <option value="Tacoma">Tacoma</option>
                      <option value="Puyallup">Puyallup</option>
                      <option value="Bellevue">Bellevue</option>
                      <option value="Kirkland">Kirkland</option>
                      <option value="Renton">Renton</option>
                      <option value="Kent">Kent</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-charcoal/80 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zip_code"
                      placeholder="98101"
                      required
                      className="w-full bg-white border border-charcoal/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal/80 mb-2">
                    Service Needed
                  </label>
                  <input
                    type="text"
                    value={service.title}
                    readOnly
                    className="w-full bg-white border border-charcoal/10 rounded-xl px-4 py-3.5 text-charcoal/60"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-charcoal/80 mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border border-charcoal/10 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm font-medium text-center">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-lg shadow-accent/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'sending' ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-charcoal/10">
              <div className="text-center">
                <p className="text-charcoal/60 mb-4 font-medium">
                  Prefer to speak directly?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 text-accent font-bold hover:underline"
                  >
                    <Phone size={20} />
                    {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="inline-flex items-center justify-center gap-2 text-accent font-bold hover:underline"
                  >
                    <Mail size={20} />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
