'use client'

import React, { useEffect, useState, useRef } from 'react'
import SettingsControl from './SettingsControl'
import { usePersonalization } from '@/contexts/PersonalizationContext'

// グローバルなオーディオ参照を保持
let globalAudioRef: HTMLAudioElement | null = null

export default function PersistentSettingsControl() {
  const { data, resetData } = usePersonalization()
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [showControl, setShowControl] = useState(true)
  const listenersAttachedRef = useRef(false)

  const attachAudioListeners = () => {
    const audio = audioRef.current
    if (!audio || listenersAttachedRef.current) return
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)
    listenersAttachedRef.current = true
    // Cleanup on ref change/unmount
    const cleanup = () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
      listenersAttachedRef.current = false
    }
    // Store cleanup function on the element for later use
    // @ts-expect-error attach cleanup for internal use
    audio.__cleanupListeners = cleanup
  }

  useEffect(() => {
    console.log('PersistentSettingsControl - data:', data)
    console.log('musicPreference:', data.musicPreference)
    console.log('hasCompleted:', data.hasCompleted)
    
    // 音楽を再生する設定の場合
    if (data.musicPreference === 'play') {
      console.log('音楽コントロールを初期化します')
      
      // 既に音源がある場合は再利用
      if (audioRef.current && globalAudioRef) {
        console.log('既存の音源を使用')
        setShowControl(true)
        attachAudioListeners()
        return
      }
      
      // 既存のグローバルオーディオがあれば使用
      if (globalAudioRef && !audioRef.current) {
        console.log('グローバル音源を復元')
        audioRef.current = globalAudioRef
        setIsPlaying(!globalAudioRef.paused)
        setShowControl(true)
        attachAudioListeners()
      } else if (!audioRef.current) {
        // 新規作成
        console.log('新規音源を作成')
        // 回答に基づいてBGMを選択
        const bgmPath = (data.quizAnswers.expectation === 'efficiency' || data.quizAnswers.focus === 'skills')
          ? '/reboot_1.mp3'
          : '/reboot.mp3'
        
        console.log('BGMパス:', bgmPath)
        
        audioRef.current = new Audio(bgmPath)
        audioRef.current.loop = true  // ループを有効化
        audioRef.current.volume = 0.5
        globalAudioRef = audioRef.current
        attachAudioListeners()
        
        // 完了済みの場合のみ自動再生
        if (data.hasCompleted) {
          console.log('自動再生を試みます')
          audioRef.current.play().then(() => {
            console.log('自動再生成功')
            setIsPlaying(true)
          }).catch(error => {
            console.log('自動再生が制限されています:', error)
            setIsPlaying(false)
          })
        } else {
          console.log('初回なので自動再生しません')
          setIsPlaying(false)
        }
        setShowControl(true)
      }
    } else if (data.musicPreference === 'mute') {
      console.log('音楽設定がmuteです')
      // muteの場合も音源を作成するが再生しない
      const bgmPath = (data.quizAnswers.expectation === 'efficiency' || data.quizAnswers.focus === 'skills')
        ? '/reboot_1.mp3'
        : '/reboot.mp3'
      
      if (!audioRef.current) {
        audioRef.current = new Audio(bgmPath)
        audioRef.current.loop = true
        audioRef.current.volume = 0.5
        globalAudioRef = audioRef.current
        attachAudioListeners()
        // muteなので再生しない
        setIsPlaying(false)
      }
      setShowControl(true)
    } else {
      console.log('音楽設定が未設定です')
      setShowControl(true)
    }
  }, [data])

  useEffect(() => {
    // Cleanup function for audio
    return () => {
      if (audioRef.current) {
        // @ts-expect-error cleanup function attached earlier
        if (audioRef.current.__cleanupListeners) {
          // @ts-expect-error cleanup function attached earlier
          audioRef.current.__cleanupListeners()
        }
      }
    }
  }, [])

  const handleResetOnboarding = () => {
    // 音楽を停止
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
    // データリセット
    resetData()
    // ページをリロードして初期状態に戻す
    window.location.reload()
  }

  if (!showControl) return null

  return (
    <SettingsControl
      audioRef={audioRef}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      onResetOnboarding={handleResetOnboarding}
    />
  )
}