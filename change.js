let config = (ProxyUtils.JSON5 || JSON).parse($content ?? $files[0])

let proxies = await produceArtifact({
    type: 'collection',        // 单个订阅subscription，组合改成 collection
    name: '我的机场',          // 改成订阅名
    platform: 'sing-box',
    produceType: 'internal'
})

config.outbounds.push(...proxies)

config.outbounds.map(i => {
  if (['JP自动-mitce'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /(?:日|jp|japan)/i.test(p.tag) && /mitce/i.test(p.tag)).map(p => p.tag))
  }
  if (['US自动-mitce'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /(?:美|us|united states)/i.test(p.tag) && /mitce/i.test(p.tag)).map(p => p.tag))
  }
  if (['HK自动-mitce'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /(?:港|hk|hongkong)/i.test(p.tag) && /mitce/i.test(p.tag)).map(p => p.tag))
  }
  if (['TW自动-mitce'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /(?:台|tw|taiwan)/i.test(p.tag) && /mitce/i.test(p.tag)).map(p => p.tag))
  }
  if (['SG自动-mitce'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /(?:新|sg|singapore)/i.test(p.tag) && /mitce/i.test(p.tag)).map(p => p.tag))
  }
  if (['KR自动-mitce'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /(?:韩|kr|korea)/i.test(p.tag) && /mitce/i.test(p.tag)).map(p => p.tag))
  }
  if (['SNTP自选'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /SNTP|sntp/i.test(p.tag)).map(p => p.tag))
  }
})


$content = JSON.stringify(config, null, 2)