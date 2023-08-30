import checkNumInputs from './checkNumInputs'

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
    windowWidth = document.querySelectorAll('#width'),
    windowHeighth = document.querySelectorAll('#height'),
    windowType = document.querySelectorAll('#view_type'),
    windowProfile = document.querySelectorAll('.checkbox')

    checkNumInputs('#width')
    checkNumInputs('#height')

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i
                        break
                    case 'INPUT' :
                        if(item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое'
                            elem.forEach((box, j) => {
                                box.checked = (i === j)
                            })
                        } else {
                            state[prop] = item.value
                        }
                        break
                    case 'SELECT' :
                        state[prop] = item.value
                        break
                }
            })
        })
    }

    bindActionToElems('click', windowForm, 'form')
    bindActionToElems('input', windowHeighth, 'height')
    bindActionToElems('input', windowWidth, 'width')
    bindActionToElems('change', windowType, 'type')
    bindActionToElems('change', windowProfile, 'profile')
}

export default changeModalState