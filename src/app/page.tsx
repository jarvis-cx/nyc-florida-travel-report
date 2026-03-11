export default function Home() {
  const navLinks = [
    { href: '#overview', label: 'Overview' },
    { href: '#critical', label: '⚠️ CRITICAL' },
    { href: '#safety', label: 'Safety' },
    { href: '#advisories', label: 'Advisories' },
    { href: '#entry', label: 'Entry' },
    { href: '#health', label: 'Health' },
    { href: '#insurance', label: 'Insurance' },
    { href: '#family', label: 'Family' },
    { href: '#nyc', label: 'NYC Guide' },
    { href: '#florida', label: 'Florida Guide' },
    { href: '#money', label: 'Money' },
    { href: '#emergency', label: 'Emergency' },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section style={{ backgroundColor: '#1e3a5f' }} className="py-20 px-4 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NYC &amp; Florida Travel Safety Report</h1>
          <p className="text-xl md:text-2xl mb-3" style={{ color: '#c9a227' }}>
            Easter 2026 — Family of 5 | 4× HKSAR + 1× Canadian Passport
          </p>
          <p className="text-gray-300 mb-8 text-lg">
            📅 April 2026 · 🗽 New York City + 🌴 Florida · 👨‍👩‍👧‍👦 2 adults, 3 children (ages 14, 11, 7, 5)
          </p>
          <span className="inline-block bg-yellow-400 text-yellow-900 font-bold text-lg px-6 py-3 rounded-full">
            🟡 MODERATE RISK — GO WITH PREPARATION
          </span>
        </div>
      </section>

      {/* STICKY NAV */}
      <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-3 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4">

        {/* SECTION 1: EXECUTIVE SUMMARY */}
        <section id="overview" className="py-16">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Executive Summary</h2>
          <p className="text-gray-500 mb-8">Overall risk: <span className="font-semibold text-yellow-600">MODERATE</span> — Safe destination with one critical action item.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-6">
              <div className="text-2xl mb-2">🔴</div>
              <h3 className="font-bold text-gray-900 mb-2">CAUTIOUS</h3>
              <p className="text-gray-600 text-sm">Concerned about US-China tensions, crowds, costs. Consider postponing Florida to avoid Easter peak crowds. Ensure all visas secured.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-yellow-200 p-6">
              <div className="text-2xl mb-2">🟡</div>
              <h3 className="font-bold text-gray-900 mb-2">MODERATE</h3>
              <p className="text-gray-600 text-sm">Standard family holiday. Secure visas immediately, buy insurance, avoid Easter week at theme parks. Enjoyable and safe trip expected.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-green-200 p-6">
              <div className="text-2xl mb-2">🟢</div>
              <h3 className="font-bold text-gray-900 mb-2">ADVENTUROUS</h3>
              <p className="text-gray-600 text-sm">Go for it. NYC in spring is magical. Epic Universe is new. Easter crowds are manageable with good planning (Lightning Lane + rope drop).</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
            <h3 className="font-bold text-blue-900 mb-4 text-lg">Key Highlights</h3>
            <ul className="space-y-2 text-sm">
              <li>✅ <span className="text-gray-700">US is generally safe for tourists</span></li>
              <li>✅ <span className="text-gray-700">NYC subway safest since 2009</span></li>
              <li>✅ <span className="text-gray-700">Florida tourist corridor well-patrolled</span></li>
              <li>⚠️ <span className="text-gray-700 font-semibold">Visas required for HKSAR passport holders (apply IMMEDIATELY)</span></li>
              <li>⚠️ <span className="text-gray-700 font-semibold">Travel insurance is non-negotiable (US healthcare = $30k+ for appendectomy)</span></li>
            </ul>
          </div>
        </section>

        {/* SECTION 2: CRITICAL ALERT */}
        <section id="critical" className="py-12">
          <div className="bg-red-600 rounded-2xl p-8 text-white border-4 border-red-400">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🚨</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-1">CRITICAL ACTION REQUIRED — READ FIRST</h2>
                <p className="text-xl font-bold text-red-200">HKSAR PASSPORT HOLDERS CANNOT USE ESTA</p>
              </div>
            </div>

            <p className="text-lg mb-4">
              Hong Kong SAR is <strong>NOT</strong> part of the US Visa Waiver Program. All 4 HKSAR passport holders <strong>MUST obtain a US B1/B2 tourist visa</strong> BEFORE travel.
            </p>

            <div className="bg-red-800 rounded-xl p-4 mb-6">
              <p className="text-xl font-bold">⏰ VISA APPOINTMENT WAIT TIMES: 4-8 WEEKS</p>
              <p className="text-red-200">Easter 2026 is ~4 weeks away. Apply IMMEDIATELY at <strong>ustraveldocs.com/hk</strong></p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 text-red-200">Requirements:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• In-person interview at US Consulate General, 26 Garden Road, Central, Hong Kong</li>
                  <li>• As of September 2, 2025: <strong>ALL applicants including children under 14 must attend the interview</strong></li>
                  <li>• Cost: HK$1,288 (US$160) per person = ~HK$5,152 for 4 applicants</li>
                  <li>• B1/B2 visas typically issued for 10 years, multiple entry</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-red-200">Documents Needed (per applicant):</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Valid HKSAR passport (6+ months validity beyond trip dates)</li>
                  <li>• DS-160 confirmation page</li>
                  <li>• Interview appointment confirmation</li>
                  <li>• Photo (5x5cm, white background)</li>
                  <li>• Evidence of ties to Hong Kong (property, employment, school enrollment for kids)</li>
                  <li>• Travel itinerary, hotel bookings, flight bookings</li>
                  <li>• Financial evidence (bank statements)</li>
                  <li>• For children: birth certificates</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-red-700 rounded-xl p-4">
              <p className="font-bold text-lg mb-1">Apply at: <span className="underline">ustraveldocs.com/hk</span></p>
              <p className="text-red-200 text-sm">Canadian passport holder: No visa or ESTA required. Just show up with valid Canadian passport.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: SAFETY */}
        <section id="safety" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Current Safety &amp; Security</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🗽</span>
                <h3 className="text-xl font-bold text-gray-900">NYC Safety</h3>
                <span className="ml-auto bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">🟢 LOW RISK</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="font-semibold text-green-700">✅ 2025 was the safest year in the NYC subway since 2009</li>
                <li>• Subway crime dropped 4% vs prior year, 14% below pre-COVID levels</li>
                <li>• Governor Hochul committed $77 million for enhanced NYPD patrols in 2026</li>
                <li>• Platform barriers installed at 74+ stations</li>
                <li className="mt-3 font-medium">Safe neighbourhoods: Midtown, Upper West Side, Upper East Side, Lower Manhattan, Brooklyn Heights</li>
                <li className="text-orange-700">Avoid: East New York, Brownsville, parts of the Bronx (no tourist reason to go there)</li>
                <li className="mt-3 font-medium">Tips:</li>
                <li>• Subway safe daytime, use Uber/Lyft after 10pm</li>
                <li>• Keep valuables close at Times Square</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌴</span>
                <h3 className="text-xl font-bold text-gray-900">Florida Safety</h3>
                <span className="ml-auto bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">🟢 LOW RISK</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Orlando tourist corridor (International Drive, theme park areas) very safe, heavily patrolled</li>
                <li>• Theme parks: excellent security (bag checks, metal detectors at all Disney/Universal)</li>
                <li className="text-orange-700 font-medium">⚠️ Car safety: Don&apos;t leave valuables visible — smash-and-grabs happen in parking lots</li>
                <li className="text-orange-700">⚠️ April heat: 26-30°C — 5-year-old can overheat; bring sunscreen, hats, portable fan</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🏛️ Political Climate</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✅ No protests or events anticipated for Easter 2026 affecting tourist areas</li>
              <li>✅ HKSAR passports treated distinctly from PRC passports by US immigration</li>
              <li>✅ No additional scrutiny for HKSAR holders due to US-China tensions (as of March 2026)</li>
            </ul>
          </div>
        </section>

        {/* SECTION 4: ADVISORIES */}
        <section id="advisories" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Government Travel Advisories</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🍁</span>
                <h3 className="text-xl font-bold text-gray-900">Canadian Government Advisory</h3>
              </div>
              <div className="bg-green-50 rounded-xl p-3 mb-4">
                <p className="text-green-800 font-bold">🟢 Risk Level: &quot;Take normal security precautions&quot; (lowest level)</p>
              </div>
              <p className="text-sm font-medium text-gray-700 mb-2">Key warnings:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Gun violence (legal open carry in many states; mass shooting risk acknowledged but tourists rarely involved)</li>
                <li>• Petty crime in urban centres</li>
              </ul>
              <p className="text-xs text-gray-400 mt-4">Source: travel.gc.ca/destinations/united-states</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🇭🇰</span>
                <h3 className="text-xl font-bold text-gray-900">HK Government Advisory</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-800 font-medium">
                  ⚠️ US requires a visa for HKSAR passport holders
                </li>
                <li>• Register with HK government &quot;Outside Hong Kong&quot; scheme before travel</li>
                <li className="text-blue-600 underline text-xs">gov.hk/en/residents/immigration/overseas/</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 5: ENTRY REQUIREMENTS */}
        <section id="entry" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Entry Requirements</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-sm border border-red-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🇭🇰</span>
                <h3 className="text-xl font-bold text-gray-900">HKSAR Passport (4 holders)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-600">ESTA eligible?</span>
                  <span className="font-bold text-red-600">❌ NO</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-600">Visa needed</span>
                  <span className="font-bold text-gray-900">US B1/B2 Tourist Visa</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-600">Interview required?</span>
                  <span className="font-bold text-red-600">YES — in person</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-600">Children</span>
                  <span className="font-bold text-red-600">ALL must attend</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-600">Cost</span>
                  <span className="font-bold">HK$1,288/person</span>
                </div>
              </div>
              <div className="mt-4 bg-red-50 rounded-xl p-3">
                <p className="text-xs text-red-800 font-medium">📍 US Consulate General, 26 Garden Road, Central, Hong Kong</p>
                <p className="text-xs text-red-700 mt-1">Rule changed Sep 2, 2025: ALL applicants including children under 14 must attend interview</p>
              </div>
              <div className="mt-3 text-xs text-gray-600">
                <p className="font-medium mb-1">Processing steps:</p>
                <p>Apply DS-160 online → Pay fee → Schedule interview → Attend → Passport returned 3-5 days after approval</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-green-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🍁</span>
                <h3 className="text-xl font-bold text-gray-900">Canadian Passport (1 holder)</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-600">ESTA needed?</span>
                  <span className="font-bold text-green-600">✅ Not needed</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-600">Entry</span>
                  <span className="font-bold text-gray-900">Show valid Canadian passport</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="text-gray-600">Max stay</span>
                  <span className="font-bold">Up to 6 months</span>
                </div>
              </div>
              <div className="mt-4 bg-green-50 rounded-xl p-3">
                <p className="text-xs text-green-800 font-medium">Canada is exempt from both visa AND ESTA requirements. Just show up with a valid passport.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">👨‍👩‍👧‍👦 Mixed Family at Immigration</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Likely processed in two streams, but go together as family unit</li>
                <li>• Present all passports at same booth</li>
                <li>• Carry proof of family relationship (birth certificates, marriage certificate)</li>
                <li className="bg-blue-50 rounded-lg p-2 text-blue-800 font-medium">&quot;Family holiday, NYC then Florida, 2 weeks, returning to Hong Kong&quot;</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📋 What to Declare</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Food items (most not permitted)</li>
                <li>• Cash over US$10,000</li>
                <li className="text-orange-700 font-medium">⚠️ Be honest — CBP takes false declarations seriously</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6: HEALTH */}
        <section id="health" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Health &amp; Medical</h2>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💰 US Healthcare Costs (Uninsured)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-2 px-3 font-semibold text-gray-700 rounded-tl-lg">Service</th>
                    <th className="text-right py-2 px-3 font-semibold text-gray-700 rounded-tr-lg">Typical Cost (Uninsured)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Emergency room visit', 'US$3,000–$5,000+'],
                    ['Ambulance ride', 'US$1,000–$3,000'],
                    ['Broken arm (ER + X-ray + cast)', 'US$7,500–$15,000'],
                    ['Appendectomy', 'US$30,000–$50,000'],
                    ['ICU per day', 'US$10,000–$25,000'],
                    ['Urgent care (minor illness)', 'US$200–$500'],
                  ].map(([service, cost]) => (
                    <tr key={service}>
                      <td className="py-2 px-3 text-gray-700">{service}</td>
                      <td className="py-2 px-3 text-right font-semibold text-red-700">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💉 Vaccinations</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ No mandatory vaccinations for US entry</li>
                <li>• Ensure kids up to date on routine vaccines (MMR, DPT)</li>
                <li>• COVID-19: No requirement as of 2026</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">👶 Child Health Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Pack: Children&apos;s Tylenol/Panadol, antihistamines, band-aids, sunscreen SPF50+, insect repellent (Florida mosquitoes!)</li>
                <li>• 5-year-old: prone to exhaustion at theme parks — plan half-days</li>
                <li>• Carry small first aid kit</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 7: INSURANCE */}
        <section id="insurance" className="py-16">
          <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🔴</span>
              <h2 className="text-3xl font-bold text-red-800">Travel Insurance — NON-NEGOTIABLE</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex gap-2"><span>💰</span><span>Family of 5, 2 weeks in US: <strong>HK$3,000–$6,000 (US$400–$800)</strong> for comprehensive coverage</span></li>
                  <li className="flex gap-2"><span>🏥</span><span>Minimum: <strong>US$1,000,000 medical coverage</strong></span></li>
                  <li className="flex gap-2"><span>✈️</span><span>Must cover: medical evacuation, all 5 family members, pre-existing conditions, adventure activities</span></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Recommended providers (from HK):</h3>
                <div className="flex flex-wrap gap-2">
                  {['AXA', 'MSIG', 'FWD', 'Blue Cross (HK)', 'Allianz', 'World Nomads'].map((p) => (
                    <span key={p} className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAMILY TIPS */}
        <section id="family" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Practical Family Tips</h2>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">👨‍👩‍👧‍👦 Age-Appropriate Highlights</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Child</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Age</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">NYC Highlights</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Florida Highlights</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-3 font-medium">Oldest</td>
                    <td className="py-3 px-3">14</td>
                    <td className="py-3 px-3 text-gray-700">Empire State Building, Top of the Rock, Broadway show, Chinatown food tour</td>
                    <td className="py-3 px-3 text-gray-700">All coasters, Epic Universe (NEW 2026!), Kennedy Space Center</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium">Middle</td>
                    <td className="py-3 px-3">11</td>
                    <td className="py-3 px-3 text-gray-700">Natural History Museum, Statue of Liberty, Central Park bikes</td>
                    <td className="py-3 px-3 text-gray-700">Disney Hollywood Studios, Universal, water parks</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium">Younger</td>
                    <td className="py-3 px-3">7</td>
                    <td className="py-3 px-3 text-gray-700">Central Park Zoo, Intrepid Museum, pizza tour</td>
                    <td className="py-3 px-3 text-gray-700">Magic Kingdom, Animal Kingdom, LEGOLAND</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-medium">Youngest</td>
                    <td className="py-3 px-3">5</td>
                    <td className="py-3 px-3 text-gray-700">Children&apos;s Museum of Manhattan, Central Park playground, FAO Schwarz</td>
                    <td className="py-3 px-3 text-gray-700">Magic Kingdom (Fantasyland!), SeaWorld, hotel pool days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">👶 5-Year-Old Practical Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Bring or rent a stroller — you&apos;ll walk 15-20km/day at Disney</li>
                <li>• Height requirements: many rides have 40-inch (102cm) minimum — check in advance</li>
                <li>• Rider swap: Disney and Universal offer this (one parent rides while other waits with little one)</li>
                <li>• Plan to leave park midday (12-3pm) when hottest and most crowded, return evening</li>
                <li>• Bring snacks — theme park food is $15-20/meal for kids</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🎉 Skip-the-Line Options</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Disney Lightning Lane Multi Pass:</strong> US$30-40/person/day</li>
                <li>• <strong>Universal Express Pass:</strong> US$80-110/person/day (worth it during Easter)</li>
                <li>• <strong>Rope drop:</strong> arrive 30-45 min before park opening</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-orange-900 mb-3">🗓️ Easter Crowds Warning</h3>
            <ul className="space-y-2 text-sm text-orange-800">
              <li>🔴 <strong>Easter week March 30 – April 5 = 8-10/10 crowd level, 60-90 min waits for major rides</strong></li>
              <li>✅ <strong>Strong recommendation:</strong> NYC March 28 – April 5 (Easter in NYC!), Florida April 6-12 (post-Easter, crowds drop fast)</li>
              <li>• Easter Parade on 5th Avenue is a lovely family tradition</li>
              <li>• Epic Universe (Universal&apos;s new park, opened 2025) adds capacity but also more visitors</li>
            </ul>
          </div>
        </section>

        {/* SECTION 9: NYC GUIDE */}
        <section id="nyc" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">🗽 NYC Guide</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🚇 Getting Around</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Subway:</strong> best way. Buy OMNY card or use contactless. Kids under 44 inches ride free. 7-day pass = US$34</li>
                <li>• <strong>Uber/Lyft:</strong> use late nights, outer boroughs</li>
                <li>• <strong>Walking:</strong> 10-15km/day easily</li>
                <li className="text-red-600 font-medium">❌ Do NOT rent a car in NYC (parking $40-80/day, terrible traffic)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🗺️ NYC Highlights by Area</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Midtown:</strong> Times Square, Empire State Building, Top of the Rock, Broadway</li>
                <li><strong>Upper West Side:</strong> American Museum of Natural History, Central Park</li>
                <li><strong>Lower Manhattan:</strong> Statue of Liberty, 9/11 Memorial, Brooklyn Bridge</li>
                <li><strong>Brooklyn:</strong> DUMBO (great views), Brooklyn Bridge Park</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🏨 Where to Stay</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Option</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Area</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Why</th>
                    <th className="text-right py-2 px-3 font-semibold text-gray-700">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 px-3 font-medium">Hotel Beacon</td>
                    <td className="py-2 px-3 text-gray-600">Upper West Side</td>
                    <td className="py-2 px-3 text-gray-600">Family favorite, kitchenettes, near Central Park</td>
                    <td className="py-2 px-3 text-right">US$250-350/night</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Residence Inn Midtown</td>
                    <td className="py-2 px-3 text-gray-600">Times Square</td>
                    <td className="py-2 px-3 text-gray-600">Suites with kitchen, free breakfast</td>
                    <td className="py-2 px-3 text-right">US$300-450/night</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-2 px-3 font-medium">Airbnb 2BR ⭐</td>
                    <td className="py-2 px-3 text-gray-600">Upper West Side/Midtown</td>
                    <td className="py-2 px-3 text-gray-600">More space, kitchen, laundry</td>
                    <td className="py-2 px-3 text-right">US$250-400/night</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-green-700 font-medium">⭐ Recommended: Airbnb 2-bedroom, Upper West Side (near 1/2/3 subway, Central Park, kid-friendly)</p>
          </div>
        </section>

        {/* SECTION 10: FLORIDA GUIDE */}
        <section id="florida" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">🌴 Florida Guide</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🚗 Getting Around</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="text-green-700 font-medium">✅ Rent a car — absolutely necessary in Florida</li>
                <li>• Minivan/large SUV: US$50-80/day (<strong>book NOW</strong> — Easter prices surge to $100-150/day)</li>
                <li>• SunPass: US$4.99 at Publix/Walgreens for Florida toll roads</li>
                <li>• Car seat for 5-year-old: Florida law requires for under 6. Rent ($10-15/day) or buy at Walmart ($25-40)</li>
                <li>• I-4 (Orlando main highway): aggressive drivers, use Waze, stay right lane</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">☀️ Weather (April)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 18-30°C, warm, humid, afternoon thunderstorms common</li>
                <li>• Pack: light clothing, sunscreen, hats, rain ponchos</li>
                <li className="text-green-700 font-medium">💡 Buy ponchos at Dollar Tree — NOT Disney ($15 each!)</li>
              </ul>
              <div className="mt-4">
                <h4 className="font-bold text-gray-900 mb-2">🎡 Theme Park Tips</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Buy tickets online (cheaper than gate price)</li>
                  <li>• Disney 4-day: ~US$440/person</li>
                  <li>• Universal 3-day: ~US$350/person</li>
                  <li>• Free water at all Disney parks (bring refillable bottles)</li>
                  <li>• Midday break 12-3pm — return evening when crowds thin</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🏠 Where to Stay</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Option</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Area</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Why</th>
                    <th className="text-right py-2 px-3 font-semibold text-gray-700">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-green-50">
                    <td className="py-2 px-3 font-medium">Vacation rental house ⭐</td>
                    <td className="py-2 px-3 text-gray-600">Kissimmee/Champions Gate</td>
                    <td className="py-2 px-3 text-gray-600">Private pool, 3+ bedrooms, kitchen</td>
                    <td className="py-2 px-3 text-right">US$200-350/night</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Disney area resort</td>
                    <td className="py-2 px-3 text-gray-600">Lake Buena Vista</td>
                    <td className="py-2 px-3 text-gray-600">Park shuttles, pool</td>
                    <td className="py-2 px-3 text-right">US$200-400/night</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Universal area hotel</td>
                    <td className="py-2 px-3 text-gray-600">International Drive</td>
                    <td className="py-2 px-3 text-gray-600">Near Epic Universe</td>
                    <td className="py-2 px-3 text-right">US$200-350/night</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">On-site Disney hotel</td>
                    <td className="py-2 px-3 text-gray-600">Disney property</td>
                    <td className="py-2 px-3 text-gray-600">Early park access</td>
                    <td className="py-2 px-3 text-right">US$400-800/night</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-green-700 font-medium">⭐ Recommended: Vacation rental house with private pool, Kissimmee area (VRBO, $250-300/night)</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-blue-900 mb-2">✈️ NYC → Florida</h3>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• Fly! 2.5-hour flight, US$80-200/person on JetBlue/Spirit/Southwest</li>
              <li>• JFK/LGA → MCO (Orlando) or Newark (EWR) for cheaper options</li>
            </ul>
          </div>
        </section>

        {/* SECTION 11: MONEY */}
        <section id="money" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">💰 Money &amp; Budgeting</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💱 Exchange Rate &amp; Payments</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>1 USD ≈ 7.80 HKD</strong> (pegged, stable)</li>
                <li>• Use credit cards (Visa/Mastercard universally accepted)</li>
                <li>• Cash: US$500-1,000 for tips, food carts, small vendors</li>
                <li>• ATMs: Charles Schwab has no foreign fees; others charge HK$30-50/withdrawal</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🍽️ Tipping Culture — MANDATORY</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Sit-down restaurant', '18-20% of pre-tax bill'],
                      ['Bar drinks', 'US$1-2 per drink'],
                      ['Hotel bellman', 'US$2-5 per bag'],
                      ['Hotel housekeeping', 'US$3-5/day'],
                      ['Taxi/Uber', '15-20%'],
                      ['Tour guide', 'US$5-10/person'],
                    ].map(([situation, tip]) => (
                      <tr key={situation}>
                        <td className="py-1.5 text-gray-700">{situation}</td>
                        <td className="py-1.5 text-right font-medium">{tip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Daily Budget (Family of 5)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-700 mb-2">🗽 NYC</h4>
                <div className="space-y-2">
                  {[['Low', '$460/day'], ['Mid', '$730/day'], ['High', '$1,160/day']].map(([level, amount]) => (
                    <div key={level} className="flex justify-between text-sm">
                      <span className="text-gray-600">{level}</span>
                      <span className="font-semibold">{amount}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 mb-2">🌴 Florida</h4>
                <div className="space-y-2">
                  {[['Low', '$360/day'], ['Mid', '$770/day'], ['High', '$1,280/day']].map(([level, amount]) => (
                    <div key={level} className="flex justify-between text-sm">
                      <span className="text-gray-600">{level}</span>
                      <span className="font-semibold">{amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Total Trip Budget (14 days, mid-range)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Item</th>
                    <th className="text-right py-2 px-3 font-semibold text-gray-700">USD</th>
                    <th className="text-right py-2 px-3 font-semibold text-gray-700">HKD</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Flights HK→NYC RT (5 pax)', '$8,000-12,000', '$62,400-93,600'],
                    ['NYC→Orlando flights (5 pax)', '$500-1,000', '$3,900-7,800'],
                    ['NYC accommodation (6 nights)', '$2,100', '$16,380'],
                    ['Florida accommodation (8 nights)', '$2,400', '$18,720'],
                    ['Food (14 days)', '$2,300', '$17,940'],
                    ['Theme park tickets', '$3,500', '$27,300'],
                    ['Transport', '$800', '$6,240'],
                    ['Travel insurance', '$500', '$3,900'],
                    ['US visas (4 HKSAR)', '$640', '$5,152'],
                    ['Misc (tips, shopping)', '$1,000', '$7,800'],
                  ].map(([item, usd, hkd]) => (
                    <tr key={item}>
                      <td className="py-2 px-3 text-gray-700">{item}</td>
                      <td className="py-2 px-3 text-right">{usd}</td>
                      <td className="py-2 px-3 text-right">{hkd}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-900 text-white">
                    <td className="py-3 px-3 font-bold rounded-bl-xl">TOTAL</td>
                    <td className="py-3 px-3 text-right font-bold">~$21,700-24,200</td>
                    <td className="py-3 px-3 text-right font-bold rounded-br-xl">~$169,000-189,000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 12: EMERGENCY */}
        <section id="emergency" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">🚨 Emergency Contacts</h2>

          <div className="bg-red-600 text-white rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-bold mb-3">Emergency Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-700 rounded-xl p-4">
                <p className="text-3xl font-black">911</p>
                <p className="text-red-200">Police, Fire, Ambulance (everywhere in US)</p>
              </div>
              <div className="bg-red-700 rounded-xl p-4">
                <p className="text-3xl font-black">311</p>
                <p className="text-red-200">NYC non-emergency city services</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Consulates</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Office</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Address</th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-700">Phone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Canadian Consulate (NYC)', '466 Lexington Ave, 20th Floor, NY 10017', '+1 212-596-1628'],
                    ['Canadian Emergency (after hours)', 'Ottawa (collect)', '+1 613-996-8885'],
                    ['HK Economic & Trade Office (NYC)', '115 East 54th Street, NY 10022', '+1 212-752-3320'],
                    ['Canadian Consulate (Miami)', '1395 Brickell Ave, Suite 1100, Miami 33131', '+1 305-579-1600'],
                  ].map(([office, address, phone]) => (
                    <tr key={office}>
                      <td className="py-2 px-3 font-medium text-gray-900">{office}</td>
                      <td className="py-2 px-3 text-gray-600">{address}</td>
                      <td className="py-2 px-3 font-mono text-blue-700">{phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏥 Hospitals — NYC</h3>
              <div className="space-y-3">
                {[
                  ['Mount Sinai West', '1000 10th Ave (at 59th St)', 'Near Midtown, excellent ER'],
                  ['NYU Langone', '550 1st Ave (at 33rd St)', 'Top-tier'],
                  ['NewYork-Presbyterian/Weill Cornell', '525 E 68th St', 'Upper East Side, best in country'],
                  ['CityMD Urgent Care', 'Multiple (Times Sq, UWS)', 'Walk-in, much cheaper than ER'],
                ].map(([name, address, notes]) => (
                  <div key={name} className="border-b border-gray-100 pb-2">
                    <p className="font-medium text-gray-900 text-sm">{name}</p>
                    <p className="text-xs text-gray-500">{address}</p>
                    <p className="text-xs text-blue-600">{notes}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏥 Hospitals — Orlando</h3>
              <div className="space-y-3">
                {[
                  ['AdventHealth Celebration', '400 Celebration Pl, Kissimmee', 'Closest to Disney, excellent pediatrics'],
                  ['Orlando Health Dr. Phillips', '9400 Turkey Lake Rd', 'Near Universal/I-Drive'],
                  ['AdventHealth for Children', '601 E Rollins St, Orlando', 'Pediatric specialist'],
                  ['CentraCare Urgent Care', 'Multiple near tourist areas', 'Walk-in, much cheaper than ER'],
                ].map(([name, address, notes]) => (
                  <div key={name} className="border-b border-gray-100 pb-2">
                    <p className="font-medium text-gray-900 text-sm">{name}</p>
                    <p className="text-xs text-gray-500">{address}</p>
                    <p className="text-xs text-blue-600">{notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-green-900 mb-2">💡 Pro Tip: Urgent Care vs ER</h3>
            <p className="text-green-800 text-sm">For non-emergency issues, go to Urgent Care — <strong>NOT</strong> the ER.</p>
            <p className="text-green-700 text-sm mt-1">Cost: <strong>$200-400</strong> vs <strong>$3,000-5,000+</strong></p>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#1e3a5f' }} className="mt-16 py-8 text-center text-white">
        <p className="text-gray-300 text-sm">NYC &amp; Florida Travel Safety Report · Easter 2026 · Prepared March 2026</p>
        <p className="text-gray-500 text-xs mt-2">For planning purposes only. Always verify visa requirements and travel advisories before departure.</p>
      </footer>
    </main>
  )
}
