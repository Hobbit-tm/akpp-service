import React, { useCallback, useEffect, useMemo, useState } from "react";

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function normalizeReview(item) {
  return {
    id: item?.id ?? Date.now(),
    name: item?.name?.trim?.() || "Клиент",
    email: item?.email?.trim?.() || "",
    rating: Number(item?.rating ?? 5) || 5,
    text: item?.text?.trim?.() || "",
    status: item?.status || "pending",
    reply: item?.reply || "",
    createdAt: item?.createdAt || item?.created_at || new Date().toISOString(),
    helpful: Number(item?.helpful ?? 0) || 0,
  };
}

const API_BASE = import.meta.env.VITE_API_URL || "";

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const contentType = response.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const payload = isJson ? await response.json().catch(() => null) : null;

  if (!response.ok) {
    const message =
      payload?.error ||
      payload?.message ||
      `Ошибка запроса: ${response.status}`;
    throw new Error(message);
  }

  return payload;
}

const panelClass =
  "rounded-[30px] border border-white/10 bg-slate-900/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.45)]";

const inputClass =
  "w-full rounded-2xl border border-slate-700 bg-slate-800/80 backdrop-blur-xl px-5 py-4 text-white placeholder:text-slate-500 transition-all duration-300 outline-none focus:border-red-500 focus:bg-slate-800 focus:ring-4 focus:ring-red-500/20";

const controlClass =
  "w-full appearance-none rounded-2xl border border-slate-700 bg-slate-800/80 backdrop-blur-xl px-5 py-4 text-white outline-none transition-all duration-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/20";

const smallActionClass =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition";

