import { useEffect, useState } from "react";

// Карта Leaflet работает только в браузере, поэтому подгружаем её
// после монтирования. На сервере выводим пустой блок нужной высоты.
export default function MapClient() {
  const [Map, setMap] = useState(null);

  useEffect(() => {
    let active = true;
    import("./Map2GIS").then((mod) => {
      if (active) setMap(() => mod.default);
    });
    return () => {
      active = false;
    };
  }, []);

  if (Map) return <Map />;

  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      <div className="mx-auto h-[500px] max-w-[1500px] px-4 sm:px-6 lg:px-8" />
    </section>
  );
}
