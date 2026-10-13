const menu=document.querySelector('.menu');
const navigation=document.querySelector('#navigation');
menu?.addEventListener('click',()=>{
  const open=menu.getAttribute('aria-expanded')!=='true';
  menu.setAttribute('aria-expanded',String(open));
  menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  navigation.classList.toggle('open',open);
});
navigation?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  menu.setAttribute('aria-expanded','false');
  menu.setAttribute('aria-label','Open navigation');
  navigation.classList.remove('open');
}));
