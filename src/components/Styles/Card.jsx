export default function Card({ children }) {
  return (
    <div className='card bg-base-100 w-fit shadow-xl mx-auto p-0'>
      <div className='card-body p-4'>{children}</div>
    </div>
  );
}
