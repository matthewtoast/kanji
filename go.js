const kanji = require('./kanji.json')
const list = []
for (const term in kanji) {
  const spec = kanji[term]
  if (spec.freq) {
    list[spec.freq] = [term, ...spec.meanings]
  }
}
require('fs').writeFileSync('./top.json', JSON.stringify(list.filter((l) => !!l), null, 2))
