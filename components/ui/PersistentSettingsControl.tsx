'use client'

import React, { useEffect, useState, useRef } from 'react'
import HeaderSettings from './HeaderSettings'
import { usePersonalization } from '@/contexts/PersonalizationContext'

// グローバルなオーディオ参照を保持
let globalAudioRef: HTMLAudioElement | null = null

export default function PersistentSettingsControl() {
  const { data, resetData } = usePersonalization()
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [showControl, setShowControl] = useState(true)
  const listenersAttachedRef = useRef(false)
  const previousHasCompleted = useRef(data.hasCompleted)

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
    console.log('previousHasCompleted:', previousHasCompleted.current)
    
    // 既存のグローバル音源がある場合は再利用
    if (globalAudioRef && !audioRef.current) {
      console.log('既存のグローバル音源を再利用')
      audioRef.current = globalAudioRef
      setIsPlaying(!globalAudioRef.paused)
      attachAudioListeners()
      setShowControl(true)
      return
    }
    
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
        audioRef.current.loop = false  // ループを無効化（1回再生で停止）
        audioRef.current.volume = 0.5
        globalAudioRef = audioRef.current
        attachAudioListeners()
        
        // 既に完了済みの場合のみここで自動再生（リロード時など）
        // 初回オンボーディング完了時は別のuseEffectで処理
        if (data.hasCompleted && data.musicPreference === 'play') {
          console.log('既存ユーザーの自動再生を試みます')
          setTimeout(() => {
            if (audioRef.current) {
              audioRef.current.play().then(() => {
                console.log('既存ユーザーの自動再生成功')
                setIsPlaying(true)
              }).catch(error => {
                console.log('既存ユーザーの自動再生失敗:', error)
                setIsPlaying(false)
              })
            }
          }, 100)
        } else {
          console.log('音源作成時は自動再生しません (hasCompleted:', data.hasCompleted, ')')
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
        audioRef.current.loop = false  // ループを無効化（1回再生で停止）
        audioRef.current.volume = 0.5
        globalAudioRef = audioRef.current
        attachAudioListeners()
        // muteなので再生しない
        setIsPlaying(false)
      }
      setShowControl(true)
    } else {
      console.log('音楽設定が未設定です。デフォルトで音源を準備します')
      // 音楽設定が未設定でも音源を作成（デフォルト設定）
      const bgmPath = '/reboot_1.mp3' // デフォルトBGM（集中力を高めるバージョン）
      
      if (!audioRef.current) {
        console.log('デフォルト音源を作成')
        audioRef.current = new Audio(bgmPath)
        audioRef.current.loop = false  // ループを無効化（1回再生で停止）
        audioRef.current.volume = 0.5
        globalAudioRef = audioRef.current
        attachAudioListeners()
        // 未設定なので自動再生はしない
        setIsPlaying(false)
      }
      setShowControl(true)
    }
    
    // previousHasCompletedを更新
    previousHasCompleted.current = data.hasCompleted
  }, [data])

  // hasCompletedの変化を監視して自動再生
  useEffect(() => {
    console.log('hasCompleted変化を検知:', data.hasCompleted, 'musicPreference:', data.musicPreference, 'audioRef.current:', audioRef.current)
    
    // 初回オンボーディングが完了した時（false→true）に音楽を自動再生
    if (data.hasCompleted && data.musicPreference === 'play') {
      console.log('オンボーディング完了検知、音楽を再生します')
      
      // 音源がまだない場合は作成
      if (!audioRef.current) {
        console.log('音源がないので作成します')
        const bgmPath = (data.quizAnswers.expectation === 'efficiency' || data.quizAnswers.focus === 'skills')
          ? '/reboot_1.mp3'
          : '/reboot.mp3'
        
        audioRef.current = new Audio(bgmPath)
        audioRef.current.loop = false
        audioRef.current.volume = 0.5
        globalAudioRef = audioRef.current
        attachAudioListeners()
      }
      
      // ユーザーインタラクション後なので少し遅延して再生
      const timer = setTimeout(() => {
        if (audioRef.current && audioRef.current.paused) {
          console.log('音楽再生を実行します')
          audioRef.current.play().then(() => {
            console.log('初回完了後の自動再生成功')
            setIsPlaying(true)
          }).catch(error => {
            console.log('初回完了後の自動再生失敗:', error)
            setIsPlaying(false)
          })
        } else {
          console.log('音楽は既に再生中またはaudioRefがnull')
        }
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [data.hasCompleted, data.musicPreference, data.quizAnswers.expectation, data.quizAnswers.focus])

  useEffect(() => {
    // ページ遷移を検知してBGMを停止
    const handleRouteChange = () => {
      console.log('ページ遷移を検知、BGMを停止します')
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }

    // popstateイベント（ブラウザの戻る/進む）を監視
    window.addEventListener('popstate', handleRouteChange)
    
    // Cleanup function for audio
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      
      // コンポーネントがアンマウントされる時（ページ遷移時）にBGMを停止
      if (audioRef.current) {
        if (!audioRef.current.paused) {
          console.log('コンポーネントアンマウント時にBGMを停止')
          audioRef.current.pause()
        }
        // @ts-expect-error cleanup function attached earlier
        if (audioRef.current.__cleanupListeners) {
          // @ts-expect-error cleanup function attached earlier
          audioRef.current.__cleanupListeners()
        }
        // グローバル参照もクリア
        globalAudioRef = null
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
    // URLパラメータを削除してリロード
    setTimeout(() => {
      // 現在のURLからパラメータを削除
      const url = new URL(window.location.href)
      url.search = '' // すべてのパラメータを削除
      // パラメータなしのURLに遷移（リロード）
      window.location.href = url.toString()
    }, 100)
  }

  if (!showControl) return null

  return (
    <HeaderSettings
      audioRef={audioRef}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      onResetOnboarding={handleResetOnboarding}
    />
  )
}