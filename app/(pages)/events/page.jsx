// app/(pages)/events/page.jsx
'use client'

// — Page-scoped layout + composables —
import Header           from '../_components/Header/Header'
import Footer           from '../_components/Footer/Footer'
import WorkshopsSection from '../_components/WorkshopsSection'
import GuestSpeakersSection from '../_components/GuestSpeakersSection'
import WritersConferenceSection from '../_components/WritersConferenceSection'


export default function EventsPage() {
  return (
    <>
      {/* ===== GLOBAL HEADER ===== */}
      <Header />

      {/* ===== PAGE CONTENT ===== */}
      <main>
        <WorkshopsSection />
        <GuestSpeakersSection />
        {/* — San Francisco Writers Conference — */}
        <WritersConferenceSection />
      </main>

      {/* ===== GLOBAL FOOTER ===== */}
      <Footer />
    </>
  )
}
