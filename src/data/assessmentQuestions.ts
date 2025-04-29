
export interface Question {
  id: number;
  text: string;
  riskWeight: number; // 1-5 indicating severity
}

const assessmentQuestions: Question[] = [
  {
    id: 1,
    text: "¿Sientes miedo de tu pareja o algún familiar cercano?",
    riskWeight: 4
  },
  {
    id: 2,
    text: "¿Tu pareja o algún familiar te ha gritado, insultado o humillado?",
    riskWeight: 3
  },
  {
    id: 3,
    text: "¿Has recibido amenazas de daño físico por parte de tu pareja o familiar?",
    riskWeight: 5
  },
  {
    id: 4,
    text: "¿Tu pareja o algún familiar te ha empujado, abofeteado o causado daño físico?",
    riskWeight: 5
  },
  {
    id: 5,
    text: "¿Tu pareja o familiar controla tu comportamiento, a quién ves o con quién hablas?",
    riskWeight: 3
  },
  {
    id: 6,
    text: "¿Tu pareja o algún familiar controla tus finanzas o el acceso a dinero?",
    riskWeight: 2
  },
  {
    id: 7,
    text: "¿Has sentido que no puedes tomar tus propias decisiones sin consecuencias negativas?",
    riskWeight: 2
  },
  {
    id: 8,
    text: "¿Te sientes aislada/o de amigos, familiares o de tu red de apoyo?",
    riskWeight: 3
  },
  {
    id: 9,
    text: "¿Tu pareja o familiar ha dañado tus pertenencias personales?",
    riskWeight: 3
  },
  {
    id: 10,
    text: "¿Tu pareja o familiar accede a tus dispositivos personales sin tu permiso?",
    riskWeight: 2
  },
  {
    id: 11,
    text: "¿Tu pareja o algún familiar te presiona o fuerza a actividades íntimas contra tu voluntad?",
    riskWeight: 5
  },
  {
    id: 12,
    text: "¿Tu pareja o familiar se pone extremadamente celoso/a o posesivo/a?",
    riskWeight: 3
  },
  {
    id: 13,
    text: "¿Tu pareja o familiar te culpa por sus problemas o mal humor?",
    riskWeight: 2
  },
  {
    id: 14,
    text: "¿Te sientes constantemente criticada/o o como si nada de lo que haces es suficiente?",
    riskWeight: 2
  },
  {
    id: 15,
    text: "¿Has notado un aumento en la frecuencia o severidad de comportamientos problemáticos?",
    riskWeight: 4
  },
  {
    id: 16,
    text: "¿Tu pareja o familiar ha amenazado con hacerse daño si lo/la dejas?",
    riskWeight: 4
  },
  {
    id: 17,
    text: "¿Has tenido que mentir a amigos o familiares sobre moretones u otras lesiones?",
    riskWeight: 5
  },
  {
    id: 18,
    text: "¿Sientes que caminas 'como sobre cáscaras de huevo' para evitar enojar a tu pareja o familiar?",
    riskWeight: 3
  },
  {
    id: 19,
    text: "¿Tu pareja o familiar tiene acceso a armas de fuego u otras armas?",
    riskWeight: 5
  },
  {
    id: 20,
    text: "¿Has considerado buscar ayuda pero te has sentido incapaz de hacerlo por miedo?",
    riskWeight: 4
  }
];

export default assessmentQuestions;
