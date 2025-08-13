'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface HeaderSettingsProps {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  onResetOnboarding?: () => void
}

export default function HeaderSettings({ audioRef, isPlaying, setIsPlaying, onResetOnboarding }: HeaderSettingsProps) {
  const [volume, setVolume] = useState(50)
  const [isMuted, setIsMuted] = useState(false)
  const previousVolume = useRef(50)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [musicPanelOpen, setMusicPanelOpen] = useState(false)
  
  useEffect(() => {
    console.log('HeaderSettings がマウントされました')
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume, audioRef])

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume)
    if (newVolume > 0) {
      setIsMuted(false)
    }
  }

  const handleMuteToggle = () => {
    if (isMuted) {
      setVolume(previousVolume.current)
      setIsMuted(false)
    } else {
      previousVolume.current = volume
      setVolume(0)
      setIsMuted(true)
    }
  }

  return (
    <div className="fixed md:top-24 md:right-4 top-4 right-16 z-[9999] flex items-center gap-2 md:gap-3">
      {/* BGM コントロール */}
      <motion.button
        onClick={() => setMusicPanelOpen(!musicPanelOpen)}
        className="relative p-2.5 md:p-3 bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-lg text-gray-800 rounded-xl md:rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.12)] transition-all border border-white/50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="BGM設定"
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[22px] md:h-[22px]">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[22px] md:h-[22px]">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        )}
        {/* 再生中インジケーター */}
        {isPlaying && (
          <motion.div
            className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* 設定ボタン */}
      <motion.button
        onClick={() => setSettingsOpen(!settingsOpen)}
        className="relative p-2.5 md:p-3 bg-gradient-to-br from-white/95 to-white/85 backdrop-blur-lg text-gray-800 rounded-xl md:rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.12)] transition-all border border-white/50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="設定"
      >
        <motion.svg 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="currentColor"
          className="md:w-[22px] md:h-[22px]"
          animate={{ rotate: settingsOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </motion.svg>
      </motion.button>

      {/* BGM パネル */}
      <AnimatePresence>
        {musicPanelOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-3 right-0 bg-gradient-to-br from-white/98 to-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.12)] w-72 border border-white/50"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-800 text-sm font-semibold">BGM コントロール</span>
                <button
                  onClick={handlePlayPause}
                  className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all"
                  aria-label={isPlaying ? '一時停止' : '再生'}
                >
                  {isPlaying ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                      <rect x="6" y="4" width="4" height="16" rx="1" />
                      <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleMuteToggle}
                    className="text-gray-600 hover:text-gray-800 transition-colors p-1"
                    aria-label={isMuted ? 'ミュート解除' : 'ミュート'}
                  >
                    {isMuted || volume === 0 ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => handleVolumeChange(Number(e.target.value))}
                    className="flex-1 h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-gradient-to-r [&::-webkit-slider-thumb]:from-will-primary [&::-webkit-slider-thumb]:to-will-secondary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-sm"
                    aria-label="音量"
                  />
                  <span className="text-gray-600 text-xs w-10 text-right font-medium">{volume}%</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 設定パネル */}
      <AnimatePresence>
        {settingsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-3 right-0 bg-gradient-to-br from-white/98 to-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-white/50"
          >
            <button
              onClick={() => {
                if (onResetOnboarding) {
                  onResetOnboarding()
                  setSettingsOpen(false)
                }
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-gray-800 rounded-xl transition-all text-sm font-medium whitespace-nowrap shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                <path d="M1 4v6h6M23 20v-6h-6" />
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
              </svg>
              初回設定をやり直す
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}