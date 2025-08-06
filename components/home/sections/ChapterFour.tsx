'use client'

import React from 'react'

export default function ChapterFour() {
  return (
    <section className="relative section-padding px-6 md:px-8">
      {/* 背景 - 完全に白に近い */}
      <div className="absolute inset-0 bg-white z-20 pointer-events-none" />
      
      <div className="relative z-30 max-w-prose mx-auto">
        <h2 className="text-h2 font-bold mb-12 text-depth-800 text-ja-heading">
          第四章：小さな変化が、大きな違いを生む
        </h2>

        <div className="space-y-10 text-lg leading-loose text-depth-700 text-ja-body">
          <p className="text-center text-lead font-medium text-depth-800">
            個人の「Will」が目覚めるとき、<br />
            まず、日常の見え方が変わる。
          </p>

          <div className="space-y-8 my-16">
            <div>
              <p className="font-medium text-depth-800 text-xl">月曜日の朝が、憂鬱じゃなくなる。</p>
              <p className="text-caption pl-8 mt-2">「今週は何を試してみようか」</p>
            </div>

            <div>
              <p className="font-medium text-depth-800 text-xl">会議での発言が変わる。</p>
              <p className="text-caption pl-8 mt-2">
                「それは難しいですね」から<br />
                「こんなアプローチはどうでしょう」へ。
              </p>
            </div>

            <div>
              <p className="font-medium text-depth-800 text-xl">同僚との雑談が変わる。</p>
              <p className="text-caption pl-8 mt-2">愚痴の時間が、アイデアを出し合う時間に。</p>
            </div>

            <div>
              <p className="font-medium text-depth-800 text-xl">退屈だった仕事が、自分だけの実験場に変わる。</p>
              <p className="text-caption pl-8 mt-2">「こうあるべき」から「こうありたい」へ。</p>
            </div>
          </div>

          <div className="text-center my-16">
            <p className="text-lead font-medium text-depth-800">
              そして、家族との時間も大切にできる。
            </p>
            <p className="text-caption mt-2">
              効率化で生まれた時間を、本当に大切なことに。
            </p>
          </div>

          <div className="text-center mt-20">
            <p className="text-lead font-medium text-depth-800">
              小さな変化の積み重ねが、<br />
              いつの間にか、あなたの人生を変えている。
            </p>
            <p className="mt-4">
              それが、本当の幸せへの道筋だと、<br />
              我々は信じています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}