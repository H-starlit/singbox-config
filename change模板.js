let config = (ProxyUtils.JSON5 || JSON).parse($content ?? $files[0])

let proxies = await produceArtifact({
    type: 'collection',        // 改成 collection
    name: '我的机场',          // 改成你的订阅名
    platform: 'sing-box',
    produceType: 'internal'
})

config.outbounds.push(...proxies)

config.outbounds.map(i => {
  if (['全部节点'].includes(i.tag)) {
    i.outbounds.push(...proxies.map(p => p.tag))
  }
  if (['JP自动-mitce'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /日|jp|mitce|japan/i.test(p.tag)).map(p => p.tag))
  }
  if (['US自动-mitce'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /美|us|mitce|united states/i.test(p.tag)).map(p => p.tag))
  }
  if (['HK自动-mitce'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /港|hk|mitce|hongkong/i.test(p.tag)).map(p => p.tag))
  }
  if (['TW自动-mitce'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /台|tw|mitce|taiwan/i.test(p.tag)).map(p => p.tag))
  }
  if (['SG自动-mitce'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /新|sg|mitce|singapore/i.test(p.tag)).map(p => p.tag))
  }
  if (['KR自动-mitce'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /韩|kr|mitce|korea/i.test(p.tag)).map(p => p.tag))
  }
  if (['SNTP自选'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /SNTP|sntp/i.test(p.tag)).map(p => p.tag))
  }
})


$content = JSON.stringify(config, null, 2)