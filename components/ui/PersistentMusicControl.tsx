'use client'

import React, { useEffect, useState, useRef } from 'react'
import MusicControl from './MusicControl'
import { usePersonalization } from '@/contexts/PersonalizationContext'

// グローバルなオーディオ参照を保持
let globalAudioRef: HTMLAudioElement | null = null

export default function PersistentMusicControl() {
  const { data } = usePersonalization()
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [showControl, setShowControl] = useState(false)

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
        return
      }
      
      // 既存のグローバルオーディオがあれば使用
      if (globalAudioRef && !audioRef.current) {
        console.log('グローバル音源を復元')
        audioRef.current = globalAudioRef
        setIsPlaying(!globalAudioRef.paused)
        setShowControl(true)
      } else if (!audioRef.current) {
        // 新規作成
        console.log('新規音源を作成')
        // 回答に基づいてBGMを選択
        const bgmPath = (data.quizAnswers.expectation === 'efficiency' || data.quizAnswers.focus === 'skills')
          ? '/reboot_1.mp3'
          : '/reboot.mp3'
        
        console.log('BGMパス:', bgmPath)
        
        audioRef.current = new Audio(bgmPath)
        audioRef.current.loop = true
        audioRef.current.volume = 0.5
        globalAudioRef = audioRef.current
        
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
      setShowControl(false)
    }

    // クリーンアップ
    return () => {
      // コンポーネントのアンマウント時はオーディオを停止しない（グローバルで管理）
    }
  }, [data.musicPreference, data.quizAnswers.expectation, data.quizAnswers.focus, data.hasCompleted])

  // 音楽設定がない場合、または音楽なしを選択した場合は何も表示しない
  if (!showControl || data.musicPreference !== 'play') {
    return null
  }

  return (
    <MusicControl 
      audioRef={audioRef} 
      isPlaying={isPlaying} 
      setIsPlaying={setIsPlaying} 
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