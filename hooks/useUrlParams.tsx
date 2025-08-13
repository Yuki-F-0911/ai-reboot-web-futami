'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { usePersonalization } from '@/contexts/PersonalizationContext'

/**
 * URLパラメータを読み取って初期設定を行うカスタムフック
 * 
 * パラメータ例:
 * - ?skip=true : アンケートをスキップしてデフォルト値で開始
 * - ?preset=efficiency : 効率重視のプリセット
 * - ?preset=possibility : 可能性重視のプリセット
 * - ?preset=debug : デバッグ用（開発者向け）
 * - ?name=太郎 : ユーザー名を設定
 * - ?music=play : BGMを再生
 * - ?music=mute : BGMをミュート
 * 
 * 複合例:
 * - ?skip=true&preset=efficiency&name=太郎
 * - ?preset=debug&music=mute
 */
export function useUrlParams() {
  const searchParams = useSearchParams()
  const { 
    updateUserName, 
    updateQuizAnswers, 
    updateMusicPreference,
    setCompleted,
    data 
  } = usePersonalization()

  useEffect(() => {
    // URLパラメータが存在し、まだ設定が完了していない場合のみ処理
    if (!data.hasCompleted && searchParams) {
      const skip = searchParams.get('skip')
      const preset = searchParams.get('preset')
      const name = searchParams.get('name')
      const music = searchParams.get('music')

      // スキップまたはプリセットが指定されている場合
      if (skip === 'true' || preset) {
        console.log('URLパラメータによる初期設定を実行')

        // プリセット値の設定
        if (preset === 'efficiency') {
          // 効率重視プリセット
          updateQuizAnswers({
            expectation: 'efficiency',
            feeling: 'change',
            focus: 'skills'
          })
        } else if (preset === 'possibility') {
          // 可能性重視プリセット
          updateQuizAnswers({
            expectation: 'possibility',
            feeling: 'growth',
            focus: 'mindset'
          })
        } else if (preset === 'debug') {
          // デバッグ用プリセット
          updateQuizAnswers({
            expectation: 'efficiency',
            feeling: 'change',
            focus: 'skills'
          })
          updateUserName('デバッグユーザー')
          updateMusicPreference('mute')
          setCompleted()
          return
        } else if (skip === 'true') {
          // デフォルト値
          updateQuizAnswers({
            expectation: 'possibility',
            feeling: 'growth',
            focus: 'mindset'
          })
        }

        // 名前の設定
        if (name) {
          updateUserName(decodeURIComponent(name))
        } else if (skip === 'true') {
          updateUserName('ゲスト')
        }

        // BGM設定
        if (music === 'play' || music === 'mute') {
          updateMusicPreference(music)
        } else if (skip === 'true') {
          updateMusicPreference('play')
        }

        // スキップの場合は完了フラグを立てる
        if (skip === 'true' || preset) {
          setCompleted()
        }
      }
    }
  }, [searchParams, data.hasCompleted])

  return {
    isSkipped: searchParams?.get('skip') === 'true',
    preset: searchParams?.get('preset'),
    urlName: searchParams?.get('name'),
    urlMusic: searchParams?.get('music')
  }
}