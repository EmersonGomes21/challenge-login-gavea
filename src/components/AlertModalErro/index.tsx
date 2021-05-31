import React from 'react'
import Swal from 'sweetalert2'
const AlertModalErro = (dataModal : any) => (
     Swal.fire({
       title: dataModal.title,
       text: dataModal.text,
       icon: dataModal.icon,
       confirmButtonText: dataModal.confirmButtonText,
       showConfirmButton: dataModal.showConfirmButton,
       timer: dataModal.timer ? dataModal.timer : false
     })
)

export default AlertModalErro
