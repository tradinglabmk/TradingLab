"use client";

import { useState, useEffect, useMemo } from "react";

interface Application {
  _id: string;
  fullName: string;
  email: string;
  ageGroup: string;
  location: string;
  contactMethod: string;
  additionalContact?: string;
  service: string;
  mentorshipData?: Record<string, unknown>;
  groupCoachingData?: Record<string, unknown>;
  tradingSignalsData?: Record<string, unknown>;
  createdAt: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleAuth = async () => {
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Погрешна лозинка");
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    setLoading(true);
    fetch("/api/applications")
      .then((res) => res.json())
      .then((data) => setApplications(data.applications || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [isAuthenticated]);

  const filtered = useMemo(() => {
    return applications.filter((app) => {
      const matchesSearch =
        !search ||
        app.fullName.toLowerCase().includes(search.toLowerCase()) ||
        app.email.toLowerCase().includes(search.toLowerCase()) ||
        app.location.toLowerCase().includes(search.toLowerCase());
      const matchesService =
        serviceFilter === "all" || app.service === serviceFilter;
      return matchesSearch && matchesService;
    });
  }, [applications, search, serviceFilter]);

  const stats = useMemo(() => {
    const total = applications.length;
    const mentorship = applications.filter(
      (a) => a.service === "1-на-1 индивидуално Mentorship",
    ).length;
    const group = applications.filter(
      (a) => a.service === "Group Coaching во мала група",
    ).length;
    const signals = applications.filter(
      (a) => a.service === "Trading Signals",
    ).length;
    return { total, mentorship, group, signals };
  }, [applications]);

  if (!isAuthenticated) {
    return (
      <div className="bg-[#0a0a0f] min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-500 text-sm">
              Внесете ја лозинката за пристап
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAuth()}
              placeholder="Лозинка"
              className="w-full rounded-xl border border-gray-700/60 bg-white/[0.02] px-4 py-3.5 text-white placeholder-gray-500 focus:border-[#9F62F8] focus:outline-none transition-all duration-300"
            />
            {authError && (
              <p className="text-red-400 text-sm text-center">{authError}</p>
            )}
            <button
              onClick={handleAuth}
              className="w-full rounded-xl bg-gradient-to-r from-[#9F62F8] to-[#7B3FE4] px-4 py-3.5 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(159,98,248,0.4)]"
            >
              Влези
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Апликации</h1>
          <p className="text-gray-500 mt-1">Преглед на сите апликации</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Вкупно" value={stats.total} color="#9F62F8" />
          <StatCard
            label="Mentorship"
            value={stats.mentorship}
            color="#8B5CF6"
          />
          <StatCard
            label="Group Coaching"
            value={stats.group}
            color="#6366F1"
          />
          <StatCard
            label="Trading Signals"
            value={stats.signals}
            color="#A78BFA"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Пребарај по име, email, локација..."
              className="w-full rounded-xl border border-gray-700/60 bg-white/[0.03] pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#9F62F8] focus:outline-none transition-all duration-300"
            />
          </div>
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="rounded-xl border border-gray-700/60 bg-[#0a0a0f] px-4 py-3 text-sm text-white focus:border-[#9F62F8] focus:outline-none transition-all duration-300"
          >
            <option value="all">Сите услуги</option>
            <option value="1-на-1 индивидуално Mentorship">Mentorship</option>
            <option value="Group Coaching во мала група">Group Coaching</option>
            <option value="Trading Signals">Trading Signals</option>
          </select>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-4">
          {filtered.length} {filtered.length === 1 ? "резултат" : "резултати"}
        </p>

        {/* Applications list */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-700 border-t-[#9F62F8]" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-2xl border border-gray-800/50 bg-white/[0.02] p-12 text-center">
            <p className="text-gray-500">Нема пронајдени апликации</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((app) => (
              <ApplicationCard
                key={app._id}
                app={app}
                isExpanded={expandedId === app._id}
                onToggle={() =>
                  setExpandedId(expandedId === app._id ? null : app._id)
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-800/50 bg-white/[0.02] p-5">
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-3xl font-bold" style={{ color }}>
        {value}
      </p>
    </div>
  );
}

function ApplicationCard({
  app,
  isExpanded,
  onToggle,
}: {
  app: Application;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const serviceColor =
    app.service === "1-на-1 индивидуално Mentorship"
      ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
      : app.service === "Group Coaching во мала група"
        ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
        : "bg-violet-500/20 text-violet-300 border-violet-500/30";

  const date = new Date(app.createdAt).toLocaleDateString("mk-MK", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="rounded-2xl border border-gray-800/50 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-gray-700/60">
      {/* Header row */}
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#9F62F8]/30 to-[#7B3FE4]/30 text-white font-semibold text-sm">
            {app.fullName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          <div>
            <p className="text-white font-medium text-[15px]">{app.fullName}</p>
            <p className="text-gray-500 text-sm">{app.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${serviceColor}`}
          >
            {app.service === "1-на-1 индивидуално Mentorship"
              ? "Mentorship"
              : app.service === "Group Coaching во мала група"
                ? "Group"
                : "Signals"}
          </span>
          <span className="text-xs text-gray-600">{date}</span>
          <svg
            className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Expanded details */}
      {isExpanded && (
        <div className="border-t border-gray-800/50 px-5 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <DetailItem label="Возрасна група" value={app.ageGroup} />
            <DetailItem label="Локација" value={app.location} />
            <DetailItem label="Контакт метод" value={app.contactMethod} />
            <DetailItem
              label="Дополнителен контакт"
              value={app.additionalContact || "—"}
            />
            <DetailItem label="Услуга" value={app.service} />
            <DetailItem label="Датум" value={date} />
          </div>

          {/* Mentorship data */}
          {app.mentorshipData && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-[#9F62F8] uppercase tracking-wider mb-4">
                Mentorship одговори
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(app.mentorshipData).map(([key, val]) => (
                  <DetailItem
                    key={key}
                    label={formatKey(key)}
                    value={formatValue(val)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Group Coaching data */}
          {app.groupCoachingData && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider mb-4">
                Group Coaching одговори
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(app.groupCoachingData).map(([key, val]) => (
                  <DetailItem
                    key={key}
                    label={formatKey(key)}
                    value={formatValue(val)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Trading Signals data */}
          {app.tradingSignalsData && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-[#A78BFA] uppercase tracking-wider mb-4">
                Trading Signals одговори
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(app.tradingSignalsData).map(([key, val]) => (
                  <DetailItem
                    key={key}
                    label={formatKey(key)}
                    value={formatValue(val)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/[0.02] border border-gray-800/30 px-4 py-3">
      <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-sm text-white whitespace-pre-wrap">{value}</p>
    </div>
  );
}

function formatKey(key: string): string {
  const map: Record<string, string> = {
    tradingDuration: "Искуство со trading",
    knowledgeLevel: "Ниво на знаење",
    markets: "Пазари",
    tradingStyle: "Trading стил",
    accountType: "Тип на сметка",
    concepts: "Концепти",
    tradingPlan: "Trading Plan",
    problems: "Проблеми",
    currentSituation: "Моментална ситуација",
    expectations: "Очекувања",
    importantResult: "Најважен резултат",
    successDefinition: "Успешно менторство",
    progressTime: "Период за напредок",
    weeklyTime: "Неделно време",
    availability: "Достапност",
    commitment: "Посветеност",
    journalReadiness: "Trading Journal",
    responsibilityLevel: "Лична одговорност",
    whyIndividual: "Зошто индивидуално",
    sessionDuration: "Времетраење на сесија",
    sessionFrequency: "Фреквенција",
    format: "Формат",
    investment: "Инвестиција",
    paymentMethod: "Начин на плаќање",
    groupAlternative: "Group алтернатива",
    startTime: "Почеток",
    mentorExpectations: "Очекувања од ментор",
    additionalInfo: "Дополнително",
    confirmRealistic: "Потврда: реални очекувања",
    confirmResponsibility: "Потврда: одговорност",
    confirmContact: "Потврда: контакт",
    whyGroup: "Зошто Group Coaching",
    groupSize: "Големина на група",
    programContent: "Содржина на програма",
    individualFeedbackImportance: "Важност на индивидуален feedback",
    previousSignals: "Претходно користење сигнали",
    previousExperience: "Претходно искуство со сигнали",
    signalType: "Тип на сигнали",
    checkFrequency: "Фреквенција на проверка",
    weeklySignals: "Неделни сигнали",
    signalContent: "Содржина на сигнал",
    signalBenefits: "Очекувања од сигнали",
    analysisDepth: "Длабочина на анализа",
    capital: "Trading капитал",
    deposit: "Планиран депозит",
    affordableCapital: "Достапен капитал",
    riskPerSignal: "Ризик по сигнал",
    maxDrawdown: "Максимален Drawdown",
    positionSize: "Position Size",
    losingStreak: "Реакција на загуби",
    expectedResults: "Очекувани резултати",
    communication: "Комуникација",
    confirmRisk: "Потврда: ризик",
    confirmPastResults: "Потврда: минати резултати",
    confirmAccountManagement: "Потврда: управување сметка",
    confirmAffordableCapital: "Потврда: расположлив капитал",
  };
  return map[key] || key;
}

function formatValue(val: unknown): string {
  if (Array.isArray(val)) return val.join(", ");
  if (typeof val === "boolean") return val ? "Да" : "Не";
  if (typeof val === "number") return `${val}/10`;
  return String(val || "—");
}
