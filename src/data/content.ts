import type {
  VehicleOption,
  ServiceItem,
  ProcessStep,
  CoverageZone,
  GuaranteeItem,
  ContactInfo,
} from '@/types';

export const CONTACT_INFO: ContactInfo = {
  brandName: 'Auxilio Argentino',
  brandTagline: 'Grúas & Rescate 24/7',
  rawPhone: '5493512581818',
  displayPhone: '+54 9 351 258-1818',
  telUrl: 'tel:+5493512581818',
  defaultWhatsappUrl: 'https://wa.me/5493512581818?text=Hola,%20necesito%20asistencia%20vehicular',
  baseLocation: 'Córdoba Capital y Rutas Provinciales, Argentina',
};

export const VEHICLE_OPTIONS: readonly VehicleOption[] = [
  {
    id: 'auto',
    label: 'Auto',
    icon: 'car',
    title: 'Plataforma Hidráulica con Malacate',
    description:
      'Carga a nivel de suelo para autos particulares sin tracción o caja trabada. Cintas de amarre de alta resistencia.',
    whatsappMessage: 'Hola, necesito asistencia para un Auto',
  },
  {
    id: 'suv',
    label: 'SUV / 4x4',
    icon: 'suv',
    title: 'Camilla Reforzada para Utilitarios y 4x4',
    description:
      'Capacidad para vehículos pesados y de gran porte. Equipamiento de tiro controlado y eslingas dobles certificadas.',
    whatsappMessage: 'Hola, necesito asistencia para una SUV o Camioneta',
  },
  {
    id: 'moto',
    label: 'Moto',
    icon: 'moto',
    title: 'Sistema de Fijación Específico para Motos',
    description:
      'Soporte y amarre especial para motocicletas de todas las cilindradas, garantizando verticalidad y protección de plásticos.',
    whatsappMessage: 'Hola, necesito asistencia para una Moto',
  },
];

export const SERVICES: readonly ServiceItem[] = [
  {
    id: 'remolque-plataforma',
    title: 'Remolque en Plataforma / Traslados',
    description:
      'Camilla hidráulica plana para autos, camionetas, utilitarios y vehículos siniestrados o sin tracción. Cuidado de carrocería en viajes locales e interprovinciales.',
    badge: '24 HORAS ACTIVO',
    icon: 'tow-truck',
    ctaText: 'PEDIR TRASLADO',
    whatsappMessage: 'Hola, solicito remolque en plataforma',
  },
  {
    id: 'puente-bateria',
    title: 'Puente de Batería (Arranque 12V In Situ)',
    description:
      'Arrancador booster profesional de alto amperaje protegido contra picos de tensión para no dañar la ECU del vehículo.',
    badge: 'ARRANQUE IN SITU',
    icon: 'battery-charging',
    ctaText: 'ARRANQUE INMEDIATO',
    whatsappMessage: 'Hola, me quedé sin batería y necesito puente',
  },
  {
    id: 'cambio-neumatico',
    title: 'Cambio de Neumático / Rueda de Auxilio',
    description:
      'Sustitución en el lugar con balizamiento de alta visibilidad para seguridad en autopistas y avenidas. Compresor de aire para calibrado inmediato.',
    badge: 'RÁPIDO Y SEGURO',
    icon: 'tire',
    ctaText: 'SOLICITAR AUXILIO',
    whatsappMessage: 'Hola, necesito auxilio para cambio de rueda',
  },
  {
    id: 'auxilio-mecanico',
    title: 'Auxilio Mecánico Ligero en Ruta',
    description:
      'Inspección y reparaciones rápidas de emergencia: revisión de fusibles, mangueras, abastecimiento básico y soluciones para destrabar la marcha sin perder tiempo.',
    badge: 'EN RUTA',
    icon: 'wrench',
    ctaText: 'CONTACTAR CHOFER',
    whatsappMessage: 'Hola, necesito asistencia mecánica ligera en ruta',
    disclaimer: 'Aclaración: No se brinda servicio de cerrajería vehicular',
  },
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Enviar Ubicación por WhatsApp',
    description:
      'Comparta su ubicación actual en tiempo real y el modelo de vehículo para coordinar la salida inmediata.',
  },
  {
    stepNumber: 2,
    title: 'Tarifa Transparente y Pactada',
    description:
      'Cotización cerrada antes de encender motores. Sin sorpresas, sobreprecios ni costos ocultos.',
  },
  {
    stepNumber: 3,
    title: 'Salida Inmediata (ETA 25-35 min)',
    description:
      'La grúa sale de base al instante con seguimiento directo vía GPS compartido con el chofer.',
  },
];

export const COVERAGE_ZONES: readonly CoverageZone[] = [
  {
    name: 'Córdoba Capital',
    description: 'Todos los barrios y macrocentro.',
    icon: 'location',
  },
  {
    name: 'Circunvalación',
    description: 'Anillo completo de 47 km.',
    icon: 'loop',
  },
  {
    name: 'Carlos Paz & R20',
    description: 'Autopista y valles de Punilla.',
    icon: 'navigation',
  },
  {
    name: 'Alta Gracia & R5',
    description: 'Paravachasca y accesos sur.',
    icon: 'corner-down-right',
  },
  {
    name: 'Ruta 9 & Autopista',
    description: 'Córdoba - Rosario - Bs As.',
    icon: 'git-commit',
  },
  {
    name: 'Autovía 36',
    description: 'Corredor hacia Río Cuarto.',
    icon: 'shuffle',
  },
];

export const GUARANTEES: readonly GuaranteeItem[] = [
  {
    title: 'Factura Oficial A y B',
    description:
      'Emitimos comprobante legal fiscal habilitado para solicitar reintegro inmediato en todas las compañías de seguro del país.',
    icon: 'receipt',
  },
  {
    title: 'Seguimiento GPS en Vivo',
    description:
      'Ubicación compartida en directo por WhatsApp. Sepa con exactitud en qué punto de la ruta se encuentra su auxilio en todo momento.',
    icon: 'share-location',
  },
  {
    title: 'Carga Segura Homologada',
    description:
      'Plataforma con anclajes reglamentarios y póliza de seguro de carga y tránsito activa durante el transporte.',
    icon: 'shield-check',
  },
];
