import { VerticalPageLayout } from "@/components/sections/VerticalPageLayout";

export default function SaaSPage() {
  const data = {
    title: "SaaS",
    subtitle: "Sistemas de adquisición y retención para software escalable.",
    heroEmoji: "☁️",
    description: "Ayudamos a compañías de software a optimizar su CAC, aumentar el LTV y automatizar el onboarding de clientes para que el crecimiento sea predecible.",
    challenges: [
      { title: "CAC Descontrolado", description: "El coste por adquisición sube y los canales tradicionales están saturados." },
      { title: "Churn Alto", description: "Muchos registros pero pocos se quedan. Falta un sistema de activación claro." },
      { title: "Fricción en Ventas", description: "Procesos manuales que matan la conversión en el paso de lead a usuario activo." }
    ],
    solutions: [
      { title: "Funnel de Adquisición", description: "Estrategias de Growth Marketing diseñadas específicamente para modelos de suscripción." },
      { title: "Automatización de Onboarding", description: "Sistemas que guían al usuario al 'Aha! moment' sin intervención humana." },
      { title: "Retención Inteligente", description: "Campañas de re-engagement basadas en el comportamiento real dentro de la app." },
      { title: "Medición de KPIs", description: "Dashboard en tiempo real con MRR, LTV y Churn para tomar decisiones con datos." }
    ],
    results: [
      { value: "-35%", metric: "CAC", description: "Reducción promedio en el coste de adquisición." },
      { value: "x2.4", metric: "LTV", description: "Aumento del valor de vida del cliente mediante sistemas de upsell." },
      { value: "92%", metric: "Activación", description: "Tasa de usuarios que completan el onboarding inicial." }
    ],
    cta: { text: "Optimizar mi SaaS", href: "/#contact" }
  };

  return <VerticalPageLayout vertical={data} />;
}
