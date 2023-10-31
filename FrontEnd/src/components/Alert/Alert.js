import swal from "sweetalert2";

const Alert = {
    success: (text) => {
        swal.fire({
            icon: "success",
            text: text,
        });
    },
    error: (text) => {
        swal.fire({
            icon: "error",
            text: text,
        });
    },
    warning: (text) => {
        swal.fire({
            icon: "warning",
            text: text,
        });
    },
};
export default Alert;
