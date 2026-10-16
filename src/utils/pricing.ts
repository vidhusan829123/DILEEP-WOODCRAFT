export type FurnitureCategory = 
  | 'bed_frame'
  | 'glass_table'
  | 'custom_window'
  | 'tv_cabinet'
  | 'wardrobe'
  | 'kitchen_cupboard'
  | 'custom_furniture';

export interface QuoteRequest {
  furnitureType: FurnitureCategory;
  sizePreset?: 'standard_6x6_5' | 'king_7x7' | 'compact_coffee' | 'dining_6seater' | 'custom';
  customDimensions?: {
    lengthFt: number;
    widthFt: number;
    heightFt?: number;
  };
  woodGrade: 'premium_teak' | 'seasoned_teak' | 'hybrid_budget_teak';
  finishType: 'natural_satin' | 'gloss_lacquer' | 'matte_oil' | 'antique_honey';
  includeRouterSlot?: boolean;
  includeGlassTop?: boolean;
  includeCustomBrassLocks?: boolean;
  includeIntegratedLighting?: boolean;
}

export interface QuoteResult {
  estimatedMinLKR: number;
  estimatedMaxLKR: number;
  woodGradeLabel: string;
  turnaroundDays: string;
  featuresSummary: string[];
  whatsAppMessage: string;
}

export function calculateFurnitureQuote(req: QuoteRequest): QuoteResult {
  let baseMin = 45000;
  let baseMax = 65000;
  const features: string[] = [];

  switch (req.furnitureType) {
    case 'bed_frame':
      if (req.sizePreset === 'king_7x7') {
        baseMin = 145000;
        baseMax = 210000;
        features.push('Grand King Size 7x7 ft Solid Teak Frame');
      } else if (req.sizePreset === 'standard_6x6_5') {
        baseMin = 115000;
        baseMax = 175000;
        features.push('Standard 6x6.5 ft Master Teak Frame');
      } else {
        const area = (req.customDimensions?.lengthFt || 6) * (req.customDimensions?.widthFt || 6);
        baseMin = Math.round(area * 3200);
        baseMax = Math.round(area * 4600);
        features.push(`Custom Bed Size (${req.customDimensions?.lengthFt || 6}x${req.customDimensions?.widthFt || 6} ft)`);
      }
      if (req.includeRouterSlot) {
        baseMin += 12000;
        baseMax += 18000;
        features.push('Recessed Wi-Fi Router Slot & Concealed Wiring Ducts');
      }
      break;

    case 'glass_table':
      if (req.sizePreset === 'dining_6seater') {
        baseMin = 95000;
        baseMax = 150000;
        features.push('6-Seater Solid Teak Dining Table Frame');
      } else {
        baseMin = 38000;
        baseMax = 62000;
        features.push('Artisan Teak Coffee / Bedside Table');
      }
      if (req.includeGlassTop ?? true) {
        baseMin += 15000;
        baseMax += 25000;
        features.push('Tempered 10mm Heavy Beveled Glass Top');
      }
      break;

    case 'custom_window':
      baseMin = 28000;
      baseMax = 48000;
      features.push('Weather-Resistant Teak Window Frame & Sashes');
      if (req.includeCustomBrassLocks ?? true) {
        baseMin += 6500;
        baseMax += 11000;
        features.push('Precision Hand-Fitted Antique Brass Latch & Locking Mechanism');
      }
      break;

    case 'tv_cabinet':
      baseMin = 75000;
      baseMax = 135000;
      features.push('Floating Teak Wall Console & Equipment Bay');
      if (req.includeIntegratedLighting) {
        baseMin += 10000;
        baseMax += 16000;
        features.push('Integrated Warm Concealed LED Backlighting Channel');
      }
      break;

    case 'wardrobe':
      baseMin = 130000;
      baseMax = 240000;
      features.push('Solid Teak Panel Wardrobe with Custom Compartments');
      break;

    case 'kitchen_cupboard':
      baseMin = 90000;
      baseMax = 180000;
      features.push('Custom Moisture-Treated Teak Kitchen Units');
      break;

    default:
      baseMin = 40000;
      baseMax = 80000;
      features.push('100% Bespoke Custom Handcrafted Woodwork');
  }

  // Multiplier based on wood grade
  let gradeMultiplier = 1.0;
  let gradeLabel = 'Grade A Prime Heartwood Teak (தேக்கு மரம்)';
  if (req.woodGrade === 'seasoned_teak') {
    gradeMultiplier = 0.88;
    gradeLabel = 'Kiln-Seasoned Teak Timber';
  } else if (req.woodGrade === 'hybrid_budget_teak') {
    gradeMultiplier = 0.75;
    gradeLabel = 'Budget-Optimized Teak & Hardwood Blend';
  }

  const finalMin = Math.round(baseMin * gradeMultiplier);
  const finalMax = Math.round(baseMax * gradeMultiplier);

  let turnaround = '10 - 18 Working Days';
  if (req.furnitureType === 'wardrobe' || req.furnitureType === 'kitchen_cupboard') {
    turnaround = '18 - 25 Working Days';
  } else if (req.furnitureType === 'glass_table' || req.furnitureType === 'custom_window') {
    turnaround = '7 - 12 Working Days';
  }

  const categoryTitles: Record<FurnitureCategory, string> = {
    bed_frame: 'Custom Teak Bed Frame',
    glass_table: 'Glass Top / Coffee Table',
    custom_window: 'Custom Teak Windows & Fittings',
    tv_cabinet: 'Modern TV Console & Cabinet',
    wardrobe: 'Wooden Wardrobe & Cupboard',
    kitchen_cupboard: 'Custom Kitchen Cupboards',
    custom_furniture: 'Bespoke Custom Furniture'
  };

  const formattedMin = new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR', maximumFractionDigits: 0 }).format(finalMin);
  const formattedMax = new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR', maximumFractionDigits: 0 }).format(finalMax);

  const message = encodeURIComponent(
    `Hello Dileep! I would like to inquire about a custom woodwork quote for:\n` +
    `• Product: ${categoryTitles[req.furnitureType]}\n` +
    `• Wood: ${gradeLabel}\n` +
    `• Finish: ${req.finishType.replace('_', ' ')}\n` +
    `• Features: ${features.join(', ')}\n` +
    `• Estimated Range: ${formattedMin} - ${formattedMax}\n\n` +
    `Please let me know your availability for a workshop consultation or site measurement. Thank you!`
  );

  return {
    estimatedMinLKR: finalMin,
    estimatedMaxLKR: finalMax,
    woodGradeLabel: gradeLabel,
    turnaroundDays: turnaround,
    featuresSummary: features,
    whatsAppMessage: `https://wa.me/94767574239?text=${message}`
  };
}
