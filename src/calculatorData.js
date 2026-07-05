export const projectTypes = [
  { id: 'driveway', label: 'Driveway', rate: 18, productivity: 65, unit: 'ft²' },
  { id: 'patio', label: 'Patio', rate: 17, productivity: 60, unit: 'ft²' },
  { id: 'sidewalk', label: 'Sidewalk', rate: 16, productivity: 50, unit: 'ft²' },
  { id: 'garage', label: 'Garage Floor', rate: 16, productivity: 80, unit: 'ft²' },
  { id: 'slab', label: 'Concrete Slab', rate: 15, productivity: 80, unit: 'ft²' },
  { id: 'foundation', label: 'Foundation', rate: 22, productivity: 45, unit: 'ft²' },
  { id: 'steps', label: 'Concrete Steps', rate: 450, productivity: 1, unit: 'step' },
]

export const finishTypes = [
  { id: 'standard', label: 'Standard', rate: null, additive: 0 },
  { id: 'broom', label: 'Broom Finish', rate: null, additive: 5 },
  { id: 'stamped', label: 'Stamped', rate: 23, additive: 0 },
  { id: 'exposed', label: 'Exposed Aggregate', rate: 24, additive: 0 },
]

export const reinforcementTypes = [
  { id: 'mesh', label: 'Standard Mesh', rate: 0 },
  { id: 'rebar', label: 'Rebar Upgrade', rate: 3 },
]

export const calculatorOptions = [
  { id: 'removal', label: 'Concrete Removal', rate: 5, durationDays: 2, includes: 'Breaking, loading and waste disposal' },
  { id: 'excavation', label: 'Additional Excavation', rate: 4, durationDays: 1, includes: 'Soil excavation, removal and basic grading' },
]

export const additionalServices = [
  { id: 'excavation', label: 'Excavation', rate: 4, includes: 'Soil excavation, material removal and basic grading' },
  { id: 'gravel', label: 'Gravel Base Installation', rate: 2.5, includes: 'Crushed gravel, leveling and mechanical compaction' },
  { id: 'reinforcement', label: 'Steel Reinforcement', rate: 3, includes: 'Wire mesh or rebar, installation and positioning' },
  { id: 'formwork', label: 'Premium Formwork', rate: 2, includes: 'Professional wooden forms, layout, alignment and removal' },
  { id: 'sealer', label: 'Concrete Sealer', rate: 1.75, includes: 'High-quality protective sealer applied after curing' },
  { id: 'decorative', label: 'Decorative Finish Upgrade', rate: 5, includes: 'Decorative broom texture and additional finishing work' },
  { id: 'demolition', label: 'Concrete Demolition', rate: 5, includes: 'Breaking existing concrete, loading and waste disposal' },
]

export const standardInclusions = [
  'Initial consultation',
  'Site inspection',
  'Measurements',
  'Material calculations',
  'Excavation at standard depth',
  'Ground preparation',
  'Gravel base',
  'Mechanical compaction',
  'Professional formwork',
  'Reinforcement',
  'Concrete placement',
  'Concrete vibration',
  'Surface leveling',
  'Joint cutting',
  'Professional finishing',
  'Site cleanup',
  'Construction debris removal',
  'Final inspection',
  '2-Year Workmanship Warranty',
]

