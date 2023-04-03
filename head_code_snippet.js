let detectCustomerInfo = () => {
    if (location.href.includes('/customer_info')) {
      let wrapper = document.querySelector('.card .description')
      if (wrapper) {
        if (!wrapper.classList.value.includes('touched')) {
          let mobileMarkup = `
            <img class="mobile-customer-infor-footer" src="https://s3.amazonaws.com/unode1/assets/11794/ifP8NKIqQjqQ1TqWj8sN_mobile_customer_info.svg">
          `;
          let markup = `
            <div class="customer-info-footer">
              <h2 class="customer-info-footer--title">My youngest son developed perfect pitch before he was age 4 by using Mr. Rob's lessons! He is 5 now, and loves to point what notes his Dad is playing on the guitar.</h2>
              <img src="https://s3.amazonaws.com/unode1/assets/11794/x23b3OeQnCsWEKnj9uQe_customer_info_footer.svg">
            </div>
          `
          wrapper.insertAdjacentHTML('beforeEnd', mobileMarkup)
          wrapper.insertAdjacentHTML('afterEnd', markup)
          wrapper.classList.add('touched')
        }
      }
    }
    setTimeout(() => detectCustomerInfo(), 500) 
  }
  let detectCompleteOrder = () => {
    if (location.href.includes('/complete_order')) {
      let wrapper = document.querySelector('.card .description')
      if (wrapper) {
        if (!wrapper.classList.value.includes('touched')) {
          let mobileMarkup = `
            <img class="mobile-customer-infor-footer" src="https://s3.amazonaws.com/unode1/assets/11794/ifP8NKIqQjqQ1TqWj8sN_mobile_customer_info.svg">
          `;
          let markup = `
            <div class="customer-info-footer">
              <h2 class="customer-info-footer--title">My youngest son developed perfect pitch before he was age 4 by using Mr. Rob's lessons! He is 5 now, and loves to point what notes his Dad is playing on the guitar.</h2>
              <img src="https://s3.amazonaws.com/unode1/assets/11794/x23b3OeQnCsWEKnj9uQe_customer_info_footer.svg">
            </div>
          `
          wrapper.insertAdjacentHTML('beforeEnd', mobileMarkup)
          wrapper.insertAdjacentHTML('afterEnd', markup)
          wrapper.classList.add('touched')
        }
      }
    }
    setTimeout(() => detectCompleteOrder(), 500) 
  }
  
  detectCompleteOrder()
  detectCustomerInfo()