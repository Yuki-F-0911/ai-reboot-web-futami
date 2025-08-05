// 洗練されたイージング関数とアニメーション設定

export const easings = {
  // Material Design inspired easings (配列形式)
  standard: [0.4, 0.0, 0.2, 1] as const,
  decelerate: [0.0, 0.0, 0.2, 1] as const,
  accelerate: [0.4, 0.0, 1, 1] as const,
  sharp: [0.4, 0.0, 0.6, 1] as const,
  
  // Custom smooth easings (配列形式に変換)
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  smoothOut: [0.0, 0.0, 0.58, 1.0] as const,
  smoothIn: [0.42, 0.0, 1.0, 1.0] as const,
  elastic: [0.68, -0.55, 0.265, 1.55] as const,
};

export const transitions = {
  // テキスト表示用
  text: {
    duration: 0.8,
    ease: easings.standard,
  },
  
  // フェード用
  fade: {
    duration: 0.6,
    ease: easings.decelerate,
  },
  
  // スライド用
  slide: {
    duration: 0.7,
    ease: easings.standard,
  },
  
  // ホバー用
  hover: {
    duration: 0.3,
    ease: easings.standard,
  },
  
  // 長めの演出用
  slow: {
    duration: 1.2,
    ease: easings.smoothOut,
  },
};

export const variants = {
  // テキストの段階的表示
  staggerText: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  },
  
  // 文字単位のアニメーション
  letterAnimation: {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: transitions.text,
    },
  },
  
  // スケールフェード
  scaleFade: {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: transitions.fade,
    },
  },
  
  // ブラーフェード
  blurFade: {
    hidden: { 
      opacity: 0, 
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: transitions.slow,
    },
  },
};