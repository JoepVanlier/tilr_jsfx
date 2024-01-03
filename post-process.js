fs = require('fs')
s = fs.readFileSync('index.xml').toString('utf-8')

function replace(cat, name) {
  s = s.replace(`category name="${cat}"`, `category name="${name}"`)
}

replace('adsr1', 'Modulation')
replace('gate1', 'Modulation')
replace('mseg1', 'Modulation')
replace('time1', 'Modulation')
replace('js3osc', 'Synth')
replace('jsadditiv', 'Synth')
replace('jsdrumpad', 'Synth')
replace('jsdrumsynth', 'Synth')
replace('jsmodulator', 'Synth')
replace('jswavesynth', 'Synth')
replace('qdelay', 'Delay')
replace('qddelay', 'Delay')
replace('qdelay2', 'Delay')
replace('qfilter', 'Filter')
replace('skfilter', 'Filter')
replace('other', 'Other')
replace('other', 'Other')
replace('other', 'Other')
replace('other', 'Other')
replace('other', 'Other')

fs.writeFileSync('index.xml', s)