/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/RWIgPbARaZt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Cabin } from 'next/font/google'
import { Afacad } from 'next/font/google'

cabin({
  subsets: ['latin'],
  display: 'swap',
})

afacad({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LandingPage() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-16">
              <div className="space-y-10">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Early Access
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Be the first to experience the future of E-Commerce
                </h2>
                <p className="max-w-[600px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-800">
                  Discover why customers are leaving. Say goodbye to guesswork
                  and hello to targeted marketing with precision.
                </p>
              </div>
              <form className="grid gap-4 md:gap-8 sm:grid-cols-[1fr_250px]">
                <Input
                  className="max-w-sm w-full grid-areas-input"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="w-full md:w-[200px]" type="submit">
                  Join the Waitlist
                </Button>
              </form>
            </div>
            {/* Updated styling to shift the list to the right */}
            <div className="flex justify-end lg:justify-start">
              {" "}
              {/* Use justify-end for right alignment on large screens */}
              <ul className="grid gap-8 py-8 mb-4 mt-12">
                <li className="flex items-start">
                  <CheckIcon className="mr-2 mt-1 h-4 w-4" />
                  <span className="text-gray-900 md:text-base lg:text-sm xl:text-base dark:text-gray-800">
                    Segment and understand the entire customer decision journey
                    to optimize engagement and conversion strategies
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mr-2 mt-1 h-4 w-4" />
                  <span className="text-gray-900 md:text-base lg:text-sm xl:text-base dark:text-gray-800">
                    Gain actionable insights into customer preferences and
                    behaviors to inform targeted marketing and product
                    development
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="mr-2 mt-1 h-4 w-4" />
                  <span className="text-gray-900 md:text-base lg:text-sm xl:text-base dark:text-gray-800">
                    Automate tailored follow-ups based on customer touchpoints
                    to boost CRO and customer satisfaction
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Experience Revu
          </h3>
          <p className="max-w-[600px] text-center text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-800">
            Unleash the power of AI-powered sales enablement
          </p>
        </div>
      </section>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