function StarDisplay({ rating, size = "sm" }) {
  const sizeClass =
    size === "lg" ? "text-lg sm:text-xl" : "text-sm sm:text-base";

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full bg-amber-50 px-3 py-1 font-semibold text-amber-500 ring-1 ring-amber-100 ${sizeClass}`}
      aria-label={`Оценка ${rating} из 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

function RatingPicker({ value, hoverValue, onChange, onHover, size = "md" }) {
  const active = hoverValue || value;
  const starClass =
    size === "lg"
      ? "text-3xl sm:text-4xl"
      : size === "sm"
        ? "text-2xl"
        : "text-3xl";

  return (
    <div className="flex items-center gap-1" aria-label="Выбор рейтинга">
      {[1, 2, 3, 4, 5].map((rating) => {
        const isActive = rating <= active;

        return (
          <button
            key={rating}
            type="button"
            onMouseEnter={() => onHover(rating)}
            onMouseLeave={() => onHover(0)}
            onFocus={() => onHover(rating)}
            onBlur={() => onHover(0)}
            onClick={() => onChange(rating)}
            aria-pressed={isActive}
            aria-label={`Поставить ${rating} ${rating === 1 ? "звезду" : rating < 5 ? "звезды" : "звёзд"}`}
            className={`${starClass} leading-none transition duration-150 ${
              isActive
                ? "text-amber-500 drop-shadow-sm scale-110"
                : "text-slate-400 hover:text-amber-300"
            }`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}

function Avatar({ name }) {
  const letter = (name || "К").trim().charAt(0).toUpperCase();
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-600 text-sm font-bold text-white shadow-sm">
      {letter}
    </div>
  );
}

function ReviewCard({ review, onHelpful }) {
  return (
    <article
      className={`${panelClass} p-5 transition hover:-translate-y-0.5 hover:shadow-md sm:p-6`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <Avatar name={review.name} />
          <div>
            <h3 className="text-base font-bold text-white sm:text-lg">
              {review.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {formatDate(review.createdAt)}
            </p>
          </div>
        </div>

        <StarDisplay rating={review.rating} size="lg" />
      </div>

      <p className="mt-5 whitespace-pre-wrap leading-7 text-slate-700">
        {review.text}
      </p>

      {review.reply ? (
        <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">Ответ компании</p>
          <p className="mt-2 whitespace-pre-wrap leading-7 text-slate-600">
            {review.reply}
          </p>
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
        <button
          type="button"
          onClick={() => onHelpful(review.id)}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Полезно ({review.helpful || 0})
        </button>
      </div>
    </article>
  );
}

function FilterButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${smallActionClass} ${
        active
          ? "bg-slate-950 text-white shadow-sm"
          : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

function LoadingCard() {
  return (
    <div className={`${panelClass} animate-pulse p-6`}>
      <div className="h-5 w-40 rounded bg-slate-100" />
      <div className="mt-4 h-4 w-28 rounded bg-slate-100" />
      <div className="mt-6 h-4 w-full rounded bg-slate-100" />
      <div className="mt-3 h-4 w-5/6 rounded bg-slate-100" />
      <div className="mt-6 h-10 w-full rounded-2xl bg-slate-100" />
    </div>
  );
}

function EmptyState({ title, text }) {
  return (
    <div className="rounded-[30px] border border-slate-800 bg-slate-900/80 backdrop-blur-xl p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,.35)]">
      <p className="text-3xl font-black text-white">{title}</p>

      <p className="mt-4 text-slate-400 leading-7">{text}</p>
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [filterRating, setFilterRating] = useState(0);
  const [filterHoverRating, setFilterHoverRating] = useState(0);

  const [formRating, setFormRating] = useState(5);
  const [formHoverRating, setFormHoverRating] = useState(0);

  const [sortBy, setSortBy] = useState("newest");
  const [replyToId, setReplyToId] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
  });

  const loadReviews = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await apiRequest("/api/reviews");
      const list = Array.isArray(data)
        ? data
        : data?.reviews || data?.items || [];
      setReviews(list.map(normalizeReview));
    } catch (err) {
      console.error("Ошибка загрузки отзывов:", err);
      setReviews([]);
      setError("Не удалось загрузить отзывы с сервера.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  const summary = useMemo(() => {
    const total = reviews.length;
    const average =
      total === 0
        ? 0
        : reviews.reduce((sum, item) => sum + Number(item.rating || 0), 0) /
          total;

    const approved = reviews.filter(
      (item) => item.status === "approved",
    ).length;
    const pending = reviews.filter((item) => item.status === "pending").length;

    return {
      total,
      average: average.toFixed(1),
      approved,
      pending,
    };
  }, [reviews]);

  const visibleReviews = useMemo(() => {
    let list = reviews.filter((item) => item.status === "approved");

    if (filterRating > 0) {
      list = list.filter((item) => Number(item.rating) === filterRating);
    }

    if (sortBy === "newest") {
      list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === "oldest") {
      list.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (sortBy === "top") {
      list.sort((a, b) => Number(b.helpful || 0) - Number(a.helpful || 0));
    }

    return list;
  }, [reviews, filterRating, sortBy]);

  const addReview = async (e) => {
    e.preventDefault();

    const name = form.name.trim() || "Клиент";
    const email = form.email.trim();
    const text = form.text.trim();

    if (!email) {
      setError("Укажите email для отправки отзыва.");
      return;
    }

    if (!text) return;

    setError("");

    try {
      await apiRequest("/api/reviews", {
        method: "POST",
        body: JSON.stringify({
          name,
          email: form.email.trim(),
          text,
          rating: Number(formRating) || 5,
        }),
      });

      setForm({
        name: "",
        email: "",
        text: "",
      });
      setFormRating(5);
      setFormHoverRating(0);
      setFilterRating(0);
      setFilterHoverRating(0);
      await loadReviews();
    } catch (err) {
      console.error("Ошибка отправки отзыва:", err);
      setError("Не удалось отправить отзыв на сервер.");
    }
  };

  const helpfulReview = async (id) => {
    try {
      await apiRequest(`/api/reviews/${id}/helpful`, { method: "POST" });
      await loadReviews();
    } catch (err) {
      console.error("Ошибка полезности:", err);
      setError("Не удалось обновить счётчик полезности.");
    }
  };

  const openReply = (id) => {
    const current = reviews.find((item) => item.id === id);
    setReplyToId(id);
    setReplyText(current?.reply || "");
  };

  const saveReply = async () => {
    const text = replyText.trim();
    if (!text || !replyToId) return;

    try {
      await apiRequest(`/api/reviews/${replyToId}/reply`, {
        method: "PATCH",
        body: JSON.stringify({ reply: text }),
      });
      setReplyToId(null);
      setReplyText("");
      await loadReviews();
    } catch (err) {
      console.error("Ошибка ответа:", err);
      setError("Не удалось сохранить ответ.");
    }
  };

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-slate-950 py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(239,68,68,.08),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Отзывы клиентов
            </h2>
          </div>

          <div className="grid grid-cols-1 rounded-[24px] border border-white/10 bg-slate-900/70 p-3 backdrop-blur-xl sm:min-w-[280px]">
            <div className="rounded-2xl bg-slate-950 px-4 py-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Средний рейтинг
              </div>
              <div className="mt-1 text-3xl font-black text-white">
                {summary.average}
              </div>
            </div>
            {/* <div className="rounded-2xl bg-slate-950 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Всего
                </div>
                <div className="mt-1 text-3xl font-black text-white">
                  {summary.total}
                </div>
              </div> */}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <FilterButton
              active={filterRating === 0}
              onClick={() => {
                setFilterRating(0);
                setFilterHoverRating(0);
              }}
            >
              Все
            </FilterButton>

            <div className="rounded-full border border-white/10 bg-slate-900 px-4 py-2">
              <RatingPicker
                value={filterRating}
                hoverValue={filterHoverRating}
                onHover={setFilterHoverRating}
                onChange={setFilterRating}
                size="sm"
              />
            </div>
          </div>

          <div className="relative w-full lg:w-72">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={controlClass}
            >
              <option value="newest">Сначала новые</option>
              <option value="oldest">Сначала старые</option>
              <option value="top">Сначала полезные</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
              ▾
            </div>
          </div>
        </div>

        {error ? (
          <div className="mb-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {error}
          </div>
        ) : null}

        <div className="space-y-10">
          <div className="mt-16">
            <div className="space-y-6">
              {loading ? (
                <div className="grid gap-4">
                  <LoadingCard />
                  <LoadingCard />
                  <LoadingCard />
                </div>
              ) : visibleReviews.length ? (
                visibleReviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    review={review}
                    onHelpful={helpfulReview}
                  />
                ))
              ) : (
                <EmptyState
                  title="Отзывы не найдены"
                  text="Попробуйте сменить фильтр или добавить новый отзыв через форму ниже."
                />
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[30px] border border-red-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-red-950/30 px-6 py-7 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,.35)]">
              <h3 className="text-3xl font-black text-white text-center">
                Добавить отзыв
              </h3>
            </div>

            <form
              onSubmit={addReview}
              className="rounded-[30px] border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-black text-white">Новый отзыв</h3>

              <div className="mt-6 grid gap-4">
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Ваше имя"
                  className={inputClass}
                />

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="Ваш email"
                  className={inputClass}
                  required
                />

                <textarea
                  value={form.text}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, text: e.target.value }))
                  }
                  placeholder="Ваш отзыв"
                  className={`${inputClass} min-h-28 resize-y`}
                />

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-slate-300">
                      Оценка
                    </p>
                  </div>

                  <RatingPicker
                    value={formRating}
                    hoverValue={formHoverRating}
                    onHover={setFormHoverRating}
                    onChange={setFormRating}
                    size="lg"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-red-700"
                >
                  Добавить отзыв
                </button>
              </div>
            </form>

            {replyToId !== null && (
              <div className={`${panelClass} p-6`}>
                <h3 className="text-xl font-bold text-white">Ответ на отзыв</h3>
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Напишите ответ"
                  className={`${inputClass} mt-4 min-h-28 resize-y`}
                />
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={saveReply}
                    className="rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Сохранить ответ
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setReplyToId(null);
                      setReplyText("");
                    }}
                    className="rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Отмена
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
