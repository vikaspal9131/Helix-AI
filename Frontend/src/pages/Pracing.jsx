import React from "react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Supercharge your billing</h1>
        <p className="text-lg text-gray-600">
          Built for scale — from your first recurring plan to global,
          usage-based billing
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="border rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
          <p className="text-sm font-medium text-gray-500 mb-2">Quote to cash</p>
          <h2 className="text-3xl font-bold">$199 <span className="text-lg font-normal">/ month</span></h2>
          <p className="text-gray-500 mb-6">+ 0.6% of revenue</p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Subscriptions</li>
            <li>✔ Compliant invoicing</li>
            <li>✔ Tax management</li>
            <li>✔ Analytics and reports</li>
            <li>✔ Custom pricing</li>
            <li>✔ Modern CPQ</li>
            <li>✔ Payment collection</li>
            <li>✔ Customer portal</li>
            <li>✔ International billing</li>
            <li>✔ One-off invoice</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            Native integration with payment providers: Stripe, GoCardless, Mollie, Airwallex
          </p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
          <p className="text-sm font-medium text-gray-500 mb-2">Quote to cash <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">+ Usage</span></p>
          <h2 className="text-3xl font-bold">$299 <span className="text-lg font-normal">/ month</span></h2>
          <p className="text-gray-500 mb-6">+ 0.7% of revenue</p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Unlimited events</li>
            <li>✔ Real-time consumption</li>
            <li>✔ Metered products</li>
            <li>✔ Automated seat-based billing</li>
            <li>✔ Prepaid credit management</li>
            <li>✔ Direct database connection</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="border rounded-2xl shadow-sm p-8 hover:shadow-lg transition">
          <p className="text-sm font-medium text-gray-500 mb-2">Quote to cash <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">+ High volume</span></p>
          <h2 className="text-3xl font-bold">Custom</h2>
          <p className="text-gray-500 mb-6">Get a quote from sales</p>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Unlimited invoices</li>
            <li>✔ Premium support</li>
            <li>✔ Migration and onboarding</li>
            <li>✔ Historical data import</li>
          </ul>
          <p className="mt-6 text-sm text-gray-500">
            Companies with &gt; 5M ARR use Hyperline to scale their billing
          </p>
        </div>
      </div>
    </div>
  );
}
