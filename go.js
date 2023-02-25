const kanji = require('./kanji.json')
const list = []
for (const term in kanji) {
  const spec = kanji[term]
  if (spec.freq && spec.freq < 500) {
    list.push({...spec, term})
  }
}
require('fs').writeFileSync('./top.json', JSON.stringify(list, null, 2))
