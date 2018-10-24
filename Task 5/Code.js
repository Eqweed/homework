class ModalFormPlugin {
  constructor(showModalBtn, modalBackdrop, hideModal) {
    this.showModalBtn = showModalBtn;
    this.modalBackdrop = modalBackdrop;
    this.hideModal = hideModal;
  }

  toggle() {
    this.showModalBtn.addEventListener('click', modalHidenHandle)
    this.modalBackdrop.addEventListener('click', modalHidenHandle)
    this.hideModal.addEventListener('click', modalHidenHandle)
    function modalHidenHandle (event) {
    if(this !== event.target) return
    modalBackdrop.classList.toggle('modal-hidden');
  }
  }

}

const showModalBtn = document.querySelector('.js-open-modal');
const modalBackdrop = document.querySelector('.js-modal-backdrop');
const hideModal = modalBackdrop.querySelector('.js-close-modal');

const modalPlugin = new ModalFormPlugin(showModalBtn, modalBackdrop, hideModal);

modalPlugin.toggle();
