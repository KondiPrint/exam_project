'use client';
import Link from 'next/link';
import useRequestData from '@/app/lib/useRequestData';

export default function GetMessages({ data }) {
  const { makeRequest, isLoading, error } = useRequestData();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('da-DK', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const sortedByDate = data.sort((a, b) => new Date(b.received) - new Date(a.received));

  const sortedData = sortedByDate.sort((a, b) => a.read - b.read);

  const updateRead = async (id) => {
    try {
      await makeRequest(`http://localhost:5888/inqueries/admin/${id}`, 'PATCH', {
        read: true,
      });
    } catch (error) {
      console.error('Fejl i opdatering af read:', error);
    }
  };

  return (
    <>
      <section className='flex flex-wrap justify-center gap-5 text-center uppercase snap-always snap-start py-10 px-4 sm:px-10 lg:px-20 xl:px-32 2xl:px-36'>
        <div className='overflow-x-auto w-full'>
          <table className='table table-zebra'>
            <thead>
              <tr>
                <th></th>
                <th>Navn</th>
                <th>Email</th>
                <th>Modtaget</th>
                <th>Status</th>
                <th>Handling</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((messa, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{messa.name}</td>
                  <td>{messa.email}</td>
                  <td>{formatDate(messa.received)}</td>
                  <td>{messa.read ? 'Læst' : 'Ulæst'}</td>
                  <td>
                    <Link
                      href={`/dashboard/beskeder/${messa._id}`}
                      className='btn'
                      onClick={async (e) => {
                        await updateRead(messa._id);
                      }}>
                      Læs
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
