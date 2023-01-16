import React, { useState } from "react";

export const Contact = () => {
  const [mensaje, setMensaje] = useState("");

  function handleChange(e) {
    const q = e.target.value;
    setMensaje(q);
  }
  function handleClick() {
    setMensaje(
      `https://api.whatsapp.com/send?phone=593993273984&text=${mensaje}`
    );
  }

  return (
    <main className="lg:pl-[340px] p-8 pt-36">
      <div className="register flex  justify-center min-h-screen rounded-lg md:p-8">
        <div className="p-8">
          <h1 className="text-6xl text-white font-medium mb-2">
            CONTÁCTANOS<span className="text-cyan-500">.</span>
          </h1>
          <span className="text-gray-500 font-medium">
            ¿Cómo podemos ayudarte?{" "}
            <p href="#" className="text-cyan-500 hover:underline">
              Ingresa tus datos
            </p>
          </span>
          <form className="mt-8">
            <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <input
                onChange={handleChange}
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                placeholder="Nombre(s)"
              />
              <input
                type="text"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                placeholder="Apellidos"
              />
            </div>
            <div className="max-w-lg mb-4">
              <input
                type="email"
                autoComplete="off"
                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="max-w-lg mb-4">
              <input
                className="w-full py-6 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
                placeholder="Tu mensaje aquí"
              />
            </div>

            <a href={mensaje} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                onClick={handleClick}
                className="w-full btn btn-lg btn-primary hover:bg-[#4338ca]"
              >
                Enviar
              </button>
            </a>
          </form>
        </div>
      </div>
    </main>
  );
};
