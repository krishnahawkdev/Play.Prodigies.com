  let lifetime


  let getLifetimeInfo = () => {
  if (location.href.includes('/account')) {
      axios.get(`/api/sessions`).then(response => {
      let data = response.data
        if (data.logged) {
          axios.get(`/api/ownerships`).then(response => {
            let data = [...response.data]
            data.forEach( product => {
              if (product.product_id === 47458 || product.product_id === 50911) {
                lifetime = true
              }
            })
          })
        }
      })
  }
  }

  let hideSubscription = () => {
    if (location.href.includes('/account')) {
      if(lifetime) {
        let subBlock = document.getElementById('user_subscription')
        if(!subBlock.classList.contains('touched')) {
          let wrapper = subBlock.closest('div.flex')
          wrapper.style.display = 'none'
          wrapper.classList.add('touched')
        }
      }
    }
    setTimeout(hideSubscription, 500)
  }


  getLifetimeInfo()
  hideSubscription()
