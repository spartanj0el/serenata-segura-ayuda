
export interface Resource {
  id: number;
  title: string;
  description: string;
  phoneNumber?: string;
  isEmergency?: boolean;
  riskLevel: 'low' | 'medium' | 'high' | 'all'; // which risk level this resource applies to
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Línea Nacional Contra la Violencia Familiar",
    description: "Atención las 24 horas para situaciones de violencia familiar",
    phoneNumber: "911",
    isEmergency: true,
    riskLevel: 'high'
  },
  {
    id: 2,
    title: "Fiscalía Especializada en Violencia Familiar",
    description: "Atención inmediata en casos de emergencia por violencia familiar",
    phoneNumber: "800-745-2369",
    isEmergency: true,
    riskLevel: 'high'
  },
  {
    id: 3,
    title: "Centro de Justicia para las Mujeres",
    description: "Atención integral para mujeres en situación de violencia",
    phoneNumber: "55-5345-5248",
    riskLevel: 'medium'
  },
  {
    id: 4,
    title: "Consejería de Relaciones",
    description: "Servicio de asesoría para mejorar la comunicación y resolver conflictos",
    phoneNumber: "55-2345-6789",
    riskLevel: 'low'
  },
  {
    id: 5,
    title: "Grupos de Apoyo",
    description: "Encuentra comunidades donde compartir experiencias y recibir apoyo emocional",
    riskLevel: 'all'
  },
  {
    id: 6,
    title: "Línea de Ayuda Psicológica",
    description: "Habla con profesionales de salud mental sobre tu situación",
    phoneNumber: "55-8123-4567",
    riskLevel: 'all'
  },
  {
    id: 7,
    title: "Plan de Seguridad Personal",
    description: "Guía para crear un plan de seguridad en caso de emergencia",
    riskLevel: 'medium'
  },
  {
    id: 8,
    title: "Refugios Temporales",
    description: "Espacios seguros para personas en situación de violencia familiar",
    phoneNumber: "800-422-9292",
    riskLevel: 'high'
  }
];

export const faqItems = [
  {
    question: "¿Qué es la violencia familiar?",
    answer: "La violencia familiar incluye cualquier comportamiento dentro de una relación íntima o familiar que cause daño físico, emocional, sexual o económico. Puede manifestarse como intimidación, aislamiento, control, amenazas o agresiones."
  },
  {
    question: "¿Cómo sé si estoy en una relación abusiva?",
    answer: "Las señales incluyen miedo hacia tu pareja, sentirte controlada/o, aislada/o de amigos y familia, ser humillada/o o criticada/o constantemente, o sufrir cualquier tipo de agresión física o sexual."
  },
  {
    question: "¿Qué debo hacer si estoy en peligro inmediato?",
    answer: "Si estás en peligro inmediato, llama al 911. Si puedes, ve a un lugar seguro como la casa de un familiar o amigo, una estación de policía o un refugio."
  },
  {
    question: "¿La violencia familiar solo afecta a las mujeres?",
    answer: "No. Aunque las mujeres reportan casos con mayor frecuencia, la violencia familiar puede afectar a cualquier persona independientemente de su género, edad, orientación sexual o estatus socioeconómico."
  },
  {
    question: "¿Cómo puedo ayudar a alguien que está experimentando violencia familiar?",
    answer: "Escucha sin juzgar, ofrece apoyo emocional, comparte recursos, respeta sus decisiones y mantén la confidencialidad. No presiones a la persona a tomar decisiones antes de que esté lista."
  }
];

export default resources;
