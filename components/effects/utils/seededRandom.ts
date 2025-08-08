'use client'

// Simple deterministic PRNG (mulberry32)
// Given a seed, returns a function that yields [0,1) values deterministically
export function createRNG(seed: number) {
  let a = seed >>> 0
  return function rng() {
    a |= 0
    a = (a + 0x6D2B79F5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Global default RNG with fixed seed for stable effects across reloads
export const defaultRNG = createRNG(0xC0FFEE)

