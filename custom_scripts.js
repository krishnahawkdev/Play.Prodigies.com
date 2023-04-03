const categoriesToHide = ['8-bells', '20 Bells']
hideCategory(categoriesToHide)

function hideCategory(titlesArray) {
  let customSelect = document.querySelector('.catalog-area .secondary-filters .with-bottom-margin:nth-of-type(1) .selectr-options-container .selectr-options');
  let nativeSelect = document.querySelector('.catalog-area .secondary-filters .with-bottom-margin:nth-of-type(1) .s-select');
  
  if (customSelect) {
    if (customSelect.querySelectorAll('.selectr-option').length && !customSelect.classList.value.includes('touched')) {
      let customSelectOptions = customSelect.querySelectorAll('.selectr-option')
      customSelectOptions.forEach(option => {
       if (titlesArray.includes(option.innerText.trim())) {
          option.classList.add('hidden')
        }
      })
      customSelect.classList.add('touched')
    }
  }
  
  if (nativeSelect) {
    if (nativeSelect.querySelectorAll('.s-select option').length && !nativeSelect.classList.value.includes('touched')) {
      let nativeSelectOptions = nativeSelect.querySelectorAll('.s-select option')
      nativeSelectOptions.forEach(option => {
       if (titlesArray.includes(option.innerText.trim())) {
          option.classList.add('hidden')
        }
      })
      nativeSelect.classList.add('touched')
    }
  }
  
  let authorCustomSelect = document.querySelector('.s-author-area + div .secondary-filters .with-bottom-margin:nth-of-type(1) .selectr-options-container .selectr-options'); 
  let authornativeSelect = document.querySelector('.s-author-area + div .secondary-filters .with-bottom-margin:nth-of-type(1) .s-select'); 
  
  if (authorCustomSelect) {
    if (authorCustomSelect.querySelectorAll('.selectr-option').length && !authorCustomSelect.classList.value.includes('touched')) {
      let customSelectOptions = authorCustomSelect.querySelectorAll('.selectr-option')
      customSelectOptions.forEach(option => {
       if (titlesArray.includes(option.innerText.trim())) {
          option.classList.add('hidden')
        }
      })
      authorCustomSelect.classList.add('touched')
    }
  }
  
  if (authornativeSelect) {
    if (authornativeSelect.querySelectorAll('.s-select option').length && !authornativeSelect.classList.value.includes('touched')) {
      let nativeSelectOptions = authornativeSelect.querySelectorAll('.s-select option')
      nativeSelectOptions.forEach(option => {
       if (titlesArray.includes(option.innerText.trim())) {
          option.classList.add('hidden')
        }
      })
      authornativeSelect.classList.add('touched')
    }
  }
  
  let categorySliders = document.querySelectorAll('.category-group:not(.touched)')
  if (categorySliders.length) {
    categorySliders.forEach(category =>{
      if (category.querySelector('.category-title')) {
        category.classList.add('touched')
        if (titlesArray.includes(category.querySelector('.category-title').innerText.trim())) {
          category.classList.add('hidden')
        }
      }
      
    })
  }
  
  setTimeout(() => hideCategory(titlesArray), 500)
}