import { useState } from 'react'
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Grid2X2,
  Hammer,
  Layers3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  SquareStack,
  Star,
} from 'lucide-react'
import { CalculatorPage } from './pages/CalculatorPage.jsx'
import { SiteFooter } from './components/SiteFooter.jsx'
import { SiteHeader } from './components/SiteHeader.jsx'
import { LegalPage } from './pages/LegalPage.jsx'
import { privacyPolicy, termsOfUse } from './legalContent.js'
import { siteSeo, usePageSeo } from './seo.js'

const services = [
  { icon: SquareStack, title: 'Standard Concrete Slabs', copy: 'Prepared, reinforced and professionally finished slabs for garages, workshops and utility areas.' },
  { icon: Grid2X2, title: 'Concrete Driveways', copy: 'Durable driveway construction with excavation, compacted base, reinforcement and control joints.' },
  { icon: Sparkles, title: 'Concrete Patios', copy: 'Clean, well-drained patio surfaces finished for comfortable outdoor living.' },
  { icon: Layers3, title: 'Concrete Sidewalks', copy: 'Precisely formed walks and pathways with a stable base and dependable finish.' },
  { icon: SquareStack, title: 'Concrete Steps', copy: 'Reinforced concrete steps with accurate formwork, edges and surface finishing.' },
  { icon: Building2, title: 'Concrete Foundations', copy: 'Layout, reinforcement, placement and finishing for structural concrete foundation work.' },
  { icon: Grid2X2, title: 'Garage Floors', copy: 'Machine-finished garage slabs with proper compaction, reinforcement and control joints.' },
  { icon: Sparkles, title: 'Stamped Concrete', copy: 'Decorative stamped surfaces with premium finishing, colouring and protective sealer.' },
  { icon: Layers3, title: 'Exposed Aggregate', copy: 'Textured aggregate concrete with professional surface washing and sealing.' },
  { icon: Hammer, title: 'Concrete Replacement', copy: 'Removal, hauling, base correction and complete replacement of worn concrete.' },
]

const serviceImages = {
  'Standard Concrete Slabs': '/assets/concrete-garage.webp',
  'Concrete Driveways': '/assets/concrete-hero.webp',
  'Concrete Patios': '/assets/concrete-patio.webp',
  'Concrete Sidewalks': '/assets/concrete-stamped.webp',
  'Concrete Steps': '/assets/concrete-stamped.webp',
  'Concrete Foundations': '/assets/concrete-hero.webp',
}

const advantages = [
  ['02', '2-Year Workmanship Warranty', 'Confidence in the quality of our installation, well beyond project completion.'],
  ['01', 'Fully Insured', 'Responsible work carried out with the protection your property deserves.'],
  ['03', 'Residential & Commercial', 'A considered approach for homes, businesses and commercial properties.'],
  ['04', 'Transparent Estimates', 'Clear project scope and pricing before installation begins.'],
  ['05', 'High Quality Materials', 'Labour and quality materials can be supplied for a complete solution.'],
  ['06', 'Professional Installation', 'Careful preparation, accurate layout and a clean, polished finish.'],
]

const process = [
  ['01', 'Free Estimate', 'Tell us about your project and we will outline the next steps.'],
  ['02', 'Site Inspection', 'We review access, grade, measurements, drainage and existing site conditions.'],
  ['03', 'Excavation & Base', 'The area is excavated, graded and compacted over a prepared gravel base.'],
  ['04', 'Form, Reinforce & Pour', 'Forms and reinforcement are installed before concrete placement and leveling.'],
  ['05', 'Finish & Inspection', 'The selected finish, joints and final cleanup are completed and reviewed.'],
]

const projects = [
  { image: '/assets/concrete-hero.webp', title: 'Residential Driveway', copy: 'A smooth, reinforced driveway with clean control joints and precise grading.' },
  { image: '/assets/concrete-patio.webp', title: 'Backyard Patio', copy: 'A spacious concrete patio with crisp edges and a refined broom finish.' },
  { image: '/assets/concrete-garage.webp', title: 'Garage Floor Slab', copy: 'A level, machine-finished garage floor prepared for long-term use.' },
]

