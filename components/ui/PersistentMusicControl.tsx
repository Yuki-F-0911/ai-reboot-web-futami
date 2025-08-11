'use client'

import React, { useEffect, useState, useRef } from 'react'
import MusicControl from './MusicControl'
import { usePersonalization } from '@/contexts/PersonalizationContext'

// グローバルなオーディオ参照を保持
let globalAudioRef: HTMLAudioElement | null = null

export default function PersistentMusicControl() {
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
    console.log('PersistentMusicControl - data:', data)
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
        audioRef.current.loop = false  // ループを無効化
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
    } else {
      console.log('音楽設定がplayではありません:', data.musicPreference)
      // UIは表示するが音源は初期化しない
      setShowControl(true)
    }

    // クリーンアップ
    return () => {
      // コンポーネントのアンマウント時はオーディオを停止しない（グローバルで管理）
    }
  }, [data.musicPreference, data.quizAnswers.expectation, data.quizAnswers.focus, data.hasCompleted])

  // UIは常に表示（デフォルト停止状態）

  return (
    <MusicControl 
      audioRef={audioRef} 
      isPlaying={isPlaying} 
      setIsPlaying={setIsPlaying} 
      onResetOnboarding={() => {
        // 既存音源の停止
        if (audioRef.current) {
          try { audioRef.current.pause() } catch {}
          // @ts-expect-error cleanup
          if (audioRef.current.__cleanupListeners) {
            // @ts-expect-error cleanup
            audioRef.current.__cleanupListeners()
          }
        }
        if (globalAudioRef) {
          try { globalAudioRef.pause() } catch {}
        }
        // 状態クリア
        resetData()
        // リロードして初回フローへ
        window.location.reload()
      }}
    />
  )
}

// 外部から音楽を再生するための関数
export function playGlobalMusic() {
  console.log('playGlobalMusic called, globalAudioRef:', globalAudioRef)
  if (globalAudioRef) {
    if (globalAudioRef.paused) {
      globalAudioRef.play().then(() => {
        console.log('音楽再生開始')
      }).catch(error => {
        console.error('音楽の再生に失敗しました:', error)
      })
    } else {
      console.log('すでに再生中です')
    }
  } else {
    console.log('globalAudioRefがまだ初期化されていません')
  }
}