# Spec: NYC & Florida Travel Safety Report — Easter 2026

**Repo:** jarvis-cx/nyc-florida-travel-report
**Branch:** feature/travel-report-site
**Deploy:** GitHub Pages (jarvis-cx.github.io/nyc-florida-travel-report)

## Party Details
- 2 adults + 3 children (ages 14, 11, 7, 5)
- Passports: 4 x Hong Kong (HKSAR), 1 x Canadian (adult)
- Duration: 2 weeks
- Timing: April / Easter 2026
- Itinerary: NYC + Florida (same trip)

## Stack
- Next.js 14 + Tailwind CSS
- Static export (`output: "export"`)
- basePath: `/nyc-florida-travel-report` (GitHub Pages)
- Single-page with anchor navigation
- Mobile-friendly, clean report format
- Include `.nojekyll` in gh-pages deploy

## Research Scope

### Sections to Research & Build

1. **Executive Summary**
   - Overall verdict + traffic-light indicator
   - 3 risk profiles: Cautious / Moderate / Adventurous

2. **Current Safety & Security**
   - NYC safety in April 2026 — tourist areas, subway, neighbourhoods
   - Florida safety — Orlando area, Miami, other tourist zones
   - Crime stats, tourist-specific risks
   - Political/social climate (protests, civil unrest)
   - Any specific risks for HK passport holders under current US-China tensions

3. **Government Travel Advisories**
   - HK SAR government advisory for USA
   - Canadian government advisory for USA
   - Any relevant warnings

4. **Entry Requirements**
   - HKSAR passport: ESTA eligibility? Visa required? Current US-China/HK tensions impact?
   - Canadian passport: ESTA process
   - Mixed passport family — what to expect at US immigration
   - Children's requirements
   - CBP process, what to declare, tips for smooth entry

5. **Health & Medical**
   - Vaccinations recommended
   - US healthcare costs — what to expect without insurance
   - Travel insurance — essential for US, what to look for
   - Child health considerations (ages 5, 7, 11, 14)
   - Prescription medication rules

6. **Family Considerations**
   - NYC with kids aged 5-14: what's great, what's exhausting
   - Florida with kids: theme parks (Disney/Universal), beaches, practical tips
   - Easter period: crowds, bookings, pricing
   - Age-appropriate activities for the spread of ages (5 to 14)

7. **Getting Around**
   - NYC: subway safety, taxis, Uber, walking with kids
   - NYC → Florida: flights vs drive, domestic travel tips
   - Florida: car rental essential, driving tips, toll roads
   - Distances: NYC to key Florida destinations

8. **Where to Stay**
   - NYC: recommended areas for families, areas to avoid
   - Florida: Orlando vs Miami vs both, accommodation types
   - Easter pricing — book early guidance
   - Budget guidance (USD per night)

9. **Money & Costs**
   - USD exchange from HKD
   - Credit cards vs cash in US
   - Tipping culture — amounts, when
   - Rough daily budget for family of 5 in NYC vs Florida
   - Easter premium on costs

10. **Emergency Contacts**
    - Canadian consulate NYC + Florida
    - HK Economic and Trade Office in NYC
    - US emergency numbers (911)
    - Best hospitals near tourist areas in NYC and Orlando/Miami
    - Travel insurance claims process

11. **April/Easter Specific Factors**
    - NYC in April: weather, crowds, events
    - Florida in April: weather, hurricane season (not yet), spring break crowds
    - Easter weekend specifically: what's open/closed, crowds
    - School holiday pricing impact

12. **Verdict by Risk Profile**
    - 🔴 Cautious
    - 🟡 Moderate
    - 🟢 Adventurous

## Design
- Same beautiful design as Lebanon report (navy hero, card layout, risk profile cards)
- Include `.nojekyll` in gh-pages deploy
- basePath set correctly for GitHub Pages

## Model Assignments
- Research: anthropic/claude-opus-4-6
- PLAN: anthropic/claude-opus-4-6
- SETUP: anthropic/claude-sonnet-4-6
- IMPLEMENT: anthropic/claude-sonnet-4-6
- VERIFY: anthropic/claude-opus-4-6
- TEST: anthropic/claude-sonnet-4-6
- PR: anthropic/claude-sonnet-4-6
- REVIEW: anthropic/claude-opus-4-6
