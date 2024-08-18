export default function Card({ children }) {
  return (
    <div className='card bg-base-100 w-fit shadow-xl mx-auto'>
      <div className='card-body'>{children}</div>
    </div>
  );
}
