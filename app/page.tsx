import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import HomePage from "@/components/HomePage";
import SearchBar from "@/components/SearchBar";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: any) {
  const { manufacturer, year, fuel, limit, model } = searchParams;
  const allCars = await fetchCars({
    manufacturer: manufacturer || "",
    fuel: fuel || "",
    year: year || 2022,
    limit: limit || 10,
    model: model || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <HomePage />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl">Car Catalogue</h1>
          <p>Explore cars</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {isDataEmpty ? (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No Results</h2>
            <p>{allCars?.message}</p>{" "}
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore />
          </section>
        )}
      </div>
    </main>
  );
}
