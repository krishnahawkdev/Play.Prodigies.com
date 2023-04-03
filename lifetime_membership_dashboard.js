let createLifetimeBlock = () => {
    if (location.href.includes('/dashboard/billing')) {
      let status = localStorage.getItem('planSendStatus');
      if (status) {
        let mainArea = document.querySelector('.main-area[data-v-0508e1e8]')
        let template = document.querySelector('.plan-info-wrap')
        if (mainArea && !template) {
          if (!mainArea.classList.contains('touched')) {
            const title = localStorage.getItem('planTitle');
            const description = localStorage.getItem('planDescription');
            const image = localStorage.getItem('planImage');
            if (title && description && image) {
    
              let markup = `<div class="plan-info-wrap"><div class="plan-info-title__thank md">Thank you for your support!</div><div class="plan-info-title md" data-v-38c8fca9="" data-v-0508e1e8="" class="md" data-v-c3470026="">${title}</div><img class="plan-info-image" src="${image}" alt="${title}" class=""><div>${description}</div></div>`
    
              mainArea.insertAdjacentHTML('beforeEnd', markup);
    
              mainArea.classList.add('touched')
            }
    
          }
        }
      }
    }
    setTimeout(() => createLifetimeBlock(), 300)
  }
  
  let getDashboardPlanInfo = () => {
  if (location.href.includes('/dashboard')) {
  
    var styleSepatator = document.createElement('style');
    styleSepatator.innerHTML = `
    .plan-info-wrap {
      max-width: 516px;
      margin: 0 auto;
    }
    .plan-info-title {
      margin: 0 auto 24px;
      text-align: center;
    }
    .plan-info-title__thank {
      margin: 0 auto 24px;
      text-align: center;
      font-size: 22px;
      font-weight: 700;
    }
    .plan-info-image {
      margin: 0 auto 32px;
    }
    `;
    document.head.appendChild(styleSepatator);
    
    localStorage.removeItem('planSendStatus');
    let status = localStorage.getItem('planSendStatus');
    if (!status) {
      axios.get(`/api/sessions`).then(response => {
      let data = response.data
        if (data.logged) {
          axios.get(`/api/ownerships`).then(response => {
            let data = [...response.data]
            data.forEach( product => {
              if (product.product_id === 47458) {
                axios.get(`/api/products/47458`).then(response => {
                  let data = response.data
                  localStorage.setItem('planTitle', data.title);
                  localStorage.setItem('planDescription', data.description);
                  localStorage.setItem('planImage', data.image_url);
  
                  localStorage.setItem('planSendStatus', true);
                })
              }
            })
          })
        }
      })
    }
  }
  }
  
  
  getDashboardPlanInfo()
  createLifetimeBlock()
  