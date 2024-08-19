import ForsideHero from '@/components/Forside/Hero';
import fetchData from '@/app/lib/fetchData';
import Community from '@/components/Forside/Community';
import Goals from '@/components/Forside/Goals';
import Interest from '@/components/Forside/Interest';
import WhoAreWe from '@/components/Forside/WhoAreWe';
import Events from '@/components/Forside/Events';

export default async function Home() {
  // Fetch both data sets concurrently
  const [
    heroResult,
    goalsTxtResult,
    eventsTxtResult,
    goalsResult,
    interestResult,
    communityResult,
    testiResult,
    eventResult,
  ] = await Promise.all([
    fetchData('http://localhost:5888/heroes/653d440a5d213e546d6dd303'),
    fetchData('http://localhost:5888/heroes/653d46049a5c1b967a06948a'),
    fetchData('http://localhost:5888/heroes/653d5dd5eb8bede598fd91a9'),
    fetchData('http://localhost:5888/goals'),
    fetchData('http://localhost:5888/interest'),
    fetchData('http://localhost:5888/community'),
    fetchData('http://localhost:5888/testimonials'),
    fetchData('http://localhost:5888/events'),
  ]);

  // Destructure the results
  const { data: heroData, error: heroError } = heroResult;
  const { data: goalsTxtData, error: goalsTxtError } = goalsTxtResult;
  const { data: eventsTxtData, error: eventsTxtError } = eventsTxtResult;
  const { data: goalsData, error: goalsError } = goalsResult;
  const { data: interestData, error: interestError } = interestResult;
  const { data: communityData, error: communityError } = communityResult;
  const { data: testiData, error: testiError } = testiResult;
  const { data: eventData, error: eventError } = eventResult;

  // Handle errors appropriately
  if (
    heroError ||
    goalsTxtError ||
    goalsError ||
    interestError ||
    communityError ||
    testiError ||
    eventError ||
    eventsTxtError
  ) {
    return (
      <div>
        {heroError && <div>Error with hero data: {heroError}</div>}
        {communityError && <div>Error with community data: {communityError}</div>}
      </div>
    );
  }

  return (
    <>
      <ForsideHero data={heroData} />
      <Community data={communityData} />
      <Goals data={goalsTxtData} dataGoals={goalsData} />
      <Interest data={interestData} />
      <WhoAreWe dataTesti={testiData} />
      <Events data={eventData} dataTxt={eventsTxtData} />
    </>
  );
}
