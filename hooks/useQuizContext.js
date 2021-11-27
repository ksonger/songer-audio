import { useContext } from "react";
import QuizContext from "@/contexts/Quiz";

export function useQuizContext() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error(
      `Quiz compound components cannot be rendered outside the QuizWrapper component`
    );
  }
  return context;
}
