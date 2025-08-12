export type PanelAspect = 'landscape' | 'portrait' | 'square'
export type PanelSide = 'left' | 'right' | 'center'

export interface PanelSpec {
  src?: string
  alt: string
  aspect: PanelAspect
  side: PanelSide
  yOffset: number | string // px or '%'
  delayMs?: number
  tone?: 'light' | 'medium' | 'heavy'
  rotateDeg?: number // -3 ~ 3
  yOffsetMobile?: number | string
  opacity?: number
  opacityMobile?: number
  insertAfter?: number // mobile only: render after this content block index
}

export const chapterPanels: Record<'ch1'|'ch2'|'ch3'|'ch4', PanelSpec[]> = {
  ch1: [
    { src: '/panels/ch1-01.webp', alt: '夜の机でメモに走り書きする手元のクローズアップ', aspect: 'portrait', side: 'left', yOffset: '10%', yOffsetMobile: '16%', delayMs: 100, tone: 'medium', rotateDeg: -2, opacityMobile: 0.45, insertAfter: 1 },
    { src: '/panels/ch1-02.webp', alt: '履歴書の空白欄（白場を強調）', aspect: 'landscape', side: 'right', yOffset: '35%', yOffsetMobile: '42%', delayMs: 250, tone: 'light', rotateDeg: 2, opacityMobile: 0.5, insertAfter: 2 },
    { src: '/panels/ch1-03.webp', alt: '鉛筆とカッターを持つ指先のマクロ', aspect: 'square', side: 'left', yOffset: '60%', yOffsetMobile: '66%', delayMs: 350, tone: 'medium', rotateDeg: -1, opacityMobile: 0.45, insertAfter: 3 },
    { src: '/panels/ch1-04.webp', alt: '心拍線のような抽象線が意志を象徴するカーブへ', aspect: 'landscape', side: 'right', yOffset: '78%', yOffsetMobile: '82%', delayMs: 500, tone: 'light', rotateDeg: 1, opacityMobile: 0.45, insertAfter: 4 },
  ],
  ch2: [
    { src: '/panels/ch2-01.webp', alt: '中心点が明確な的（ターゲット）', aspect: 'landscape', side: 'left', yOffset: '12%', yOffsetMobile: '18%', delayMs: 120, tone: 'light', rotateDeg: -1, opacityMobile: 0.45, insertAfter: 1 },
    { src: '/panels/ch2-02.webp', alt: '便箋に目的を一行で書く手元、消し跡あり', aspect: 'square', side: 'right', yOffset: '40%', yOffsetMobile: '46%', delayMs: 240, tone: 'medium', rotateDeg: 1, opacityMobile: 0.5, insertAfter: 2 },
    { src: '/panels/ch2-03.webp', alt: 'スマホとタイマーで小さく試す情景', aspect: 'landscape', side: 'right', yOffset: '68%', yOffsetMobile: '74%', delayMs: 360, tone: 'light', rotateDeg: 0, opacityMobile: 0.45, insertAfter: 3 },
  ],
  ch3: [
    { src: '/panels/ch3-01.webp', alt: '机を挟んだ二つの影がノートを共有する', aspect: 'landscape', side: 'left', yOffset: '18%', yOffsetMobile: '22%', delayMs: 140, tone: 'light', rotateDeg: -1, opacityMobile: 0.45, insertAfter: 1 },
    { src: '/panels/ch3-02.webp', alt: '付箋だらけの壁を線で繋ぐ（文字なし）', aspect: 'square', side: 'right', yOffset: '75%', yOffsetMobile: '62%', delayMs: 280, tone: 'medium', rotateDeg: 1, opacityMobile: 0.5, insertAfter: 2 },
  ],
  ch4: [
    { src: '/panels/ch4-01.webp', alt: 'カレンダーに小さなチェックが積み上がる', aspect: 'square', side: 'left', yOffset: '14%', yOffsetMobile: '18%', delayMs: 100, tone: 'medium', rotateDeg: -2, opacityMobile: 0.45, insertAfter: 1 },
    { src: '/panels/ch4-02.webp', alt: '紙のコミットログに+1が並ぶ（読める文字なし）', aspect: 'portrait', side: 'right', yOffset: '42%', yOffsetMobile: '46%', delayMs: 240, tone: 'light', rotateDeg: 1, opacityMobile: 0.5, insertAfter: 2 },
    { src: '/panels/ch4-03.webp', alt: '芽の成長段階を一枚で示す連続表現', aspect: 'landscape', side: 'left', yOffset: '82%', yOffsetMobile: '76%', delayMs: 360, tone: 'light', rotateDeg: 0, opacityMobile: 0.45, insertAfter: 3 },
  ],
}
