import {
  useCasePatterns,
  experiencePatterns,
  preferencePatterns
} from "./patterns.js"


// =============================
// Pattern Matching
// =============================

function matchInput(input, patterns) {

  const text = input.toLowerCase()

  for (let key in patterns) {

    const keywords = patterns[key]

    for (let word of keywords) {

      if (text.includes(word)) {
        return key
      }

    }

  }

  return null
}



// =============================
// Daily Routine Rules (25+)
// =============================

function getRoutineAdvice(state) {

  const { useCase, experience, preference } = state


  // -------- Morning Routine --------

  if (useCase === "morning" && preference === "healthy")
    return "Start your morning with water, light stretching, and a healthy breakfast."

  if (useCase === "morning" && preference === "productive")
    return "Wake up early and plan your tasks for the day."

  if (useCase === "morning" && experience === "student")
    return "Review your notes for 20 minutes after waking up."



  // -------- Study Routine --------

  if (useCase === "study" && preference === "focus")
    return "Use the Pomodoro technique: 25 minutes study, 5 minutes break."

  if (useCase === "study" && preference === "productive")
    return "Create a daily study schedule and follow it consistently."

  if (useCase === "study" && experience === "student")
    return "Study difficult subjects in the morning when your mind is fresh."



  // -------- Exercise --------

  if (useCase === "exercise" && preference === "healthy")
    return "Try 30 minutes of walking or light workout daily."

  if (useCase === "exercise" && preference === "energy")
    return "Morning exercise boosts energy and focus."



  // -------- Eating --------

  if (useCase === "food" && preference === "healthy")
    return "Include fruits, vegetables, and protein in your meals."

  if (useCase === "food" && preference === "balanced")
    return "Maintain a balanced diet with carbs, proteins, and vitamins."



  // -------- Work Productivity --------

  if (useCase === "work" && preference === "productive")
    return "Start your day with the most important task."

  if (useCase === "work" && preference === "focus")
    return "Avoid distractions and use task lists."



  // -------- Relaxation --------

  if (useCase === "relax")
    return "Take short breaks, listen to music, or go for a walk."

  if (useCase === "relax" && preference === "stress")
    return "Try meditation or deep breathing exercises."



  // -------- Sleep Routine --------

  if (useCase === "sleep" && preference === "healthy")
    return "Try to sleep 7–8 hours every night."

  if (useCase === "sleep" && preference === "schedule")
    return "Sleep and wake up at the same time daily."



  // -------- Time Management --------

  if (useCase === "time")
    return "Plan your day using a to-do list."

  if (useCase === "time" && preference === "productive")
    return "Prioritize tasks using the Eisenhower Matrix."



  // -------- General Daily Routine --------

  if (useCase === "routine" && preference === "balanced")
    return "Balance work, study, exercise, and rest."

  if (useCase === "routine" && experience === "student")
    return "Divide your day between study, rest, and physical activity."



  // -------- Extra Rules --------

  if (preference === "healthy")
    return "Drink enough water and eat healthy food."

  if (preference === "productive")
    return "Set clear daily goals."

  if (preference === "focus")
    return "Remove distractions like social media while working."



  return "A balanced daily routine includes sleep, work, exercise, and relaxation."
}



// =============================
// Chat Engine
// =============================

export function processMessage(userInput, currentState) {

  let newState = { ...currentState }


  if (newState.stage === "usecase") {

    const result = matchInput(userInput, useCasePatterns)

    if (result) {

      newState.useCase = result
      newState.stage = "experience"

      return {
        botReply:
          "Got it! Are you a student, worker, or just planning a routine?",
        newState
      }

    }

    return {
      botReply:
        "What part of your daily routine do you want help with? (morning, study, exercise, sleep)",
      newState
    }

  }



  if (newState.stage === "experience") {

    const result = matchInput(userInput, experiencePatterns)

    if (result) {

      newState.experience = result
      newState.stage = "preference"

      return {
        botReply:
          "What is your goal? healthy, productive, focus, or balanced routine?",
        newState
      }

    }

    return {
      botReply:
        "Tell me about yourself (student, worker, etc.).",
      newState
    }

  }



  if (newState.stage === "preference") {

    const result = matchInput(userInput, preferencePatterns)

    if (result) {

      newState.preference = result
      newState.stage = "recommendation"

      const advice = getRoutineAdvice(newState)

      return {
        botReply: advice,
        newState
      }

    }

    return {
      botReply:
        "What do you want to improve? healthy, productive, focus, or balanced routine?",
      newState
    }

  }



  return {
    botReply: "Let's start again. What part of your daily routine do you want help with?",
    newState: {
      stage: "usecase",
      useCase: null,
      experience: null,
      preference: null
    }
  }

}