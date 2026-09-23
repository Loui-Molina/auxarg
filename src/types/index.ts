export type VehicleType = 'auto' | 'suv' | 'moto';

export interface VehicleOption {
  readonly id: VehicleType;
  readonly label: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly whatsappMessage: string;
}

export interface ServiceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly badge: string;
  readonly icon: string;
  readonly ctaText: string;
  readonly whatsappMessage: string;
  readonly disclaimer?: string;
}

export interface ProcessStep {
  readonly stepNumber: number;
  readonly title: string;
  readonly description: string;
}

export interface CoverageZone {
  readonly name: string;
  readonly description: string;
  readonly icon: string;
}

export interface GuaranteeItem {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
}

export interface ContactInfo {
  readonly brandName: string;
  readonly brandTagline: string;
  readonly rawPhone: string;
  readonly displayPhone: string;
  readonly telUrl: string;
  readonly defaultWhatsappUrl: string;
  readonly baseLocation: string;
}
