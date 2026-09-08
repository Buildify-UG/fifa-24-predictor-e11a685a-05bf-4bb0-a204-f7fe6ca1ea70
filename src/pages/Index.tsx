import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [predictions, setPredictions] = useState({
    result: null as '1' | 'X' | '2' | null,
    btts: null as 'yes' | 'no' | null,
    goals: null as 'over' | 'under' | null,
    firstHalf: null as 'team1' | 'team2' | null,
  });

  const handleReset = () => {
    setPredictions({
      result: null,
      btts: null,
      goals: null,
      firstHalf: null,
    });
  };

  const handleAnalyze = () => {
    // Placeholder for analysis logic
    console.log('Analyzing predictions:', predictions);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full border-2 border-emerald-500 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-emerald-500"></div>
            </div>
            <h1 className="text-3xl font-bold text-white">Saisie des Cotes</h1>
          </div>
          <p className="text-slate-400 ml-11">Entrez les cotes du match à analyser</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-8 space-y-8">
        
        {/* 1X2 Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Cotes 1X2</h2>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => setPredictions({ ...predictions, result: '1' })}
              className={`p-6 rounded-lg border-2 transition-all ${
                predictions.result === '1'
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="text-sm text-slate-400">1 (Domicile)</div>
              <div className="text-lg font-semibold text-white mt-2">Sélectionner</div>
            </button>
            <button
              onClick={() => setPredictions({ ...predictions, result: 'X' })}
              className={`p-6 rounded-lg border-2 transition-all ${
                predictions.result === 'X'
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="text-sm text-slate-400">X (Nul)</div>
              <div className="text-lg font-semibold text-white mt-2">Sélectionner</div>
            </button>
            <button
              onClick={() => setPredictions({ ...predictions, result: '2' })}
              className={`p-6 rounded-lg border-2 transition-all ${
                predictions.result === '2'
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="text-sm text-slate-400">2 (Extérieur)</div>
              <div className="text-lg font-semibold text-white mt-2">Sélectionner</div>
            </button>
          </div>
        </section>

        {/* BTTS Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">BTTS (Deux équipes marquent)</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setPredictions({ ...predictions, btts: 'yes' })}
              className={`p-6 rounded-lg border-2 transition-all ${
                predictions.btts === 'yes'
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="text-lg font-semibold text-white">Oui</div>
            </button>
            <button
              onClick={() => setPredictions({ ...predictions, btts: 'no' })}
              className={`p-6 rounded-lg border-2 transition-all ${
                predictions.btts === 'no'
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="text-lg font-semibold text-white">Non</div>
            </button>
          </div>
        </section>

        {/* Over/Under Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Over/Under 2.5 buts</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setPredictions({ ...predictions, goals: 'over' })}
              className={`p-6 rounded-lg border-2 transition-all ${
                predictions.goals === 'over'
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="text-lg font-semibold text-white">Over 2.5</div>
            </button>
            <button
              onClick={() => setPredictions({ ...predictions, goals: 'under' })}
              className={`p-6 rounded-lg border-2 transition-all ${
                predictions.goals === 'under'
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="text-lg font-semibold text-white">Under 2.5</div>
            </button>
          </div>
        </section>

        {/* First Half Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Gagne au moins une mi-temps</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setPredictions({ ...predictions, firstHalf: 'team1' })}
              className={`p-6 rounded-lg border-2 transition-all ${
                predictions.firstHalf === 'team1'
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="text-lg font-semibold text-white">Équipe 1</div>
            </button>
            <button
              onClick={() => setPredictions({ ...predictions, firstHalf: 'team2' })}
              className={`p-6 rounded-lg border-2 transition-all ${
                predictions.firstHalf === 'team2'
                  ? 'border-emerald-500 bg-emerald-500/10'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="text-lg font-semibold text-white">Équipe 2</div>
            </button>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6">
          <button
            onClick={handleAnalyze}
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>📊</span>
            Lancer l'Analyse
          </button>
          <button
            onClick={handleReset}
            className="flex-1 border-2 border-slate-600 hover:border-slate-500 text-slate-300 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>🔄</span>
            Réinitialiser
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
