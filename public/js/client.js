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

document.querySelector('.card__lists').addEventListener('click', async (event) => {
  if (event.target.classList.contains('editCard')) {
    event.preventDefault();
    const url = event.target.href;
    const response = await fetch(url, {
      method: "GET",
    })
    const data = await response.text();    
      event.target.closest('.cardItem').insertAdjacentHTML('afterend', data);
      event.target.closest('.cardItem').remove();    
  };
});
