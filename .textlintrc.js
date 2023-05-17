// @credit: https://github.com/korosuke613/homepage-2nd/blob/main/.textlintrc.js

/** @type {import('textlint/lib/config/config').Config */
const config = {
  plugins: {
    '@textlint/markdown': {
      extensions: ['.md', '.mdoc', '.mdx']
    }
  },
  filters: {
    comments: true
  },
  rules: {
    // https://github.com/overflow-tm/textlint-rule-preset-overflow-techblog
    //'no-dead-link': {
    //'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6,2 Safari/605.1.15',
    //'checkRelative': true,
    //'baseURI': null,
    //'ignore': ['http://localhost*'],
    //'ignoreRedirects': false
    //},
    'preset-ja-spacing': {
      'ja-space-between-half-and-full-width': {
        // 半角文字と全角文字の間に半角スペースを挿入する
        space: ['alphabets', 'numbers', 'punctuation'],
        'ja-space-around-code': {
          before: true,
          after: true
        },
        'ja-no-space-between-full-width': true,
        'ja-no-space-around-parentheses': true,
        'ja-space-after-exclamation': true,
        'ja-space-after-question': true
      }
    },
    'preset-ja-technical-writing': {
      'max-kanji-continuous-len': false,
      'sentence-length': {
        max: 180
      },
      'ja-no-successive-word': false,
      'ja-no-mixed-period': {
        allowPeriodMarks: [':', '：']
      },
      'no-exclamation-question-mark': {
        // 感嘆符「!！?？」の使用
        allowHalfWidthExclamation: true, // + 半角!
        allowFullWidthExclamation: true, // + 全角！
        allowHalfWidthQuestion: true, // + 半角?
        allowFullWidthQuestion: true // + 全角？
      },
      'no-doubled-joshi': {
        strict: false,
        separatorCharacters: [',', '，', '、', '.', '．', '。', '?', '!', '？', '！', '「', '」', '"', '”', '“']
      }
    },
    // 全角文字と半角英字の間に半角スペース、ただし次の全角文字 [、。「 」（）｛｝【】『』] の前後には不要
    //'one-white-space-between-zenkaku-and-hankaku-eiji': false,
    //'spellcheck-tech-word': true,
    '@proofdict/proofdict': {
      dictURL: 'https://azu.github.io/proof-dictionary/'
    }
  }
}

module.exports = config
