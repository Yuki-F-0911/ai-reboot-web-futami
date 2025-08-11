export type PanelAspect = 'landscape' | 'portrait' | 'square'
export type PanelSide = 'left' | 'right' | 'center'

export interface PanelSpec {
  src?: string
  alt: string
  aspect: PanelAspect
  side: PanelSide
  yOffset: number // px
  delayMs?: number
  tone?: 'light' | 'medium' | 'heavy'
  rotateDeg?: number // -3 ~ 3
}

export const chapterPanels: Record<'ch1'|'ch2'|'ch3'|'ch4', PanelSpec[]> = {
  ch1: [
    { src: '/panels/ch1-01.jpg', alt: '夜の机でメモに走り書きする手元のクローズアップ', aspect: 'portrait', side: 'left', yOffset: 140, delayMs: 100, tone: 'medium', rotateDeg: -2 },
    { src: '/panels/ch1-02.jpg', alt: '履歴書の空白欄（白場を強調）', aspect: 'landscape', side: 'right', yOffset: 320, delayMs: 250, tone: 'light', rotateDeg: 2 },
    { src: '/panels/ch1-03.jpg', alt: '鉛筆とカッターを持つ指先のマクロ', aspect: 'square', side: 'left', yOffset: 520, delayMs: 350, tone: 'medium', rotateDeg: -1 },
    { src: '/panels/ch1-04.jpg', alt: '心拍線のような抽象線が意志を象徴するカーブへ', aspect: 'landscape', side: 'center', yOffset: 700, delayMs: 500, tone: 'light', rotateDeg: 0 },
  ],
  ch2: [
    { src: '/panels/ch2-01.jpg', alt: '中心点が明確な的（ターゲット）', aspect: 'landscape', side: 'left', yOffset: 120, delayMs: 120, tone: 'light', rotateDeg: -1 },
    { src: '/panels/ch2-02.jpg', alt: '便箋に目的を一行で書く手元、消し跡あり', aspect: 'square', side: 'right', yOffset: 340, delayMs: 260, tone: 'medium', rotateDeg: 2 },
    { src: '/panels/ch2-04.jpg', alt: '抽象的なスピード線と軌跡で試行の勢いを表現', aspect: 'landscape', side: 'right', yOffset: 580, delayMs: 360, tone: 'light', rotateDeg: 1 },
  ],
  ch3: [
    { src: '/panels/ch3-01.jpg', alt: '机を挟んだ二つの影がノートを共有する', aspect: 'landscape', side: 'left', yOffset: 180, delayMs: 140, tone: 'light', rotateDeg: -2 },
    { src: '/panels/ch3-03.jpg', alt: '付箋だらけの壁を線で繋ぐ（文字なし）', aspect: 'square', side: 'left', yOffset: 420, delayMs: 300, tone: 'medium', rotateDeg: 2 },
  ],
  ch4: [
    { src: '/panels/ch4-01.jpg', alt: 'カレンダーに小さなチェックが積み上がる', aspect: 'square', side: 'left', yOffset: 160, delayMs: 100, tone: 'medium', rotateDeg: -2 },
    { src: '/panels/ch4-02.jpg', alt: '紙のコミットログに+1が並ぶ（読める文字なし）', aspect: 'portrait', side: 'right', yOffset: 360, delayMs: 240, tone: 'light', rotateDeg: 1 },
    { src: '/panels/ch4-03.jpg', alt: '芽の成長段階を一枚で示す連続表現', aspect: 'landscape', side: 'left', yOffset: 600, delayMs: 360, tone: 'light', rotateDeg: 0 },
  ],
}