const testimonials = [
  ['The estimate was clear, the site stayed organized, and the finished driveway has clean lines and excellent drainage.', 'M. K.', 'Winnipeg homeowner'],
  ['We appreciated the careful preparation and communication throughout our backyard patio project.', 'A. R.', 'Residential concrete client'],
  ['The team delivered a professional slab finish and worked carefully around our business schedule.', 'D. S.', 'Commercial property client'],
]

const faqs = [
  ['Do you work only in Winnipeg?', 'ARCED is based in Winnipeg. For projects outside the city, share your location in the estimate form and we can confirm availability.'],
  ['Do you remove existing concrete?', 'Yes. Concrete demolition, loading and waste disposal can be included in the project scope.'],
  ['Is excavation included?', 'Standard excavation is included in selected primary services. Additional excavation is priced when site depth or conditions require more work.'],
  ['Do you provide reinforcement?', 'Yes. Standard mesh or reinforcement is included where specified, with rebar upgrades available when required.'],
  ['Do you offer a warranty?', 'Yes. Completed concrete work is backed by a two-year workmanship warranty.'],
  ['How is pricing calculated?', 'Pricing depends on project size, access, excavation, base condition, reinforcement, concrete thickness and finish. A site inspection is required for a final quote.'],
]

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''

function SectionHeading({ eyebrow, title, copy, light = false }) {
  return (
    <div className={`section-heading${light ? ' section-heading--light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-intro">{copy}</p>}
    </div>
  )
}

function Hero() {
  return (
    <main>
      <section className="hero" id="home">
        <img className="hero-background" src="/assets/concrete-hero.webp" alt="" aria-hidden="true" />
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow">Professional Concrete Services</p>
            <h1>Concrete Work<br />in Winnipeg.<br /><span>Built to Last.</span></h1>
            <p className="hero-lead">Professional concrete installation for driveways, patios, sidewalks, garage floors, slabs, foundations and steps.</p>
            <ul className="hero-benefits">
              <li><Check aria-hidden="true" /> High-quality workmanship</li>
              <li><Check aria-hidden="true" /> Transparent estimates</li>
              <li><Check aria-hidden="true" /> Residential & commercial</li>
            </ul>
            <div className="hero-actions">
              <a className="button" href="#contact">Get a Free Estimate <ArrowRight aria-hidden="true" /></a>
              <a className="button button--outline-light" href="#projects">View Our Work <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="hero-trust-bar">
          <div className="shell" aria-label="Company assurances">
            <span><ShieldCheck aria-hidden="true" /> Fully insured</span>
            <span><Sparkles aria-hidden="true" /> Professional installation</span>
            <span><Check aria-hidden="true" /> 2-year workmanship warranty</span>
          </div>
        </div>
      </section>
    </main>
  )
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="shell">
        <SectionHeading eyebrow="What we do" title="Our Concrete Services" copy="Complete concrete work for Winnipeg homes and commercial properties—from excavation and base preparation to reinforcement, placement and finishing." />
        <div className="featured-services-grid">
          {services.slice(0, 6).map(({ icon: Icon, title, copy }) => (
            <article className="service-card" key={title}>
              <div className="service-image"><img src={serviceImages[title]} alt="" /></div>
              <div className="service-icon"><Icon strokeWidth={1.6} aria-hidden="true" /></div>
              <div className="service-content">
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="#contact">Request a quote <ArrowRight aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="additional-services" aria-label="Additional concrete services">
          <p>More ways we can help</p>
          {services.slice(6).map(({ icon: Icon, title }) => <a href="#contact" key={title}><Icon aria-hidden="true" />{title}<ArrowRight aria-hidden="true" /></a>)}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="section why-us" aria-labelledby="why-title">
      <div className="shell">
        <div className="why-layout">
          <article className="why-feature">
            <img src="/assets/concrete-patio.webp" alt="Completed ARCED concrete patio project" />
            <div><p className="eyebrow">The ARCED standard</p><h2 id="why-title">Why Choose ARCED?</h2><p>A dependable concrete contractor in Winnipeg should make every part of your project feel considered—from excavation to the final inspection.</p></div>
          </article>
          <div className="advantages-grid">
            {advantages.slice(0, 4).map(([number, title, copy]) => (
              <article className="advantage-card" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="proof-strip">
          <div><strong>2-Year</strong><span>Workmanship warranty</span></div>
          <div><strong>Fully</strong><span>Insured</span></div>
          <div><strong>Labour +</strong><span>Materials available</span></div>
          <div><strong>Residential +</strong><span>Commercial projects</span></div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section process" id="process">
      <div className="shell">
        <SectionHeading eyebrow="Clear from start to finish" title="Our Installation Process" copy="A straightforward five-step process keeps the work organized, the scope clear and the result aligned with your expectations." />
        <div className="process-list">
          {process.map(([number, title, copy]) => (
            <article className="process-step" key={title}>
              <span className="process-number">{number}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="shell">
        <div className="projects-heading">
          <SectionHeading eyebrow="Selected work" title="Recent Concrete Projects" copy="A closer look at the preparation, placement and finish quality we bring to concrete projects across Winnipeg." />
          <a className="text-link" href="#contact">Discuss your project <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="project-grid">
          {projects.map(({ image, title, copy }, index) => (
            <article className={`project-card project-card--${index + 1}`} key={title}>
              <div className="project-image"><img src={image} alt={title} /></div>
              <div className="project-info"><div><p>Project {String(index + 1).padStart(2, '0')}</p><h3>{title}</h3></div><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function BeforeAfter() {
  return (
    <section className="section comparison">
      <div className="shell comparison-grid">
        <div className="comparison-copy">
          <p className="eyebrow">The difference is in the details</p>
          <h2>Built correctly from the ground up</h2>
          <p>Long-lasting concrete starts below the surface. Proper excavation, grading, compaction, formwork and reinforcement support a clean professional finish.</p>
          <ul>
            <li><Check aria-hidden="true" /> Excavation and grading</li>
            <li><Check aria-hidden="true" /> Compacted gravel base</li>
            <li><Check aria-hidden="true" /> Formwork and reinforcement</li>
            <li><Check aria-hidden="true" /> Professional placement and finishing</li>
          </ul>
        </div>
        <div className="comparison-visual">
          <img src="/assets/concrete-stamped.webp" alt="Professionally finished stamped concrete walkway and steps" />
          <span className="before-label">Precision</span>
          <span className="after-label">Finish</span>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section testimonials" aria-labelledby="testimonials-title">
      <div className="shell">
        <SectionHeading eyebrow="Client experience" title="Work that earns trust" copy="Professional communication and careful workmanship matter just as much as the finished surface." />
        <h2 id="testimonials-title" className="sr-only">Client testimonials</h2>
        <div className="testimonial-grid">
          {testimonials.map(([quote, name, role]) => (
            <figure className="testimonial-card" key={name}>
              <div className="stars" aria-label="5 out of 5 stars">{[1,2,3,4,5].map(n => <Star key={n} fill="currentColor" aria-hidden="true" />)}</div>
              <blockquote>“{quote}”</blockquote>
              <figcaption><strong>{name}</strong><span>{role}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="shell faq-grid">
        <div className="faq-intro">
          <p className="eyebrow">Helpful details</p>
          <h2>Frequently Asked Questions</h2>
          <p>Still have a question about your concrete project? Include it with your estimate request and we will be happy to help.</p>
          <a className="text-link" href="#contact">Ask a question <ArrowRight aria-hidden="true" /></a>
        </div>
        <div className="accordion">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>{question}<ChevronDown aria-hidden="true" /></summary>
              <div className="answer"><p>{answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formStatus, setFormStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setSubmitted(false)

    if (!FORMSPREE_ENDPOINT) {
      setFormStatus('error')
      setStatusMessage('The estimate form is being connected. Please email arcedconstruction@outlook.com or call +1 431 338-5322.')
      return
    }

    setFormStatus('loading')
    setStatusMessage('')

    const formData = new FormData(form)
    formData.append('_subject', 'New concrete estimate request from arcedconstruction.ca')
    formData.append('website', 'arcedconstruction.ca')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })

      if (!response.ok) throw new Error('Form submission failed')

      setFormStatus('success')
      setStatusMessage('Thank you. Your request has been sent to ARCED.')
      form.reset()
    } catch {
      setFormStatus('error')
      setStatusMessage('Something went wrong while sending your request. Please email arcedconstruction@outlook.com or call +1 431 338-5322.')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="shell contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Start your project</p>
          <h2>Request Your<br />Free Estimate</h2>
          <p>Tell us what you are planning. We will review your project details and follow up to arrange the next step.</p>
          <div className="contact-details">
            <span><MapPin aria-hidden="true" /><span><small>Service area</small>Winnipeg, Manitoba</span></span>
            <a href="tel:+14313385322"><Phone aria-hidden="true" /><span><small>Call us</small>+1 431 338-5322</span></a>
            <a href="mailto:arcedconstruction@outlook.com"><Mail aria-hidden="true" /><span><small>Email us</small>arcedconstruction@outlook.com</span></a>
            <span><ShieldCheck aria-hidden="true" /><span><small>Peace of mind</small>Fully insured · 2-year warranty</span></span>
          </div>
        </div>
        <form className="estimate-form" onSubmit={handleSubmit} aria-busy={formStatus === 'loading'}>
          <div className="field-row">
            <label>Full Name<input name="name" autoComplete="name" required placeholder="Your full name" /></label>
            <label>Email<input type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label>
          </div>
          <div className="field-row">
            <label>Phone<input type="tel" name="phone" autoComplete="tel" required placeholder="(204) 000-0000" /></label>
            <label>Project Type<select name="projectType" defaultValue="" required><option value="" disabled>Select a service</option><option>Concrete driveway</option><option>Concrete patio</option><option>Concrete sidewalk</option><option>Garage floor</option><option>Concrete slab</option><option>Concrete foundation</option><option>Concrete steps</option><option>Stamped concrete</option><option>Concrete replacement</option><option>Other concrete project</option></select></label>
          </div>
          <label>Message<textarea name="message" required rows="5" placeholder="Tell us about the site, size, access and finish you have in mind." /></label>
          <div className="form-footer">
            <button className="button" type="submit" disabled={formStatus === 'loading'}>{formStatus === 'loading' ? 'Sending...' : 'Send Request'} <ArrowRight aria-hidden="true" /></button>
            <p>By submitting, you agree to be contacted about your project.</p>
          </div>
          {formStatus === 'success' && <p className="form-success" role="status"><Check aria-hidden="true" /> {statusMessage}</p>}
          {formStatus === 'error' && <p className="form-success form-error" role="alert">{statusMessage}</p>}
          {submitted && <p className="form-success" role="status"><Check aria-hidden="true" /> Thank you. Your request is ready to be connected to ARCED’s email or CRM.</p>}
        </form>
      </div>
    </section>
  )
}

function HomePage() {
  usePageSeo(siteSeo.home)

  return (
    <>
      <a className="skip-link" href="#services">Skip to main content</a>
      <SiteHeader />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Projects />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <Contact />
      <SiteFooter />
    </>
  )
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '')

  if (path === '/calculator') {
    return <CalculatorPage />
  }
  if (path === '/privacy-policy') {
    return <LegalPage document={privacyPolicy} />
  }
  if (path === '/terms-of-use') {
    return <LegalPage document={termsOfUse} />
  }

  return <HomePage />
}
