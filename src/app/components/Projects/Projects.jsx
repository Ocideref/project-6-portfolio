'use client';

import { Card } from 'flowbite-react';
import Image from 'next/image';

export default function CardWithDecorativeImage() {
  const projectsData = [
    {
      img: "/assets/images/pizzapizza-web.png",
      url: "www.pizzapizza.cl/",
      git: "https://github.com/",
      title: "PizzaPizza",
      type: "Ecommerce",
      text: "Proyecto Ecommerce de PizzaPizza. Multiples funcionalidades customizadas como arma tu pedido a tu gusto y con multiples promociones todos los días. Encargado de administración y desarrollo del sitio.",
    },
    {
      img: "/assets/images/ces-web.png",
      url: "www.circulodeespecialistas.cl/",
      git: "https://github.com/",
      title: "Circulo de Especialistas",
      type: "Landing Page and DataScience",
      text: "Campaña de Sodimac y loyalty de Falabella. Encargado de administración y desarrollo del sitio web CES.",
    },
    {
      img: "/assets/images/mifoto-web.png",
      url: "www.mifoto.cl/",
      git: "https://github.com/",
      title: "Mi Foto",
      type: "Ecommerce",
      text: "Ecommerce orientado a la fotografia e impresión. Customiza tu proyecto con un potente panel de edición. Encargado de integraciones y desarrollo de mejoras del sitio.",
    },
    {
      img: "/assets/images/pizzapizza-web.png",
      url: "www.mifotopro.cl/",
      git: "https://github.com/",
      title: "Mi Foto Pro",
      type: "Ecommerce",
      text: "Tienda online de camaras, drones y todas las variedades productos fotograficos que puedas imaginar. Encargado de diseño, desarrollo y administración del sitio.",
    },
    {
      img: "/assets/images/pizzapizza-web.png",
      url: "www.neumax.cl/",
      git: "https://github.com/",
      title: "Neumax",
      type: "Ecommerce",
      text: "Otro Ecommerce de grandes ventas por minutos. Basta experiencia en manejo de base de datos y distribuición de bodegas. Promociones customizadas de venta de productos agrupados y por lotes.",
    },
    {
      img: "/assets/images/pizzapizza-web.png",
      url: "/",
      git: "https://github.com/",
      title: "Bigmoto",
      type: "Ecommerce",
      text: "Otro Ecommerce de grandes ventas por minutos. Basta experiencia en manejo de base de datos y distribuición de bodegas. Promociones customizadas de venta de productos agrupados y por lotes.",
    },
    {
      img: "/assets/images/pizzapizza-web.png",
      url: "https://lacasadelabuelo.cl",
      git: "https://github.com/",
      title: "La Casa del Abuelo",
      type: "Carta Online",
      text: "Bienvenido a nuestra sencilla carta mobile. Nuestra aplicación está diseñada para hacer que la experiencia de los clientes de la casa del abuelo en río bueno puedan escanear un QR y ver el menú.",
    },
    {
      img: "/assets/images/pizzapizza-web.png",
      url: "https://greedtaproom.cl",
      git: "https://greedtaproom.cl",
      title: "Greed Brewing Co",
      type: "Carta Online",
      text: "La carta del restaurant Greed Taproom de GREED BREWING CO. Una sencilla carta mobile diseñada para mostrar todos los tipos de cerveza del taproom.",
    },
  ];
  
  return (
    <>
      <section className="flex my-8 px-32 flex-wrap">
        {projectsData.map((p, index) => (
          <Card className='bg-zinc-950 border-gray-900 w-1/4 card' key={index} renderImage={() => (
            <Image
              width={500}
              height={500}
              src={p.img}
              alt={p.title}
            />
          )}>
            <div className='flex-column justify-start'>
              <h5 className="text-2xl font-bold tracking-tight text-white">
                {p.title}
              </h5>
              <h6 className="text-md font-medium tracking-tight text-blue">
                {p.type}
              </h6>
              <p className="font-light text-gray-400 text-sm mt-2">
                {p.text}
              </p>
            </div>
            <a href={p.url} className='text-right text-md'>
              <button class="visit-web px-4 py-2">Visitar web</button>
            </a>
          </Card>
        ))}
      </section>
    </>
  )
}


