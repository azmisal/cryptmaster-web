import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-200">
      <div className="mx-auto w-full max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Header */}
        <div className="mb-10">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            ← Back to Cryptmaster
          </Link>

          <div className="mb-5 inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
            Legal
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Last updated: August 10, 2026
          </p>
        </div>

        {/* Content */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl sm:p-10">
          <div className="space-y-9 text-[15px] leading-7 text-slate-300">
            <section>
              <p>
                By using Cryptmaster, you agree to these Terms of Service. If
                you do not agree with these terms, please do not use the
                application.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Educational project
              </h2>
              <p>
                Cryptmaster is a personal educational project created to
                demonstrate and practice cryptocurrency trading concepts.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Virtual trading only
              </h2>
              <p>
                Cryptmaster uses virtual funds for simulated trading. No real
                money or cryptocurrency is provided, stored, or traded through
                the application.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                No financial advice
              </h2>
              <p>
                Cryptocurrency prices and information shown in Cryptmaster are
                provided for educational purposes only and should not be
                considered financial, investment, or trading advice.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Market data
              </h2>
              <p>
                Cryptmaster uses third-party cryptocurrency market data,
                including data from CoinGecko. Market information may be
                delayed, inaccurate, or unavailable, and Cryptmaster does not
                guarantee its accuracy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                User responsibility
              </h2>
              <p>
                You are responsible for keeping your account credentials
                secure and for activity performed through your account. Do not
                use Cryptmaster for unlawful activities or attempt to interfere
                with or gain unauthorized access to the application.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Availability
              </h2>
              <p>
                Cryptmaster is provided as a personal project and may be
                changed, interrupted, or discontinued at any time.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Contact
              </h2>
              <p>
                For questions about these Terms, please contact us at{" "}
                <a
                  href="mailto:azmisaleem96@gmail.com"
                  className="font-medium text-indigo-400 transition hover:text-indigo-300"
                >
                  azmisaleem96@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-5 text-sm leading-6 text-slate-400">
          Cryptmaster is an educational project and is not a financial service
          or investment platform.
        </div>

        {/* Footer navigation */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
          <Link
            to="/privacy"
            className="hover:text-white"
          >
            Privacy Policy
          </Link>

          <span>•</span>

          <Link
            to="/terms"
            className="text-slate-300 hover:text-white"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;