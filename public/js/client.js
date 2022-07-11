document.querySelector('.card__lists')?.addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteCard')){
    event.preventDefault();
    const url = event.target.href;
    const response = await fetch(url, {
      method: 'DELETE',
    });
    const data = await response.json()
    if (data.status === 'ok') {
      event.target.closest('.cardItem').remove();
    };    
  };
});
