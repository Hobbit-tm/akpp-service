import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <Helmet>
        <title>Страница не найдена — REMONTAKPP</title>
        <meta name="description" content="Такой страницы нет. Вернитесь на главную, чтобы узнать о ремонте АКПП в Алматы." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <h1 className="text-7xl font-black text-red-500">404</h1>

      <p className="mt-4 text-xl text-slate-300">Страница не найдена</p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
