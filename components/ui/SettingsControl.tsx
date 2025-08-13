'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SettingsControlProps {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  onResetOnboarding?: () => void
}

export default function SettingsControl({ audioRef, isPlaying, setIsPlaying, onResetOnboarding }: SettingsControlProps) {
  const [volume, setVolume] = useState(50)
  const [isMuted, setIsMuted] = useState(false)
  const previousVolume = useRef(50)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [musicPanelOpen, setMusicPanelOpen] = useState(false)

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
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="fixed bottom-4 right-4 z-50"
    >
      {/* 設定（歯車）ボタン */}
      <button
        onClick={() => setSettingsOpen((v) => !v)}
        className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <motion.svg 
          className="w-6 h-6 text-gray-700" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          animate={{ rotate: settingsOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.89 3.31.877 2.42 2.42a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.89 1.543-.877 3.31-2.42 2.42a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.89-3.31-.877-2.42-2.42a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35.64-.155 1.112-.627 1.266-1.266.89-1.543 3.31-.877 2.42-2.42.155-.64.627-1.112 1.266-1.266z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </motion.svg>
      </button>

      {/* 設定メニュー */}
      <AnimatePresence>
        {settingsOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-14 right-0 bg-white/95 backdrop-blur p-3 rounded-xl shadow-xl min-w-[200px]"
          >
            {/* BGM設定 */}
            <button
              onClick={() => setMusicPanelOpen(!musicPanelOpen)}
              className="w-full text-left text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                BGM設定
              </span>
              <motion.svg 
                className="w-3 h-3 text-gray-500"
                animate={{ rotate: musicPanelOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </button>

            {/* BGM詳細パネル */}
            <AnimatePresence>
              {musicPanelOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-2 pb-1 px-3 space-y-3">
                    {/* 再生/一時停止ボタン */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">再生状態</span>
                      <button
                        onClick={handlePlayPause}
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        {isPlaying ? (
                          <svg className="w-4 h-4 text-will-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 text-will-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* 音量コントロール */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600">音量</span>
                        <span className="text-xs text-gray-500">{volume}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleMuteToggle}
                          className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
                        >
                          {isMuted || volume === 0 ? (
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                          )}
                        </button>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={volume}
                          onChange={(e) => handleVolumeChange(Number(e.target.value))}
                          className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          style={{
                            background: `linear-gradient(to right, rgb(151, 71, 255) 0%, rgb(151, 71, 255) ${volume}%, rgb(229, 231, 235) ${volume}%, rgb(229, 231, 235) 100%)`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="border-t border-gray-200 mt-2 pt-2">
              {/* 初回設定をやり直す */}
              <button
                onClick={() => {
                  setSettingsOpen(false)
                  if (onResetOnboarding) onResetOnboarding()
                }}
                className="w-full text-left text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                初回設定をやり直す
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 10px;
          height: 10px;
          background: rgb(151, 71, 255);
          border-radius: 50%;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 10px;
          height: 10px;
          background: rgb(151, 71, 255);
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </motion.div>
  )
}