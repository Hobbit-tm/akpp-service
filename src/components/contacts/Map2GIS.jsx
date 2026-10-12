import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin } from "lucide-react";

const position = [43.198532, 76.839239];

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map2GIS() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Красное свечение */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(239,68,68,.08),transparent_45%)]" />

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          {/* <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
            Наш адрес
          </span> */}

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Мы находимся в Алматы
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Приезжайте на диагностику АКПП.
          </p>
        </div>

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-slate-900/70 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center gap-4 border-b border-white/10 px-8 py-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600">
              <MapPin className="h-6 w-6 text-white" />
            </div>

            <div>
              <div className="text-xl font-bold text-white">г. Алматы</div>

              <div className="text-slate-400">ул. Садовый бульвар 1ж</div>
            </div>
          </div>

          <div className="h-[520px] w-full">
            <MapContainer
              center={position}
              zoom={17}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker position={position} icon={icon}>
                <Popup>
                  <strong>Remont AKPP</strong>
                  <br />
                  Алматы, Садовый бульвар, 1Ж
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
