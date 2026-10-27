import React, { useState, useMemo } from 'react';
import { DEMO_DATASETS } from '../data/portfolioData';
import { DataSample } from '../types';
import { BarChart3, Calculator, TrendingUp, AlertCircle, RefreshCw, Plus } from 'lucide-react';

export const DataLabInteractive: React.FC = () => {
  const [currentDatasetKey, setCurrentDatasetKey] = useState<string>('academic');
  const [customDataList, setCustomDataList] = useState<Record<string, DataSample[]>>({
    academic: DEMO_DATASETS.academic.data,
    club: DEMO_DATASETS.club.data,
  });

  const [activeItem, setActiveItem] = useState<DataSample | null>(null);
  const [newItemLabel, setNewItemLabel] = useState('');
  const [newItemValue, setNewItemValue] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const datasetConfig = DEMO_DATASETS[currentDatasetKey] || DEMO_DATASETS.academic;
  const data = customDataList[currentDatasetKey] || [];

  // Statistical calculations in real-time
  const stats = useMemo(() => {
    if (!data.length) {
      return { mean: 0, median: 0, stdDev: 0, variance: 0, min: 0, max: 0, q1: 0, q3: 0, cv: 0, count: 0 };
    }
    const values = data.map((d) => d.value).sort((a, b) => a - b);
    const n = values.length;
    const sum = values.reduce((acc, v) => acc + v, 0);
    const mean = sum / n;

    // Median
    const median = n % 2 === 0
      ? (values[n / 2 - 1] + values[n / 2]) / 2
      : values[Math.floor(n / 2)];

    // Variance & Standard Deviation
    const variance = values.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / n;
    const stdDev = Math.sqrt(variance);

    // Quartiles
    const q1 = values[Math.floor(n * 0.25)];
    const q3 = values[Math.floor(n * 0.75)];

    // Coefficient of variation
    const cv = mean > 0 ? (stdDev / mean) * 100 : 0;

    return {
      count: n,
      mean: Number(mean.toFixed(2)),
      median: Number(median.toFixed(2)),
      stdDev: Number(stdDev.toFixed(2)),
      variance: Number(variance.toFixed(2)),
      min: Number(values[0].toFixed(2)),
      max: Number(values[n - 1].toFixed(2)),
      q1: Number(q1.toFixed(2)),
      q3: Number(q3.toFixed(2)),
      cv: Number(cv.toFixed(1)),
    };
  }, [data]);

  const handleResetData = () => {
    setCustomDataList((prev) => ({
      ...prev,
      [currentDatasetKey]: DEMO_DATASETS[currentDatasetKey].data,
    }));
    setShowAddForm(false);
  };

  const handleAddSample = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseFloat(newItemValue);
    if (isNaN(val) || !newItemLabel.trim()) return;

    const newSample: DataSample = {
      id: Date.now(),
      label: newItemLabel.trim(),
      value: val,
      secondaryValue: Math.round(val * 1.1),
      category: 'Saisie utilisateur',
    };

    setCustomDataList((prev) => ({
      ...prev,
      [currentDatasetKey]: [...prev[currentDatasetKey], newSample],
    }));

    setNewItemLabel('');
    setNewItemValue('');
    setShowAddForm(false);
  };

  const chartMax = Math.max(...data.map((d) => d.value), stats.mean * 1.25) || 1;

  return (
    <section id="lab-stats" className="py-10 sm:py-14 border-b border-slate-800/60 bg-[#0a0f1d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-1.5">
              Démo Interactive
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Laboratoire d'Analyse Statistique & Décisionnelle
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Calcul instantané des paramètres de dispersion et synthèse décisionnelle sur données d'échantillon.
            </p>
          </div>

          {/* Dataset Switcher Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800 self-start shrink-0">
            <button
              onClick={() => {
                setCurrentDatasetKey('academic');
                setActiveItem(null);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                currentDatasetKey === 'academic'
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Académique (Notes)
            </button>
            <button
              onClick={() => {
                setCurrentDatasetKey('club');
                setActiveItem(null);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                currentDatasetKey === 'club'
                  ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Assiduité (Vovinam)
            </button>
          </div>
        </div>

        {/* Demo Notice Banner - Compact */}
        <div className="mt-4 p-3 rounded-lg border border-teal-500/20 bg-teal-950/20 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>
              <strong>Échantillon de démonstration :</strong> {datasetConfig.description}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <Plus className="w-3 h-3 text-teal-400" />
              <span>Tester une valeur</span>
            </button>
            <button
              onClick={handleResetData}
              className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
              title="Réinitialiser"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Réinitialiser</span>
            </button>
          </div>
        </div>

        {/* Add Value Form */}
        {showAddForm && (
          <form
            onSubmit={handleAddSample}
            className="mt-3 p-3 rounded-lg border border-slate-800 bg-slate-900 flex flex-wrap items-center gap-2 text-xs"
          >
            <span className="text-slate-300 font-medium">Nouveau point :</span>
            <input
              type="text"
              placeholder="Ex: Étudiant Q"
              value={newItemLabel}
              onChange={(e) => setNewItemLabel(e.target.value)}
              className="px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs"
              required
            />
            <input
              type="number"
              step="0.1"
              placeholder={`Valeur (${datasetConfig.unit})`}
              value={newItemValue}
              onChange={(e) => setNewItemValue(e.target.value)}
              className="px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs w-32"
              required
            />
            <button
              type="submit"
              className="px-3 py-1 rounded bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold"
            >
              Calculer
            </button>
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-2.5 py-1 rounded bg-slate-800 text-slate-400"
            >
              Annuler
            </button>
          </form>
        )}

        {/* Statistical Metrics Strip - Compact */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/50">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Moyenne (x̄)</div>
            <div className="mt-0.5 text-xl font-bold text-teal-400 font-mono tabular-nums">
              {stats.mean}
            </div>
            <div className="text-[10px] text-slate-500">{datasetConfig.unit}</div>
          </div>

          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/50">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Médiane (Me)</div>
            <div className="mt-0.5 text-xl font-bold text-cyan-400 font-mono tabular-nums">
              {stats.median}
            </div>
            <div className="text-[10px] text-slate-500">Milieu 50%</div>
          </div>

          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/50">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Écart-Type (σ)</div>
            <div className="mt-0.5 text-xl font-bold text-emerald-400 font-mono tabular-nums">
              {stats.stdDev}
            </div>
            <div className="text-[10px] text-slate-500">Dispersion</div>
          </div>

          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/50">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Étendue</div>
            <div className="mt-0.5 text-xl font-bold text-white font-mono tabular-nums">
              {(stats.max - stats.min).toFixed(1)}
            </div>
            <div className="text-[10px] text-slate-500">[{stats.min} - {stats.max}]</div>
          </div>

          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/50">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Quartiles (IQR)</div>
            <div className="mt-0.5 text-xl font-bold text-amber-300 font-mono tabular-nums">
              {(stats.q3 - stats.q1).toFixed(1)}
            </div>
            <div className="text-[10px] text-slate-500">Q1:{stats.q1} · Q3:{stats.q3}</div>
          </div>

          <div className="p-3 rounded-lg border border-slate-800 bg-slate-900/50">
            <div className="text-[10px] font-mono text-slate-400 uppercase">Taille (N)</div>
            <div className="mt-0.5 text-xl font-bold text-slate-200 font-mono tabular-nums">
              {stats.count}
            </div>
            <div className="text-[10px] text-slate-500">Observations</div>
          </div>
        </div>

        {/* Visual Chart Container - Compact */}
        <div className="mt-5 rounded-xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-sm font-semibold text-white flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-teal-400" />
                Distribution des observations — {datasetConfig.title}
              </h3>
            </div>
            {activeItem && (
              <div className="text-xs bg-slate-800 px-2.5 py-0.5 rounded text-slate-300">
                {activeItem.label} : <strong className="text-teal-300">{activeItem.value}</strong>
              </div>
            )}
          </div>

          {/* SVG Responsive Histogram Bar Chart */}
          <div className="relative w-full overflow-x-auto pb-2">
            <div className="min-w-[560px] h-48 flex items-end gap-2.5 px-2 pt-6 relative">
              {/* Mean reference dashed line */}
              {chartMax > 0 && (
                <div
                  className="absolute left-0 right-0 border-b border-dashed border-teal-400/60 pointer-events-none z-10"
                  style={{ bottom: `${(stats.mean / chartMax) * 100}%` }}
                >
                  <span className="absolute right-2 -bottom-4 text-[10px] font-mono text-teal-300 bg-slate-950 px-1 rounded border border-teal-500/30">
                    x̄: {stats.mean}
                  </span>
                </div>
              )}

              {/* Data Bars */}
              {data.map((item) => {
                const heightPercent = chartMax > 0 ? (item.value / chartMax) * 100 : 0;
                const isAboveMean = item.value >= stats.mean;
                const isSelected = activeItem?.id === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveItem(item)}
                    className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer"
                  >
                    <div
                      className={`text-[9px] font-mono transition-opacity mb-0.5 ${
                        isSelected ? 'opacity-100 text-teal-300 font-bold' : 'opacity-0 group-hover:opacity-100 text-slate-400'
                      }`}
                    >
                      {item.value}
                    </div>

                    <div
                      className={`w-full max-w-[36px] rounded-t transition-all duration-200 ${
                        isSelected
                          ? 'bg-teal-400 shadow-md shadow-teal-500/30'
                          : isAboveMean
                          ? 'bg-teal-500/70 group-hover:bg-teal-400'
                          : 'bg-cyan-600/60 group-hover:bg-cyan-500'
                      }`}
                      style={{ height: `${Math.max(heightPercent, 4)}%` }}
                    />

                    <div className="mt-1 text-[9px] text-slate-400 truncate max-w-[42px] text-center font-mono">
                      {item.label.replace('Étudiant ', 'E.').replace('Groupe ', 'G.')}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Automated Interpretation Engine - Streamlined */}
          <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <div className="font-semibold text-white uppercase text-[11px] flex items-center gap-1">
                <Calculator className="w-3.5 h-3.5 text-teal-400" />
                Interprétation statistique
              </div>
              <p className="text-slate-300 leading-relaxed">
                Moyenne de <strong>{stats.mean} {datasetConfig.unit}</strong> avec un écart-type de <strong>{stats.stdDev}</strong> (CV = {stats.cv}%). La dispersion est {stats.cv < 20 ? 'faible et homogène' : 'modérée'}.
              </p>
            </div>

            <div className="space-y-1 p-3 rounded-lg border border-slate-800 bg-slate-950/40">
              <div className="font-semibold text-teal-300 uppercase text-[11px] flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
                Aide à la décision
              </div>
              <p className="text-slate-300 leading-relaxed">
                {currentDatasetKey === 'academic' ? (
                  `50% des étudiants dépassent ${stats.median}. Recommandation : accompagner les profils situés sous Q1 (${stats.q1}).`
                ) : (
                  `Taux de présence régulier autour de la médiane de ${stats.median} séances.`
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
