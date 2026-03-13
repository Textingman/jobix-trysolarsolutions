import Link from 'next/link';
import { Bot, BookOpen, ShieldCheck, Mic } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-extrabold tracking-tight" style={{ color: '#1F2937' }}>
                  Society <span style={{ color: '#F59E0B' }}>Mortgage</span>
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" style={{ color: '#1E6FA8' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" style={{ color: '#6B7280' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" style={{ color: '#6B7280' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" style={{ color: '#6B7280' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="text-white px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: '#F59E0B' }}>
                  Talk to Our AI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#FEF3C7', color: '#F59E0B' }}>
              <Mic className="w-4 h-4" />
              AI Voice Powered — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1F2937' }}>
              Your Personal AI Voice Guide
              <span className="block" style={{ color: '#F59E0B' }}>Through Your Mortgage</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Meet your AI mortgage advisor. Ask anything about home loans — rates, approvals, refinancing, down payments — and get honest, unbiased answers instantly. No salespeople. No pressure. Just clarity.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/signup"
                className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#F59E0B' }}
              >
                Talk to the AI Agent — Free
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2"
                style={{ color: '#2F8FCB', borderColor: '#2F8FCB', backgroundColor: '#FFFFFF' }}
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What the AI Does Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>What Our AI Voice Agent Does For You</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              A knowledgeable mortgage expert available 24/7 — with zero agenda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                  <Mic className="w-8 h-8" style={{ color: '#F59E0B' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Answers Your Mortgage Questions
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Ask our AI anything — "What rate can I qualify for?", "How much do I need for a down payment?", "Should I go fixed or adjustable?" — and get clear, honest answers in seconds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <BookOpen className="w-8 h-8" style={{ color: '#2F8FCB' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Guides You Step by Step
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI voice agent walks you through every stage of the mortgage process — from pre-qualification to closing — so you always know exactly where you stand.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                  <ShieldCheck className="w-8 h-8" style={{ color: '#F59E0B' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Protects You from Bad Deals
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI flags hidden fees in loan offers, identifies unfavorable terms, and tells you exactly what questions to ask before signing anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>How the AI Voice Agent Helps You</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Three simple steps to becoming a confident, informed home buyer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#F59E0B' }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Tell the AI About Your Situation</h3>
              <p style={{ color: '#6B7280' }}>
                Share your income, credit profile, and home-buying goals. The AI instantly tailors its guidance to your specific financial situation — no generic advice.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#2F8FCB' }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Get Your Personalized Mortgage Roadmap</h3>
              <p style={{ color: '#6B7280' }}>
                The AI explains your loan options, estimated monthly payments, interest rates, and what to expect at each stage — all in plain language you can actually understand.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#F59E0B' }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Close with Confidence</h3>
              <p style={{ color: '#6B7280' }}>
                Armed with unbiased knowledge, you can confidently evaluate loan offers, negotiate better terms, and choose the right mortgage for your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Conversation Preview Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Ask the AI Anything About Mortgages</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Here&apos;s a taste of what our AI voice agent can help you with
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "What mortgage rate can I qualify for?", a: "Your rate depends on your credit score, debt-to-income ratio, loan type, and current market conditions. With a 720+ credit score and stable income, you could qualify for competitive rates. Let me walk you through a personalized estimate based on your situation..." },
              { q: "How much do I need for a down payment?", a: "It depends on the loan type. Conventional loans typically require 3–20%, FHA loans as low as 3.5%, and VA loans can be 0% for eligible veterans. I can help you figure out which option fits your budget and goals..." },
              { q: "Should I go with a fixed or adjustable rate?", a: "A fixed rate gives you predictable payments for the life of the loan — great if you plan to stay long-term. An ARM starts lower but can adjust after a set period. Here's how to decide based on your timeline and risk tolerance..." },
              { q: "Can you explain the closing costs on my loan estimate?", a: "Absolutely. Closing costs typically run 2–5% of the loan amount and include origination fees, appraisal, title insurance, and prepaid items. I'll break down each line item, flag anything unusual, and tell you what's negotiable before you sign..." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: '#E5E7EB' }}>
                <div className="p-4 flex items-start gap-3" style={{ backgroundColor: '#FEF3C7' }}>
                  <span className="text-lg">🏠</span>
                  <p className="font-semibold" style={{ color: '#1F2937' }}>{item.q}</p>
                </div>
                <div className="p-4 flex items-start gap-3 bg-white">
                  <Mic className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#F59E0B' }} />
                  <p style={{ color: '#6B7280' }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #2F8FCB 100%)' }}>
            <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
              <Mic className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Your AI Mortgage Advisor is Ready
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Get instant, unbiased guidance through every step of your mortgage journey. No sales calls. No pressure. Just an AI that&apos;s 100% on your side.
              </p>
              <Link
                href="/signup"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#FFFFFF', color: '#F59E0B' }}
              >
                Talk to the AI Agent — Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Society Mortgage</h3>
              <p style={{ color: '#9CA3AF' }}>
                Your AI voice agent for unbiased mortgage guidance.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" style={{ color: '#9CA3AF' }} className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" style={{ color: '#9CA3AF' }} className="hover:text-white">
                    Talk to AI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" style={{ color: '#9CA3AF' }} className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" style={{ color: '#9CA3AF' }} className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p style={{ color: '#9CA3AF' }}>
                support@trysocietymortgage.com
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #374151', color: '#9CA3AF' }}>
            <p>&copy; 2026 Society Mortgage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
