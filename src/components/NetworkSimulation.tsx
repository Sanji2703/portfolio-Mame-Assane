import React, { useState, useEffect } from 'react';
import { Network, ShieldCheck, ShieldAlert, Play, RotateCcw, Terminal, ArrowRight, CheckCircle2, XCircle, Laptop, Server, Router, Lock } from 'lucide-react';

interface SimulationStep {
  step: number;
  node: string;
  action: string;
  status: 'info' | 'success' | 'blocked';
  timestamp: string;
}

export const NetworkSimulation: React.FC = () => {
  const [sourceNode, setSourceNode] = useState<string>('pc1');
  const [targetNode, setTargetNode] = useState<string>('server');
  const [protocol, setProtocol] = useState<'icmp' | 'http' | 'ssh' | 'unauthorized'>('icmp');
  const [firewallActive, setFirewallActive] = useState<boolean>(true);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [logs, setLogs] = useState<SimulationStep[]>([]);
  const [finalVerdict, setFinalVerdict] = useState<'success' | 'blocked' | null>(null);

  const nodes = {
    pc1: { id: 'pc1', name: 'PC-Direction', ip: '192.168.10.15', vlan: 'VLAN 10', icon: Laptop },
    pc2: { id: 'pc2', name: 'PC-Comptabilité', ip: '192.168.20.22', vlan: 'VLAN 20', icon: Laptop },
    external: { id: 'external', name: 'Hôte-Externe (Internet)', ip: '41.82.12.98', vlan: 'WAN Public', icon: Laptop },
    router: { id: 'router', name: 'Routeur Cisco 2911', ip: '192.168.1.1', vlan: 'Passerelle', icon: Router },
    firewall: { id: 'firewall', name: 'Pare-feu ASA / ACL', ip: '192.168.1.254', vlan: 'Sécurité', icon: ShieldCheck },
    switch: { id: 'switch', name: 'Switch Catalyst 2960', ip: 'Gestion L2', vlan: 'Trunk 802.1Q', icon: Network },
    server: { id: 'server', name: 'Serveur Web DMZ', ip: '172.16.0.10', vlan: 'DMZ (VLAN 30)', icon: Server },
  };

  const runSimulation = () => {
    if (isSimulating) return;

    setIsSimulating(true);
    setCurrentStepIndex(0);
    setLogs([]);
    setFinalVerdict(null);

    const isBlocked =
      (protocol === 'unauthorized' && firewallActive) ||
      (sourceNode === 'external' && targetNode === 'pc2' && firewallActive) ||
      (protocol === 'ssh' && sourceNode === 'external' && firewallActive);

    const generatedSteps: SimulationStep[] = [
      {
        step: 1,
        node: nodes[sourceNode as keyof typeof nodes].name,
        action: `Génération du paquet ${protocol.toUpperCase()} vers ${nodes[targetNode as keyof typeof nodes].ip} (${nodes[sourceNode as keyof typeof nodes].vlan})`,
        status: 'info',
        timestamp: '0.00s',
      },
      {
        step: 2,
        node: 'Switch Catalyst 2960',
        action: `Commutation de la trame Ethernet avec étiquette 802.1Q (${nodes[sourceNode as keyof typeof nodes].vlan})`,
        status: 'info',
        timestamp: '0.12s',
      },
      {
        step: 3,
        node: 'Pare-feu ASA / ACLs',
        action: firewallActive
          ? isBlocked
            ? `Règle de filtrage #108 : REFUS IMMÉDIAT (DENY). Trafic non autorisé depuis ${nodes[sourceNode as keyof typeof nodes].ip}`
            : `Inspection avec état (Stateful) : Règle #102 ACCORDÉE (PERMIT ${protocol.toUpperCase()})`
          : `Pare-feu inactif : paquet relayé sans contrôle de sécurité`,
        status: isBlocked ? 'blocked' : 'success',
        timestamp: '0.28s',
      },
    ];

    if (!isBlocked) {
      generatedSteps.push(
        {
          step: 4,
          node: 'Routeur Cisco 2911',
          action: `Routage inter-VLAN et transmission vers l'interface Gi0/2 (DMZ)`,
          status: 'info',
          timestamp: '0.45s',
        },
        {
          step: 5,
          node: nodes[targetNode as keyof typeof nodes].name,
          action: `Paquet délivré avec succès à destination. RTT calculé : 3.4 ms · 0% de perte`,
          status: 'success',
          timestamp: '0.62s',
        }
      );
    }

    // Step-by-step timed execution
    let current = 0;
    const interval = setInterval(() => {
      if (current < generatedSteps.length) {
        setLogs((prev) => [...prev, generatedSteps[current]]);
        setCurrentStepIndex(current);
        current++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setFinalVerdict(isBlocked ? 'blocked' : 'success');
      }
    }, 550);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setCurrentStepIndex(-1);
    setLogs([]);
    setFinalVerdict(null);
  };

  return (
    <section id="simulation-cisco" className="py-16 sm:py-20 border-b border-slate-800/60 bg-[#090e1a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
              <Network className="w-4 h-4 text-cyan-400" />
              <span>Simulation Interactive Réseau & Sécurité</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Simulateur de Trafic & Pare-feu (Cisco Packet Tracer)
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Testez en direct le cheminement d'un paquet IP à travers une topologie modélisée : commutez entre différents VLANs, activez ou désactivez les règles de pare-feu et observez le comportement des ACLs.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-md ${
                isSimulating
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-950/40'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>{isSimulating ? 'Simulation en cours...' : 'Lancer la simulation'}</span>
            </button>

            <button
              onClick={resetSimulation}
              disabled={isSimulating}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              title="Réinitialiser la simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Simulation Dashboard */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Controls & Configuration */}
          <div className="lg:col-span-4 space-y-5">
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-slate-800">
                <Lock className="w-4 h-4 text-cyan-400" />
                Paramètres de transmission
              </h3>

              {/* Source node select */}
              <div>
                <label className="text-xs text-slate-400 block mb-1.5 font-medium">
                  Équipement Source :
                </label>
                <select
                  value={sourceNode}
                  onChange={(e) => setSourceNode(e.target.value)}
                  disabled={isSimulating}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                >
                  <option value="pc1">PC-Direction (192.168.10.15 - VLAN 10)</option>
                  <option value="pc2">PC-Comptabilité (192.168.20.22 - VLAN 20)</option>
                  <option value="external">Hôte Externe (41.82.12.98 - WAN Internet)</option>
                </select>
              </div>

              {/* Destination node select */}
              <div>
                <label className="text-xs text-slate-400 block mb-1.5 font-medium">
                  Équipement Destination :
                </label>
                <select
                  value={targetNode}
                  onChange={(e) => setTargetNode(e.target.value)}
                  disabled={isSimulating}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                >
                  <option value="server">Serveur Web DMZ (172.16.0.10)</option>
                  <option value="router">Passerelle Routeur Cisco (192.168.1.1)</option>
                  <option value="pc2">PC-Comptabilité (192.168.20.22)</option>
                </select>
              </div>

              {/* Protocol select */}
              <div>
                <label className="text-xs text-slate-400 block mb-1.5 font-medium">
                  Protocole & Type de requête :
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setProtocol('icmp')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                      protocol === 'icmp'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    ICMP (Ping)
                  </button>
                  <button
                    type="button"
                    onClick={() => setProtocol('http')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                      protocol === 'http'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    HTTP Web (80)
                  </button>
                  <button
                    type="button"
                    onClick={() => setProtocol('ssh')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                      protocol === 'ssh'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    SSH Admin (22)
                  </button>
                  <button
                    type="button"
                    onClick={() => setProtocol('unauthorized')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                      protocol === 'unauthorized'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    Scan Non Autorisé
                  </button>
                </div>
              </div>

              {/* Firewall Toggle */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Filtrage Pare-feu (ACL)</div>
                  <div className="text-[11px] text-slate-400">
                    {firewallActive ? 'Politique stricte active' : 'Mode permissif (pass-through)'}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setFirewallActive(!firewallActive)}
                  disabled={isSimulating}
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 ${
                    firewallActive ? 'bg-cyan-500' : 'bg-slate-700'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      firewallActive ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Verdict Box */}
            {finalVerdict && (
              <div
                className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
                  finalVerdict === 'success'
                    ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-200'
                    : 'border-rose-500/40 bg-rose-950/20 text-rose-200'
                }`}
              >
                {finalVerdict === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="text-xs">
                  <strong className="block text-sm font-bold mb-0.5">
                    {finalVerdict === 'success'
                      ? 'Transmission autorisée & acquittée !'
                      : 'Alerte Sécurité : Paquet bloqué par les ACLs !'}
                  </strong>
                  {finalVerdict === 'success'
                    ? `Le paquet a traversé l'infrastructure avec succès en respectant la segmentation réseau.`
                    : `Le pare-feu a intercepté et détruit la trame conformément à la politique de sécurité d'entreprise.`}
                </div>
              </div>
            )}
          </div>

          {/* Right: Visual Topology & Packet Flow + CLI Logs */}
          <div className="lg:col-span-8 space-y-6">
            {/* Visual Topology Diagram */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 relative overflow-hidden">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Visualisation de la Topologie Active</span>
                <span className="text-[11px] font-mono text-cyan-400">
                  {isSimulating ? 'Transmission de paquet en cours...' : 'En attente de simulation'}
                </span>
              </div>

              {/* Topology Nodes Grid */}
              <div className="grid grid-cols-3 gap-4 relative py-2">
                {/* Row 1: Clients */}
                <div
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    sourceNode === 'pc1'
                      ? 'border-cyan-400 bg-cyan-950/30 shadow-md shadow-cyan-950'
                      : 'border-slate-800 bg-slate-950/50'
                  }`}
                >
                  <Laptop className="w-5 h-5 mx-auto mb-1 text-cyan-400" />
                  <div className="text-xs font-bold text-white">PC-Direction</div>
                  <div className="text-[10px] text-slate-400 font-mono">192.168.10.15</div>
                  <div className="text-[9px] text-cyan-300 font-mono mt-0.5">VLAN 10</div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    sourceNode === 'pc2' || targetNode === 'pc2'
                      ? 'border-cyan-400 bg-cyan-950/30 shadow-md shadow-cyan-950'
                      : 'border-slate-800 bg-slate-950/50'
                  }`}
                >
                  <Laptop className="w-5 h-5 mx-auto mb-1 text-emerald-400" />
                  <div className="text-xs font-bold text-white">PC-Comptabilité</div>
                  <div className="text-[10px] text-slate-400 font-mono">192.168.20.22</div>
                  <div className="text-[9px] text-emerald-300 font-mono mt-0.5">VLAN 20</div>
                </div>

                <div
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    sourceNode === 'external'
                      ? 'border-rose-400 bg-rose-950/30 shadow-md shadow-rose-950'
                      : 'border-slate-800 bg-slate-950/50'
                  }`}
                >
                  <Laptop className="w-5 h-5 mx-auto mb-1 text-rose-400" />
                  <div className="text-xs font-bold text-white">Hôte Externe</div>
                  <div className="text-[10px] text-slate-400 font-mono">41.82.12.98</div>
                  <div className="text-[9px] text-rose-300 font-mono mt-0.5">WAN Public</div>
                </div>

                {/* Central Bridge / Switch */}
                <div className="col-span-3 p-3.5 rounded-xl border border-slate-700 bg-slate-800/60 flex items-center justify-between text-xs text-slate-300 px-6 my-2">
                  <div className="flex items-center gap-2">
                    <Network className="w-5 h-5 text-teal-400" />
                    <div>
                      <strong className="text-white block">Switch Core (Catalyst 2960)</strong>
                      <span className="text-[10px] text-slate-400 font-mono">Liaison Trunk 802.1Q Multi-VLANs</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-700 font-mono text-[11px]">
                      <ShieldCheck className={`w-3.5 h-3.5 ${firewallActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                      <span>ASA ACLs : {firewallActive ? 'ACTIF' : 'OFF'}</span>
                    </div>
                  </div>
                </div>

                {/* Row 3: Infrastructure & Server */}
                <div
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    targetNode === 'router'
                      ? 'border-cyan-400 bg-cyan-950/30'
                      : 'border-slate-800 bg-slate-950/50'
                  }`}
                >
                  <Router className="w-5 h-5 mx-auto mb-1 text-cyan-400" />
                  <div className="text-xs font-bold text-white">Routeur Cisco 2911</div>
                  <div className="text-[10px] text-slate-400 font-mono">192.168.1.1</div>
                  <div className="text-[9px] text-cyan-300 font-mono mt-0.5">Passerelle WAN</div>
                </div>

                <div className="col-span-2 p-3.5 rounded-xl border border-slate-800 bg-slate-950/50 flex items-center justify-between px-5">
                  <div className="flex items-center gap-3">
                    <Server className="w-6 h-6 text-emerald-400" />
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">Serveur Web & Base de Données</div>
                      <div className="text-[10px] text-slate-400 font-mono">172.16.0.10 · Zone DMZ Sécurisée (VLAN 30)</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">
                    Protégé
                  </span>
                </div>
              </div>
            </div>

            {/* Terminal Event Log (Cisco Packet Tracer Style) */}
            <div className="rounded-2xl border border-slate-800 bg-[#050811] p-4 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Journal de Simulation Packet Tracer (CLI Real-Time)</span>
                </div>
                <span className="text-slate-500">
                  {logs.length > 0 ? `${logs.length} étapes exécutées` : 'Prêt'}
                </span>
              </div>

              <div className="space-y-2 min-h-[140px] max-h-48 overflow-y-auto pr-1">
                {logs.length === 0 ? (
                  <div className="text-slate-600 text-xs py-6 text-center">
                    Cliquez sur « Lancer la simulation » pour voir les paquets circuler et les décisions du pare-feu.
                  </div>
                ) : (
                  logs.map((log, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-2 text-[11px] leading-relaxed">
                      <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
                      <span className="text-cyan-400 shrink-0 font-semibold">{log.node} :</span>
                      <span
                        className={
                          log.status === 'blocked'
                            ? 'text-rose-400 font-semibold'
                            : log.status === 'success'
                            ? 'text-emerald-300'
                            : 'text-slate-300'
                        }
                      >
                        {log.action}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
