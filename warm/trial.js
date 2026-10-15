const trialChapters=[
 ['第一节 · 认识沟通中的困惑','示例：从家庭日常对话出发，梳理家长希望解决的沟通问题。'],
 ['第二节 · 留意彼此的感受','示例：记录对话中的感受与回应，作为后续学习和与老师交流的材料。'],
 ['第三节 · 把学习带回生活','示例：选择一个日常场景进行练习，记录尝试与问题，再回到课堂讨论。']
];
document.addEventListener('click',event=>{const button=event.target.closest('[data-trial-chapter]');if(!button)return;const index=Number(button.dataset.trialChapter);document.getElementById('trial-chapter-title').textContent=trialChapters[index][0];document.getElementById('trial-chapter-description').textContent=trialChapters[index][1];document.querySelectorAll('[data-trial-chapter]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active))})});
