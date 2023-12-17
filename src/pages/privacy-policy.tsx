import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import PageMetaTags from "~/components/MetaData/PageMetaTags";

const PrivacyPolicyPage: NextPage = () => {
  return (
    <div>
      <PageMetaTags title="Privacy Policy" />

      <header className="bg-gradient-to-r from-[#8761EE] to-[#9F93F2] p-10">
        <div className="flex flex-col items-center justify-start space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
          <Link href="/">
            <Image
              src="/assets/brand/w3s-sign.svg"
              alt="Web3 Sanctuary Sign"
              width={50}
              height={108}
            />
          </Link>

          <div>
            <h1 className="mb-5 text-center text-6xl font-semibold text-[#FFFFFF] lg:text-left">
              Privacy Policy
            </h1>
            <p className="text-center font-light text-[#FFFFFF] lg:text-left">
              Last Updated: Oct 25 2023
            </p>
          </div>
        </div>
      </header>

      <main className="px-4 py-10 text-[#56537B] lg:px-52 lg:py-20">
        <h2 className="mb-4 mt-14 text-3xl font-medium">Introduction</h2>
        <p className="mb-4 text-lg font-light">
          Welcome to roundUP (&quot;us,&quot; &quot;we,&quot; or
          &quot;our&quot;). We are committed to protecting your privacy and
          providing a safe online learning environment. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you access or use our platform, services, or interact with our
          content.
        </p>
        <ul className="mb-4 text-lg font-light">
          <li>
            - Provide and improve our services, including our educational
            courses and newsletter;
          </li>
          <li>- Respond to your inquiries and requests;</li>
          <li>- Communicate with you about our services and updates;</li>
          <li>- Analyze and monitor trends and usage of the Site;</li>
          <li>
            - Prevent fraudulent activity and protect our users and the Site;
          </li>
          <li>- Comply with legal obligations.</li>
        </ul>
        <h2 className="mb-4 mt-14 text-3xl font-medium">
          Information We Collect
        </h2>
        <p className="mb-4 text-lg font-light">
          We may collect personal information, such as your name, email address,
          and other contact details when you register or communicate with us.
        </p>
        <p className="mb-4 text-lg font-light">
          If you make payments on roundUP, we may collect payment details, such
          as credit card information.
        </p>
        <p className="mb-4 text-lg font-light">
          We collect information about how you interact with our platform,
          including IP addresses, device information, and browsing history.
        </p>
        <h2 className="mb-4 mt-14 text-3xl font-medium">Cookies</h2>
        <p className="mb-4 text-lg font-light">
          We use cookies and other tracking technologies to collect information
          about your use of the Site. You can control cookies through your
          browser settings and other tools. However, disabling cookies may
          affect your ability to use certain features of the Site.
        </p>
        <h2 className="mb-4 mt-14 text-3xl font-medium">
          How We Use Your Information
        </h2>
        <p className="mb-4 text-lg font-light">
          We use your personal information to provide educational services and
          to personalize your learning experience.
        </p>
        <p className="mb-4 text-lg font-light">
          We may use your contact information to send updates, respond to
          inquiries, and provide customer support.
        </p>
        <p className="mb-4 text-lg font-light">
          Your payment information is used to process transactions.
        </p>
        <p className="mb-4 text-lg font-light">
          We analyze usage data to enhance our platform, including content,
          features, and performance.
        </p>
        <h2 className="mb-4 mt-14 text-3xl font-medium">
          Sharing of Information
        </h2>
        <p className="mb-4 text-lg font-light">
          Information necessary for your educational experience may be shared
          with instructors.
        </p>
        <p className="mb-4 text-lg font-light">
          We may use third-party service providers to support our platform, and
          they may have access to your data.
        </p>
        <p className="mb-4 text-lg font-light">
          We may disclose information if required by law, legal process, or
          government requests.
        </p>
        <h2 className="mb-4 mt-14 text-3xl font-medium">Your Choices</h2>
        <p className="mb-4 text-lg font-light">
          You can review and edit your account settings to manage your personal
          information.
        </p>
        <p className="mb-4 text-lg font-light">
          You can opt out of marketing communications.
        </p>
        <h2 className="mb-4 mt-14 text-3xl font-medium">Security</h2>
        <p className="mb-4 text-lg font-light">
          We take reasonable precautions to protect your information, but no
          data transmission is completely secure.
        </p>

        <h2 className="mb-4 mt-14 text-3xl font-medium">
          Children&apos;s Privacy
        </h2>
        <p className="mb-4 text-lg font-light">
          Our Site is not intended for children under the age of 13. We do not
          knowingly collect personal information from children under the age of
          13.
        </p>
        <p className="mb-4 text-lg font-light">
          If you are a parent or guardian and believe that your child has
          provided us with personal information, please contact us immediately.
        </p>

        <h2 className="mb-4 mt-14 text-3xl font-medium">
          Changes to This Policy
        </h2>
        <p className="mb-4 text-lg font-light">
          We may update this Privacy Policy to reflect changes to our practices.
          You will be notified of significant changes.
        </p>
        <h2 className="mb-4 mt-14 text-3xl font-medium">Contact Us</h2>
        <p className="mb-4 text-lg font-light">
          If you have questions or concerns about this Privacy Policy, please
          contact us at{" "}
          <a
            href="mailto:mostertdev@gmail.com"
            className="text-lg font-light text-[#8761EE] hover:underline"
          >
            mostertdev@gmail.com
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
