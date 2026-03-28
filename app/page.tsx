"use client";

import { useState } from "react";

export default function Home() {
  const [productos] = useState([
    {
      nombre: "AirPods Pro 2",
      precio: 250000,
      imagen: "https://via.placeholder.com/300",
      tipo: "normal",
    },
    {
      nombre: "iPhone 13",
      precio: 900000,
      imagen: "https://via.placeholder.com/300",
      tipo: "whatsapp",
    },
  ]);

  const telefono = "542216159910";

  const comprar = (producto: any) => {
    if (producto.tipo === "whatsapp") {
      const mensaje = `Hola! Quiero comprar ${producto.nombre}`;
      window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`);
    } else {
      alert("Próximamente pago con Mercado Pago");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-2">Nexus Store</h1>
      <p className="text-gray-400 mb-8">Lo que tu teléfono necesita</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productos.map((p, i) => (
          <div key={i} className="bg-zinc-900 p-4 rounded-2xl">
            <img src={p.imagen} className="rounded-xl mb-4" />
            <h2 className="text-xl font-semibold">{p.nombre}</h2>
            <p className="text-green-400 mb-3">${p.precio}</p>
            <button
              onClick={() => comprar(p)}
              className="bg-white text-black px-4 py-2 rounded-xl w-full"
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}