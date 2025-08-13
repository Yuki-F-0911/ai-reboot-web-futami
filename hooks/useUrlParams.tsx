'use client'

import { useEffect, useState } from 'react'
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

  // URLパラメータの処理済みフラグ
  const [paramsProcessed, setParamsProcessed] = useState(false)

  useEffect(() => {
    // URLパラメータが存在し、まだ処理していない場合
    if (searchParams && !paramsProcessed) {
      const skip = searchParams.get('skip')
      const preset = searchParams.get('preset')
      const name = searchParams.get('name')
      const music = searchParams.get('music')

      // スキップまたはプリセットが指定されている場合は、既存データを上書き
      if (skip === 'true' || preset) {
        console.log('URLパラメータによる初期設定を実行（キャッシュを上書き）')
        console.log('パラメータ:', { skip, preset, name, music })
        console.log('既存データ:', data)
        
        // 処理済みフラグを立てる
        setParamsProcessed(true)

        // 処理を少し遅延させて確実に実行
        setTimeout(() => {
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
          if (name && name.trim() !== '') {
            console.log('名前を設定:', decodeURIComponent(name))
            updateUserName(decodeURIComponent(name))
          } else {
            // nameパラメータが指定されていない場合のみ「あなた」に設定
            console.log('デフォルト名「あなた」を設定')
            updateUserName('あなた')
          }

          // BGM設定
          if (music === 'play' || music === 'mute') {
            updateMusicPreference(music)
          } else if (skip === 'true' || preset) {
            updateMusicPreference('play')
          }

          // スキップの場合は完了フラグを立てる
          if (skip === 'true' || preset === 'efficiency' || preset === 'possibility') {
            setCompleted()
          }
        }, 100)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, paramsProcessed]) // URLパラメータが変更されたら再実行

  return {
    isSkipped: searchParams?.get('skip') === 'true',
    preset: searchParams?.get('preset'),
    urlName: searchParams?.get('name'),
    urlMusic: searchParams?.get('music')
  }
}