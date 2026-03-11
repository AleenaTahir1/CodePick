// ============================================================
//  CodePick — chatEngine.js
//  Owner: Dua (engine core), Aleena (integration)
//  Covers: State machine, pattern matching, recommendation logic
// ============================================================

import { useCasePatterns, experiencePatterns, preferencePatterns } from './patterns.js';
import rules from './rules.js';
import {
  greeting,
  stageResponses,
  buildRecommendationMessage,
} from './responses.js';

// ──────────────────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────────────────

/** Strip emojis and leading/trailing whitespace from quick-reply text */
const cleanInput = (text) =>
  text
    .replace(/[\u{1F000}-\u{1FFFF}]/gu, '')
    .replace(/[\u2600-\u27BF]/g, '')
    .trim()
    .toLowerCase();

// ──────────────────────────────────────────────────────────
// PATTERN MATCHING — matchInput()
// ──────────────────────────────────────────────────────────

/**
 * Match raw user text against a pattern map.
 * Returns the first matching key, or null.
 */
function matchInput(raw, patternMap) {
  const text = cleanInput(raw);
  if (!text) return null;

  for (const [key, synonyms] of Object.entries(patternMap)) {
    for (const phrase of synonyms) {
      if (text.includes(phrase)) return key;
    }
  }
  return null;
}

// ──────────────────────────────────────────────────────────
// RECOMMENDATION LOOKUP — getRecommendation()
// ──────────────────────────────────────────────────────────

/**
 * Find the best matching rule given collected user data.
 * Priority: exact (useCase+exp+pref) > useCase+exp > useCase+pref
 *           > cross-cutting (any) > fallback
 */
function getRecommendation({ useCase, experience, preference }) {
  // 1. Exact match (useCase + experience + preference)
  if (useCase && experience && preference) {
    const exact = rules.find(
      (r) =>
        !r.isFallback &&
        r.useCase === useCase &&
        r.experience === experience &&
        r.preference === preference
    );
    if (exact) return exact;
  }

  // 2. useCase + experience (no preference match)
  if (useCase && experience) {
    const ue = rules.find(
      (r) =>
        !r.isFallback &&
        r.useCase === useCase &&
        r.experience === experience &&
        r.preference === null
    );
    if (ue) return ue;
  }

  // 3. useCase + preference (no experience match)
  if (useCase && preference) {
    const up = rules.find(
      (r) =>
        !r.isFallback &&
        r.useCase === useCase &&
        r.preference === preference &&
        r.experience === null
    );
    if (up) return up;
  }

  // 4. Cross-cutting: any + experience + preference
  if (experience && preference) {
    const cross = rules.find(
      (r) =>
        !r.isFallback &&
        r.useCase === 'any' &&
        r.experience === experience &&
        r.preference === preference
    );
    if (cross) return cross;
  }

  // 5. Cross-cutting: any + preference
  if (preference) {
    const crossPref = rules.find(
      (r) =>
        !r.isFallback &&
        r.useCase === 'any' &&
        r.preference === preference
    );
    if (crossPref) return crossPref;
  }

  // 6. Cross-cutting: any + experience
  if (experience) {
    const crossExp = rules.find(
      (r) =>
        !r.isFallback &&
        r.useCase === 'any' &&
        r.experience === experience &&
        r.preference === null
    );
    if (crossExp) return crossExp;
  }

  // 7. Fallback — unknown use case
  return rules.find((r) => r.isFallback && r.fallbackType === 'unknown-usecase');
}

// ──────────────────────────────────────────────────────────
// STATE MACHINE — processMessage()
// ──────────────────────────────────────────────────────────

/**
 * Creates a fresh conversation state.
 */
export function createInitialState() {
  return {
    stage: 'greeting',     // greeting | usecase | experience | preference | recommendation | done
    useCase: null,
    experience: null,
    preference: null,
    failCount: 0,
  };
}

/**
 * Main entry point called by the frontend.
 * @param {string} userInput  — raw text from user
 * @param {object} state      — current conversation state
 * @returns {{ botReply: string, newState: object, quickReplies: string[] }}
 */
export function processMessage(userInput, state) {
  const input = cleanInput(userInput);
  let newState = { ...state };

  // ── Handle restart / goodbye ──
  if (input.includes('start over') || input.includes('restart')) {
    return {
      botReply: greeting.message,
      newState: createInitialState(),
      quickReplies: greeting.quickReplies,
    };
  }
  if (input.includes("i'm good") || input.includes('im good') || input.includes('thanks') || input.includes('bye') || input.includes('no thanks')) {
    return {
      botReply: stageResponses.goodbye,
      newState: { ...newState, stage: 'done' },
      quickReplies: [],
    };
  }

  // ── Stage: greeting → ask use case ──
  if (state.stage === 'greeting') {
    newState.stage = 'usecase';
    // Fall through to usecase handler
  }

  // ── Stage: usecase ──
  if (newState.stage === 'usecase') {
    const detected = matchInput(userInput, useCasePatterns);
    if (detected) {
      newState.useCase = detected;
      newState.stage = 'experience';
      newState.failCount = 0;
      const label = detected.replace(/-/g, ' ');
      return {
        botReply: stageResponses.useCaseConfirmed(label),
        newState,
        quickReplies: stageResponses.useCaseQuickReplies,
      };
    }
    // No match
    newState.failCount += 1;
    if (newState.failCount >= 2) {
      newState.failCount = 0;
      return {
        botReply: stageResponses.showOptionsAfterFail,
        newState,
        quickReplies: greeting.quickReplies,
      };
    }
    return {
      botReply: stageResponses.rephraseRequest,
      newState,
      quickReplies: [],
    };
  }

  // ── Stage: experience ──
  if (newState.stage === 'experience') {
    const detected = matchInput(userInput, experiencePatterns);
    if (detected) {
      newState.experience = detected;
      newState.stage = 'preference';
      newState.failCount = 0;
      return {
        botReply: stageResponses.experienceConfirmed(detected),
        newState,
        quickReplies: stageResponses.experienceQuickReplies,
      };
    }
    newState.failCount += 1;
    if (newState.failCount >= 2) {
      newState.failCount = 0;
      return {
        botReply: stageResponses.showOptionsAfterFail,
        newState,
        quickReplies: stageResponses.useCaseQuickReplies,
      };
    }
    return {
      botReply: stageResponses.rephraseRequest,
      newState,
      quickReplies: [],
    };
  }

  // ── Stage: preference ──
  if (newState.stage === 'preference') {
    const detected = matchInput(userInput, preferencePatterns);
    if (detected) {
      newState.preference = detected;
    }
    // Even if no preference matched, make a recommendation with what we have
    newState.stage = 'recommendation';
    newState.failCount = 0;

    const rule = getRecommendation(newState);
    const recMessage = rule
      ? buildRecommendationMessage(rule.primary, rule.alternatives, rule.reasoning)
      : "I couldn't find a perfect match, but Python is always a great starting point!";

    return {
      botReply: stageResponses.buildingRecommendation + '\n\n' + recMessage + '\n\n' + stageResponses.askRestart,
      newState: { ...newState, stage: 'done' },
      quickReplies: stageResponses.restartQuickReplies,
    };
  }

  // ── Stage: done (post-recommendation) ──
  if (newState.stage === 'done') {
    return {
      botReply: greeting.message,
      newState: createInitialState(),
      quickReplies: greeting.quickReplies,
    };
  }

  // ── Catch-all fallback ──
  return {
    botReply: stageResponses.rephraseRequest,
    newState,
    quickReplies: greeting.quickReplies,
  };
}
