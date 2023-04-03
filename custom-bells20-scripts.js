let getPermalinkFromURL = (url) => {
    return url.substring(url.indexOf('/programs/') + 10).split('?')[0]
  }
  
  let secondDetectProgramPage = () => {
    if (document.location.href.includes('/programs/')) {
      let categoriesWrapper = document.querySelector('.cbt-tabs--categories')
      if (categoriesWrapper) {
        if (!categoriesWrapper.classList.value.includes('touched')) {
          axios.get(`/api/contents/${getPermalinkFromURL(location.href)}`).then(response => {
            let data = response.data
            if (data.categories.includes(57815)) {
              let bellsSection20 = document.getElementById('belldiv20')
              let showBtn20Bells = document.getElementById('bellshow20')
              bellsSection20.classList.remove('hidden')
              showBtn20Bells.addEventListener('click', () => {
                bellsSection20.classList.toggle('show')
              })
  
              let activeKeys = [
                'Digit2',
                'Digit4',
                'Digit5',
                'Digit7',
                'Digit8',
                'Digit9',
                'Minus',
                'Equal',
                'KeyQ',
                'KeyW',
                'KeyE',
                'KeyR',
                'KeyT',
                'KeyY',
                'KeyU',
                'KeyI',
                'KeyO',
                'KeyP',
                'BracketLeft',
                'BracketRight',
              ]
  
              let sounds = [...document.querySelectorAll('audio.bells20_sound')]
              let buttons = [...document.querySelectorAll('.bells-btn.bells-btn-20')]
              
              
              let playSound = (e, type) => {
                let currentSound
                if (type === 'keyboard') {
                  currentSound = sounds.find(sound => sound.dataset.key === e.code)
                }
                else if (type === 'clickMouse') {
                  currentSound = sounds.find(sound => sound.dataset.key === e.dataset.key)
                }
                currentSound.currentTime = 0
                currentSound.play()
              }
  
              let setActive = (e, type) => {
                let currentBtn
                if (type === 'keyboard') {
                  currentBtn = buttons.find(button => button.dataset.key === e.code)
                }
                else if (type === 'clickMouse') {
                  currentBtn = buttons.find(button => button.dataset.key === e.dataset.key)
                }
                currentBtn.classList.remove('active')
                currentBtn.classList.add('active')
                setTimeout(function() {
                  currentBtn.classList.remove('active')
                }, 500)
              }
  
              buttons.forEach(item => {
                item.addEventListener('click', function() {
                  if (activeKeys.includes(this.dataset.key)) {
                    playSound(this, 'clickMouse')
                    setActive(this, 'clickMouse')
                  }
                })
              })
  
              document.addEventListener('keydown', function(e) {
                if (activeKeys.includes(e.code)) {
                  playSound(e, 'keyboard')
                  setActive(e, 'keyboard')
                }
              });
            }
  
            if (data.categories.includes(48215)) {
              let bellsSection = document.getElementById('belldiv')
              let showBtnBells = document.getElementById('bellshow')
              bellsSection.classList.remove('hidden')
              showBtnBells.addEventListener('click', () => {
                bellsSection.classList.toggle('show')
              })
  
              let activeKeys = [
                'Digit1',
                'Digit2',
                'Digit3',
                'Digit4',
                'Digit5',
                'Digit6',
                'Digit7',
                'Digit8',
              ]
  
              let sounds = [...document.querySelectorAll('audio.bells8_sound')]
              let buttons = [...document.querySelectorAll('.bells-btn.bells-btn-8')]
  
  
              let playSound = (e, type) => {
                let currentSound
                if (type === 'keyboard') {
                  currentSound = sounds.find(sound => sound.dataset.key === e.code)
                }
                else if (type === 'clickMouse') {
                  currentSound = sounds.find(sound => sound.dataset.key === e.dataset.key)
                }
                currentSound.currentTime = 0
                currentSound.play()
              }
  
              let setActive = (e, type) => {
                let currentBtn
                if (type === 'keyboard') {
                  currentBtn = buttons.find(button => button.dataset.key === e.code)
                }
                else if (type === 'clickMouse') {
                  currentBtn = buttons.find(button => button.dataset.key === e.dataset.key)
                }
                currentBtn.classList.remove('active_bell')
                currentBtn.classList.add('active_bell')
                setTimeout(function() {
                  currentBtn.classList.remove('active_bell')
                }, 500)
              }
  
              buttons.forEach(item => {
                item.addEventListener('click', function() {
                  if (activeKeys.includes(this.dataset.key)) {
                    playSound(this, 'clickMouse')
                    setActive(this, 'clickMouse')
                  }
                })
              })
  
              document.addEventListener('keydown', function(e) {
                if (activeKeys.includes(e.code)) {
                  playSound(e, 'keyboard')
                  setActive(e, 'keyboard')
                }
              });
            }
  
          })
          categoriesWrapper.classList.add('touched')
        }
        if (categoriesWrapper.classList.value.includes('touched')) {
          return
        }
      }
    }
    setTimeout(() => secondDetectProgramPage(), 500)
  }
  
  secondDetectProgramPage()
  