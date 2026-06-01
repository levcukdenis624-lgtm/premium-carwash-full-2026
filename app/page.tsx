'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Waves, Shield, Zap, Users } from 'lucide-react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => { setIsLoaded(true); }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
              <Waves className="w-5 h-5" />
            </div>
            <span className="text-2xl font-bold tracking-tight">AquaWash</span>
          </div>
          <div className="flex gap-4">
            <a href="/login" className="px-6 py-2.5 rounded-full hover:bg-white/10 transition">Увійти</a>
            <a href="/register" className="px-6 py-2.5 bg-white text-black rounded-full font-medium hover:scale-105 transition">Зареєструватися</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen pt-24 flex items-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(#22d3ee_0.8px,transparent_1px)] bg-[length:50px_50px] opacity-20"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-bold tracking-tighter mb-6"
          >
            ЧИСТОТА<br />ПРЕМІУМ<br />ЩОДЕННО
          </motion.h1>
          
          <p className="text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Ексклюзивна підписка на автомийку з щоденним унікальним кодом доступу
          </p>

          <div className="flex gap-4 justify-center">
            <a href="/register" className="px-10 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-2xl text-lg hover:scale-105 transition flex items-center gap-3">
              Почати преміум підписку
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[ 
            {icon: Shield, title: "Безпека", desc: "Унікальний 6-значний код щодня"},
            {icon: Zap, title: "Швидкість", desc: "Миттєвий доступ після активації"},
            {icon: Users, title: "Преміум сервіс", desc: "VIP обслуговування"}
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-cyan-400/50 group"
            >
              <feature.icon className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-3xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
