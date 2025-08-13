/**
 * LocalStorageをクリアするユーティリティ関数
 * 開発時のデバッグ用
 * @param removeUrlParams - URLパラメータも削除するかどうか（デフォルト: true）
 */
export function clearPersonalizationData(removeUrlParams = true) {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('aiRebootPersonalization')
    console.log('Personalization data cleared from localStorage')
    
    if (removeUrlParams) {
      // URLパラメータも削除
      const url = new URL(window.location.href)
      if (url.search) {
        url.search = ''
        console.log('URL parameters will be removed. Redirecting to:', url.toString())
        window.location.href = url.toString()
      } else {
        console.log('No URL parameters to remove. Please reload manually.')
      }
    } else {
      console.log('Please reload the page manually to apply changes')
    }
  }
}

/**
 * 現在のLocalStorageの内容を確認
 */
export function checkPersonalizationData() {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem('aiRebootPersonalization')
    if (data) {
      console.log('Current personalization data:', JSON.parse(data))
    } else {
      console.log('No personalization data found in localStorage')
    }
  }
}

// ブラウザのコンソールから使用できるようにグローバルに公開
if (typeof window !== 'undefined' && typeof window === 'object') {
  // windowオブジェクトが完全に初期化されてから実行
  setTimeout(() => {
    if (window && typeof window === 'object') {
      (window as any).clearPersonalizationData = clearPersonalizationData;
      (window as any).checkPersonalizationData = checkPersonalizationData;
      console.log('Debug utilities loaded: clearPersonalizationData(), checkPersonalizationData()');
    }
  }, 0);
}