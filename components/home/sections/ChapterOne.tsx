'use client'

import React from 'react'

export default function ChapterOne() {
  return (
    <section className="section-padding px-6 md:px-8 bg-depth-100">
      <div className="max-w-prose mx-auto">
        <h2 className="text-h2 font-bold mb-12 text-depth-800 text-ja-heading">
          第一章：あなたの「なぜ」を、見せてください
        </h2>

        <div className="space-y-10 text-lg leading-loose text-depth-700 text-ja-body">
          <p>
            仮に、AIに何かを教えるとしたら。<br />
            それは、教科書に載ってる正解じゃないですよね。
          </p>

          <p>
            我々が、最初に聞きたいこと。<br />
            それは、あなたの輝かしい成功体験でもありません。
          </p>

          <div className="my-16 space-y-4">
            <p>履歴書に書けなかった情熱。</p>
            <p>損益計算書に載らなかった執着。</p>
            <p>誰も評価しなかった、あなただけの「なぜ」。</p>
          </div>

          <div className="text-center my-16">
            <p className="text-lead font-medium text-depth-800 mb-8">つまり、</p>
            <p>「なぜ、それにこだわるのか」</p>
            <p>「なぜ、それを諦められないのか」</p>
            <p>「なぜ、それに心が動くのか」</p>
          </div>

          <p className="text-lead font-medium text-depth-800 text-center my-16">
            その答えこそが、AIが逆立ちしても作れない、<br />
            あなただけの「Will（意志）」だから。
          </p>

          <div className="border-t border-depth-200 pt-10 mt-16">
            <p>
              「どうやって」や「何を」は、AIが得意とする領域。<br />
              でも「なぜ」は、永遠にあなたのものだ。
            </p>
            <p className="mt-4">
              教科書には載っていない、<br />
              正解のない、あなただけの物語。<br />
              AI時代の価値は、そこからしか生まれない。
            </p>
            <p className="text-lead font-medium text-depth-800 mt-10">
              我々は、そう確信しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}