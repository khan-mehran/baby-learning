import { ClassCurriculum } from '../types';
import playgroupCurriculum from './playgroup';
import nurseryCurriculum from './nursery';
import kgCurriculum from './kg';
import class1Curriculum from './class1';
import class2Curriculum from './class2';
import class3Curriculum from './class3';

export const ALL_CURRICULA: ClassCurriculum[] = [
  playgroupCurriculum,
  nurseryCurriculum,
  kgCurriculum,
  class1Curriculum,
  class2Curriculum,
  class3Curriculum,
];

export function getCurriculum(classId: string): ClassCurriculum | undefined {
  return ALL_CURRICULA.find((c) => c.classId === classId);
}

export {
  playgroupCurriculum,
  nurseryCurriculum,
  kgCurriculum,
  class1Curriculum,
  class2Curriculum,
  class3Curriculum,
};
