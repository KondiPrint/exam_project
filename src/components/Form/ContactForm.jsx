export default function ContactForm() {
  return (
    <>
      <section className='flex flex-col justify-center items-center animate-fade-in my-auto'>
        <form
          action='https://formsubmit.co/your-email@example.com'
          method='POST'
          className='space-y-5 p-2 mb-10 sm:mb-0 border-2'>
          <input type='hidden' name='_next' value='https://yourdomain.com/thanks' />
          <input type='hidden' name='_subject' value='New submission from contact form!' />

          <div className='relative indicator w-full'>
            <input
              type='text'
              name='name'
              id='name'
              required
              placeholder=' '
              className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'
            />
            <label
              htmlFor='name'
              className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
              Name:
            </label>
            <span className='indicator-item indicator-center badge peer-focus:hidden'>
              Required
            </span>
          </div>

          <div className='relative indicator w-full flex flex-col'>
            <input
              type='email'
              name='email'
              id='email'
              required
              className='input input-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full '
              placeholder=' '
            />
            <label
              htmlFor='email'
              className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-[:not(placeholder-shown)]:-top-3 peer-[:not(placeholder-shown)]:-left-1 peer-placeholder-shown:left-3 peer-placeholder-shown:top-3 peer-focus:bg-base-100 peer-[:not(placeholder-shown)]:bg-base-100 px-1'>
              Email:
            </label>
            <span className='indicator-item indicator-center badge peer-focus:hidden'>
              Required
            </span>
          </div>

          <div className='relative indicator w-full'>
            <textarea
              name='message'
              id='message'
              rows='4'
              required
              placeholder=' '
              className='textarea textarea-bordered peer focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary valid:border-success focus:valid:border-success focus:valid:ring-success w-full'></textarea>
            <label
              htmlFor='message'
              className='absolute top-3 left-3 transition-all duration-300 peer-focus:-top-3 peer-focus:-left-1 peer-valid:-top-3 peer-valid:-left-1 peer-focus:bg-base-100 peer-valid:bg-base-100 px-1'>
              Message:
            </label>
            <span className='indicator-item indicator-center badge peer-focus:hidden'>
              Required
            </span>
          </div>

          <div className='text-center flex'>
            <button
              type='submit'
              className='text-base text-base-100 btn btn-primary w-full md:w-auto md:justify-start hover:animate-heartbeat'>
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
