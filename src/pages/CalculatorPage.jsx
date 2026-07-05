import { useEffect, useState } from 'react'
import { ArrowRight, Calculator, Check, Clock3, Info, Ruler, ShieldCheck } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter.jsx'
import { SiteHeader } from '../components/SiteHeader.jsx'
import {
  additionalServices,
  calculateEstimate,
  calculatorOptions,
  exampleEstimates,
  finishTypes,
  projectTypes,
  rateCards,
  reinforcementTypes,
  standardInclusions,
} from '../calculatorData.js'

const cad = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 })

export function CalculatorPage() {
  const [projectId, setProjectId] = useState('driveway')
  const [finishId, setFinishId] = useState('standard')
  const [quantity, setQuantity] = useState('350')
  const [removal, setRemoval] = useState(false)
  const [excavation, setExcavation] = useState(false)
  const [reinforcementId, setReinforcementId] = useState('mesh')

  const estimate = calculateEstimate({ projectId, finishId, quantity, removal, excavation, reinforcementId })

  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.getAttribute('content')
    document.title = 'Concrete Cost Calculator Winnipeg | ARCED'
    description?.setAttribute('content', 'Estimate concrete project costs in Winnipeg by project type, finish, area, demolition, excavation and reinforcement.')
    return () => {
      document.title = previousTitle
      if (previousDescription) description?.setAttribute('content', previousDescription)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#calculator-form">Skip to calculator</a>
      <SiteHeader currentPage="calculator" />
      <main className="calculator-page">
        <section className="calculator-hero concrete-calculator-hero">
          <img src="/assets/concrete-hero.webp" alt="" aria-hidden="true" />
          <div className="shell calculator-hero__content">
            <p className="eyebrow">Concrete Project Planning Tool</p>
            <h1>Concrete Project<br />Cost Calculator</h1>
            <p>Build a practical preliminary estimate based on the project type, concrete finish, size and site preparation requirements.</p>
            <div className="estimate-warning"><Info aria-hidden="true" /><p><strong>Important:</strong> All prices are approximate and subject to on-site inspection. Final pricing requires detailed discussion of access, excavation, reinforcement, thickness and finish.</p></div>
          </div>
        </section>

        <section className="calculator-workspace" id="calculator-form">
          <div className="shell calculator-layout">
            <form className="calculator-form" onSubmit={(event) => event.preventDefault()}>
              <div className="calculator-form__heading"><span><Calculator aria-hidden="true" /></span><div><p className="eyebrow">Your project</p><h2>Estimate the scope</h2></div></div>
              <div className="calculator-fields calculator-fields--concrete">
                <label>Project Type<select name="projectType" value={projectId} onChange={(event) => setProjectId(event.target.value)}>{projectTypes.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}</select><small>Choose the primary concrete installation.</small></label>
                <label>Concrete Finish<select name="finishType" value={finishId} onChange={(event) => setFinishId(event.target.value)} disabled={estimate.isSteps}>{finishTypes.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}</select><small>{estimate.isSteps ? 'Step finishes require project-specific pricing.' : 'Stamped and exposed aggregate use their published starting rates.'}</small></label>
                <label>{estimate.isSteps ? 'Number of Steps' : 'Square Footage'}<span className="area-input"><input name="quantity" type="number" min="1" max="10000" step="1" inputMode="numeric" value={quantity} onChange={(event) => setQuantity(event.target.value)} /><span>{estimate.isSteps ? 'steps' : 'ft²'}</span></span><small>{estimate.isSteps ? 'Enter the total number of steps.' : 'Use the finished concrete surface area.'}</small></label>
                <label>Reinforcement<select name="reinforcement" value={reinforcementId} onChange={(event) => setReinforcementId(event.target.value)} disabled={estimate.isSteps}>{reinforcementTypes.map(({ id, label }) => <option key={id} value={id}>{label}</option>)}</select><small>Rebar upgrade adds $3.00 / ft² where selected.</small></label>
              </div>

              <fieldset className="calculator-options">
                <legend>Site Requirements</legend>
                <p>Select every additional service the site may require. Standard preparation already included in a service is confirmed after inspection.</p>
                <div className="option-grid">
                  {calculatorOptions.map(({ id, label, rate, includes }) => {
                    const checked = id === 'removal' ? removal : excavation
                    const setChecked = id === 'removal' ? setRemoval : setExcavation
                    return <label className={`option-card${checked ? ' is-selected' : ''}${estimate.isSteps ? ' is-disabled' : ''}`} key={id}><input name={id} type="checkbox" checked={checked} disabled={estimate.isSteps} onChange={(event) => setChecked(event.target.checked)} /><span className="option-check"><Check aria-hidden="true" /></span><span><strong>{label}</strong><small>+ ${rate.toFixed(2)} / ft²</small><em>{includes}</em></span></label>
                  })}
                </div>
                {estimate.isSteps && <p className="calculator-note">Removal, excavation and reinforcement for concrete steps are priced after the site inspection.</p>}
              </fieldset>
            </form>

            <aside className="estimate-result" aria-live="polite">
              <p className="eyebrow">Estimated price</p>
              <p className="estimate-total">{cad.format(estimate.total)}</p>
              <p className="estimate-currency">CAD · approximate project total</p>
              <div className="estimate-summary">
                <div><Ruler aria-hidden="true" /><span><small>Project</small><strong>{estimate.project.label} · {estimate.amount || 0} {estimate.project.unit}{estimate.project.unit === 'step' && estimate.amount !== 1 ? 's' : ''}</strong></span></div>
                <div><Clock3 aria-hidden="true" /><span><small>Estimated duration</small><strong>{estimate.duration}</strong></span></div>
                <div><ShieldCheck aria-hidden="true" /><span><small>Warranty</small><strong>2-Year Workmanship Warranty</strong></span></div>
              </div>
              <div className="estimate-breakdown">
                <h2>Estimate breakdown</h2>
                <div><span>{estimate.project.label}<br /><small>{estimate.isSteps ? `$${estimate.baseRate.toFixed(0)} / step` : `${estimate.finish.label} · $${estimate.baseRate.toFixed(2)} / ft²`}</small></span><strong>{cad.format(estimate.baseCost)}</strong></div>
                {estimate.addonItems.map(({ id, label, rate, cost }) => <div key={id}><span>{label}<br /><small>${rate.toFixed(2)} / ft²</small></span><strong>{cad.format(cost)}</strong></div>)}
                {estimate.minimumApplied && <div className="minimum-line"><span>Minimum project adjustment<br /><small>Concrete projects start from $750</small></span><strong>Applied</strong></div>}
              </div>
              <div className="result-inclusions"><h2>Included services</h2><ul>{standardInclusions.slice(0, 8).map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></div>
              <div className="result-disclaimer"><Info aria-hidden="true" /><p><strong>This is a preliminary estimate—not a final quote.</strong> Final pricing depends on exact measurements, access, soil and base conditions, excavation depth, reinforcement, concrete thickness and selected finish. Applicable taxes are not included.</p></div>
              <a className="button estimate-cta" href="/#contact">Request a Free Estimate <ArrowRight aria-hidden="true" /></a>
            </aside>
          </div>
        </section>

        <section className="calculator-section pricing-section"><div className="shell"><div className="calculator-section__heading"><p className="eyebrow">Transparent starting rates</p><h2>Concrete Services Pricing</h2><p>All prices are approximate and subject to on-site inspection. Final pricing depends on project size, site conditions, access, excavation, reinforcement, thickness and finish.</p></div><div className="rate-grid concrete-rate-grid">{rateCards.map(({ title, price, note, includes, featured }) => <article className={`rate-card${featured ? ' rate-card--featured' : ''}`} key={title}><div><h3>{title}</h3><p className="rate-price">{price}</p>{note && <p className="rate-note">{note}</p>}</div><ul>{includes.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></article>)}</div></div></section>

        <section className="calculator-section optional-pricing"><div className="shell"><div className="calculator-section__heading calculator-section__heading--compact"><p className="eyebrow">When the site needs more preparation</p><h2>Additional Services</h2></div><div className="optional-price-grid concrete-option-price-grid">{additionalServices.map(({ id, label, rate, includes }) => <article key={id}><span>+ ${rate.toFixed(2)} / ft²</span><h3>{label}</h3><p>{includes}</p></article>)}</div></div></section>

        <section className="calculator-section examples-section"><div className="shell"><div className="calculator-section__heading calculator-section__heading--compact"><p className="eyebrow">For quick comparison</p><h2>Example Estimates</h2><p>These examples use the published starting rates and are not final quotations.</p></div><div className="example-grid concrete-example-grid">{exampleEstimates.map(({ title, area, detail, price }) => <article key={title}><p>{area}</p><h3>{title}</h3><span>{detail}</span><strong>{price}</strong></article>)}</div><div className="minimum-project"><div><ShieldCheck aria-hidden="true" /><span><strong>Minimum project</strong><small>Concrete projects under 60 ft² start from $750 CAD.</small></span></div><a className="text-link" href="/#contact">Discuss a small project <ArrowRight aria-hidden="true" /></a></div></div></section>

        <section className="calculator-section included-section"><div className="shell included-layout"><div><p className="eyebrow">The ARCED standard</p><h2>Every Standard Installation Includes</h2><p>Standard concrete projects include the essential planning, preparation, placement and finishing work listed here. Final inclusions are confirmed for the specific site.</p></div><ul>{standardInclusions.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></div></section>
      </main>
      <SiteFooter />
    </>
  )
}
