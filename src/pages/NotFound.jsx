import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white px-6">
      <h1 className="text-6xl font-bold text-red-500">404</h1>

      <p className="mt-4 text-xl">Страница не найдена</p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
