import { VerticalPageLayout } from "@/components/sections/VerticalPageLayout";

export default function EcommercePage() {
  const data = {
    title: "E-commerce",
    subtitle: "Máquinas de venta online que no dependen solo de los descuentos.",
    heroEmoji: "🛒",
    description: "Convertimos tiendas online en negocios rentables mediante la optimización de la tasa de conversión (CRO) y sistemas avanzados de marketing de retención.",
    challenges: [
      { title: "Bajo ROAS", description: "La publicidad es cada vez más cara y los márgenes se estrechan." },
      { title: "Abandono de Carrito", description: "Mucho tráfico pero poca intención de compra final. Fugas en el checkout." },
      { title: "Dependencia de Ofertas", description: "Si no hay descuentos, no hay ventas. El cliente no percibe valor real." }
    ],
    solutions: [
      { title: "Sistemas de Performance", description: "Campañas en Meta y Google enfocadas a compra directa y recurrencia." },
      { title: "CRO & UX", description: "Optimización técnica de la tienda para eliminar cualquier fricción en la compra." },
      { title: "Email Marketing Flow", description: "Automatizaciones que recuperan carritos y fomentan la segunda compra." },
      { title: "Análisis de Inventario", description: "Datos al servicio del stock para vender lo que más margen deja." }
    ],
    results: [
      { value: "x4.2", metric: "ROAS", description: "Retorno promedio sobre la inversión publicitaria." },
      { value: "+45%", metric: "Conversión", description: "Mejora en la tasa de cierre tras optimización de flujo." },
      { value: "x2", metric: "Recurrencia", description: "Clientes que vuelven a comprar en menos de 90 días." }
    ],
    cta: { text: "Vender más ahora", href: "/#contact" }
  };

  return <VerticalPageLayout vertical={data} />;
}