export const rateCards = [
  { title: 'Standard Concrete Slab', price: 'Starting from $15 / ft²', featured: true, note: 'For garage floors, storage buildings, workshops and utility areas.', includes: ['Site inspection', 'Surface grading', 'Base preparation', 'Compaction', 'Gravel base', 'Formwork', 'Reinforcement where required', 'Concrete pouring', 'Screeding', 'Power trowel finish', 'Control joints', 'Cleanup', 'Waste removal', '2-Year Warranty'] },
  { title: 'Concrete Driveway', price: 'Starting from $18 / ft²', includes: ['Site preparation', 'Standard excavation', 'Gravel base', 'Mechanical compaction', 'Wooden formwork', 'Steel reinforcement or mesh', 'Concrete pouring', 'Leveling', 'Power finish', 'Control joints', 'Cleanup', 'Warranty'] },
  { title: 'Concrete Patio', price: 'Starting from $17 / ft²', includes: ['Excavation', 'Base preparation', 'Compaction', 'Formwork', 'Reinforcement', 'Concrete pouring', 'Surface finishing', 'Expansion joints', 'Cleanup'] },
  { title: 'Concrete Sidewalk', price: 'Starting from $16 / ft²', includes: ['Ground preparation', 'Gravel base', 'Formwork', 'Reinforcement', 'Concrete placement', 'Finishing', 'Cleanup'] },
  { title: 'Concrete Steps', price: 'Starting from $450 / step', includes: ['Formwork', 'Reinforcement', 'Concrete pouring', 'Finishing', 'Edge detailing', 'Cleanup'] },
  { title: 'Concrete Foundation', price: 'Starting from $22 / ft²', includes: ['Layout', 'Excavation preparation', 'Formwork', 'Reinforcement', 'Concrete placement', 'Vibration', 'Finishing', 'Cleanup'] },
  { title: 'Garage Floor', price: 'Starting from $16 / ft²', includes: ['Base preparation', 'Compaction', 'Reinforcement', 'Formwork', 'Concrete pour', 'Machine finish', 'Control joints', 'Cleanup'] },
  { title: 'Stamped Concrete', price: 'Starting from $23 / ft²', includes: ['Decorative stamps', 'Premium finishing', 'Colouring', 'Sealer', 'Cleanup'] },
  { title: 'Exposed Aggregate Concrete', price: 'Starting from $24 / ft²', includes: ['Aggregate finish', 'Surface washing', 'Sealing', 'Cleanup'] },
  { title: 'Concrete Replacement', price: 'Starting from $19 / ft²', includes: ['Existing concrete removal', 'Debris hauling', 'Excavation correction', 'New base', 'Formwork', 'Reinforcement', 'New concrete', 'Finishing', 'Cleanup'] },
]

export const exampleEstimates = [
  { title: 'Standard Driveway', area: '350 ft²', detail: 'Standard concrete finish', price: '≈ $6,300 CAD' },
  { title: 'Backyard Patio', area: '220 ft²', detail: 'Prepared and professionally finished', price: '≈ $3,740 CAD' },
  { title: 'Garage Floor', area: '420 ft²', detail: 'Machine-finished slab', price: '≈ $6,720 CAD' },
  { title: 'Sidewalk', area: '120 ft²', detail: 'Standard reinforced concrete', price: '≈ $1,920 CAD' },
  { title: 'Concrete Slab', area: '300 ft²', detail: 'Standard slab installation', price: '≈ $4,500 CAD' },
]

export function calculateEstimate({ projectId, finishId, quantity, removal, excavation, reinforcementId }) {
  const project = projectTypes.find((item) => item.id === projectId) ?? projectTypes[0]
  const finish = finishTypes.find((item) => item.id === finishId) ?? finishTypes[0]
  const reinforcement = reinforcementTypes.find((item) => item.id === reinforcementId) ?? reinforcementTypes[0]
  const amount = Math.max(0, Number(quantity) || 0)
  const isSteps = project.id === 'steps'
  const baseRate = isSteps ? project.rate : Math.max(project.rate + finish.additive, finish.rate ?? 0)
  const baseCost = amount * baseRate
  const addonItems = []

  if (!isSteps && removal) addonItems.push({ id: 'removal', label: 'Concrete Removal', rate: 5, cost: amount * 5 })
  if (!isSteps && excavation) addonItems.push({ id: 'excavation', label: 'Additional Excavation', rate: 4, cost: amount * 4 })
  if (!isSteps && reinforcement.rate > 0) addonItems.push({ id: 'reinforcement', label: reinforcement.label, rate: reinforcement.rate, cost: amount * reinforcement.rate })

  const calculatedTotal = baseCost + addonItems.reduce((sum, item) => sum + item.cost, 0)
  const minimumApplied = amount > 0 && calculatedTotal < 750
  const total = minimumApplied ? 750 : calculatedTotal
  const baseDays = amount > 0 ? Math.max(1, Math.ceil(amount / project.productivity)) : 0
  const extraDays = (!isSteps && removal ? 2 : 0) + (!isSteps && excavation ? 1 : 0) + (!isSteps && reinforcement.rate > 0 ? 1 : 0)
  const durationStart = baseDays + extraDays
  const durationEnd = durationStart > 0 ? durationStart + (amount >= 300 ? 3 : 2) : 0

  return {
    project,
    finish,
    reinforcement,
    amount,
    isSteps,
    baseRate,
    baseCost,
    addonItems,
    minimumApplied,
    total,
    duration: durationStart ? `${durationStart}–${durationEnd} working days` : 'Enter the project size',
  }
}
