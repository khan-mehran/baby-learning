export type Subject = 'english' | 'math' | 'urdu';

export interface LearningItem {
  id: string;
  character: string;
  word: string;
  wordRoman?: string;
  emoji: string;
  audioFile?: string;
  color: string;
}

export interface ClassCurriculum {
  classId: string;
  className: string;
  emoji: string;
  color: string;
  subjects: {
    english: LearningItem[];
    math: LearningItem[];
    urdu: LearningItem[];
  };
}

export type RootStackParamList = {
  ClassSelection: undefined;
  SubjectSelection: { classId: string };
  Learning: { classId: string; subject: Subject };
};
