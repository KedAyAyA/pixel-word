import WordsFactory from './WordFactory.js'
import WordFactory from './WordFactory.js';

export default class PixelWord {
  constructor (dom, options) {
    this._initOptions(options)

    this._initCanvas(dom)

    this._initPixelPoint()

    this._drawWord()
  }

  /**
   * 
   * @param {Object} options 
   * initialize app's options
   */
  _initOptions (options) {
    // default options
    this.options = {
      cols: 30,
      rows: 7,
      size: 4,
      backgroundColor: '#eee',
      padding: 1,
      top: 10,
      left: 10,
      words: [],
      wordColor: 'rgb(123, 201, 111)',
      xGap: 1,
      yGap: 1
    }
    Object.assign(this.options, options)
  }

  _initCanvas (dom) {
    this.canvas = dom
    this.ctx = this.canvas.getContext('2d')
  }

  _initPixelPoint () {
    let ctx = this.ctx
    let left = this.options.left
    let top = this.options.top
    let size = this.options.size
    let padding = this.options.padding
    let rows = this.options.rows
    let cols = this.options.cols
    ctx.fillStyle = this.options.backgroundColor

    // ctx.fillRect(0, 0, 100, 100)
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        ctx.fillRect(left + j * (size + padding), top + i * (size + padding), size, size)
      }
    }
  }

  _drawWord() {
    let words = this.options.words
    let wordMap = undefined
    this.currentPosX = this.options.left //+ this.options.xGap * (this.options.size + this.options.padding)
    this.currentPosY = this.options.top //+ this.options.yGap * (this.options.size + this.options.padding)
    words.forEach((item) => {
      wordMap = WordFactory[item.symbol] && WordFactory[item.symbol]()
      if (wordMap) {
        wordMap.data.forEach((i) => {
          if (i['from'][0] - i['to'][0] === 0) {
            this._drawYLine(i)
          } else {
            this._drawXLine(i)
          }
        })
        // 平移基准点
        this.currentPosX += (wordMap.maxWidth + this.options.xGap) * (this.options.size + this.options.padding)
      }
    })
  }

  _drawXLine(wordMap) {
    this.ctx.fillStyle = this.options.wordColor

    for (let i = wordMap['from'][0]; i <= wordMap['to'][0]; i++) {
      this.ctx.fillRect(this.currentPosX + i * (this.options.size + this.options.padding), this.currentPosY + wordMap['from'][1] * (this.options.size + this.options.padding), this.options.size, this.options.size)
    }
  }

  _drawYLine(wordMap) {
    this.ctx.fillStyle = this.options.wordColor

    for (let i = wordMap['from'][1]; i <= wordMap['to'][1]; i++) {
      this.ctx.fillRect(this.currentPosX + wordMap['from'][0] * (this.options.size + this.options.padding), this.currentPosY + i * (this.options.size + this.options.padding), this.options.size, this.options.size)
    }
  }

  

}
