export default function UserAmount() {
  return (
    <>
      <section className='flex flex-wrap justify-center gap-5 text-center uppercase snap-always snap-start'>
        <div className='flex flex-col p-2'>
          <span className='countdown font-mono text-5xl justify-center'>
            <span style={{ '--value': 2 }}></span>
          </span>
          Brugere
        </div>
      </section>
    </>
  );
}
