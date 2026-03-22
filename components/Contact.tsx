
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from './Section';
import { BUSINESS_INFO } from '../constants';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const SERVICE_ID = 'service_xi2ojhz';
const TEMPLATE_ID = 'template_2rtaaar';
const PUBLIC_KEY = 'rTisv9mUzGUKgvShR';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const form = formRef.current;
    (form.elements.namedItem('submitted_at') as HTMLInputElement).value =
      new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' });
    (form.elements.namedItem('page_name') as HTMLInputElement).value =
      window.location.pathname;

    setStatus('loading');

    console.log('EmailJS: sending form...', {
      service: SERVICE_ID,
      template: TEMPLATE_ID,
      fields: Object.fromEntries(new FormData(form)),
    });

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      .then((response) => {
        console.log('EmailJS: email sent successfully', response);
        setStatus('success');
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error('EmailJS: failed to send email', err);
        setStatus('error');
      });
  };

  return (
    <Section id="contact" className="pb-0 overflow-visible">
      <div className="bg-charcoal rounded-[3rem] p-8 md:p-16 lg:p-20 text-white shadow-3xl relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Build Something <span className="text-accent italic">Great?</span></h2>
            <p className="text-white/60 text-lg font-medium mb-12 max-w-md">
              Tell us what you need—we'll respond ASAP with a detailed timeline and pricing overview.
            </p>

            <div className="space-y-8">
               <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                     <Phone size={28} className="text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-xs font-black uppercase tracking-widest mb-1">Direct Call</span>
                    <span className="text-2xl font-bold group-hover:text-accent transition-colors">{BUSINESS_INFO.phone}</span>
                  </div>
               </a>
               <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                     <Mail size={28} className="text-accent group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-xs font-black uppercase tracking-widest mb-1">Email Us</span>
                    <span className="text-xl font-bold group-hover:text-accent transition-colors break-all">{BUSINESS_INFO.email}</span>
                  </div>
               </a>
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                     <MapPin size={28} className="text-accent" />
                  </div>
                  <div>
                    <span className="block text-white/40 text-xs font-black uppercase tracking-widest mb-1">Service Area</span>
                    <span className="text-xl font-bold">{BUSINESS_INFO.serviceArea}</span>
                  </div>
               </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
               <h4 className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-6">Areas We Cover</h4>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-bold text-white/60">
                  <span>Downtown Seattle</span>
                  <span>Bellevue</span>
                  <span>Kirkland</span>
                  <span>Ballard</span>
                  <span>Capitol Hill</span>
                  <span>Shoreline</span>
                  <span>Renton</span>
                  <span>Kent</span>
                  <span>Everett</span>
               </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl">
             {status === 'success' ? (
               <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                 <CheckCircle size={56} className="text-accent" />
                 <h3 className="text-2xl font-black">Message Sent!</h3>
                 <p className="text-white/60 font-medium">We'll be in touch shortly with your quote.</p>
                 <button
                   onClick={() => setStatus('idle')}
                   className="mt-4 text-accent font-black underline underline-offset-4 text-sm"
                 >
                   Send another request
                 </button>
               </div>
             ) : (
               <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden fields — must be inside the form and rendered before submit */}
                  <input type="hidden" name="submitted_at" />
                  <input type="hidden" name="page_name" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Your Name</label>
                       <input
                         type="text"
                         name="full_name"
                         required
                         className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 text-white transition-all placeholder:text-white/20"
                         placeholder="Jane Smith"
                       />
                     </div>
                     <div>
                       <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Phone Number</label>
                       <input
                         type="tel"
                         name="phone"
                         required
                         className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 text-white transition-all placeholder:text-white/20"
                         placeholder="(206) --- ----"
                       />
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Email</label>
                       <input
                         type="email"
                         name="email"
                         required
                         className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 text-white transition-all placeholder:text-white/20"
                         placeholder="jane@email.com"
                       />
                     </div>
                     <div>
                       <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">ZIP Code</label>
                       <input
                         type="text"
                         name="zip_code"
                         required
                         className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 text-white transition-all placeholder:text-white/20"
                         placeholder="98101"
                       />
                     </div>
                  </div>

                  <div>
                     <label className="block text-xs font-black uppercase tracking-widest text-white/40 mb-2">Project Type</label>
                     <select
                       name="service_needed"
                       required
                       className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-accent/50 text-white transition-all"
                     >
                        <option className="bg-charcoal">Remodeling</option>
                        <option className="bg-charcoal">Flooring</option>
                        <option className="bg-charcoal">Exterior / Deck</option>
                        <option className="bg-charcoal">Other</option>
                     </select>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-3 text-red-400 text-sm font-bold bg-red-400/10 rounded-xl px-4 py-3">
                      <AlertCircle size={18} />
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-accent hover:bg-white hover:text-charcoal text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-accent/10 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
               </form>
             )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
