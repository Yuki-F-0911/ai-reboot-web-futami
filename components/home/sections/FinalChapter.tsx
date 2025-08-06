'use client'

import React from 'react'
import Link from 'next/link'

export default function FinalChapter() {
  return (
    <section className="section-padding-lg px-6 md:px-8 bg-depth-100">
      <div className="max-w-prose mx-auto">
        <h2 className="text-h2 font-bold mb-12 text-depth-800 text-ja-heading">
          最終章：選ぶのは、あなただ
        </h2>

        <div className="space-y-10 text-lg leading-loose text-depth-700 text-ja-body">
          <p className="text-center text-lead font-medium text-depth-800">
            ここまで読んでくれた、あなたへ。
          </p>

          <div className="my-16">
            <p>
              たぶん、あなたは、もう気づいている。<br />
              AIに仕事を奪われる人間と、<br />
              AIを最高の相棒にする人間の、<br />
              決定的な違いを。
            </p>
            <p className="text-lead font-medium text-depth-800 mt-8">
              それは、自分の「なぜ」を知っているかどうか。<br />
              つまり、何のために生きて、何のために働いているのか。<br />
              自分の「Will」に正直かどうか。
            </p>
          </div>

          <div className="border-y border-depth-200 py-10 my-16">
            <p className="font-medium text-gray-900 text-center">
              我々は、その「Will」を一緒に見つける、<br />
              小さな秘密基地です。
            </p>
            <p className="text-center mt-8 text-caption">
              経済産業省認定で、最大70%の受講料支援。
            </p>
          </div>

          <p className="text-center">
            でも、本当の投資は、あなた自身との時間。<br />
            もし、ピンと来たら。<br />
            まずは、あなたの「なぜ」を、聞かせてください。
          </p>

          <div className="my-16">
            <p className="text-center text-lead font-medium text-depth-800 mb-8">
              うまい話も、正解も、ここにはありません。
            </p>
            <p>
              あるのは、あなたの物語を面白がる、最高の聞き手。<br />
              そして、毎日AIと新しい可能性を探っている、現役の実践者たち。
            </p>
            <p className="mt-4">
              「それ、私も悩んだなぁ」と共感しながら、<br />
              「こんな使い方もあるよ」と、実例を見せてくれる。
            </p>
            <p className="text-center text-lead font-medium text-depth-800 mt-10">
              理論じゃない、リアルな体験の共有が、ここにあります。
            </p>
          </div>

          <div className="text-center my-20">
            <Link 
              href="/academy#contact"
              className="inline-block border-2 border-depth-800 text-depth-800 px-10 py-5 text-xl font-medium hover:bg-depth-800 hover:text-white transition-all duration-300 hover:shadow-elevated tracking-tight rounded-lg"
            >
              → 今のモヤモヤを聞かせてください（無料説明会）
            </Link>
          </div>

          <div className="text-center mt-24">
            <p className="font-bold text-depth-800 mb-4 text-2xl tracking-wider">-AI REBOOT-</p>
            <p className="text-caption">
              あなたの「Will」が、静かに待っている。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}