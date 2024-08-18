import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <>
      <div className='container mx-auto p-4 space-y-4'>
        <h1 className='text-3xl font-bold mb-4'>Cookie Policy</h1>

        <p className='mb-4'>
          This Cookie Policy explains what cookies are, how we use cookies, how third-parties we may
          partner with may use cookies on the Service, your choices regarding cookies, and further
          information about cookies.
        </p>

        <div className='collapse collapse-arrow bg-base-200'>
          <input type='radio' name='my-accordion-2' defaultChecked />
          <div className='collapse-title text-xl font-medium'>
            <h2 className='mb-2'>What Are Cookies?</h2>
          </div>
          <div className='collapse-content'>
            <p className='mb-4'>
              Cookies are small data files that are placed on your device (computer or mobile
              device) when you visit a website. They are widely used to make websites work or work
              more efficiently, as well as to provide reporting information. Cookies are useful
              because they allow a website to recognize a user&apos;s device and improve the user
              experience.
            </p>
          </div>
        </div>

        <div className='collapse collapse-arrow bg-base-200'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-xl font-medium'>
            <h2 className='mb-2'>How We Use Cookies</h2>
          </div>
          <div className='collapse-content'>
            <p className='mb-4'>We use cookies for various purposes, including:</p>
            <ul className='list-disc list-inside mb-4 last:mb-0 space-y-4'>
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to
                function and cannot be switched off in our systems. They are usually only set in
                response to actions made by you, such as setting your privacy preferences, logging
                in, or filling out forms.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies help us to improve our website
                by collecting and reporting information on how you use it. For example, we use these
                cookies to analyze site usage and performance to enhance user experience.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies allow the website to remember
                choices you make and provide enhanced, more personalized features. They may be used
                to remember your login details or language preferences.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies may be set through our site by our
                advertising partners. They may be used to build a profile of your interests and show
                you relevant advertisements on other sites.
              </li>
            </ul>
          </div>
        </div>
        <div className='collapse collapse-arrow bg-base-200'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-xl font-medium'>
            <h2 className='mb-2'>Third-Party Cookies</h2>
          </div>
          <div className='collapse-content'>
            <p className='mb-4'>
              In addition to our own cookies, we may also use various third-party cookies to report
              usage statistics of the Service, deliver advertisements on and through the Service,
              and so on. These cookies are managed by third parties and their use is subject to
              their own privacy policies.
            </p>
          </div>
        </div>
        <div className='collapse collapse-arrow bg-base-200'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-xl font-medium'>
            <h2 className='mb-2'>Your Choices Regarding Cookies</h2>
          </div>
          <div className='collapse-content'>
            <p className='mb-4'>
              You can choose to disable cookies through your browser settings. However, please note
              that if you delete or refuse cookies, some parts of the Service may become
              inaccessible or not function properly.
            </p>
            <p className='mb-4'>
              To learn more about cookies and how to manage them, visit{' '}
              <Link
                className='link'
                href='https://www.allaboutcookies.org/'
                target='_blank'
                rel='noopener noreferrer'>
                AllAboutCookies.org
              </Link>{' '}
              or{' '}
              <Link
                className='link'
                href='https://www.aboutcookies.org/'
                target='_blank'
                rel='noopener noreferrer'>
                AboutCookies.org
              </Link>
              .
            </p>
          </div>
        </div>
        <div className='collapse collapse-arrow bg-base-200'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-xl font-medium'>
            <h2 className='mb-2'>Changes to This Cookie Policy</h2>
          </div>
          <div className='collapse-content'>
            <p className='mb-4'>
              We may update our Cookie Policy from time to time. We will notify you of any changes
              by posting the new Cookie Policy on this page. You are advised to review this Cookie
              Policy periodically for any changes. Changes to this Cookie Policy are effective when
              they are posted on this page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
