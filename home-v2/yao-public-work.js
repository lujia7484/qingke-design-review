/* Selected public-facing materials supplied by Qingke. No account data. */
(() => {
  const base='yao-public-work/';
  const activities=[
    {image:'nanhua-training.jpg',date:'2025年 · 云南南华',title:'家庭教育指导培训',text:'姚一敏老师在南华县家庭教育指导培训现场，与参训人员交流家庭教育。'},
    {image:'huize-workshop.jpg',date:'2025年7月28日 · 云南会泽',title:'家庭教育指导站首期工作坊',text:'青稞心理家庭教育会泽指导站首期工作坊现场记录。'},
    {image:'huize-training.png',date:'2025年 · 云南会泽',title:'教育管理干部集中培训',text:'会泽县2025年教育管理干部集中培训讲座现场记录。'}
  ];
  const records=[
    {image:'nanfang-appointment.jpg',title:'广州南方学院 · 业界导师',date:'聘期：2026年5月13日—2029年5月12日',text:'广州南方学院马克思主义学院业界导师聘书。'},
    {image:'huarong-lecture.jpg',title:'华容县开放大学 · 讲座记录',date:'授课：2025年8月19日',text:'2025年中小学青年骨干教师全维度育人能力提升通识培训讲座聘书，授课专题为“好情绪幸福终生”。'}
  ];
  const picture=(item,kind='')=>`<button class="yao-image ${kind}" type="button" data-yao-image="${item.image}" aria-label="查看${item.title}原图"><img src="${base+item.image}" alt="${item.title}" loading="lazy"><span>查看原图 ↗</span></button>`;
  window.QingkePublicWork={
    summary(){return `<div class="yao-feature"><figure><img src="${base}nanhua-training.jpg" alt="姚一敏老师在南华县家庭教育指导培训现场" loading="lazy"><figcaption>真实工作记录 · 2025年，云南南华</figcaption></figure><div class="yao-feature-copy"><p class="eyebrow">青稞的实践与陪伴</p><h2>把理解，<br>带进真实的生活。</h2><p>从线上课程到线下讲座，从家庭交流到教育工作者培训，让学习与具体的生活相连接。</p><p class="yao-feature-note">姚一敏老师 · 公益讲座与教育交流记录</p><a href="yao-yimin.html">了解姚老师与实践记录 →</a></div></div>`;},
    detail(t){if(t.id!==1||t.name!=='姚一敏')return '';return `<section class="yao-work" aria-labelledby="yao-work-title"><p class="eyebrow">真实工作记录</p><h2 id="yao-work-title">在讲座与交流中，连接更多家庭。</h2><p class="yao-lead">以下精选来自姚一敏老师的对外展示资料，记录家庭教育讲座、教育工作者培训与工作坊现场。</p><div class="yao-activity-grid">${activities.map(a=>`<article>${picture(a)}<small>${a.date}</small><h3>${a.title}</h3><p>${a.text}</p></article>`).join('')}</div><details class="yao-records"><summary>聘任与讲座资料 <span>展开查看 2 项</span></summary><div class="yao-record-grid">${records.map(r=>`<article>${picture(r,'yao-certificate')}<h3>${r.title}</h3><small>${r.date}</small><p>${r.text}</p></article>`).join('')}</div></details></section>`;}
  };
  document.querySelectorAll('[data-yao-summary]').forEach(el=>{el.innerHTML=window.QingkePublicWork.summary()});
  let dialog;
  document.addEventListener('click',event=>{
    const button=event.target.closest('[data-yao-image]');if(!button)return;
    const item=[...activities,...records].find(x=>x.image===button.dataset.yaoImage);if(!item)return;
    if(!dialog){dialog=document.createElement('dialog');dialog.className='yao-image-dialog';dialog.setAttribute('aria-labelledby','yao-image-title');dialog.innerHTML='<button class="yao-close" type="button" aria-label="关闭图片">×</button><h2 id="yao-image-title"></h2><img alt=""><p></p>';dialog.querySelector('button').onclick=()=>dialog.close();document.body.append(dialog);}
    dialog.querySelector('h2').textContent=item.title;dialog.querySelector('img').src=base+item.image;dialog.querySelector('img').alt=item.title+'原图';dialog.querySelector('p').textContent=item.date;dialog.showModal();
  });
})();
