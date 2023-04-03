let createLifetimePlan = () => {
    if (location.href.includes('/join')) {
      let planWrap = document.querySelector('.plans')
      if (planWrap) {
        if (!planWrap.classList.contains('touched')) {
          
          var styleSepatator = document.createElement('style');
          styleSepatator.innerHTML = `
          .custom-sepatator[data-v-4d588345] {
            -ms-flex-align: center;
            -ms-flex-pack: justify;
            align-items: center;
            color: #606974;
            display: -ms-flexbox;
            display: flex;
            font-size: .85714em;
            justify-content: space-between;
            line-height: 1.4;
            margin: 20px auto;
            text-align: center;
            text-transform: uppercase;
            width: 100%;
          }
          .custom-sepatator-content[data-v-4d588345] {
            display: inline-block;
            padding: 0 1em;
          }
          .custom-sepatator[data-v-4d588345]:after, .custom-sepatator[data-v-4d588345]:before {
            -ms-flex-positive: 1;
            background-color: #e6e6e6;
            content: "";
            display: inline-block;
            flex-grow: 1;
            height: 1px;
          }
          @media screen and (max-width: 991px) {
            .custom-sepatator[data-v-4d588345] {
              margin: 30px auto;
            }
          }
          `;
          document.head.appendChild(styleSepatator);
  
          axios.get(`/api/products/47458`).then(response => {
            let data = response.data
            if (data) {
              let markup = `<div data-v-4d588345="" data-v-11d94826="" class="custom-sepatator" data-v-7979a020=""><span data-v-4d588345="" class="custom-sepatator-content">OR</span></div><div data-v-7aaf7d0f="" data-v-c3470026="" class="plan-block"><div data-v-f6e33fce="" data-v-7aaf7d0f="" class="plan" data-v-c3470026=""><div data-v-f6e33fce="" class="plan-image"><img data-v-f6e33fce="" src="${data.image_url}" alt="Lifetime Streaming Membership"></div> <div data-v-f6e33fce="" class="plan-content"><div data-v-f6e33fce="" class="plan-info"><div data-v-f6e33fce="" class="plan-title">${data.title}</div> <div data-v-f6e33fce="" class="plan-desc"><div data-v-f6e33fce="">${data.price_humanized}</div> <!----> <!----></div></div> <div data-v-f6e33fce="" class="plan-action"><a href="/orders/customer_info?o=47458" data-v-34fb8360="" data-v-7aaf7d0f="" class="b-button box-border inline-flex items-center text-base leading-normal font-medium cursor-pointer transition duration-200 color-primary size-base variant-light rounded" data-v-f6e33fce=""> <!----> Choose Plan</a></div></div></div></div>`
              planWrap.insertAdjacentHTML('beforeEnd', markup);
            }
          })
          planWrap.classList.add('touched')
        }
        if (planWrap.classList.contains('touched')) {
          return
        }
      }
      setTimeout(() => createLifetimePlan(), 300)
    }
  }
  
  createLifetimePlan()
  
  
  
  