import { motion } from "motion/react";
import { 
  Wrench, 
  Settings, 
  Zap, 
  Activity, 
  MapPin, 
  Phone, 
  Facebook, 
  ChevronRight,
  Menu,
  X,
  Gauge,
  Cpu,
  Trophy
} from "lucide-react";
import { useState } from "react";

const PCBTrace = ({ className = "" }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`absolute h-64 w-64 opacity-10 pointer-events-none ${className}`}
    fill="none" 
    stroke="currentColor"
  >
    <path d="M0 20 H30 V50 H60 V80 H100" strokeWidth="0.5" />
    <path d="M10 0 V30 H40 V60 H70 V100" strokeWidth="0.5" />
    <rect x="29" y="19" width="2" height="2" fill="currentColor" />
    <rect x="59" y="49" width="2" height="2" fill="currentColor" />
    <rect x="39" y="29" width="2" height="2" fill="currentColor" />
  </svg>
);

const SpeedLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <div 
        key={i}
        className="absolute h-px bg-rc-red/10 rotate-[-15deg] w-[200%]"
        style={{ 
          top: `${i * 20}%`, 
          left: '-50%',
          animation: `slide ${3 + i}s linear infinite`
        }}
      />
    ))}
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const services = [
    {
      title: "Diagnostyka Usterek",
      desc: "Precyzyjne namierzanie problemów z elektroniką, silnikiem i układem napędowym.",
      icon: Activity,
    },
    {
      title: "Naprawa Modeli",
      desc: "Wymiana podzespołów, naprawa po kolizjach, serwis regulatorów i serwomechanizmów.",
      icon: Wrench,
    },
    {
      title: "Tuning i Optymalizacja",
      desc: "Podkręcanie osiągów, wymiana na części carbonowe, poprawa geometrii zawieszenia.",
      icon: Gauge,
    },
    {
      title: "Odbudowy Step-by-Step",
      desc: "Kompletna renowacja zmęczonych modeli. Odświeżenie wyglądu i fabryczne osiągi.",
      icon: Cpu,
    }
  ];

  return (
    <div className="min-h-screen bg-rc-bg selection:bg-rc-red text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-rc-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.postimg.cc/cLQfW32d/680866022-4149911805140868-8750120747193325105-n.jpg" 
              alt="RC Dyżur Logo" 
              className="w-10 h-10 rounded shadow-red-glow border border-rc-red/30"
              referrerPolicy="no-referrer"
            />
            <span className="font-orbitron font-bold text-xl tracking-tighter hidden sm:block">
              RC DYŻUR
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-mono text-sm">
            <a href="#serwis" className="hover:text-rc-red transition-colors">// SERWIS</a>
            <a href="#o-nas" className="hover:text-rc-red transition-colors">// O NAS</a>
            <a href="#kontakt" className="hover:text-rc-red transition-colors">// KONTAKT</a>
            <a 
              href="tel:533836871" 
              className="px-4 py-2 bg-rc-red font-orbitron font-bold text-white hover:bg-rc-red-deep transition-all shadow-red-glow"
            >
              533 836 871
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-rc-bg-light border-b border-white/10 p-6 flex flex-col gap-4 font-mono"
          >
            <a href="#serwis" onClick={() => setIsMenuOpen(false)} className="py-2 border-b border-white/5 text-rc-red">// SERWIS</a>
            <a href="#o-nas" onClick={() => setIsMenuOpen(false)} className="py-2 border-b border-white/5">// O NAS</a>
            <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="py-2 border-b border-white/5">// KONTAKT</a>
            <a href="tel:533836871" className="flex items-center gap-2 py-4 text-rc-red font-bold">
              <Phone size={18} /> 533 836 871
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Carbon Background */}
        <div className="absolute inset-0 bg-carbon opacity-40" />
        <div className="absolute inset-0 scanline-overlay opacity-5" />
        
        {/* Decorations */}
        <PCBTrace className="top-10 right-10 text-rc-red" />
        <PCBTrace className="bottom-20 left-10 text-rc-red rotate-180" />
        <SpeedLines />

        <div className="relative max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label">// RC EMERGENCY LAB</div>
            <h1 className="font-orbitron font-black text-6xl md:text-8xl lg:text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-tight mb-8">
              RC DYŻUR<span className="text-rc-red inline-block animate-pulse">_</span>
            </h1>
            <p className="font-rajdhani text-xl md:text-2xl text-text-muted max-w-xl mb-10 leading-relaxed">
              Padł regulator? Silnik martwy? Model po dzwonie? <br/>
              <span className="text-white font-semibold">RC Dyżur przyjmuje wszystkie przypadki.</span> Profesjonalna diagnostyka i tuning w sercu Tucholi.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#kontakt" className="px-8 py-4 bg-rc-red text-white font-orbitron font-bold flex items-center gap-2 hover:bg-rc-red-deep transition-all shadow-red-glow">
                UMÓW SERWIS <ChevronRight size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61560648119720" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/20 hover:border-rc-red hover:bg-rc-red/10 transition-all flex items-center gap-2 font-orbitron font-bold"
              >
                <Facebook size={20} /> FACEBOOK
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 p-8 border-2 border-rc-red/20 rounded-lg backdrop-blur-sm bg-rc-bg-light/30">
               <img 
                 src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=2000&auto=format&fit=crop" 
                 alt="RC Pit Lane" 
                 className="rounded shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-rc-red/40 leading-none">
                 SYSTEM_READY: OK<br/>
                 VOLTAGE: 14.8V<br/>
                 MODEL: PIT_LAB_v2
               </div>
            </div>
            {/* Glow backing */}
            <div className="absolute inset-0 bg-rc-red/10 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="serwis" className="py-24 bg-rc-bg-section relative overflow-hidden angled-split">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="section-label">// SERVICE SPECS</div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">SPECJALIZACJA</h2>
            <div className="w-16 h-1 bg-rc-red" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="rc-card group"
              >
                <div className="w-12 h-12 bg-rc-red/10 flex items-center justify-center mb-6 text-rc-red border border-rc-red/20 group-hover:bg-rc-red group-hover:text-white transition-all">
                  <service.icon size={24} />
                </div>
                <h3 className="font-orbitron font-bold text-lg mb-3 tracking-tight">{service.title}</h3>
                <p className="text-text-muted leading-relaxed font-rajdhani">
                  {service.desc}
                </p>
                <div className="mt-6 flex justify-end">
                  <span className="font-mono text-[10px] text-rc-red opacity-0 group-hover:opacity-100 transition-opacity">0x0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">// GARAGE DOSSIER</div>
            <h2 className="font-orbitron text-4xl font-bold mb-8">Z PASJI DO PRĘDKOŚCI</h2>
            <p className="text-xl text-text-muted mb-6 leading-relaxed">
              RC Dyżur to nie tylko serwis – to miejsce, gdzie miniaturowa technologia spotyka się z pasją do motorsportu. Wykorzystujemy precyzyjne narzędzia i lata doświadczenia w świecie zdalnie sterowanych modeli.
            </p>
            <p className="text-xl text-text-muted leading-relaxed">
              Działamy w Tucholi, przywracając do życia modele RC każdej skali i typu. Od budżetowych bashery po zaawansowane drony i wyścigowe on-road.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="h-48 bg-rc-bg-light border border-white/5 rounded relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity" alt="Precision tools" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 bg-rc-red/10 border-l-2 border-rc-red">
                <div className="font-orbitron text-3xl font-black">100%</div>
                <div className="font-mono text-[10px]">SUCCESS_RATE</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-rc-bg-card border border-white/5">
                <Zap className="text-rc-red mb-2" />
                <div className="font-orbitron text-xl font-bold">EXPRESS</div>
                <div className="font-mono text-[10px]">QUICK_FIXES</div>
              </div>
              <div className="h-64 bg-rc-bg-light border border-white/5 rounded relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity" alt="Electronic parts" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / CTA Break */}
      <section className="py-20 bg-rc-red relative overflow-hidden skewed-y-3">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 -skew-y-3">
          <Trophy className="mx-auto mb-6 text-white" size={48} />
          <h2 className="font-orbitron text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
            TWOJA MASZYNA ZASŁUGUJE NA NAJLEPSZE.
          </h2>
          <p className="font-mono text-white/80 text-xl tracking-widest">// NIE CZEKAJ, AŻ COŚ PADNIE CAŁKOWICIE //</p>
        </div>
        <div className="absolute top-0 right-0 p-8 font-mono text-[80px] text-black/10 select-none">
          SPEED
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-24 bg-rc-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <div className="section-label">// TRANSMISSION</div>
            <h2 className="font-orbitron text-4xl font-bold mb-12">KONTAKT</h2>
            
            <div className="space-y-12">
              <div className="group flex items-start gap-6">
                <div className="w-16 h-16 bg-rc-bg-light flex items-center justify-center text-rc-red border border-white/10 shadow-red-glow">
                  <Phone size={28} />
                </div>
                <div>
                  <div className="font-mono text-xs text-rc-red mb-1">PHONE_UPLINK</div>
                  <a href="tel:533836871" className="font-orbitron text-3xl font-bold hover:text-rc-red transition-colors">533 836 871</a>
                  <p className="text-text-muted mt-2">Dostępni pod telefonem w sprawach nagłych.</p>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="w-16 h-16 bg-rc-bg-light flex items-center justify-center text-rc-red border border-white/10 shadow-red-glow">
                  <MapPin size={28} />
                </div>
                <div>
                  <div className="font-mono text-xs text-rc-red mb-1">COORDINATES</div>
                  <div className="font-orbitron text-3xl font-bold">TUCHOLA</div>
                  <p className="text-text-muted mt-2">Serwis stacjonarny w sercu Borów Tucholskich.</p>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="w-16 h-16 bg-rc-bg-light flex items-center justify-center text-rc-red border border-white/10 shadow-red-glow">
                  <Facebook size={28} />
                </div>
                <div>
                  <div className="font-mono text-xs text-rc-red mb-1">SOCIAL_HUB</div>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61560648119720" 
                    className="font-orbitron text-2xl font-bold hover:text-rc-red transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RC Dyżur Facebook
                  </a>
                  <p className="text-text-muted mt-2">Śledź nasze najnowsze odbudowy i relacje z serwisu.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="h-full min-h-[400px] bg-rc-bg-light border border-white/10 p-8 rounded relative overflow-hidden group">
              {/* Fake UI Overlay */}
              <div className="absolute inset-0 scanline-overlay opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <div className="font-mono text-xs text-rc-red flex items-center gap-2">
                    <span className="w-2 h-2 bg-rc-red rounded-full animate-ping" /> LIVE_STATUS: ACTIVE
                  </div>
                  <Settings className="text-white/20" size={16} />
                </div>
                <div className="mt-auto">
                   <h3 className="font-orbitron text-2xl font-bold mb-4 uppercase">Gotowy na start?</h3>
                   <p className="text-text-muted font-rajdhani text-lg mb-8">
                     Każdy model traktujemy indywidualnie. Niezależnie czy to zabawka, czy profesjonalny sprzęt wyścigowy.
                   </p>
                   <a 
                    href="https://www.facebook.com/messages/t/61560648119720" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-rc-red font-orbitron font-bold text-center block text-white hover:bg-white hover:text-rc-red transition-all cursor-pointer shadow-red-glow"
                   >
                     WYŚLIJ WIADOMOŚĆ
                   </a>
                </div>
              </div>
              {/* Background trace decoration */}
              <div className="absolute -bottom-20 -right-20 opacity-5 group-hover:opacity-10 transition-opacity">
                <Settings size={300} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-rc-bg-section">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <img 
              src="https://i.postimg.cc/cLQfW32d/680866022-4149911805140868-8750120747193325105-n.jpg" 
              alt="RC Dyżur" 
              className="w-8 h-8 rounded border border-rc-red/20 opacity-80"
              referrerPolicy="no-referrer"
            />
            <span className="font-orbitron font-bold text-lg tracking-tight">RC DYŻUR</span>
          </div>

          <div className="font-mono text-[10px] text-text-muted tracking-widest text-center uppercase">
            © {new Date().getFullYear()} RC DYŻUR • TUCHOLA
          </div>

          <div className="flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=61560648119720" className="text-text-muted hover:text-rc-red transition-colors">
              <Facebook size={20} />
            </a>
            <a href="tel:533836871" className="text-text-muted hover:text-rc-red transition-colors">
              <Phone size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Custom Global Styles for Animations */}
      <style>{`
        @keyframes slide {
          from { transform: translateX(0) rotate(-15deg); }
          to { transform: translateX(-100%) rotate(-15deg); }
        }
        .bg-carbon {
          background-image: repeating-linear-gradient(
            45deg,
            #080808,
            #080808 2px,
            #111111 2px,
            #111111 4px
          );
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
