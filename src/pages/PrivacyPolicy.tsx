import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            Privacy Policy
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
                Cryptmaster is a personal educational project created to
                provide a simulated cryptocurrency trading experience.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                What information we collect
              </h2>
              <p>
                When you create an account, Cryptmaster may collect your name,
                email address, username, and account information. The
                application may also store information related to your virtual
                wallet, simulated transactions, and messages you choose to
                post in the community.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                How we use your information
              </h2>
              <p>
                Your information is used to provide and maintain Cryptmaster,
                including account authentication, virtual trading, community
                features, and improving the application.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Third-party services
              </h2>
              <p>
                Cryptmaster uses third-party services such as CoinGecko to
                obtain cryptocurrency market information. These services may
                have their own privacy policies and terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Data security
              </h2>
              <p>
                Reasonable measures are used to protect your account
                information. However, no online service can guarantee complete
                security.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Your information
              </h2>
              <p>
                We do not sell your personal information. If you have questions
                about your information or would like to request its deletion,
                you can contact us.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-white">
                Contact
              </h2>
              <p>
                For privacy-related questions, please contact us at{" "}
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
            className="text-slate-300 hover:text-white"
          >
            Privacy Policy
          </Link>

          <span>•</span>

          <Link
            to="/terms"
            className="hover:text-white"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;